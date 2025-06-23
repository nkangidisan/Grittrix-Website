
'use server';

import { z } from 'zod';
// import { firestoreAdmin } from '@/lib/firebaseAdmin'; // Temporarily disabled for diagnostics

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

  // --- DIAGNOSTIC: Bypassing Firebase to test build stability ---
  console.log("DIAGNOSTIC: Bypassing Firebase for contact form. Data:", parsed.data);
  return { message: 'Thank you! Your message has been received.', success: true };
  // --- END DIAGNOSTIC ---
}
