export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface LogContext {
  requestId?: string;
  formType?: string;
  submissionId?: string;
  [key: string]: any;
}

/**
 * Structured logger for Lambda functions
 */
export class Logger {
  private context: LogContext;

  constructor(context: LogContext = {}) {
    this.context = context;
  }

  private log(level: LogLevel, message: string, data?: any): void {
    const logEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...this.context,
      ...(data && { data }),
    };

    console.log(JSON.stringify(logEntry));
  }

  debug(message: string, data?: any): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  info(message: string, data?: any): void {
    this.log(LogLevel.INFO, message, data);
  }

  warn(message: string, data?: any): void {
    this.log(LogLevel.WARN, message, data);
  }

  error(message: string, error?: Error | any, data?: any): void {
    const errorData = {
      ...data,
      ...(error instanceof Error
        ? {
            errorName: error.name,
            errorMessage: error.message,
            errorStack: error.stack,
          }
        : { error }),
    };
    this.log(LogLevel.ERROR, message, errorData);
  }
}

/**
 * Creates a logger instance with context
 */
export function createLogger(context: LogContext = {}): Logger {
  return new Logger(context);
}

