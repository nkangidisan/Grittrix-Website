
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import type { JobListing } from '@/lib/types';
import { notFound } from 'next/navigation';
import { AlertTriangle } from 'lucide-react';

// Data normally fetched or imported from a central source
// Copied here for simplicity to make this page buildable.
const jobListings: JobListing[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer (Frontend & Backend)',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for skilled software engineers to build and scale our AI-driven platforms. Expertise in modern web technologies (React, Next.js, Node.js, Python) is highly valued. Show us what you can build!',
  },
  {
    id: 'data-scientist-ml',
    title: 'Data Scientist / ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join us to develop innovative machine learning models and data solutions that solve real-world problems in our target industries. Strong analytical skills and experience with ML frameworks are key.',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create intuitive, accessible, and visually stunning user experiences for our diverse range of AI products. A strong portfolio demonstrating user-centric design principles is essential.',
  },
  {
    id: 'business-development-sales',
    title: 'Business Development & Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive Grittrix\'s growth by identifying new opportunities, building partnerships, and expanding our client base in emerging markets. Passion for technology and excellent communication skills required.',
  },
  {
    id: 'industry-advisor',
    title: 'Industry Advisor (Health, Agri, Education)',
    location: 'Remote',
    type: 'Contract',
    description: 'Leverage your deep industry expertise to guide our product development and strategy in Healthcare, Agriculture, or Education. Help us tailor our AI solutions for maximum impact.',
  },
];


export async function generateMetadata({
  params,
}: {
  params: { jobId: string };
}): Promise<Metadata> {
  const jobIdParam = params?.jobId;
  if (!jobIdParam) {
    return {
      title: 'Job Application | Grittrix AI Solutions',
      description: 'Apply for a career at Grittrix AI Solutions.',
    };
  }

  const job = jobListings.find(j => j.id.toLowerCase() === jobIdParam.toLowerCase());

  if (!job) {
    return {
      title: 'Job Not Found | Grittrix AI Solutions',
      description: `The job opening with ID "${jobIdParam}" does not exist.`,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Apply for ${job.title} | Grittrix Careers`,
    description: `Submit your application for the ${job.title} position at Grittrix AI Solutions. ${job.description.substring(0, 120)}...`,
    robots: { index: false, follow: false }, // Typically job application pages are not indexed
  };
}

export async function generateStaticParams() {
  return jobListings.map((job) => ({
    jobId: job.id,
  }));
}

interface ApplyJobPageProps {
  params: { jobId: string };
}

export default function ApplyJobPage({ params }: ApplyJobPageProps) {
  const { jobId } = params;

  if (!jobId) {
    notFound(); // Should be caught by generateStaticParams, but good practice
    return null;
  }

  const job = jobListings.find(j => j.id.toLowerCase() === jobId.toLowerCase());

  if (!job) {
    notFound();
    return null;
  }

  const breadcrumbs = [
    { name: 'Careers', href: '/careers' },
    { name: job.title, href: `/careers#${job.id}` }, // Link back to the job on careers page
    { name: 'Apply' }
  ];

  return (
    <>
      <PageHeader
        title={`Apply: ${job.title}`}
        description={`Submit your application for the ${job.location}, ${job.type} position. We're excited to hear from you!`}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold font-headline text-primary mb-2">Job Details</h2>
            <p className="text-foreground/80 mb-1"><strong className="text-foreground">Role:</strong> {job.title}</p>
            <p className="text-foreground/80 mb-1"><strong className="text-foreground">Location:</strong> {job.location}</p>
            <p className="text-foreground/80 mb-1"><strong className="text-foreground">Type:</strong> {job.type}</p>
            <p className="text-sm text-foreground/70 mt-2 mb-6">{job.description}</p>
            
            <hr className="my-6 border-border" />

            <h2 className="text-2xl font-bold font-headline text-primary mb-6">Application Form</h2>
            <JobApplicationForm jobTitle={job.title} />
          </div>
        </div>
      </section>
    </>
  );
}
