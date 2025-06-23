
'use server';

import { z } from 'zod';
// import { firestoreAdmin } from '@/lib/firebaseAdmin'; // Temporarily disabled for diagnostics

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

  // --- DIAGNOSTIC: Bypassing Firebase to test build stability ---
  console.log("DIAGNOSTIC: Bypassing Firebase for job application. Data:", parsed.data);
  return { 
      message: 'Thank you for your application! We have received your submission and will be in touch if your profile matches our current needs.', 
      success: true 
  };
  // --- END DIAGNOSTIC ---
}
