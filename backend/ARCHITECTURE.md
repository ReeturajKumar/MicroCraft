# Architecture Documentation

## System Overview

The Microkraft Forms Backend is a serverless application designed to handle multiple types of form submissions with high scalability, reliability, and maintainability.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        API Gateway                          │
│                    (HTTP API - REST)                        │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      Lambda Function                        │
│                    (Node.js 20.x)                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              Handler Layer                            │  │
│  │  - Route parsing                                      │  │
│  │  - Request validation                                 │  │
│  │  - Error handling                                     │  │
│  └───────────────┬───────────────────────────────────────┘  │
│                  │                                           │
│  ┌───────────────▼───────────────────────────────────────┐  │
│  │              Service Layer                            │  │
│  │  - Business logic                                     │  │
│  │  - Data transformation                                │  │
│  │  - Orchestration                                      │  │
│  └───────────────┬───────────────────────────────────────┘  │
│                  │                                           │
│  ┌───────────────▼───────────────────────────────────────┐  │
│  │              Validator Layer                           │  │
│  │  - Form-specific validation                           │  │
│  │  - Input sanitization                                 │  │
│  └───────────────┬───────────────────────────────────────┘  │
│                  │                                           │
│  ┌───────────────▼───────────────────────────────────────┐  │
│  │              Database Layer                            │  │
│  │  - DynamoDB operations                                │  │
│  │  - Query optimization                                 │  │
│  └────────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                        DynamoDB                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Table: {stage}-forms-submissions                    │  │
│  │  - Primary Key: id (String)                          │  │
│  │  - GSI: formType-createdAt-index                      │  │
│  └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Details

### 1. API Gateway (HTTP API)

**Purpose:** Entry point for all API requests

**Features:**
- RESTful API endpoints
- CORS support
- Request/response transformation
- Rate limiting (AWS default)

**Endpoints:**
- `POST /forms/{formType}` - Create submission
- `GET /forms/{formType}/{id}` - Get single submission
- `GET /forms/{formType}` - List submissions

### 2. Lambda Function

**Runtime:** Node.js 20.x
**Memory:** 256 MB
**Timeout:** 30 seconds
**Architecture:** Single Lambda with route-based handlers

**Layers:**
1. **Handler Layer** (`src/handlers/`)
   - Request routing
   - Response formatting
   - Error handling

2. **Service Layer** (`src/services/`)
   - Business logic
   - Data orchestration
   - Transaction management

3. **Validator Layer** (`src/validators/`)
   - Input validation
   - Type checking
   - Business rule enforcement

4. **Utility Layer** (`src/utils/`)
   - Common functions
   - Logging
   - Database access
   - Configuration

### 3. DynamoDB

**Table Structure:**
```
Table: {stage}-forms-submissions
├── Primary Key
│   └── id (String) - Partition Key
├── Attributes
│   ├── formType (String)
│   ├── data (Map)
│   ├── createdAt (String)
│   └── updatedAt (String)
└── Global Secondary Index
    └── formType-createdAt-index
        ├── formType (String) - Partition Key
        └── createdAt (String) - Sort Key
```

**Billing Mode:** On-Demand (PAY_PER_REQUEST)

**Query Patterns:**
1. Get by ID: Direct GetItem on primary key
2. Query by form type: GSI query with formType
3. List all: Scan (use sparingly)

## Data Flow

### Create Submission Flow

```
1. Client → API Gateway
   POST /forms/admission
   { "firstName": "John", ... }

2. API Gateway → Lambda
   Event with path parameters and body

3. Lambda Handler
   - Parse request
   - Extract formType from path
   - Validate formType

4. Lambda Service
   - Get validator for formType
   - Validate input data
   - Sanitize input

5. Lambda Service
   - Generate UUID
   - Create submission object
   - Add timestamps

6. Lambda Database
   - PutItem to DynamoDB
   - Handle conflicts

7. Lambda Handler
   - Format response
   - Return to API Gateway

8. API Gateway → Client
   201 Created with submission data
```

### Get Submission Flow

```
1. Client → API Gateway
   GET /forms/admission/{id}

2. API Gateway → Lambda
   Event with path parameters

3. Lambda Handler
   - Extract id and formType
   - Validate parameters

4. Lambda Database
   - GetItem from DynamoDB
   - Return submission or null

5. Lambda Handler
   - Format response
   - Return 200 OK or 404 Not Found
```

### List Submissions Flow

