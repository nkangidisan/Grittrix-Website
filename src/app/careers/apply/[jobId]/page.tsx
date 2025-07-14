
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import { notFound } from 'next/navigation';
import type { JobListing } from '@/lib/types';
import { Suspense } from 'react';

const jobListings: JobListing[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer (Frontend & Backend)',
    location: 'Remote',
    type: 'Full-time',
    description:
      'We are looking for skilled software engineers to build and scale our AI-driven platforms. Expertise in modern web technologies (React, Next.js, Node.js, Python) is highly valued. Show us what you can build!',
    applyUrl: '/careers/apply/software-engineer',
  },
  {
    id: 'data-scientist-ml',
    title: 'Data Scientist / ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Join us to develop innovative machine learning models and data solutions that solve real-world problems in our target industries. Strong analytical skills and experience with ML frameworks are key.',
    applyUrl: '/careers/apply/data-scientist-ml',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Create intuitive, accessible, and visually stunning user experiences for our diverse range of AI products. A strong portfolio demonstrating user-centric design principles is essential.',
    applyUrl: '/careers/apply/ui-ux-designer',
  },
  {
    id: 'business-development-sales',
    title: 'Business Development & Sales',
    location: 'Remote',
    type: 'Full-time',
    description:
      "Drive Grittrix's growth by identifying new opportunities, building partnerships, and expanding our client base in emerging markets. Passion for technology and excellent communication skills required.",
    applyUrl: '/careers/apply/business-development-sales',
  },
  {
    id: 'industry-advisor',
    title: 'Industry Advisor (Health, Agri, Education)',
    location: 'Remote',
    type: 'Contract',
    description:
      'Leverage your deep industry expertise to guide our product development and strategy in Healthcare, Agriculture, or Education. Help us tailor our AI solutions for maximum impact.',
    applyUrl: '/careers/apply/industry-advisor',
  },
];

interface ApplyJobPageProps {
  params: { jobId: string };
}

export async function generateMetadata({ params }: ApplyJobPageProps): Promise<Metadata> {
  const jobId = params?.jobId;
  const job = jobListings.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: 'Job Not Found | Grittrix AI Solutions',
      description: 'This job listing does not exist.',
    };
  }

  return {
    title: `Apply for ${job.title} | Grittrix Careers`,
    description: job.description,
  };
}

export async function generateStaticParams() {
  return jobListings.map((job) => ({
    jobId: job.id,
  }));
}

export default function ApplyJobPage({ params }: ApplyJobPageProps) {
  const job = jobListings.find((j) => j.id === params.jobId);
  if (!job) notFound();

  const breadcrumbs = [
    { name: 'Careers', href: '/careers' },
    { name: 'Apply' },
  ];

  return (
    <>
      <PageHeader
        title={`Apply for: ${job.title}`}
        description={`Submit your application for the ${job.type} ${job.title} position based in ${job.location}.`}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-card p-8 rounded-lg shadow-xl mb-8">
            <h2 className="text-2xl font-bold font-headline text-primary mb-2">Job Details</h2>
            <p className="text-foreground/80 mb-1"><strong>Role:</strong> {job.title}</p>
            <p className="text-foreground/80 mb-1"><strong>Location:</strong> {job.location}</p>
            <p className="text-foreground/80 mb-1"><strong>Type:</strong> {job.type}</p>
            <p className="text-sm text-foreground/70 mt-2 mb-6">{job.description}</p>
            <hr className="my-6 border-border" />
            <h3 className="text-xl font-bold font-headline text-primary mb-2">Our Commitment at Grittrix</h3>
            <p className="text-sm text-foreground/70 mb-4">
              At Grittrix, we value talent, passion, and a drive to make an impact. We believe in skills over formal degrees and foster a remote-first, inclusive environment.
            </p>
            <ul className="space-y-1 text-sm text-foreground/70 mb-6">
              <li>✓ Meaningful Impact</li>
              <li>✓ Innovation Culture</li>
              <li>✓ Remote-First</li>
              <li>✓ Skills Over Degrees</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold font-headline text-primary mb-6">Application Form</h2>
            <Suspense fallback={<div className="text-center text-foreground/80">Loading form...</div>}>
              <JobApplicationForm jobTitle={job.title} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
