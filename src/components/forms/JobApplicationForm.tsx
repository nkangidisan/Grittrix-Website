
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { submitJobApplication, type JobApplicationFormState } from '@/app/careers/apply/actions';

const jobApplicationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  roleApplyingFor: z.string().min(1, { message: 'Role is required.' }),
  cvPortfolioLink: z.string().url({ message: 'Please enter a valid URL (e.g., https://linkedin.com/in/yourprofile or a Google Drive link).' }).optional().or(z.literal('')),
  coverLetter: z.string().optional(),
});

type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Submitting Application...' : 'Submit Application'}
    </Button>
  );
}

interface JobApplicationFormProps {
  jobTitle: string;
}

export function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const initialState: JobApplicationFormState = { message: '', success: false };
  const [state, formAction] = useFormState(submitJobApplication, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const { register, formState: { errors }, reset, setValue } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      roleApplyingFor: jobTitle,
      name: '',
      email: '',
      cvPortfolioLink: '',
      coverLetter: '',
    }
  });

  useEffect(() => {
    setValue('roleApplyingFor', jobTitle);
  }, [jobTitle, setValue]);
  
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Application Submitted!",
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
        <Label htmlFor="roleApplyingFor">Role Applying For</Label>
        <Input
          id="roleApplyingFor"
          type="text"
          {...register('roleApplyingFor')}
          className="mt-1 bg-input/50"
          readOnly 
        />
        {errors.roleApplyingFor && <p className="mt-1 text-sm text-destructive">{errors.roleApplyingFor.message}</p>}
      </div>
      
      <div>
        <Label htmlFor="cvPortfolioLink">Link to CV/Portfolio (e.g., LinkedIn, Google Drive, Personal Site)</Label>
        <Input
          id="cvPortfolioLink"
          type="url"
          placeholder="https://example.com/your-cv"
          {...register('cvPortfolioLink')}
          className="mt-1 bg-input/50"
          aria-invalid={errors.cvPortfolioLink ? "true" : "false"}
        />
        {errors.cvPortfolioLink && <p className="mt-1 text-sm text-destructive">{errors.cvPortfolioLink.message}</p>}
      </div>

      <div>
        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
        <Textarea
          id="coverLetter"
          rows={6}
          placeholder="Tell us why you're a great fit for Grittrix and this role..."
          {...register('coverLetter')}
          className="mt-1 bg-input/50"
        />
        {errors.coverLetter && <p className="mt-1 text-sm text-destructive">{errors.coverLetter.message}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
