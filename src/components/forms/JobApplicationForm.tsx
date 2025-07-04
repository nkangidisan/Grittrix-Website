
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

interface JobApplicationFormProps {
  jobTitle: string;
}

export function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const { toast } = useToast();
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cvPortfolioLink, setCvPortfolioLink] = React.useState('');
  const [coverLetter, setCoverLetter] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill out your name and email.",
        variant: "destructive",
      });
      return;
    }
    
    const mailtoSubject = `Job Application: ${jobTitle}`;
    const mailtoBody = `
      Dear Grittrix Hiring Team,

      Please consider my application for the role of ${jobTitle}.

      Name: ${name}
      Email: ${email}
      CV/Portfolio Link: ${cvPortfolioLink || 'Not provided'}

      --- Cover Letter ---
      ${coverLetter || 'Not provided'}
      --- End Cover Letter ---

      Thank you for your time and consideration.

      Sincerely,
      ${name}
    `;

    const mailtoLink = `mailto:careers@grittrix.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody.trim())}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 bg-input/50"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 bg-input/50"
          required
        />
      </div>

      <div>
        <Label htmlFor="roleApplyingFor">Role Applying For</Label>
        <Input
          id="roleApplyingFor"
          type="text"
          value={jobTitle}
          className="mt-1 bg-input/50"
          readOnly 
        />
      </div>
      
      <div>
        <Label htmlFor="cvPortfolioLink">Link to CV/Portfolio (e.g., LinkedIn, Google Drive, Personal Site)</Label>
        <Input
          id="cvPortfolioLink"
          type="url"
          placeholder="https://example.com/your-cv"
          value={cvPortfolioLink}
          onChange={(e) => setCvPortfolioLink(e.target.value)}
          className="mt-1 bg-input/50"
        />
      </div>

      <div>
        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
        <Textarea
          id="coverLetter"
          rows={6}
          placeholder="Tell us why you're a great fit for Grittrix and this role..."
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          className="mt-1 bg-input/50"
        />
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Submit Application via Email
      </Button>
    </form>
  );
}
