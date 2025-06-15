
'use server';

import { z } from 'zod';
import { firestoreAdmin } from '@/lib/firebaseAdmin';

const jobApplicationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  roleApplyingFor: z.string().min(1, { message: 'Role is required.' }),
  cvPortfolioLink: z.string().url({ message: 'Please enter a valid URL for your CV/Portfolio.' }).optional().or(z.literal('')),
  coverLetter: z.string().optional(),
});

export type JobApplicationFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitJobApplication(
  prevState: JobApplicationFormState,
  data: FormData
): Promise<JobApplicationFormState> {
  const formData = Object.fromEntries(data);
  const parsed = jobApplicationSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: 'Invalid form data. Please check the fields below.',
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  try {
    const applicationData = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      status: 'new', // Initial status
    };

    await firestoreAdmin.collection('jobApplications').add(applicationData);

    return { 
        message: 'Thank you for your application! We have received your submission and will be in touch if your profile matches our current needs.', 
        success: true 
    };
  } catch (error) {
    console.error('Error submitting job application:', error);
    // Avoid exposing detailed error messages to the client
    let errorMessage = 'An unexpected error occurred while submitting your application. Please try again later or email us at careers@grittrix.com.';
    if (error instanceof Error && error.message.includes("Could not load the default credentials")) {
        errorMessage = "Server configuration error: Could not connect to the database. Please contact support or email careers@grittrix.com.";
    } else if (error instanceof Error && error.message.includes("firestoreAdmin.collection is not a function")) {
        errorMessage = "Server configuration error: Database service is not available. Please contact support or email careers@grittrix.com.";
    }
    
    return {
      message: errorMessage,
      success: false,
    };
  }
}

    