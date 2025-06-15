import { optimizeContent, type OptimizeContentOutput } from '@/ai/flows/content-optimization';
import { PageHeader } from '@/components/PageHeader';
import { TeamMemberCard } from '@/components/sections/TeamMemberCard';
import type { TeamMember } from '@/lib/types';
import { Award, Eye, Gem, Lightbulb, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Dr. Aisha Bello', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in AI and emerging markets. Passionate about leveraging technology for social good.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: '#', twitter: '#' } },
  { id: '2', name: 'Ken Njoroge', role: 'Chief Technology Officer', bio: 'Expert in AI/ML development and scalable cloud architectures. Driving Grittrix\'s innovation engine.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: '#', twitter: '#' } },
  { id: '3', name: 'Fatima Diallo', role: 'Head of Operations - Africa', bio: 'Strategic operator ensuring seamless delivery and impact across African markets.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: '#', twitter: '#' } },
  { id: '4', name: 'Rajesh Kumar', role: 'Lead AI Researcher', bio: 'Pioneering new algorithms and models to solve complex industry challenges.', imageUrl: 'https://placehold.co/400x400.png', socials: { linkedin: '#', twitter: '#' } },
];

const coreValues = [
    { title: "Innovation", description: "We constantly push the boundaries of AI to create novel solutions that address real-world needs.", icon: Lightbulb },
    { title: "Integrity", description: "We operate with transparency and ethical considerations at the core of everything we do.", icon: Award },
    { title: "Impact", description: "Our goal is to deliver measurable, positive change for businesses and communities.", icon: Zap },
    { title: "Collaboration", description: "We believe in the power of partnership, working closely with clients to achieve shared success.", icon: Users },
];


export default async function AboutUsPage() {
  let optimizedData: OptimizeContentOutput | null = null;
  try {
    optimizedData = await optimizeContent({
      pageType: 'About Us',
      keywords: 'AI solutions Africa, emerging markets tech, Grittrix mission, AI company values, expert AI team',
      companyInfo: 'Grittrix is an AI company focused on providing cutting-edge solutions for healthcare, retail, agriculture, and education in Africa and other emerging markets. Our mission is to democratize access to AI and drive sustainable development. Our vision is to be the leading AI partner for transformation in these regions. Our values include innovation, integrity, impact, and collaboration.'
    });
  } catch (error) {
    console.error("Failed to fetch optimized content for About Us:", error);
    // Fallback content or error message can be handled here
    optimizedData = {
        title: "About Grittrix: Pioneering AI in Emerging Markets",
        content: "Grittrix is dedicated to transforming industries across Africa and emerging markets through innovative AI solutions. Our mission is to empower businesses and communities with cutting-edge technology, fostering growth and development. We believe in the power of AI to solve complex challenges and create a brighter future."
    }
  }

  const breadcrumbs = [{ name: 'About Us' }];

  return (
    <>
      <PageHeader
        title={optimizedData?.title || "About Grittrix"}
        description="Learn about our mission, vision, values, and the dedicated team driving AI innovation in emerging markets."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg prose-invert text-foreground/80 max-w-none">
                 {optimizedData?.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                 ))}
                 <p>We are a team of passionate technologists, industry experts, and visionaries committed to harnessing the power of artificial intelligence to address the unique challenges and opportunities in Africa and other emerging economies. Our journey began with a simple belief: technology can be a powerful catalyst for positive change.</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
               <Image src="https://placehold.co/600x400.png" alt="Grittrix Team Collaboration" layout="fill" objectFit="cover" data-ai-hint="team collaboration office" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center"><Eye className="mr-3 h-7 w-7 text-accent" />Our Vision</h3>
                    <p className="text-foreground/80 leading-relaxed">To be the leading catalyst for AI-driven transformation in Africa and emerging markets, creating a future where technology empowers every individual and organization to reach their full potential.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center"><Gem className="mr-3 h-7 w-7 text-accent" />Our Mission</h3>
                    <p className="text-foreground/80 leading-relaxed">To democratize access to cutting-edge AI solutions, enabling businesses and institutions to innovate, optimize operations, and drive sustainable growth for the betterment of society.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="p-6 bg-card rounded-lg shadow-md text-center hover:shadow-primary/20 transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Meet Our Team</h2>
          <p className="text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            We are a collective of innovators, thinkers, and doers, united by a passion for technology and a commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
