import nodemailer from 'nodemailer';
import { createLogger } from './logger';

const logger = createLogger({ requestId: 'email-service' });

/**
 * Email configuration interface
 */
interface EmailConfig {
  user: string;
  pass: string;
  provider: string;
  to: string;
}

/**
 * Get email configuration from environment
 */
function getEmailConfig(): EmailConfig {
  return {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
    provider: process.env.EMAIL_PROVIDER || 'gmail',
    to: process.env.EMAIL_TO || 'sales@cloudblitz.in',
  };
}

/**
 * Create email transporter
 */
function createTransporter() {
  const config = getEmailConfig();

  if (!config.user || !config.pass) {
    throw new Error('Email credentials not configured');
  }

  // Remove spaces from password (Gmail app passwords are 16 characters without spaces)
  const cleanPassword = config.pass.replace(/\s+/g, '');

  // Gmail-specific configuration with explicit SMTP settings
  if (config.provider.toLowerCase() === 'gmail') {
    const transporterConfig = {
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.user,
        pass: cleanPassword,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates if needed
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    };

    logger.debug('Creating Gmail transporter', {
      user: config.user,
      host: transporterConfig.host,
      port: transporterConfig.port,
      passwordLength: cleanPassword.length,
    });

    return nodemailer.createTransport(transporterConfig);
  }

  // Generic SMTP configuration for other providers
  const transporterConfig: any = {
    service: config.provider,
    auth: {
      user: config.user,
      pass: cleanPassword,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  };

  return nodemailer.createTransport(transporterConfig);
}

/**
 * Format contact form data into HTML email
 */
function formatContactEmail(data: any): { subject: string; html: string; text: string } {
  const reason = data.reason || 'Contact Form Submission';
  const subject = `New ${reason}: ${data.name || 'Contact Request'}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; margin-bottom: 5px; }
        .value { color: #333; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #667eea; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">${reason}</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email || 'N/A'}</div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.reason ? `
          <div class="field">
            <div class="label">Reason:</div>
            <div class="value">${data.reason}</div>
          </div>
          ` : ''}
          ${data.preferredDate ? `
          <div class="field">
            <div class="label">Preferred Date:</div>
            <div class="value">${data.preferredDate}</div>
          </div>
          ` : ''}
          ${data.preferredTime ? `
          <div class="field">
            <div class="label">Preferred Time:</div>
            <div class="value">${data.preferredTime}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Submitted At:</div>
            <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
          </div>
        </div>
        <div class="footer">
          This ${reason.toLowerCase()} was submitted through the Microkraft.ai website contact form.
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
${reason}

Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
${data.reason ? `Reason: ${data.reason}` : ''}
${data.preferredDate ? `Preferred Date: ${data.preferredDate}` : ''}
${data.preferredTime ? `Preferred Time: ${data.preferredTime}` : ''}
Message: ${data.message || 'N/A'}

Submitted At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

This ${reason.toLowerCase()} was submitted through the Microkraft.ai website contact form.
  `.trim();

  return { subject, html, text };
}

/**
 * Format enquiry form data into HTML email
 */
function formatEnquiryEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New Enquiry: ${data.subject || 'Business Enquiry'}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; margin-bottom: 5px; }
        .value { color: #333; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #667eea; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Business Enquiry</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'N/A'}</div>
          </div>
          ${data.preferredContactMethod ? `
          <div class="field">
            <div class="label">Preferred Contact Method:</div>
            <div class="value">${data.preferredContactMethod}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Submitted At:</div>
            <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
          </div>
        </div>
        <div class="footer">
          This enquiry was submitted through the Microkraft.ai website contact form.
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Business Enquiry

Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}
Subject: ${data.subject || 'N/A'}
Message: ${data.message || 'N/A'}
${data.preferredContactMethod ? `Preferred Contact Method: ${data.preferredContactMethod}` : ''}

Submitted At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

This enquiry was submitted through the Microkraft.ai website contact form.
  `.trim();

  return { subject, html, text };
}

/**
 * Generic function to send form email
 */
async function sendFormEmail(
  formType: string,
  data: any,
  formatFunction: (data: any) => { subject: string; html: string; text: string }
): Promise<void> {
  let transporter: any = null;
  try {
    const config = getEmailConfig();
    
    logger.info(`Preparing to send ${formType} email`, {
      to: config.to,
      from: config.user,
      provider: config.provider,
    });

    // Verify transporter connection first
    transporter = createTransporter();
    
    logger.debug('Verifying email transporter connection');
    await transporter.verify();
    logger.info('Email transporter verified successfully');

    const { subject, html, text } = formatFunction(data);

    logger.info(`Sending ${formType} email`, {
      to: config.to,
      from: config.user,
      subject,
      hasHtml: !!html,
      hasText: !!text,
    });

    const mailOptions = {
      from: `"Microkraft.ai Forms" <${config.user}>`,
      to: config.to,
      replyTo: data.email || config.user,
      subject,
      text,
      html,
      // Add headers for better deliverability
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'Microkraft.ai Forms System',
        'List-Unsubscribe': `<mailto:${config.user}?subject=Unsubscribe>`,
      },
      // Add envelope for better deliverability
      envelope: {
        from: config.user,
        to: config.to,
      },
    };

    const info = await transporter.sendMail(mailOptions);

    logger.info(`${formType} email sent successfully`, {
      messageId: info.messageId,
      to: config.to,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    // Close the transporter connection
    transporter.close();
  } catch (error: any) {
    // Close transporter if it exists
    if (transporter) {
      try {
        transporter.close();
      } catch (closeError) {
        logger.warn('Error closing transporter', closeError);
      }
    }

    // Log detailed error information
    const errorDetails: any = {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    };

    logger.error(`Failed to send ${formType} email`, error, errorDetails);

    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      throw new Error(`Email authentication failed. Please check your email credentials. Details: ${error.message}`);
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      throw new Error(`Email connection failed. Please check your network settings. Details: ${error.message}`);
    } else if (error.responseCode === 535) {
      throw new Error(`Email authentication failed. Invalid username or password. Please use an App Password for Gmail.`);
    } else {
      throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
    }
  }
}

/**
 * Send enquiry email
 */
export async function sendEnquiryEmail(data: any): Promise<void> {
  return sendFormEmail('enquiry', data, formatEnquiryEmail);
}

/**
 * Send contact email
 */
export async function sendContactEmail(data: any): Promise<void> {
  return sendFormEmail('contact', data, formatContactEmail);
}

/**
 * Verify email configuration
 */
export async function verifyEmailConfig(): Promise<boolean> {
  let transporter: any = null;
  try {
    transporter = createTransporter();
    await transporter.verify();
    logger.info('Email configuration verified successfully');
    transporter.close();
    return true;
  } catch (error: any) {
    if (transporter) {
      try {
        transporter.close();
      } catch (closeError) {
        // Ignore close errors
      }
    }
    
    const errorDetails: any = {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    };
    
    logger.error('Email configuration verification failed', error, errorDetails);
    return false;
  }
}

