import { v4 as uuidv4 } from 'uuid';
import { FormType, FormSubmission } from '../types';
import { createDatabase } from '../utils/db';
import { createLogger } from '../utils/logger';
import { ValidatorFactory } from '../validators';
import { sanitizeObject, sanitizeEmail, sanitizePhone } from '../utils/sanitize';
import { sendEnquiryEmail, sendContactEmail } from '../utils/email';

export class FormService {
  private db = createDatabase();
  private logger = createLogger();

  /**
   * Create a new form submission
   */
  async createSubmission<T extends FormSubmission>(
    formType: FormType,
    data: any
  ): Promise<T> {
    this.logger.info('Creating form submission', { formType });

    // Validate form data
    const validator = ValidatorFactory.getValidator(formType);
    const validation = validator.validate(data);

    if (!validation.isValid) {
      this.logger.warn('Validation failed', { formType, errors: validation.errors });
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    // Sanitize input data
    const sanitizedData = this.sanitizeFormData(formType, data);

    // Create submission object
    const now = new Date().toISOString();
    const submission: FormSubmission = {
      id: uuidv4(),
      formType,
      data: sanitizedData,
      createdAt: now,
      updatedAt: now,
    } as FormSubmission;

    // Special handling for enquiry forms: send email instead of saving to DynamoDB
    if (formType === FormType.ENQUIRY) {
      this.logger.info('Processing enquiry form - sending email', { formType });
      
      // Send email with enquiry data
      await sendEnquiryEmail(sanitizedData);

      this.logger.info('Enquiry email sent successfully', {
        formType,
        submissionId: submission.id,
      });

      return submission as T;
    }

    // For contact forms: send email AND save to DynamoDB
    if (formType === FormType.CONTACT) {
      this.logger.info('Processing contact form - sending email and saving to database', { formType });
      
      // Send email with contact data
      await sendContactEmail(sanitizedData);

      // Also save to database
      await this.db.create(submission);

      this.logger.info('Contact form processed successfully', {
        formType,
        submissionId: submission.id,
      });

      return submission as T;
    }

    // For all other form types, save to DynamoDB only
    await this.db.create(submission);

    this.logger.info('Form submission created', {
      formType,
      submissionId: submission.id,
    });

    return submission as T;
  }

  /**
   * Get submission by ID
   */
  async getSubmissionById(
    id: string,
    formType?: FormType
  ): Promise<FormSubmission | null> {
    this.logger.info('Fetching submission', { id, formType });

    const submission = await this.db.getById<FormSubmission>(
      id,
      formType
    );

    if (!submission) {
      this.logger.info('Submission not found', { id, formType });
      return null;
    }

    this.logger.info('Submission fetched', { id });
    return submission;
  }

  /**
   * Get submissions by form type with pagination
   */
  async getSubmissionsByFormType(
    formType: FormType,
    limit: number = 20,
    lastEvaluatedKey?: Record<string, any>
  ): Promise<{
    items: FormSubmission[];
    lastEvaluatedKey?: Record<string, any>;
  }> {
    this.logger.info('Fetching submissions by form type', {
      formType,
      limit,
    });

    const result = await this.db.queryByFormType<FormSubmission>(
      formType,
      limit,
      lastEvaluatedKey
    );

    this.logger.info('Submissions fetched', {
      formType,
      count: result.items.length,
    });

    return result;
  }

  /**
   * Sanitize form data based on form type
   */
  private sanitizeFormData(_formType: FormType, data: any): any {
    const sanitized = { ...data };

    // Common sanitization
    if (sanitized.email) {
      sanitized.email = sanitizeEmail(sanitized.email);
    }

    if (sanitized.phone) {
      sanitized.phone = sanitizePhone(sanitized.phone);
    }

    // Sanitize all string fields
    return sanitizeObject(sanitized);
  }
}

/**
 * Creates a form service instance
 */
export function createFormService(): FormService {
  return new FormService();
}

