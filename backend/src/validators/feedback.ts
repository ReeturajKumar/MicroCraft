import { BaseValidator } from './base';
import { ValidationResult } from '../types';
import { FeedbackFormData } from '../types';

export class FeedbackValidator extends BaseValidator {
  validate(data: Partial<FeedbackFormData>): ValidationResult {
    const errors: (string | null)[] = [];

    // Required fields
    errors.push(this.validateRequired(data.name, 'Name'));
    errors.push(this.validateEmail(data.email, 'Email'));
    errors.push(this.validateNumberRange(data.rating, 'Rating', 1, 5, true));
    errors.push(this.validateLength(data.message, 'Message', 10, 2000, true));

    // Optional but validated fields
    if (data.category) {
      errors.push(this.validateLength(data.category, 'Category', 2, 100, false));
    }

    if (data.allowContact !== undefined && typeof data.allowContact !== 'boolean') {
      errors.push('Allow contact must be a boolean value');
    }

    return {
      isValid: this.collectErrors(errors).length === 0,
      errors: this.collectErrors(errors),
    };
  }
}

