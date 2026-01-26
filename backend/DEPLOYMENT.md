# Deployment Guide

## Quick Start

### 1. Prerequisites Check

```bash
# Check Node.js version (should be 20.x or higher)
node --version

# Check AWS CLI
aws --version

# Check Serverless Framework
serverless --version
```

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Configure AWS Credentials

```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter default region (e.g., us-east-1)
# Enter default output format (json)
```

Or set environment variables:
```bash
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
export AWS_REGION=us-east-1
```

### 4. Deploy to Development

```bash
npm run deploy:dev
```

This will:
- Create DynamoDB table
- Deploy Lambda function
- Create API Gateway endpoints
- Set up IAM roles

### 5. Get API Endpoint

After deployment, the endpoint URL will be displayed in the output:
```
endpoints:
  POST - https://xxxxx.execute-api.us-east-1.amazonaws.com/forms/{formType}
  GET - https://xxxxx.execute-api.us-east-1.amazonaws.com/forms/{formType}/{id}
  GET - https://xxxxx.execute-api.us-east-1.amazonaws.com/forms/{formType}
```

## Environment-Specific Deployment

### Development
```bash
npm run deploy:dev
# or
serverless deploy --stage dev
```

### Staging
```bash
npm run deploy:staging
# or
serverless deploy --stage staging
```

### Production
```bash
npm run deploy:prod
# or
serverless deploy --stage prod
```

## Verification

### 1. Test API Endpoint

```bash
curl -X POST https://your-api.execute-api.us-east-1.amazonaws.com/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### 2. Check CloudWatch Logs

```bash
npm run logs
# or
serverless logs -f formsHandler -t
```

### 3. Verify DynamoDB Table

```bash
aws dynamodb describe-table \
  --table-name dev-forms-submissions \
  --region us-east-1
```

## Updating Configuration

### Change Region

Edit `serverless.yml`:
```yaml
provider:
  region: us-west-2  # Change this
```

Or use command line:
```bash
serverless deploy --region us-west-2
```

### Change Memory/Timeout

Edit `serverless.yml`:
```yaml
provider:
  memorySize: 512  # Change from 256
  timeout: 60      # Change from 30
```

## Troubleshooting

### Issue: "Table already exists"

**Solution:** The table might exist from a previous deployment. Either:
1. Use a different stage: `serverless deploy --stage dev2`
2. Remove the stack first: `npm run remove:dev`

### Issue: "Access Denied"

**Solution:** Check IAM permissions:
1. Ensure your AWS user has permissions to create Lambda, API Gateway, DynamoDB, and IAM roles
2. Or use an IAM role with appropriate permissions

### Issue: "Module not found"

**Solution:** 
```bash
npm install
# Make sure all dependencies are installed
```

### Issue: "Timeout"

**Solution:** Increase Lambda timeout in `serverless.yml`:
```yaml
provider:
  timeout: 60  # Increase from 30
```

## Cleanup

### Remove Development Stack
```bash
npm run remove:dev
```

### Remove All Stacks
```bash
npm run remove:dev
npm run remove:staging
npm run remove:prod
```

## CI/CD Integration

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Backend

on:
  push:
    branches:
      - main
      - staging

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: |
          cd backend
          npm ci
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to staging
        if: github.ref == 'refs/heads/staging'
        run: |
          cd backend
          npm run deploy:staging
      
      - name: Deploy to production
        if: github.ref == 'refs/heads/main'
        run: |
          cd backend
          npm run deploy:prod
```

### GitLab CI

Create `.gitlab-ci.yml`:

```yaml
stages:
  - deploy

deploy_staging:
  stage: deploy
  image: node:20
  script:
    - cd backend
    - npm ci
    - npm run deploy:staging
  only:
    - staging
  environment:
    name: staging

deploy_production:
  stage: deploy
  image: node:20
  script:
    - cd backend
    - npm ci
    - npm run deploy:prod
  only:
    - main
  environment:
    name: production
  when: manual
```

## Monitoring

### CloudWatch Metrics

Monitor:
- Lambda invocations
- Lambda errors
- Lambda duration
- API Gateway 4xx/5xx errors
- DynamoDB read/write capacity

### Set Up Alarms

```bash
# Example: Alert on Lambda errors
aws cloudwatch put-metric-alarm \
  --alarm-name forms-lambda-errors \
  --alarm-description "Alert on Lambda errors" \
  --metric-name Errors \
  --namespace AWS/Lambda \
  --statistic Sum \
  --period 300 \
  --threshold 5 \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 1
```

## Cost Optimization

1. **Use On-Demand Billing** (already configured)
   - DynamoDB uses PAY_PER_REQUEST mode
   - No need to provision capacity

2. **Lambda Memory**
   - Current: 256MB (can be reduced if needed)
   - Monitor and adjust based on actual usage

3. **API Gateway**
   - HTTP API is cheaper than REST API
   - Already using HTTP API

4. **Log Retention**
   - Set CloudWatch Logs retention to 7-14 days
   - Reduces storage costs

## Security Checklist

- ✅ IAM roles with least privilege
- ✅ Input sanitization
- ✅ Environment-based configuration
- ✅ No secrets in code
- ✅ CORS properly configured
- ✅ HTTPS only (API Gateway default)
- ✅ Structured logging (no sensitive data)

## Next Steps

1. Set up monitoring and alerts
2. Configure custom domain (optional)
3. Set up API rate limiting (if needed)
4. Configure CloudWatch Logs retention
5. Set up backup strategy for DynamoDB (if needed)

