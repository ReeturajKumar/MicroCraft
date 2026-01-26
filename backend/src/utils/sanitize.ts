/**
 * Sanitizes string input by removing potentially dangerous characters
 */
export function sanitizeString(input: string | undefined | null): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 10000); // Limit length
}

/**
 * Sanitizes email input
 */
export function sanitizeEmail(input: string | undefined | null): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input.trim().toLowerCase().slice(0, 255);
}

/**
 * Sanitizes phone number input
 */
export function sanitizePhone(input: string | undefined | null): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove all non-digit characters except + at the start
  return input
    .trim()
    .replace(/^\+?/, '+') // Ensure + at start if present
    .replace(/[^\d+]/g, '')
    .slice(0, 20);
}

/**
 * Sanitizes object recursively
 */
export function sanitizeObject<T extends Record<string, any>>(obj: T): T {
  const sanitized = { ...obj };

  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeString(sanitized[key]) as any;
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key]) as any;
    }
  }

  return sanitized;
}

/**
 * Validates and sanitizes email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format (basic)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
}

