
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import { notFound } from 'next/navigation';
import { Briefcase, Brain, Palette, TrendingUp, Handshake, Sparkles } from 'lucide-react';
import type { ElementType } from 'react';

const jobDetailsMap: Record<
  string,
  {
    title: string;
    icon: ElementType;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    metaDescription: string;
  }
> = {
  'software-engineer': {
    title: 'Software Engineer (Frontend & Backend)',
    icon: Brain,
    description:
      "As a Software Engineer at Grittrix, you'll be at the heart of developing and scaling our innovative AI-driven platforms...",
    responsibilities: [
      'Design, develop, and maintain scalable web applications and APIs.',
      'Collaborate with cross-functional teams including designers, product managers, and other engineers.',
      'Write clean, efficient, and well-documented code.',
      'Participate in code reviews and contribute to a high-quality codebase.',
      'Troubleshoot, debug, and upgrade existing systems.',
      'Stay updated with emerging technologies and industry best practices.',
    ],
    qualifications: [
      'Proven experience as a Software Engineer or similar role.',
      'Proficiency in JavaScript/TypeScript, Python, or Java.',
      'Experience with React, Next.js, Node.js, Django, or similar.',
      'Understanding of software lifecycle and agile methods.',
      'Good teamwork and problem-solving skills.',
    ],
    metaDescription:
      'Apply for the Software Engineer role at Grittrix. Build modern AI-powered systems for emerging markets.',
  },
  'data-scientist-ml': {
    title: 'Data Scientist / ML Engineer',
    icon: Sparkles,
    description:
      'Join Grittrix as a Data Scientist/ML Engineer to architect and implement cutting-edge machine learning models...',
    responsibilities: [
      'Develop, train, and deploy ML models.',
      'Preprocess and analyze large datasets.',
      'Define problem statements with domain experts.',
      'Evaluate and optimize models.',
    ],
    qualifications: [
      'Strong understanding of ML/AI concepts.',
      'Proficient in Python, TensorFlow/PyTorch.',
      'Experience with data analysis and visualization.',
    ],
    metaDescription:
      'Apply for the Data Scientist / ML Engineer role at Grittrix. Help build intelligent solutions that matter.',
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer',
    icon: Palette,
    description:
      'As a UI/UX Designer at Grittrix, you will craft intuitive, accessible, and engaging user experiences for our AI-powered products...',
    responsibilities: [
      'Design UI/UX for mobile/web apps.',
      'Create wireframes and mockups.',
      'Conduct usability testing.',
    ],
    qualifications: [
      'Experience in UI/UX design and tools like Figma.',
      'Strong sense of aesthetics and usability.',
      'Good communication skills.',
    ],
    metaDescription:
      'Apply for the UI/UX Designer role at Grittrix. Create impactful digital experiences for emerging markets.',
  },
  'business-development-sales': {
    title: 'Business Development & Sales',
    icon: TrendingUp,
    description:
      'Drive Grittrix growth as a business development lead. Build strategic partnerships and grow adoption of AI solutions...',
    responsibilities: [
      'Identify leads and convert them.',
      'Present solutions and build relationships.',
      'Stay updated on market trends.',
    ],
    qualifications: [
      'Experience in B2B tech sales.',
      'Great communication and persuasion skills.',
      'Understanding of emerging markets.',
    ],
    metaDescription:
      'Apply for Business Development role at Grittrix. Grow AI tech adoption and make real-world impact.',
  },
  'industry-advisor': {
    title: 'Industry Advisor (Health, Agri, Education)',
    icon: Handshake,
    description:
      "As an Industry Advisor, you'll guide our product direction with your sector expertise. Ensure our AI tools solve real problems...",
    responsibilities: [
      'Provide insights for your industry.',
      'Co-create features with engineering.',
      'Validate solutions in real-world use cases.',
    ],
    qualifications: [
      '5+ years in Health, Agri, or Education.',
      'Ability to communicate needs to engineers.',
      'Strategic mindset and collaboration.',
    ],
    metaDescription:
      'Apply for the Industry Advisor role at Grittrix. Help shape AI products with domain expertise.',
  },
};

interface GenerateMetadataProps {
  params: { jobId: string };
}

export async function generateMetadata(
  { params }: GenerateMetadataProps
): Promise<Metadata> {
  const job = jobDetailsMap[params.jobId];

  if (!job) {
    return {
      title: 'Job Not Found | Grittrix',
      description: 'The requested job does not exist.',
    };
  }

  return {
    title: `Apply for ${job.title} | Grittrix Careers`,
    description: job.metaDescription,
  };
}

interface ApplyJobPageProps {
  params: { jobId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ApplyJobPage({ params, searchParams }: ApplyJobPageProps) {
  const jobId = params?.jobId;
  if (!jobId) notFound();
  
  const job = jobDetailsMap[jobId];
  if (!job) notFound();

  const Icon = job.icon || Briefcase;

  const breadcrumbs = [
    { name: 'Careers', href: '/careers' },
    { name: `Apply for ${job.title}` },
  ];

  return (
    <>
      <PageHeader
        title={`Apply for ${job.title}`}
        description={`Join Grittrix. We're excited you're interested in the ${job.title} role!`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-card p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <Icon className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold font-headline text-primary">{job.title}</h2>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">{job.description}</p>

              <h3 className="text-xl font-semibold font-headline text-primary mb-3">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/70 text-sm">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold font-headline text-primary mb-3">Skills & Experience We Value:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/70 text-sm">
                {job.qualifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="text-sm text-foreground/70 italic">
                At Grittrix, we value diverse experiences and a passion for learning. If you believe you can contribute,
                apply even if you don’t meet every requirement.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xl sticky top-24">
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">Application Form</h2>
              <JobApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(jobDetailsMap).map((jobId) => ({ jobId }));
}
