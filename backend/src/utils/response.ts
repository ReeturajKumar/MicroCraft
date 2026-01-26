import { APIGatewayProxyResult } from 'aws-lambda';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: {
    code: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * Creates a standardized API response
 */
export function createResponse<T>(
  statusCode: number,
  message: string,
  data?: T,
  error?: { code: string; details?: any }
): APIGatewayProxyResult {
  const response: ApiResponse<T> = {
    success: statusCode >= 200 && statusCode < 300,
    message,
    timestamp: new Date().toISOString(),
  };

  if (data !== undefined) {
    response.data = data;
  }

  if (error) {
    response.error = error;
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    },
    body: JSON.stringify(response),
  };
}

/**
 * Success response helper
 */
export function successResponse<T>(
  message: string,
  data?: T,
  statusCode: number = 200
): APIGatewayProxyResult {
  return createResponse(statusCode, message, data);
}

/**
 * Error response helper
 */
export function errorResponse(
  message: string,
  statusCode: number = 400,
  errorCode?: string,
  details?: any
): APIGatewayProxyResult {
  return createResponse(
    statusCode,
    message,
    undefined,
    errorCode ? { code: errorCode, details } : undefined
  );
}

/**
 * Internal server error response
 */
export function serverErrorResponse(
  message: string = 'Internal server error',
  errorCode: string = 'INTERNAL_ERROR',
  details?: any
): APIGatewayProxyResult {
  return errorResponse(message, 500, errorCode, details);
}

/**
 * Validation error response
 */
export function validationErrorResponse(
  message: string,
  details?: any
): APIGatewayProxyResult {
  return errorResponse(message, 400, 'VALIDATION_ERROR', details);
}

/**
 * Not found error response
 */
export function notFoundResponse(
  message: string = 'Resource not found'
): APIGatewayProxyResult {
  return errorResponse(message, 404, 'NOT_FOUND');
}

