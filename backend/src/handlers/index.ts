import { APIGatewayProxyResult } from 'aws-lambda';
import { FormType } from '../types';
import { createFormService } from '../services/formService';
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
  notFoundResponse,
  serverErrorResponse,
} from '../utils/response';
import { createLogger } from '../utils/logger';
import { validateConfig } from '../utils/config';

// Validate configuration on cold start
validateConfig();

/**
 * Extract form type from path
 */
function extractFormTypeFromPath(path: string | undefined): string | null {
  if (!path) return null;
  const match = path.match(/^\/forms\/([^\/]+)/);
  return match ? match[1] : null;
}

/**
 * Get path from event (supports both REST and HTTP API)
 */
function getPathFromEvent(event: any): string | undefined {
  // HTTP API v2 uses rawPath
  if (event.rawPath) return event.rawPath;
  // REST API uses path
  if (event.path) return event.path;
  // HTTP API v2 also has requestContext.http.path
  if (event.requestContext?.http?.path) return event.requestContext.http.path;
  return undefined;
}

/**
 * Get HTTP method from event
 */
function getHttpMethod(event: any): string | undefined {
  // HTTP API v2
  if (event.requestContext?.http?.method) return event.requestContext.http.method;
  // REST API
  if (event.httpMethod) return event.httpMethod;
  return undefined;
}

/**
 * Main Lambda handler with route-based routing
 */
export async function formsHandler(
  event: any
): Promise<APIGatewayProxyResult> {
  const requestId = event.requestContext?.requestId || event.requestContext?.requestId || 'unknown';
  const logger = createLogger({ requestId });
  const service = createFormService();

  try {
    const path = getPathFromEvent(event);
    const httpMethod = getHttpMethod(event);
    const pathParameters = event.pathParameters || {};
    const queryStringParameters = event.queryStringParameters || {};
    const body = event.body || null;

    logger.info('Request received', {
      method: httpMethod,
      path: path,
      pathParameters: pathParameters,
      hasBody: !!body,
    });

    // Handle CORS preflight
    if (httpMethod === 'OPTIONS') {
      return successResponse('OK');
    }

    // Extract formType from path or pathParameters
    const formTypeFromPath = extractFormTypeFromPath(path);
    const formType = (pathParameters?.formType || formTypeFromPath) as FormType | undefined;

    // Route: POST /forms/{formType}
    if (httpMethod === 'POST' && path && path.startsWith('/forms/')) {
      if (!formType) {
        return validationErrorResponse('Form type is required in the path');
      }
      return await handleCreateSubmission(formType, body, logger, service);
    }

    // Route: GET /forms/{formType}/{id}
    if (httpMethod === 'GET' && pathParameters?.id) {
      const id = pathParameters.id;
      return await handleGetSubmission(id, formType, logger, service);
    }

    // Route: GET /forms/{formType} (list submissions)
    if (httpMethod === 'GET' && path && path.startsWith('/forms/') && !pathParameters?.id) {
      if (!formType) {
        return validationErrorResponse('Form type is required in the path');
      }
      const limit = queryStringParameters?.limit
        ? parseInt(queryStringParameters.limit, 10)
        : 20;
      const lastEvaluatedKey = queryStringParameters?.lastEvaluatedKey
        ? JSON.parse(decodeURIComponent(queryStringParameters.lastEvaluatedKey))
        : undefined;

      return await handleListSubmissions(formType, limit, lastEvaluatedKey, logger, service);
    }

    logger.warn('Route not found', { httpMethod, path, pathParameters });
    return errorResponse('Route not found', 404, 'NOT_FOUND');
  } catch (error: any) {
    logger.error('Handler error', error);
    return serverErrorResponse(
      error.message || 'Internal server error',
      'INTERNAL_ERROR',
      process.env.STAGE === 'dev' ? error.stack : undefined
    );
  }
}

/**
 * Handle form submission creation
 */
async function handleCreateSubmission(
  formType: FormType,
  body: string | null,
  logger: ReturnType<typeof createLogger>,
  service: ReturnType<typeof createFormService>
): Promise<APIGatewayProxyResult> {
  try {
    // Validate form type
    if (!Object.values(FormType).includes(formType)) {
      return validationErrorResponse(
        `Invalid form type. Allowed values: ${Object.values(FormType).join(', ')}`
      );
    }

    // Parse request body
    if (!body) {
      return validationErrorResponse('Request body is required');
    }

    let data: any;
    try {
      data = JSON.parse(body);
    } catch (error) {
      return validationErrorResponse('Invalid JSON in request body');
    }

    // Create submission
    const submission = await service.createSubmission(formType, data);

    // Custom messages for forms that send emails
    let message = 'Form submission created successfully';
    if (formType === FormType.ENQUIRY) {
      message = 'Enquiry submitted successfully. We will contact you soon!';
    } else if (formType === FormType.CONTACT) {
      message = 'Contact form submitted successfully. We will get back to you soon!';
    }

    return successResponse(
      message,
      submission,
      201
    );
  } catch (error: any) {
    logger.error('Failed to create submission', error);

    if (error.message.includes('Validation failed')) {
      return validationErrorResponse(error.message);
    }

    if (error.message.includes('Failed to send email')) {
      const emailErrorMsg = formType === FormType.ENQUIRY
        ? 'Failed to send enquiry email. Please try again later.'
        : formType === FormType.CONTACT
        ? 'Failed to send contact email. Please try again later.'
        : 'Failed to send email. Please try again later.';
      return serverErrorResponse(emailErrorMsg);
    }

    return serverErrorResponse('Failed to create form submission');
  }
}

/**
 * Handle get single submission
 */
async function handleGetSubmission(
  id: string,
  formType: FormType | undefined,
  logger: ReturnType<typeof createLogger>,
  service: ReturnType<typeof createFormService>
): Promise<APIGatewayProxyResult> {
  try {
    // Validate form type if provided
    if (formType && !Object.values(FormType).includes(formType)) {
      return validationErrorResponse(
        `Invalid form type. Allowed values: ${Object.values(FormType).join(', ')}`
      );
    }

    const submission = await service.getSubmissionById(id, formType);

    if (!submission) {
      return notFoundResponse('Form submission not found');
    }

    return successResponse('Submission retrieved successfully', submission);
  } catch (error: any) {
    logger.error('Failed to get submission', error);
    return serverErrorResponse('Failed to retrieve form submission');
  }
}

/**
 * Handle list submissions by form type
 */
async function handleListSubmissions(
  formType: FormType,
  limit: number,
  lastEvaluatedKey: Record<string, any> | undefined,
  logger: ReturnType<typeof createLogger>,
  service: ReturnType<typeof createFormService>
): Promise<APIGatewayProxyResult> {
  try {
    // Validate form type
    if (!Object.values(FormType).includes(formType)) {
      return validationErrorResponse(
        `Invalid form type. Allowed values: ${Object.values(FormType).join(', ')}`
      );
    }

    // Validate limit
    if (limit < 1 || limit > 100) {
      return validationErrorResponse('Limit must be between 1 and 100');
    }

    const result = await service.getSubmissionsByFormType(
      formType,
      limit,
      lastEvaluatedKey
    );

    const response: any = {
      items: result.items,
      count: result.items.length,
    };

    if (result.lastEvaluatedKey) {
      response.pagination = {
        lastEvaluatedKey: encodeURIComponent(
          JSON.stringify(result.lastEvaluatedKey)
        ),
      };
    }

    return successResponse('Submissions retrieved successfully', response);
  } catch (error: any) {
    logger.error('Failed to list submissions', error);
    return serverErrorResponse('Failed to retrieve form submissions');
  }
}

