import { BaseValidator } from './base';
import { ValidationResult } from '../types';
import { ContactFormData } from '../types';

export class ContactValidator extends BaseValidator {
  validate(data: Partial<ContactFormData>): ValidationResult {
    const errors: (string | null)[] = [];

    // Required fields
    errors.push(this.validateRequired(data.name, 'Name'));
    errors.push(this.validateEmail(data.email, 'Email'));
    errors.push(this.validateLength(data.message, 'Message', 10, 2000, true));

    // Optional but validated fields
    if (data.phone) {
      errors.push(this.validatePhone(data.phone, 'Phone', false));
    }

    if (data.company) {
      errors.push(this.validateLength(data.company, 'Company', 2, 200, false));
    }

    if (data.reason) {
      errors.push(this.validateLength(data.reason, 'Reason', 2, 200, false));
    }

    return {
      isValid: this.collectErrors(errors).length === 0,
      errors: this.collectErrors(errors),
    };
  }
}

