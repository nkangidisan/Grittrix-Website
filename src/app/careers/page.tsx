
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { JobListing } from '@/lib/types';
import { Briefcase, MapPin, ArrowRight, Mail, Sparkles, Brain, Palette, TrendingUp, Handshake, Users } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/app/(main)/layout';

export const metadata: Metadata = {
  title: 'Careers at Grittrix | Join Our AI Innovation Team',
  description: 'Explore exciting career opportunities at Grittrix. Help shape the future of intelligent systems in Africa and emerging markets. Remote-first roles available.',
};

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

export default function CareersPage() {
  const breadcrumbs = [{ name: 'Careers' }];

  return (
    <MainLayout>
      <PageHeader
        title="Join Grittrix"
        description="Help shape the future of intelligent systems in Africa and beyond. We value skills, passion, and a drive to make an impact over formal degrees. All roles are open to qualified candidates globally (remote-first)."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">We're Always Looking For Talent</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Grittrix is growing, and we're continuously seeking passionate and skilled individuals to join our mission. While specific openings are listed below, if you believe your expertise aligns with our vision, we encourage you to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job) => (
              <Card key={job.id} className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{job.title}</CardTitle>
                  <div className="text-sm text-foreground/70 space-y-1 mt-1">
                      <p className="flex items-center"><Briefcase className="h-4 w-4 mr-2 text-primary" /> {job.type}</p>
                      <p className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-primary" /> {job.location}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-foreground/80 line-clamp-4">{job.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={job.applyUrl || `/contact?subject=Application for ${encodeURIComponent(job.title)}`} className="flex items-center justify-center w-full">
                      <span>
                        Learn More & Apply Online
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold font-headline text-primary mb-6">General Applications</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Don't see a specific role that fits? We are always interested in hearing from talented individuals passionate about AI and emerging markets.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href={`mailto:careers@grittrix.com?subject=${encodeURIComponent('General Career Inquiry')}`}>
                <Mail className="mr-2 h-5 w-5" /> Send Your CV to careers@grittrix.com
              </Link>
            </Button>
          </div>

          <div className="mt-16 py-12">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-10">Why Work at Grittrix?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-card rounded-lg shadow-md">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Meaningful Impact</h3>
                    <p className="text-sm text-foreground/70">Contribute to projects that make a real difference in vital sectors across emerging economies.</p>
                </div>
                <div className="p-6 bg-card rounded-lg shadow-md">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Innovation Culture</h3>
                    <p className="text-sm text-foreground/70">Work with cutting-edge AI technologies and a team of brilliant, collaborative minds.</p>
                </div>
                <div className="p-6 bg-card rounded-lg shadow-md">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Growth & Learning</h3>
                    <p className="text-sm text-foreground/70">Develop your skills, take on new challenges, and advance your career in a fast-paced, supportive environment.</p>
                </div>
                 <div className="p-6 bg-card rounded-lg shadow-md">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Remote-First</h3>
                    <p className="text-sm text-foreground/70">We hire the best talent globally. Work from where you're most productive.</p>
                </div>
                <div className="p-6 bg-card rounded-lg shadow-md">
                    <Handshake className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Skills Over Degrees</h3>
                    <p className="text-sm text-foreground/70">We believe in what you can do. Your practical skills and portfolio matter most.</p>
                </div>
                 <div className="p-6 bg-card rounded-lg shadow-md">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-xl font-semibold text-primary mb-2">Diverse & Inclusive</h3>
                    <p className="text-sm text-foreground/70">Be part of a team that values diverse perspectives and fosters an inclusive environment for all.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
