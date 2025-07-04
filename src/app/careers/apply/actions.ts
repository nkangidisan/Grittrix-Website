
'use server';

import { z } from 'zod';
import { firestoreAdmin } from '@/lib/firebaseAdmin';

const jobApplicationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  roleApplyingFor: z.string().min(1, { message: 'Role is required.' }),
  cvPortfolioLink: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
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
    const docRef = await firestoreAdmin.collection('jobApplications').add({
      ...parsed.data,
      submittedAt: new Date(),
    });
    console.log('Job application stored with ID:', docRef.id);
    return { 
        message: 'Thank you! Your application has been submitted successfully. We will be in touch if your profile is a match.', 
        success: true 
    };
  } catch (error) {
    console.error('Error storing job application to Firebase:', error);
    return {
      message: 'An internal server error occurred while submitting your application. Please try again later.',
      success: false,
    };
  }
}
