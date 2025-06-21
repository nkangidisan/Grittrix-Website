
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { TeamMemberCard } from '@/components/sections/TeamMemberCard';
import type { TeamMember } from '@/lib/types';
import { Lightbulb, UsersRound, ShieldCheck, Mountain, Eye } from 'lucide-react';
import Image from 'next/image';
import type { ElementType } from 'react';

export const metadata: Metadata = {
  title: 'About Grittrix AI Solutions | Our Mission, Vision, and Team',
  description: 'Learn about Grittrix\'s mission to redefine industries with AI, our vision for emerging markets, core values, and the expert team driving innovation.',
};

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Nkangi Disan', role: 'Founder & CEO', bio: 'Visionary leader passionate about leveraging technology for social good.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: 'https://www.linkedin.com/in/disan-nkangi-7ab2b62a9/' } },
  { id: '2', name: 'Lubega Mahad', role: 'Chief Technology Officer', bio: 'Expert in AI/ML development and scalable cloud architectures. Driving Grittrix\'s innovation engine.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: 'https://www.linkedin.com/in/lubega-mahad-ishaaq-021540322/' } },
  { id: '3', name: 'Ashumbusha Emmanuel', role: 'Head of Operations - Africa', bio: 'Strategic operator ensuring seamless delivery and impact across African markets.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: 'https://www.linkedin.com/in/ashumbusha-emmanuel-124059335/' } },
  { id: '4', name: 'Juma Bakari', role: 'Lead AI Researcher', bio: 'Pioneering new algorithms and models to solve complex industry challenges.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: 'https://www.linkedin.com/in/juma-bakari-4712ab152/' } },
  { id: '5', name: 'Iradukunda Pacifique', role: 'Managing Director East Africa & Senior Graphics Designer', bio: 'Leading East African operations and spearheading creative design to ensure Grittrix solutions are impactful and visually compelling.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: 'https://www.linkedin.com/in/iradukunda-pacifique-75618221b/' } },
];

interface CoreValue {
  title: string;
  description: string;
  icon: ElementType;
}

const coreValues: CoreValue[] = [
    { title: "Innovation with purpose", description: "We constantly push the boundaries of AI to create novel solutions that address real-world needs effectively.", icon: Lightbulb as ElementType },
    { title: "Inclusion through simplicity", description: "We design intuitive technology accessible to everyone, fostering broad participation and benefit.", icon: UsersRound as ElementType },
    { title: "Transparency and trust", description: "We operate with openness and ethical considerations, building lasting relationships based on integrity.", icon: ShieldCheck as ElementType },
    { title: "Resilience and grit", description: "We embrace challenges and persevere, committed to delivering impactful solutions even in complex environments.", icon: Mountain as ElementType },
];


export default function AboutUsPage() {
  const fallbackTitle = "About Grittrix: Redefining Industries with Technology";
  const fallbackContent = "Grittrix is on a mission to redefine industries through accessible, scalable, and localized technology.\n\nBorn from a passion to solve real-world challenges in emerging markets, Grittrix develops intelligent systems for sectors that matter: health, retail, agriculture, and education.\n\nWe believe that powerful technology shouldn't just be for the privileged few. Our tools empower even the smallest organizations to thrive.";
  
  const breadcrumbs = [{ name: 'About Us' }];
  const pageTitle = fallbackTitle;
  const storyContent = fallbackContent;

  return (
    <>
      <PageHeader
        title={pageTitle}
        description="Learn about our mission, vision, values, and the dedicated team driving AI innovation in emerging markets."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl font-bold font-headline text-primary mb-6">Our Story & Mission</h2>
              <div className="prose prose-lg prose-invert text-foreground/80 max-w-none space-y-4">
                 {storyContent.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                 ))}
                 <p className="mt-4">We are engineers, designers, educators, analysts, and doers — united by one goal: creating systems that change lives.</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl animate-fade-in animation-delay-300">
               <Image 
                src="https://placehold.co/800x450.png"
                data-ai-hint="team collaboration"
                alt="Grittrix - Our Story & Mission" 
                fill
                className="object-cover" 
                priority
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4 flex items-center justify-center">
                <Eye className="mr-3 h-10 w-10 text-primary" />
                Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                To be the engine that powers data-driven transformation in Africa and beyond.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="p-6 bg-card rounded-lg shadow-md text-center hover:shadow-primary/20 transition-shadow animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Meet Our Team</h2>
          <p className="text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            We are a collective of innovators, thinkers, and doers, united by a passion for technology and a commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