```
1. Client → API Gateway
   GET /forms/admission?limit=20

2. API Gateway → Lambda
   Event with path and query parameters

3. Lambda Handler
   - Extract formType
   - Parse limit and pagination token

4. Lambda Database
   - Query GSI with formType
   - Apply limit
   - Return items and pagination token

5. Lambda Handler
   - Format response with pagination
   - Return 200 OK
```

## Security Architecture

### IAM Roles

**Lambda Execution Role:**
```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:PutItem",
    "dynamodb:GetItem",
    "dynamodb:Query",
    "dynamodb:Scan"
  ],
  "Resource": [
    "arn:aws:dynamodb:*:table/{table-name}",
    "arn:aws:dynamodb:*:table/{table-name}/index/*"
  ]
}
```

**Principle:** Least Privilege
- Only necessary DynamoDB operations
- Scoped to specific table and indexes
- No cross-service access

### Input Security

1. **Sanitization**
   - Remove HTML tags
   - Remove JavaScript protocols
   - Remove event handlers
   - Length limits

2. **Validation**
   - Required fields
   - Data types
   - Format validation (email, phone)
   - Range validation (ratings, dates)

3. **Error Handling**
   - No sensitive data in errors
   - Generic error messages in production
   - Detailed errors in development

## Scalability

### Horizontal Scaling

- **Lambda:** Automatically scales based on request volume
- **DynamoDB:** On-demand mode handles any traffic volume
- **API Gateway:** Handles millions of requests

### Performance Optimizations

1. **Cold Start Mitigation**
   - Single Lambda function (reduces cold starts)
   - Minimal dependencies
   - Efficient initialization

2. **Database Optimization**
   - GSI for efficient queries
   - Proper key design
   - On-demand billing

3. **Response Time**
   - Direct DynamoDB access (no ORM overhead)
   - Minimal data transformation
   - Efficient error handling

## Reliability

### Error Handling

**Layers:**
1. **Validation Errors** → 400 Bad Request
2. **Not Found** → 404 Not Found
3. **Database Errors** → 500 Internal Server Error
4. **Unexpected Errors** → 500 with logging

**Logging:**
- Structured JSON logs
- Request ID tracking
- Error stack traces (dev only)
- CloudWatch integration

### Idempotency

- UUID generation ensures unique IDs
- Conditional writes prevent duplicates
- GET operations are idempotent

## Monitoring

### CloudWatch Metrics

**Lambda:**
- Invocations
- Errors
- Duration
- Throttles

**API Gateway:**
- Count
- 4xx Errors
- 5xx Errors
- Latency

**DynamoDB:**
- Read/Write capacity
- Throttles
- Errors

### Logging

**Structured Logs:**
```json
{
  "level": "INFO",
  "message": "Form submission created",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "requestId": "abc123",
  "formType": "admission",
  "submissionId": "uuid"
}
```

## Cost Optimization

### Current Configuration

1. **Lambda:**
   - 256 MB memory
   - 30s timeout
   - Pay per invocation

2. **DynamoDB:**
   - On-demand billing
   - No provisioned capacity
   - Pay per request

3. **API Gateway:**
   - HTTP API (cheaper than REST)
   - Pay per request

### Estimated Costs (Low Traffic)

- **Lambda:** ~$0.20 per million requests
- **DynamoDB:** ~$1.25 per million requests
- **API Gateway:** ~$1.00 per million requests

**Total:** ~$2.45 per million requests

## Best Practices Implemented

✅ **Separation of Concerns**
- Handler → Service → Validator → Database

✅ **Single Responsibility**
- Each class/function has one purpose

✅ **DRY (Don't Repeat Yourself)**
- Reusable utilities
- Base validator class

✅ **Type Safety**
- TypeScript throughout
- Strong typing

✅ **Error Handling**
- Consistent error responses
- Proper HTTP status codes

✅ **Logging**
- Structured logs
- Request tracking

✅ **Security**
- Input sanitization
- IAM least privilege
- No secrets in code

✅ **Scalability**
- Stateless design
- Serverless architecture
- On-demand resources

## Future Enhancements

1. **Caching**
   - API Gateway caching
   - DynamoDB DAX

2. **Rate Limiting**
   - API Gateway throttling
   - Per-client limits

3. **Webhooks**
   - Notify external systems
   - Event-driven architecture

4. **Analytics**
   - Form submission metrics
   - Dashboard integration

5. **Multi-tenancy**
   - Tenant isolation
   - Organization-based access

6. **File Uploads**
   - S3 integration
   - Attachment support

