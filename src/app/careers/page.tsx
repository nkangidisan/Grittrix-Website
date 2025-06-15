import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { JobListing } from '@/lib/types';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const jobListings: JobListing[] = [
  { id: '1', title: 'Senior AI Engineer', location: 'Remote / Lagos, Nigeria', type: 'Full-time', description: 'Lead the design and development of cutting-edge AI models for our core products. Strong experience in Python, TensorFlow/PyTorch, and cloud platforms required.', applyUrl: '/careers/apply/senior-ai-engineer' },
  { id: '2', title: 'Frontend Developer (React/Next.js)', location: 'Nairobi, Kenya', type: 'Full-time', description: 'Build intuitive and responsive user interfaces for our AI-powered applications. Proficiency in React, Next.js, TypeScript, and modern CSS frameworks is essential.', applyUrl: '/careers/apply/frontend-developer' },
  { id: '3', title: 'Data Scientist - Agriculture', location: 'Remote', type: 'Contract', description: 'Apply data science techniques to agricultural data to improve crop yields, predict diseases, and optimize resource usage. Experience with geospatial data and agronomy is a plus.', applyUrl: '/careers/apply/data-scientist-agriculture' },
  { id: '4', title: 'Business Development Manager - EdTech', location: 'Accra, Ghana', type: 'Full-time', description: 'Drive growth and partnerships for Grittrix Learn™ in the African education sector. Proven experience in EdTech sales and market development required.', applyUrl: '/careers/apply/bdm-edtech' },
];


export default function CareersPage() {
  const breadcrumbs = [{ name: 'Careers' }];

  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Be part of a dynamic and innovative team at Grittrix, dedicated to shaping the future of AI in emerging markets. We're looking for passionate individuals to help us achieve our mission."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Current Openings</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore exciting career opportunities at Grittrix. If you are driven by innovation and passionate about making an impact, we'd love to hear from you.
            </p>
          </div>

          {jobListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobListings.map((job) => (
                <Card key={job.id} className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{job.title}</CardTitle>
                    <div className="text-sm text-foreground/70 space-y-1 mt-1">
                        <p className="flex items-center"><Briefcase className="h-4 w-4 mr-2 text-accent" /> {job.type}</p>
                        <p className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-accent" /> {job.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm text-foreground/80 line-clamp-4">{job.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={job.applyUrl || `/contact?subject=Application for ${job.title}`}>
                        Apply Now / Learn More
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold font-headline text-primary mb-4">No Openings Currently</h3>
              <p className="text-foreground/80 mb-6">
                We are always on the lookout for talented individuals. Feel free to send us your resume for future consideration.
              </p>
              <Button asChild>
                <Link href="/contact?subject=General Career Inquiry">Submit Your CV</Link>
              </Button>
            </div>
          )}

          <div className="mt-16 p-8 bg-secondary/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">Why Work at Grittrix?</h3>
            <ul className="grid md:grid-cols-3 gap-6 text-foreground/80 text-sm">
                <li className="p-4 bg-card rounded shadow"><strong>Meaningful Impact:</strong> Contribute to projects that make a real difference in emerging economies.</li>
                <li className="p-4 bg-card rounded shadow"><strong>Innovation Culture:</strong> Work with cutting-edge AI technologies and a team of brilliant minds.</li>
                <li className="p-4 bg-card rounded shadow"><strong>Growth Opportunities:</strong> Develop your skills and advance your career in a fast-paced environment.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
