
import * as React from 'react';
import type { Metadata } from 'next';
// import { PageHeader } from '@/components/PageHeader'; // Temporarily remove for simplification
// import { JobApplicationForm } from '@/components/forms/JobApplicationForm'; // Temporarily remove
import type { JobListing } from '@/lib/types';
import { notFound } from 'next/navigation';
// import { AlertTriangle } from 'lucide-react'; // Temporarily remove

// Data normally fetched or imported from a central source
// Copied here for simplicity for generateMetadata and generateStaticParams
const jobListings: JobListing[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer (Frontend & Backend)',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for skilled software engineers to build and scale our AI-driven platforms. Expertise in modern web technologies (React, Next.js, Node.js, Python) is highly valued. Show us what you can build!',
    applyUrl: '/careers/apply/software-engineer'
  },
  {
    id: 'data-scientist-ml',
    title: 'Data Scientist / ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join us to develop innovative machine learning models and data solutions that solve real-world problems in our target industries. Strong analytical skills and experience with ML frameworks are key.',
    applyUrl: '/careers/apply/data-scientist-ml'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create intuitive, accessible, and visually stunning user experiences for our diverse range of AI products. A strong portfolio demonstrating user-centric design principles is essential.',
    applyUrl: '/careers/apply/ui-ux-designer'
  },
  {
    id: 'business-development-sales',
    title: 'Business Development & Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive Grittrix\'s growth by identifying new opportunities, building partnerships, and expanding our client base in emerging markets. Passion for technology and excellent communication skills required.',
    applyUrl: '/careers/apply/business-development-sales'
  },
  {
    id: 'industry-advisor',
    title: 'Industry Advisor (Health, Agri, Education)',
    location: 'Remote',
    type: 'Contract',
    description: 'Leverage your deep industry expertise to guide our product development and strategy in Healthcare, Agriculture, or Education. Help us tailor our AI solutions for maximum impact.',
    applyUrl: '/careers/apply/industry-advisor'
  },
];


export async function generateMetadata(
  { params }: { params: { jobId: string } }
): Promise<Metadata> {
  const jobIdParam = params?.jobId;
  if (!jobIdParam) {
    return {
      title: 'Job Application | Grittrix AI Solutions',
      description: 'Apply for a career at Grittrix AI Solutions.',
      robots: { index: false, follow: false },
    };
  }

  const job = jobListings.find(j => j.id.toLowerCase() === jobIdParam.toLowerCase());

  if (!job) {
    return {
      title: 'Job Not Found | Grittrix AI Solutions',
      description: `The job opening with ID "${jobIdParam}" could not be found.`,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Apply for ${job.title} | Grittrix Careers`,
    description: `Submit your application for the ${job.title} position at Grittrix AI Solutions. ${job.description.substring(0, 120)}...`,
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  return jobListings.map((job) => ({
    jobId: job.id.toLowerCase(),
  }));
}

export default function ApplyJobPage(props: any) {
  const jobId = props?.params?.jobId as string | undefined;

  if (!jobId) {
    notFound();
    return null; // Should be unreachable due to notFound()
  }

  const job = jobListings.find(j => j.id.toLowerCase() === jobId.toLowerCase());

  if (!job) {
    notFound();
    return null; // Should be unreachable due to notFound()
  }

  // Simplified content for diagnosis
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-4">Apply for: {job.title}</h1>
      <p className="text-lg text-foreground/80 mb-2">Location: {job.location}</p>
      <p className="text-lg text-foreground/80 mb-6">Type: {job.type}</p>
      
      <div className="bg-card p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold font-headline text-primary mb-2">Job Details</h2>
        <p className="text-foreground/80 mb-1"><strong className="text-foreground">Role:</strong> {job.title}</p>
        <p className="text-foreground/80 mb-1"><strong className="text-foreground">Location:</strong> {job.location}</p>
        <p className="text-foreground/80 mb-1"><strong className="text-foreground">Type:</strong> {job.type}</p>
        <p className="text-sm text-foreground/70 mt-2 mb-6">{job.description}</p>
        
        <hr className="my-6 border-border" />

        <h2 className="text-2xl font-bold font-headline text-primary mb-6">Application Form (Simplified)</h2>
        <p className="text-foreground/80">
          The job application form (`JobApplicationForm` component) would normally be displayed here. 
          This simplified view is for diagnosing server errors.
        </p>
        {/* <JobApplicationForm jobTitle={job.title} /> */}
      </div>
    </div>
  );
}
