
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useToast } from "@/hooks/use-toast";


const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';


  const { register, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: initialSubject,
      name: '',
      email: '',
      message: '',
    }
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
          variant: "default",
        });
        reset();
        formRef.current?.reset();
      } else {
        toast({
          title: "Submission Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1 bg-input/50"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1 bg-input/50"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="subject">Subject (Optional)</Label>
        <Input
          id="subject"
          type="text"
          {...register('subject')}
          defaultValue={initialSubject}
          className="mt-1 bg-input/50"
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...register('message')}
          className="mt-1 bg-input/50"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
