import { FormType } from '../types';
import { AdmissionValidator } from './admission';
import { EnquiryValidator } from './enquiry';
import { ContactValidator } from './contact';
import { FeedbackValidator } from './feedback';
import { FranchiseValidator } from './franchise';
import { BaseValidator } from './base';

/**
 * Validator factory
 */
export class ValidatorFactory {
  static getValidator(formType: FormType): BaseValidator {
    switch (formType) {
      case FormType.ADMISSION:
        return new AdmissionValidator();
      case FormType.ENQUIRY:
        return new EnquiryValidator();
      case FormType.CONTACT:
        return new ContactValidator();
      case FormType.FEEDBACK:
        return new FeedbackValidator();
      case FormType.FRANCHISE:
        return new FranchiseValidator();
      default:
        throw new Error(`Unknown form type: ${formType}`);
    }
  }
}

export {
  BaseValidator,
  AdmissionValidator,
  EnquiryValidator,
  ContactValidator,
  FeedbackValidator,
  FranchiseValidator,
};

