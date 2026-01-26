import { ValidationResult } from '../types';
import { sanitizeString, sanitizeEmail, sanitizePhone, isValidEmail, isValidPhone } from '../utils/sanitize';

/**
 * Base validator class with common validation methods
 */
export abstract class BaseValidator {
  /**
   * Abstract validate method that must be implemented by subclasses
   */
  abstract validate(data: any): ValidationResult;
  /**
   * Validates required string field
   */
  protected validateRequired(value: any, fieldName: string): string | null {
    if (!value || (typeof value === 'string' && value.trim().length === 0)) {
      return `${fieldName} is required`;
    }
    return null;
  }

  /**
   * Validates email format
   */
  protected validateEmail(email: string | undefined, fieldName: string = 'Email'): string | null {
    if (!email) {
      return `${fieldName} is required`;
    }

    const sanitized = sanitizeEmail(email);
    if (!isValidEmail(sanitized)) {
      return `${fieldName} must be a valid email address`;
    }

    return null;
  }

  /**
   * Validates phone format
   */
  protected validatePhone(phone: string | undefined, fieldName: string = 'Phone', required: boolean = false): string | null {
    if (!phone) {
      if (required) {
        return `${fieldName} is required`;
      }
      return null;
    }

    const sanitized = sanitizePhone(phone);
    if (!isValidPhone(sanitized)) {
      return `${fieldName} must be a valid phone number`;
    }

    return null;
  }

  /**
   * Validates string length
   */
  protected validateLength(
    value: string | undefined,
    fieldName: string,
    min: number,
    max: number,
    required: boolean = true
  ): string | null {
    if (!value) {
      if (required) {
        return `${fieldName} is required`;
      }
      return null;
    }

    const sanitized = sanitizeString(value);
    if (sanitized.length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    if (sanitized.length > max) {
      return `${fieldName} must be at most ${max} characters`;
    }

    return null;
  }

  /**
   * Validates number range
   */
  protected validateNumberRange(
    value: number | undefined,
    fieldName: string,
    min: number,
    max: number,
    required: boolean = true
  ): string | null {
    if (value === undefined || value === null) {
      if (required) {
        return `${fieldName} is required`;
      }
      return null;
    }

    if (typeof value !== 'number' || isNaN(value)) {
      return `${fieldName} must be a valid number`;
    }

    if (value < min || value > max) {
      return `${fieldName} must be between ${min} and ${max}`;
    }

    return null;
  }

  /**
   * Validates enum value
   */
  protected validateEnum<T>(
    value: any,
    fieldName: string,
    allowedValues: readonly T[],
    required: boolean = true
  ): string | null {
    if (!value) {
      if (required) {
        return `${fieldName} is required`;
      }
      return null;
    }

    if (!allowedValues.includes(value)) {
      return `${fieldName} must be one of: ${allowedValues.join(', ')}`;
    }

    return null;
  }

  /**
   * Collects validation errors
   */
  protected collectErrors(errors: (string | null)[]): string[] {
    return errors.filter((error): error is string => error !== null);
  }
}

