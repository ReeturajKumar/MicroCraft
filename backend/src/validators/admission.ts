import { BaseValidator } from './base';
import { ValidationResult } from '../types';
import { AdmissionFormData } from '../types';

export class AdmissionValidator extends BaseValidator {
  validate(data: Partial<AdmissionFormData>): ValidationResult {
    const errors: (string | null)[] = [];

    // Required fields
    errors.push(this.validateRequired(data.firstName, 'First name'));
    errors.push(this.validateRequired(data.lastName, 'Last name'));
    errors.push(this.validateEmail(data.email, 'Email'));
    errors.push(this.validatePhone(data.phone, 'Phone', true));

    // Optional but validated fields
    if (data.dateOfBirth) {
      errors.push(this.validateDateOfBirth(data.dateOfBirth));
    }

    if (data.course) {
      errors.push(this.validateLength(data.course, 'Course', 2, 100, false));
    }

    if (data.previousEducation) {
      errors.push(this.validateLength(data.previousEducation, 'Previous education', 2, 500, false));
    }

    if (data.address) {
      errors.push(this.validateLength(data.address, 'Address', 5, 500, false));
    }

    if (data.additionalInfo) {
      errors.push(this.validateLength(data.additionalInfo, 'Additional info', 0, 2000, false));
    }

    return {
      isValid: this.collectErrors(errors).length === 0,
      errors: this.collectErrors(errors),
    };
  }

  private validateDateOfBirth(dateOfBirth: string): string | null {
    if (!dateOfBirth) {
      return null;
    }

    const date = new Date(dateOfBirth);
    if (isNaN(date.getTime())) {
      return 'Date of birth must be a valid date';
    }

    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    if (age < 13 || age > 100) {
      return 'Date of birth must represent a valid age (13-100 years)';
    }

    return null;
  }
}

