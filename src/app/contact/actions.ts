'use server';

import { z } from 'zod';
import { firestoreAdmin } from '@/lib/firebaseAdmin'; // Use firebaseAdmin

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: 'Invalid form data.',
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  try {
    const contactRequest = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      status: 'new', // e.g., new, pending, resolved
    };

    // This line might cause issues if firestoreAdmin is not initialized due to missing env vars.
    // Ensure FIREBASE_SERVICE_ACCOUNT_KEY is set in your environment for this to work.
    // Or GOOGLE_APPLICATION_CREDENTIALS for local/other GCP environments.
    await firestoreAdmin.collection('contactRequests').add(contactRequest);

    return { message: 'Thank you for your message! We will get back to you soon.', success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Avoid exposing detailed error messages to the client
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error instanceof Error && error.message.includes("Could not load the default credentials")) {
        errorMessage = "Server configuration error: Could not connect to the database. Please contact support.";
    } else if (error instanceof Error && error.message.includes("firestoreAdmin.collection is not a function")) {
        errorMessage = "Server configuration error: Database service is not available. Please contact support.";
    }
    
    return {
      message: errorMessage,
      success: false,
    };
  }
}
