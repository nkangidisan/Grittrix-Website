
'use server';

import { z } from 'zod';
import { firestoreAdmin } from '@/lib/firebaseAdmin';

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
    const docRef = await firestoreAdmin.collection('contactSubmissions').add({
      ...parsed.data,
      submittedAt: new Date(),
    });
    console.log('Contact form submission stored with ID:', docRef.id);
    return { message: 'Thank you! Your message has been received.', success: true };
  } catch (error) {
    console.error('Error storing contact form submission to Firebase:', error);
    return {
      message: 'An internal error occurred. Please try again later.',
      success: false,
    };
  }
}
