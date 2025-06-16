
import type { Metadata, ResolvingMetadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import { notFound } from 'next/navigation';
import { Briefcase, Brain, Palette, TrendingUp, Handshake, Sparkles } from 'lucide-react';

type Props = {
  params: { jobId: string };
};

const jobDetailsMap: Record<string, { title: string; icon: React.ElementType; description: string; responsibilities: string[]; qualifications: string[]; metaDescription: string; }> = {
  'software-engineer': { 
    title: 'Software Engineer (Frontend & Backend)', 
    icon: Brain,
    description: 'As a Software Engineer at Grittrix, you\'ll be at the heart of developing and scaling our innovative AI-driven platforms. You will work on diverse projects, tackling challenges in both frontend and backend systems to deliver robust, high-performance solutions for emerging markets.',
    responsibilities: [
      'Design, develop, and maintain scalable web applications and APIs.',
      'Collaborate with cross-functional teams including designers, product managers, and other engineers.',
      'Write clean, efficient, and well-documented code.',
      'Participate in code reviews and contribute to a high-quality codebase.',
      'Troubleshoot, debug, and upgrade existing systems.',
      'Stay updated with emerging technologies and industry best practices.'
    ],
    qualifications: [
      'Proven experience as a Software Engineer or similar role.',
      'Proficiency in languages like JavaScript/TypeScript, Python, or Java.',
      'Experience with frontend frameworks (e.g., React, Next.js, Vue, Angular) and backend technologies (e.g., Node.js, Django, Spring Boot).',
      'Familiarity with database technologies (SQL, NoSQL).',
      'Understanding of software development lifecycle and agile methodologies.',
      'Strong problem-solving skills and ability to learn quickly.',
      'Excellent communication and teamwork skills. Portfolio of projects is a plus.'
    ],
    metaDescription: 'Apply for the Software Engineer role at Grittrix. Develop innovative AI-driven platforms for emerging markets using modern web technologies.'
  },
  'data-scientist-ml': { 
    title: 'Data Scientist / ML Engineer', 
    icon: Sparkles,
    description: 'Join Grittrix as a Data Scientist/ML Engineer to architect and implement cutting-edge machine learning models. You will translate complex datasets into actionable insights, driving innovation across healthcare, agriculture, retail, and education in emerging markets.',
    responsibilities: [
      'Develop, train, and deploy machine learning models for various applications.',
      'Perform data collection, preprocessing, and exploratory data analysis.',
      'Collaborate with domain experts to understand requirements and define solutions.',
      'Evaluate and optimize model performance.',
      'Communicate findings and insights to technical and non-technical stakeholders.',
      'Stay current with advancements in AI/ML research and techniques.'
    ],
    qualifications: [
      'Solid understanding of machine learning algorithms, statistical modeling, and data mining techniques.',
      'Proficiency in Python and relevant ML libraries (e.g., TensorFlow, PyTorch, scikit-learn).',
      'Experience with data visualization tools and techniques.',
      'Ability to work with large and complex datasets.',
      'Strong analytical and problem-solving abilities.',
      'Experience in deploying ML models to production is a plus.',
      'Passion for solving real-world problems with AI.'
    ],
    metaDescription: 'Apply for the Data Scientist / ML Engineer role at Grittrix. Architect and implement machine learning models to drive innovation in key sectors.'
  },
  'ui-ux-designer': { 
    title: 'UI/UX Designer', 
    icon: Palette,
    description: 'As a UI/UX Designer at Grittrix, you will craft intuitive, accessible, and engaging user experiences for our AI-powered products. Your work will directly impact how users in emerging markets interact with transformative technology.',
    responsibilities: [
      'Design user interfaces and user experiences for web and mobile applications.',
      'Create wireframes, prototypes, user flows, and mockups.',
      'Conduct user research and usability testing to inform design decisions.',
      'Collaborate with product managers and engineers to deliver user-centric solutions.',
      'Maintain and evolve design systems and style guides.',
      'Advocate for user needs and best practices in UI/UX design.'
    ],
    qualifications: [
      'Proven experience as a UI/UX Designer or similar role with a strong portfolio.',
      'Proficiency in design tools (e.g., Figma, Sketch, Adobe XD).',
      'Understanding of user-centered design principles and methodologies.',
      'Experience with responsive design and mobile-first approaches.',
      'Ability to create wireframes, prototypes, and high-fidelity mockups.',
      'Excellent visual design skills with sensitivity to user-system interaction.',
      'Good communication skills to articulate design decisions.'
    ],
    metaDescription: 'Apply for the UI/UX Designer role at Grittrix. Craft intuitive and engaging user experiences for AI-powered products in emerging markets.'
  },
  'business-development-sales': { 
    title: 'Business Development & Sales', 
    icon: TrendingUp,
    description: 'Drive the growth of Grittrix in emerging markets as a Business Development & Sales professional. You will build strategic partnerships, identify new market opportunities, and champion our AI solutions to a diverse client base.',
    responsibilities: [
      'Identify and pursue new business opportunities and partnerships.',
      'Develop and execute sales strategies to achieve company targets.',
      'Build and maintain strong relationships with clients and stakeholders.',
      'Understand client needs and articulate the value of Grittrix solutions.',
      'Prepare and deliver compelling sales presentations and proposals.',
      'Stay informed about market trends and competitor activities in emerging markets.'
    ],
    qualifications: [
      'Proven track record in business development, sales, or a similar role, preferably in tech or SaaS.',
      'Excellent communication, negotiation, and interpersonal skills.',
      'Ability to understand complex technical solutions and articulate their benefits.',
      'Experience working in or with emerging markets is highly desirable.',
      'Self-motivated, results-oriented, and able to work independently.',
      'Understanding of AI/ML concepts is a plus.'
    ],
    metaDescription: 'Apply for the Business Development & Sales role at Grittrix. Drive growth, build partnerships, and champion AI solutions in emerging markets.'
  },
  'industry-advisor': { 
    title: 'Industry Advisor (Health, Agri, Education)', 
    icon: Handshake,
    description: 'As an Industry Advisor, you will provide crucial domain expertise to shape Grittrix\'s AI solutions for maximum impact in Healthcare, Agriculture, or Education. Your insights will ensure our technology addresses the specific needs of these vital sectors in emerging markets.',
    responsibilities: [
      'Provide expert advice and insights specific to your industry (Health, Agri, or Education).',
      'Collaborate with product and engineering teams to define solution requirements and features.',
      'Help tailor AI models and applications to address industry-specific challenges.',
      'Identify emerging trends and opportunities within your sector.',
      'Review and validate the effectiveness of Grittrix solutions in real-world scenarios.',
      'Contribute to thought leadership and content creation related to your industry.'
    ],
    qualifications: [
      'Extensive experience and recognized expertise in Healthcare, Agriculture, or Education sectors.',
      'Deep understanding of the challenges and opportunities within your industry, particularly in emerging markets.',
      'Ability to translate industry needs into technical requirements.',
      'Strong analytical and strategic thinking skills.',
      'Excellent communication and presentation abilities.',
      'Passion for leveraging technology to drive positive change in your sector.'
    ],
    metaDescription: 'Apply for the Industry Advisor role at Grittrix. Provide domain expertise to shape AI solutions for Healthcare, Agriculture, or Education.'
  },
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const jobId = params.jobId;
  const jobInfo = jobDetailsMap[jobId];

  if (!jobInfo) {
    return {
      title: 'Job Not Found | Grittrix AI Solutions',
      description: 'The job listing you are looking for could not be found.',
    };
  }

  return {
    title: `Apply for ${jobInfo.title} | Grittrix Careers`,
    description: jobInfo.metaDescription,
  };
}


export default function ApplyJobPage({ params }: { params: { jobId: string } }) {
  const jobInfo = jobDetailsMap[params.jobId];

  if (!jobInfo) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Careers', href: '/careers' },
    { name: `Apply for ${jobInfo.title}` }
  ];

  const PageIcon = jobInfo.icon || Briefcase;

  return (
    <>
      <PageHeader
        title={`Apply for ${jobInfo.title}`}
        description={`Join Grittrix: We're excited you're interested in the ${jobInfo.title} role! Read more about what this role entails at Grittrix and submit your application below.`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-card p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-6">
                    <PageIcon className="h-10 w-10 text-primary mr-4" />
                    <h2 className="text-2xl font-bold font-headline text-primary">{jobInfo.title} at Grittrix</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                    {jobInfo.description}
                </p>
                
                <h3 className="text-xl font-semibold font-headline text-primary mb-3">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/70 text-sm">
                    {jobInfo.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                <h3 className="text-xl font-semibold font-headline text-primary mb-3">Skills & Experience We Value:</h3>
                 <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/70 text-sm">
                    {jobInfo.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <p className="text-sm text-foreground/70 italic">
                    At Grittrix, we value diverse experiences and a passion for learning. If you believe you have the skills to excel in this role, even if you don't meet every single point, we encourage you to apply. We are a remote-first company committed to building an inclusive team.
                </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-xl sticky top-24">
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">Application Form</h2>
              <JobApplicationForm jobTitle={jobInfo.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(jobDetailsMap).map((jobId) => ({
    jobId,
  }));
}
    
