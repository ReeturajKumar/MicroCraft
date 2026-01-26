# Email Troubleshooting Guide

## Status: Email is Being Sent Successfully ✅

Based on the CloudWatch logs, emails are being sent successfully from the Lambda function. The Gmail SMTP server is accepting the emails with response code `250 2.0.0 OK`, which means the email was successfully queued for delivery.

## If Emails Are Not Being Received

### 1. Check Spam/Junk Folder
- Emails from automated systems often end up in spam folders
- Check the spam folder for `sales@cloudblitz.in`
- Mark as "Not Spam" if found

### 2. Check Email Filters
- Verify if there are any email filters or rules that might be moving emails
- Check if emails are being forwarded or archived automatically

### 3. Verify Recipient Email Address
- Confirm that `sales@cloudblitz.in` is the correct email address
- Test by sending a manual email to this address

### 4. Check Email Server Logs
- Check the mail server logs for `sales@cloudblitz.in`
- Look for any rejection messages or delivery failures

### 5. Email Delivery Delay
- Sometimes emails can take a few minutes to arrive
- Wait 5-10 minutes and check again

## Email Configuration

Current email settings:
- **From:** johnkobal007@gmail.com
- **To:** sales@cloudblitz.in
- **Provider:** Gmail SMTP
- **Status:** ✅ Working (emails are being sent)

## Logs Show Success

Example log entry showing successful email delivery:
```
"Enquiry email sent successfully"
"messageId": "<16e70fb4-71ba-fe79-9ba1-3422a8e2a4c9@gmail.com>"
"to": "sales@cloudblitz.in"
"accepted": ["sales@cloudblitz.in"]
"rejected": []
"response": "250 2.0.0 OK ... gsmtp"
```

## Testing Email Delivery

To test if emails are being received:

1. **Submit a test enquiry form:**
   ```bash
   curl -X POST "https://api.microkraft.ai/forms/enquiry" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "phone": "+1234567890",
       "subject": "Test Enquiry",
       "message": "This is a test enquiry to verify email delivery."
     }'
   ```

2. **Check CloudWatch logs:**
   ```bash
   aws logs tail /aws/lambda/microkraft-forms-backend-dev-formsHandler \
     --since 10m --format short --region ap-south-1
   ```

3. **Check the recipient inbox:**
   - Check inbox, spam, and all mail folders
   - Look for emails from `johnkobal007@gmail.com`
   - Subject line: "New Enquiry: [Subject]"

## Alternative: Use AWS SES

If Gmail continues to have delivery issues, we can switch to AWS SES (Simple Email Service), which is more reliable for serverless applications:

1. **Benefits:**
   - Better deliverability
   - Higher sending limits
   - Better integration with AWS Lambda
   - No SMTP authentication issues

2. **Setup:**
   - Verify the sending domain/email in AWS SES
   - Update the email utility to use AWS SES SDK
   - Update IAM permissions

## Current Implementation

The email service:
- ✅ Removes spaces from Gmail app passwords
- ✅ Uses proper Gmail SMTP configuration (smtp.gmail.com:587)
- ✅ Verifies connection before sending
- ✅ Includes detailed error logging
- ✅ Formats emails with HTML and plain text
- ✅ Includes proper email headers

## Next Steps

1. **Immediate:** Check spam folder and email filters
2. **If still not receiving:** Consider switching to AWS SES
3. **Monitor:** Check CloudWatch logs regularly for any errors

