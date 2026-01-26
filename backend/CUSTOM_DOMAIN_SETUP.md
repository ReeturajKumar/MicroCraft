# Custom Domain Setup Guide

## Overview

This guide will help you set up the custom domain `api.microkraft.ai` for your API Gateway.

## Prerequisites

1. Domain `microkraft.ai` must be registered
2. DNS must be managed (Route53 or external DNS provider)
3. AWS CLI configured with appropriate permissions

## Step 1: Create/Verify ACM Certificate

API Gateway custom domains require an ACM certificate in **us-east-1** region (even if your API is in ap-south-1).

### Option A: Certificate Already Exists

If you already have a certificate for `api.microkraft.ai` or `*.microkraft.ai`:

1. Get the certificate ARN:
   ```bash
   export AWS_PROFILE=cloudblitz-website
   aws acm list-certificates --region us-east-1 --output json
   ```

2. Update `serverless.yml` with the certificate ARN:
   ```yaml
   custom:
     certificateArn:
       dev: "arn:aws:acm:us-east-1:ACCOUNT_ID:certificate/CERTIFICATE_ID"
   ```

### Option B: Create New Certificate

1. **Request Certificate in us-east-1:**
   ```bash
   export AWS_PROFILE=cloudblitz-website
   aws acm request-certificate \
     --domain-name api.microkraft.ai \
     --validation-method DNS \
     --region us-east-1
   ```

2. **Get Certificate ARN from output**

3. **Get DNS Validation Records:**
   ```bash
   aws acm describe-certificate \
     --certificate-arn <CERTIFICATE_ARN> \
     --region us-east-1 \
     --query 'Certificate.DomainValidationOptions'
   ```

4. **Add DNS Validation Records to your DNS provider:**
   - If using Route53, AWS will auto-validate
   - If using external DNS, add the CNAME records manually

5. **Wait for Certificate Validation** (can take 5-30 minutes)

6. **Update serverless.yml with certificate ARN:**
   ```yaml
   custom:
     certificateArn:
       dev: "arn:aws:acm:us-east-1:ACCOUNT_ID:certificate/CERTIFICATE_ID"
   ```

## Step 2: Deploy Custom Domain

Once the certificate is validated, deploy the custom domain:

```bash
cd backend
export AWS_PROFILE=cloudblitz-website
serverless create_domain --stage dev --region ap-south-1
```

This will:
- Create the custom domain in API Gateway
- Map the domain to your API
- Create Route53 record (if `createRoute53Record: true`)

## Step 3: Deploy API

After the domain is created, deploy your API:

```bash
serverless deploy --stage dev --region ap-south-1
```

## Step 4: Verify DNS

### If using Route53 (auto-configured):

The plugin will automatically create the Route53 record. Verify:

```bash
aws route53 list-hosted-zones --query "HostedZones[?Name=='microkraft.ai.']"
```

### If using external DNS:

1. Get the API Gateway domain name:
   ```bash
   aws apigatewayv2 get-domain-names --region ap-south-1 \
     --query "Items[?DomainName=='api.microkraft.ai'].DomainNameConfigurations[0].TargetDomainName" \
     --output text
   ```

2. Add a CNAME record in your DNS provider:
   - **Name:** `api`
   - **Type:** `CNAME`
   - **Value:** The target domain name from step 1
   - **TTL:** 300 (or your preference)

## Step 5: Test

Wait 5-10 minutes for DNS propagation, then test:

```bash
curl https://api.microkraft.ai/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## Troubleshooting

### Certificate Not Found

If you get an error about certificate not found:
1. Verify certificate is in `us-east-1` region
2. Verify certificate is validated (status: ISSUED)
3. Check certificate ARN in serverless.yml

### Domain Already Exists

If domain already exists:
```bash
serverless delete_domain --stage dev --region ap-south-1
# Then recreate
serverless create_domain --stage dev --region ap-south-1
```

### DNS Not Resolving

1. Check DNS propagation: `dig api.microkraft.ai`
2. Verify CNAME record is correct
3. Wait up to 48 hours for full propagation (usually 5-30 minutes)

### Certificate Validation Failed

1. Check DNS validation records are added correctly
2. Verify domain ownership
3. Re-request certificate if needed

## Manual Certificate ARN Configuration

If you prefer to manually specify the certificate ARN, update `serverless.yml`:

```yaml
custom:
  certificateArn:
    dev: "arn:aws:acm:us-east-1:684779206235:certificate/xxxxx-xxxx-xxxx-xxxx-xxxxx"
    staging: "arn:aws:acm:us-east-1:684779206235:certificate/xxxxx-xxxx-xxxx-xxxx-xxxxx"
    prod: "arn:aws:acm:us-east-1:684779206235:certificate/xxxxx-xxxx-xxxx-xxxx-xxxxx"
```

## Quick Commands

```bash
# Create domain
serverless create_domain --stage dev --region ap-south-1

# Deploy API
serverless deploy --stage dev --region ap-south-1

# Delete domain
serverless delete_domain --stage dev --region ap-south-1

# Check domain status
aws apigatewayv2 get-domain-names --region ap-south-1
```

## Notes

- Certificate **must** be in `us-east-1` for API Gateway custom domains
- API can be in any region (ap-south-1 in this case)
- DNS propagation can take 5-30 minutes
- Custom domain is separate from API deployment

