# Frontend API Integration

## Overview

The frontend has been updated to use the custom domain `api.microkraft.ai` for all backend API calls.

## Configuration

### API Base URL

The API base URL is configured in `src/lib/api.ts`:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.microkraft.ai';
```

### Environment Variables

Create a `.env` file in the root directory (or use `.env.local` for local development):

```env
# Backend API URL (custom domain)
VITE_API_URL=https://api.microkraft.ai
```

**Note:** If `VITE_API_URL` is not set, it defaults to `https://api.microkraft.ai`.

## API Service

The API service is located at `src/lib/api.ts` and provides:

### Available Functions

1. **submitContactForm** - Submit contact form
2. **submitEnquiryForm** - Submit enquiry form
3. **submitFeedbackForm** - Submit feedback form
4. **submitAdmissionForm** - Submit admission form
5. **submitFranchiseForm** - Submit franchise form
6. **getSubmission** - Get a form submission by ID
7. **listSubmissions** - List form submissions by type

### Usage Example

```typescript
import { submitContactForm } from '../lib/api';

const handleSubmit = async (formData) => {
  try {
    const response = await submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
    
    if (response.success) {
      console.log('Form submitted successfully:', response.data);
    }
  } catch (error) {
    console.error('Submission failed:', error);
  }
};
```

## Updated Components

### Consultation Page

The `src/pages/Consultation.tsx` page has been updated to:

- Submit forms to the backend API
- Show loading states during submission
- Display success/error messages
- Reset form after successful submission

## API Endpoints

All endpoints use the custom domain:

- `POST https://api.microkraft.ai/forms/contact`
- `POST https://api.microkraft.ai/forms/enquiry`
- `POST https://api.microkraft.ai/forms/feedback`
- `POST https://api.microkraft.ai/forms/admission`
- `POST https://api.microkraft.ai/forms/franchise`
- `GET https://api.microkraft.ai/forms/{formType}/{id}`
- `GET https://api.microkraft.ai/forms/{formType}`

## Testing

### Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. The frontend will use `https://api.microkraft.ai` by default

3. To use a different endpoint, create `.env.local`:
   ```env
   VITE_API_URL=https://pz6tv2ie0c.execute-api.ap-south-1.amazonaws.com
   ```

### Production

The production build will use the custom domain `https://api.microkraft.ai` automatically.

## Error Handling

The API service includes error handling:

- Network errors are caught and displayed
- Validation errors from the backend are shown to users
- Success messages confirm successful submissions

## CORS

The backend API Gateway is configured with CORS to allow requests from:
- `microkraft.ai`
- `www.microkraft.ai`
- Any origin (for development)

## Next Steps

To add form submissions to other pages:

1. Import the appropriate function from `src/lib/api.ts`
2. Add form state and submission handler
3. Add loading and error states
4. Call the API function on form submit

Example:

```typescript
import { submitEnquiryForm } from '../lib/api';

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await submitEnquiryForm(formData);
    // Show success message
  } catch (error) {
    // Show error message
  } finally {
    setIsSubmitting(false);
  }
};
```

