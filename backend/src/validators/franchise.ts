import { BaseValidator } from './base';
import { ValidationResult } from '../types';
import { FranchiseFormData } from '../types';

export class FranchiseValidator extends BaseValidator {
  validate(data: Partial<FranchiseFormData>): ValidationResult {
    const errors: (string | null)[] = [];

    // Required fields
    errors.push(this.validateRequired(data.name, 'Name'));
    errors.push(this.validateEmail(data.email, 'Email'));
    errors.push(this.validatePhone(data.phone, 'Phone', true));
    errors.push(this.validateRequired(data.location, 'Location'));

    // Optional but validated fields
    if (data.company) {
      errors.push(this.validateLength(data.company, 'Company', 2, 200, false));
    }

    if (data.location) {
      errors.push(this.validateLength(data.location, 'Location', 3, 200, false));
    }

    if (data.investmentRange) {
      errors.push(this.validateLength(data.investmentRange, 'Investment range', 2, 100, false));
    }

    if (data.experience) {
      errors.push(this.validateLength(data.experience, 'Experience', 2, 1000, false));
    }

    if (data.message) {
      errors.push(this.validateLength(data.message, 'Message', 0, 2000, false));
    }

    return {
      isValid: this.collectErrors(errors).length === 0,
      errors: this.collectErrors(errors),
    };
  }
}

