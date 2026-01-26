# API Request Examples

## 1. Create Admission Form Submission

**Endpoint:** `POST /forms/admission`

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "dateOfBirth": "2000-01-15",
  "course": "Computer Science",
  "previousEducation": "High School Diploma",
  "address": "123 Main St, City, State 12345",
  "additionalInfo": "Interested in AI and Machine Learning"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "formType": "admission",
    "data": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "dateOfBirth": "2000-01-15",
      "course": "Computer Science",
      "previousEducation": "High School Diploma",
      "address": "123 Main St, City, State 12345",
      "additionalInfo": "Interested in AI and Machine Learning"
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 2. Create Enquiry Form Submission

**Endpoint:** `POST /forms/enquiry`

**Request:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "+1987654321",
  "subject": "Course Information",
  "message": "I would like to know more about the Computer Science program and admission requirements.",
  "preferredContactMethod": "email"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "660e8400-e29b-41d4-a716-446655440001",
    "formType": "enquiry",
    "data": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "+1987654321",
      "subject": "Course Information",
      "message": "I would like to know more about the Computer Science program and admission requirements.",
      "preferredContactMethod": "email"
    },
    "createdAt": "2024-01-15T10:35:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  },
  "timestamp": "2024-01-15T10:35:00.000Z"
}
```

---

## 3. Create Contact Form Submission

**Endpoint:** `POST /forms/contact`

**Request:**
```json
{
  "name": "Bob Johnson",
  "email": "bob.johnson@example.com",
  "phone": "+1555123456",
  "company": "Tech Corp",
  "message": "I'm interested in learning about your services for our company.",
  "reason": "Business Partnership"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "formType": "contact",
    "data": {
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "phone": "+1555123456",
      "company": "Tech Corp",
      "message": "I'm interested in learning about your services for our company.",
      "reason": "Business Partnership"
    },
    "createdAt": "2024-01-15T10:40:00.000Z",
    "updatedAt": "2024-01-15T10:40:00.000Z"
  },
  "timestamp": "2024-01-15T10:40:00.000Z"
}
```

---

## 4. Create Feedback Form Submission

**Endpoint:** `POST /forms/feedback`

**Request:**
```json
{
  "name": "Alice Williams",
  "email": "alice.williams@example.com",
  "rating": 5,
  "category": "Service Quality",
  "message": "Excellent service! The staff was very helpful and responsive.",
  "allowContact": true
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "880e8400-e29b-41d4-a716-446655440003",
    "formType": "feedback",
    "data": {
      "name": "Alice Williams",
      "email": "alice.williams@example.com",
      "rating": 5,
      "category": "Service Quality",
      "message": "Excellent service! The staff was very helpful and responsive.",
      "allowContact": true
    },
    "createdAt": "2024-01-15T10:45:00.000Z",
    "updatedAt": "2024-01-15T10:45:00.000Z"
  },
  "timestamp": "2024-01-15T10:45:00.000Z"
}
```

---

## 5. Create Franchise Form Submission

**Endpoint:** `POST /forms/franchise`

**Request:**
```json
{
  "name": "Charlie Brown",
  "email": "charlie.brown@example.com",
  "phone": "+1444555666",
  "company": "Brown Enterprises",
  "location": "New York, NY",
  "investmentRange": "$100,000 - $500,000",
  "experience": "10 years in retail business",
  "message": "Interested in opening a franchise location in New York."
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Form submission created successfully",
  "data": {
    "id": "990e8400-e29b-41d4-a716-446655440004",
    "formType": "franchise",
    "data": {
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "phone": "+1444555666",
      "company": "Brown Enterprises",
      "location": "New York, NY",
      "investmentRange": "$100,000 - $500,000",
      "experience": "10 years in retail business",
      "message": "Interested in opening a franchise location in New York."
    },
    "createdAt": "2024-01-15T10:50:00.000Z",
    "updatedAt": "2024-01-15T10:50:00.000Z"
  },
  "timestamp": "2024-01-15T10:50:00.000Z"
}
```

---

## 6. Get Single Submission

**Endpoint:** `GET /forms/admission/{id}`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Submission retrieved successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "formType": "admission",
    "data": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "dateOfBirth": "2000-01-15",
      "course": "Computer Science",
      "previousEducation": "High School Diploma",
      "address": "123 Main St, City, State 12345",
      "additionalInfo": "Interested in AI and Machine Learning"
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "timestamp": "2024-01-15T11:00:00.000Z"
}
```

---

## 7. List Submissions by Form Type

**Endpoint:** `GET /forms/admission?limit=20`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Submissions retrieved successfully",
  "data": {
    "items": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "formType": "admission",
        "data": { ... },
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2024-01-15T10:30:00.000Z"
      },
      {
        "id": "551e8400-e29b-41d4-a716-446655440001",
        "formType": "admission",
        "data": { ... },
        "createdAt": "2024-01-15T09:30:00.000Z",
        "updatedAt": "2024-01-15T09:30:00.000Z"
      }
    ],
    "count": 2,
    "pagination": {
      "lastEvaluatedKey": "eyJpZCI6IjU1MWU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMSIsImZvcm1UeXBlIjoiYWRtaXNzaW9uIn0%3D"
    }
  },
  "timestamp": "2024-01-15T11:05:00.000Z"
}
```

**With Pagination:**
**Endpoint:** `GET /forms/admission?limit=20&lastEvaluatedKey=...`

---

## 8. Validation Error Response

**Request (Missing Required Field):**
```json
{
  "firstName": "John",
  "email": "invalid-email"
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed: Last name is required, Email must be a valid email address",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": [
      "Last name is required",
      "Email must be a valid email address"
    ]
  },
  "timestamp": "2024-01-15T11:10:00.000Z"
}
```

---

## 9. Not Found Response

**Endpoint:** `GET /forms/admission/non-existent-id`

**Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Form submission not found",
  "error": {
    "code": "NOT_FOUND"
  },
  "timestamp": "2024-01-15T11:15:00.000Z"
}
```

---

## cURL Examples

### Create Admission Form
```bash
curl -X POST https://your-api.execute-api.us-east-1.amazonaws.com/forms/admission \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "course": "Computer Science"
  }'
```

### Get Submission
```bash
curl -X GET https://your-api.execute-api.us-east-1.amazonaws.com/forms/admission/550e8400-e29b-41d4-a716-446655440000
```

### List Submissions
```bash
curl -X GET "https://your-api.execute-api.us-east-1.amazonaws.com/forms/admission?limit=20"
```

