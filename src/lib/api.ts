/**
 * API Configuration and Service
 */

// API Base URL - uses custom domain
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.microkraft.ai';

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

export type FormType = 'admission' | 'enquiry' | 'contact' | 'feedback' | 'franchise';

/**
 * Generic API request function
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  const data: ApiResponse<T> = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
}

/**
 * Submit a form
 */
export async function submitForm(
  formType: FormType,
  data: Record<string, any>
): Promise<ApiResponse> {
  return apiRequest(`/forms/${formType}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Get a form submission by ID
 */
export async function getSubmission(
  formType: FormType,
  id: string
): Promise<ApiResponse> {
  return apiRequest(`/forms/${formType}/${id}`);
}

/**
 * List form submissions by type
 */
export async function listSubmissions(
  formType: FormType,
  limit: number = 20,
  lastEvaluatedKey?: string
): Promise<ApiResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
  });

  if (lastEvaluatedKey) {
    params.append('lastEvaluatedKey', lastEvaluatedKey);
  }

  return apiRequest(`/forms/${formType}?${params.toString()}`);
}

/**
 * Contact form submission (wrapper for contact form type)
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  reason?: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse> {
  return submitForm('contact', data);
}

/**
 * Enquiry form submission
 */
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContactMethod?: 'email' | 'phone' | 'both';
}

export async function submitEnquiryForm(
  data: EnquiryFormData
): Promise<ApiResponse> {
  return submitForm('enquiry', data);
}

/**
 * Feedback form submission
 */
export interface FeedbackFormData {
  name: string;
  email: string;
  rating: number;
  category?: string;
  message: string;
  allowContact?: boolean;
}

export async function submitFeedbackForm(
  data: FeedbackFormData
): Promise<ApiResponse> {
  return submitForm('feedback', data);
}

/**
 * Admission form submission
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

export async function submitAdmissionForm(
  data: AdmissionFormData
): Promise<ApiResponse> {
  return submitForm('admission', data);
}

/**
 * Franchise form submission
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

export async function submitFranchiseForm(
  data: FranchiseFormData
): Promise<ApiResponse> {
  return submitForm('franchise', data);
}

