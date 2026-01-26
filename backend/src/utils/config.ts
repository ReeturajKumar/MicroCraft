/**
 * Environment configuration
 */
export interface Config {
  stage: string;
  region: string;
  tableName: string;
  logLevel: string;
}

/**
 * Gets configuration from environment variables
 */
export function getConfig(): Config {
  const stage = process.env.STAGE || 'dev';
  const region = process.env.AWS_REGION || 'us-east-1';
  const tableName = process.env.FORMS_TABLE_NAME || `forms-submissions-${stage}`;
  const logLevel = process.env.LOG_LEVEL || 'INFO';

  return {
    stage,
    region,
    tableName,
    logLevel,
  };
}

/**
 * Validates that required environment variables are set
 */
export function validateConfig(): void {
  const required = ['STAGE'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

