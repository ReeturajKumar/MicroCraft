/**
 * Form types supported by the system
 */
export enum FormType {
  ADMISSION = 'admission',
  ENQUIRY = 'enquiry',
  CONTACT = 'contact',
  FEEDBACK = 'feedback',
  FRANCHISE = 'franchise',
}

/**
 * Base form submission interface
 */
export interface BaseFormSubmission {
  id: string;
  formType: FormType;
  createdAt: string;
  updatedAt: string;
}

/**
 * Admission form data
 */
export interface AdmissionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  course?: string;
  previousEducation?: string;
  address?: string;
  additionalInfo?: string;
}

export interface AdmissionSubmission extends BaseFormSubmission {
  formType: FormType.ADMISSION;
  data: AdmissionFormData;
}

/**
 * Enquiry form data
 */
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContactMethod?: 'email' | 'phone' | 'both';
}

export interface EnquirySubmission extends BaseFormSubmission {
  formType: FormType.ENQUIRY;
  data: EnquiryFormData;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  reason?: string;
}

export interface ContactSubmission extends BaseFormSubmission {
  formType: FormType.CONTACT;
  data: ContactFormData;
}

/**
 * Feedback form data
 */
export interface FeedbackFormData {
  name: string;
  email: string;
  rating: number; // 1-5
  category?: string;
  message: string;
  allowContact?: boolean;
}

export interface FeedbackSubmission extends BaseFormSubmission {
  formType: FormType.FEEDBACK;
  data: FeedbackFormData;
}

/**
 * Franchise form data
 */
export interface FranchiseFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  location: string;
  investmentRange?: string;
  experience?: string;
  message?: string;
}

export interface FranchiseSubmission extends BaseFormSubmission {
  formType: FormType.FRANCHISE;
  data: FranchiseFormData;
}

/**
 * Union type for all form submissions
 */
export type FormSubmission =
  | AdmissionSubmission
  | EnquirySubmission
  | ContactSubmission
  | FeedbackSubmission
  | FranchiseSubmission;

/**
 * Validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

