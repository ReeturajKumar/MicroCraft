import { BaseValidator } from './base';
import { ValidationResult } from '../types';
import { EnquiryFormData } from '../types';

export class EnquiryValidator extends BaseValidator {
  validate(data: Partial<EnquiryFormData>): ValidationResult {
    const errors: (string | null)[] = [];

    // Required fields
    errors.push(this.validateRequired(data.name, 'Name'));
    errors.push(this.validateEmail(data.email, 'Email'));
    errors.push(this.validatePhone(data.phone, 'Phone', true));
    errors.push(this.validateRequired(data.subject, 'Subject'));
    errors.push(this.validateLength(data.message, 'Message', 10, 2000, true));

    // Optional but validated fields
    if (data.preferredContactMethod) {
      errors.push(
        this.validateEnum(
          data.preferredContactMethod,
          'Preferred contact method',
          ['email', 'phone', 'both'] as const,
          false
        )
      );
    }

    if (data.subject) {
      errors.push(this.validateLength(data.subject, 'Subject', 3, 200, false));
    }

    return {
      isValid: this.collectErrors(errors).length === 0,
      errors: this.collectErrors(errors),
    };
  }
}

