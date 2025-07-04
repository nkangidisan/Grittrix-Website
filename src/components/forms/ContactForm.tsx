
'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState(searchParams.get('subject') || '');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    const mailtoSubject = subject || `Contact Form Submission from ${name}`;
    const mailtoBody = `
      Name: ${name}
      Email: ${email}
      -------------------
      Message:
      ${message}
    `;

    const mailtoLink = `mailto:hello@grittrix.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody.trim())}`;
    
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
        <Label htmlFor="subject">Subject (Optional)</Label>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 bg-input/50"
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 bg-input/50"
          required
        />
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Send Message via Email
      </Button>
    </form>
  );
}
