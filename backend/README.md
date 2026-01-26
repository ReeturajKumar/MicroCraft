# Microkraft Forms Backend

Production-ready serverless backend for handling multiple form submissions (admission, enquiry, contact, feedback, franchise) using AWS Lambda, API Gateway, and DynamoDB.

## Architecture

```
┌─────────────┐
│ API Gateway │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Lambda    │
│  Handler    │
└──────┬──────┘
       │
       ├──► Validators
       ├──► Services
       └──► DynamoDB
```

## Tech Stack

- **Runtime**: Node.js 20.x
- **Framework**: Serverless Framework
- **Compute**: AWS Lambda
- **API**: API Gateway (HTTP API)
- **Database**: DynamoDB
- **Language**: TypeScript

## Features

- ✅ Multiple form types (admission, enquiry, contact, feedback, franchise)
- ✅ Request validation with detailed error messages
- ✅ Input sanitization
- ✅ Structured logging
- ✅ Environment-based configuration (dev, staging, prod)
- ✅ IAM roles with least privilege
- ✅ Auto-generated unique IDs
- ✅ Timestamp tracking (createdAt, updatedAt)
- ✅ Pagination support
- ✅ CORS enabled
- ✅ Error handling and standardized responses

## Project Structure

```
backend/
├── src/
│   ├── handlers/          # Lambda handlers
│   │   └── index.ts       # Main handler with routing
│   ├── services/          # Business logic layer
│   │   └── formService.ts
│   ├── validators/        # Form validation
│   │   ├── base.ts
│   │   ├── admission.ts
│   │   ├── enquiry.ts
│   │   ├── contact.ts
│   │   ├── feedback.ts
│   │   ├── franchise.ts
│   │   └── index.ts
│   ├── utils/             # Utility functions
│   │   ├── response.ts    # API response helpers
│   │   ├── logger.ts      # Structured logging
│   │   ├── sanitize.ts    # Input sanitization
│   │   ├── config.ts      # Configuration
│   │   └── db.ts          # DynamoDB utilities
│   └── types/             # TypeScript types
│       └── index.ts
├── serverless.yml         # Serverless configuration
├── package.json
├── tsconfig.json
└── README.md
```

## DynamoDB Schema

### Table: `{stage}-forms-submissions`

**Primary Key:**
- `id` (String) - Partition key

**Attributes:**
- `formType` (String) - Form type (admission, enquiry, contact, feedback, franchise)
- `data` (Map) - Form-specific data
- `createdAt` (String) - ISO timestamp
- `updatedAt` (String) - ISO timestamp

**Global Secondary Index:**
- `formType-createdAt-index`
  - Partition Key: `formType`
  - Sort Key: `createdAt`
  - Used for querying submissions by form type

## API Endpoints

### Create Form Submission

**POST** `/forms/{formType}`

**Path Parameters:**
- `formType`: `admission` | `enquiry` | `contact` | `feedback` | `franchise`

**Request Body:** (See examples below)

**Response:** `201 Created`

```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "uuid",
    "formType": "admission",
    "data": { ... },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Get Single Submission

**GET** `/forms/{formType}/{id}`

**Path Parameters:**
- `formType`: Form type (optional, for validation)
- `id`: Submission ID

**Response:** `200 OK`

```json
{
  "success": true,
  "message": "Submission retrieved successfully",
  "data": { ... },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### List Submissions by Form Type

**GET** `/forms/{formType}?limit=20&lastEvaluatedKey=...`

**Path Parameters:**
- `formType`: Form type

**Query Parameters:**
- `limit`: Number of items (1-100, default: 20)
- `lastEvaluatedKey`: Base64 encoded pagination token (optional)

**Response:** `200 OK`

```json
{
  "success": true,
  "message": "Submissions retrieved successfully",
  "data": {
    "items": [ ... ],
    "count": 20,
    "pagination": {
      "lastEvaluatedKey": "..."
    }
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Prerequisites

1. **Node.js** 20.x or higher
2. **AWS CLI** configured with credentials
3. **Serverless Framework** CLI
   ```bash
   npm install -g serverless
   ```

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure AWS credentials:**
   ```bash
   aws configure
   ```

3. **Deploy to development:**
   ```bash
   npm run deploy:dev
   ```

## Deployment

### Development
```bash
npm run deploy:dev
```

### Staging
```bash
npm run deploy:staging
```

### Production
```bash
npm run deploy:prod
```

### Remove Stack
```bash
npm run remove:dev
npm run remove:staging
npm run remove:prod
```

## Local Development

1. **Install serverless-offline:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   serverless offline
   ```

3. **Test endpoints:**
   - Local API: `http://localhost:3000`
   - Example: `POST http://localhost:3000/forms/admission`

## Environment Variables

Set via `serverless.yml`:
- `STAGE`: Environment stage (dev, staging, prod)
- `AWS_REGION`: AWS region (default: us-east-1)
- `FORMS_TABLE_NAME`: DynamoDB table name (auto-generated)
- `LOG_LEVEL`: Logging level (DEBUG, INFO, WARN, ERROR)

## IAM Permissions

The Lambda function has the following DynamoDB permissions:
- `dynamodb:PutItem` - Create submissions
- `dynamodb:GetItem` - Get single submission
- `dynamodb:Query` - Query by form type
- `dynamodb:Scan` - Scan table (if needed)

All permissions follow the principle of least privilege.

## Monitoring & Logging

### View Logs
```bash
npm run logs
```

### CloudWatch Logs
Logs are automatically sent to CloudWatch Logs with structured JSON format:
```json
{
  "level": "INFO",
  "message": "Form submission created",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "requestId": "...",
  "formType": "admission",
  "submissionId": "..."
}
```

## Error Handling

All errors return standardized responses:

```json
{
  "success": false,
  "message": "Error message",
  "error": {
    "code": "ERROR_CODE",
    "details": { ... }
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Common Error Codes:**
- `VALIDATION_ERROR` - Input validation failed
- `NOT_FOUND` - Resource not found
- `INTERNAL_ERROR` - Server error

## Testing

### Example Requests

See `examples/` directory for complete request/response examples.

### Using cURL

**Create Admission Form:**
```bash
curl -X POST https://your-api.execute-api.us-east-1.amazonaws.com/forms/admission \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "course": "Computer Science"
  }'
```

## Best Practices Implemented

✅ **Security**
- Input sanitization
- IAM roles with least privilege
- Environment-based configuration
- No sensitive data in logs

✅ **Scalability**
- Serverless architecture
- DynamoDB with on-demand billing
- Stateless Lambda functions
- Efficient query patterns

✅ **Maintainability**
- Clean code structure
- TypeScript for type safety
- Reusable utilities
- Comprehensive error handling
- Structured logging

✅ **Reliability**
- Error handling at all layers
- Validation before processing
- Idempotent operations
- Proper HTTP status codes

## Troubleshooting

### Common Issues

1. **DynamoDB Table Not Found**
   - Ensure table is created (check CloudFormation stack)
   - Verify table name in environment variables

2. **Permission Denied**
   - Check IAM role permissions
   - Verify Lambda execution role

3. **Validation Errors**
   - Check request body format
   - Verify required fields
   - Review validator rules

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run deploy:prod
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## License

MIT

## Support

For issues and questions, please contact the development team.

