
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/button';
import {
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, CheckCircle, Building, Info, Settings, BriefcaseBusiness, PencilLine, Tag, ShoppingBag, ServerCog, MonitorPlay, Cpu, Stethoscope, Store, Sprout, GraduationCap, Globe, Users, TrendingUp, ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ElementType } from 'react';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grittrix Technologies | AI-Powered Software, Websites & Apps',
  description: 'Grittrix creates modern, innovative, AI-powered software, websites, and apps that produce results. We build products that create opportunities for everyone.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Grittrix Technologies | AI-Powered Software, Websites & Apps',
    description: 'Grittrix builds modern, AI-powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
    url: 'https://grittrix.com/',
    images: [{ url: '/media/homepage.jpg', width: 1200, height: 630, alt: 'Grittrix Technologies - AI Software & Apps' }],
    type: 'website',
  }
};

const iconMap: { [key: string]: ElementType } = {
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, CheckCircle, Building, Info, Settings, BriefcaseBusiness, PencilLine, Tag, ShoppingBag, ServerCog, MonitorPlay, Cpu, Stethoscope, Store, Sprout, GraduationCap, Globe, Users, TrendingUp
};

const keyFeatures = [
  { name: 'Insight Dashboards', description: 'Real-time analytics and forecasts tailored to your sector.', icon: 'BarChartBig' },
  { name: 'AI Modules', description: 'Plug in smart tools to predict sales or detect diseases.', icon: 'BrainCircuit' },
  { name: 'Modular Design', description: 'Only pay for the features you need and scale as you grow.', icon: 'Puzzle' },
  { name: 'Data-Driven Decisions', description: 'Stop guessing. Start acting with data-backed intelligence.', icon: 'DatabaseZap' },
];

const industriesServed = [
  {
    name: 'Healthcare',
    icon: 'HeartPulse',
    link: '/industries/healthcare',
    imageSrc: '/media/health.webp',
    altText: 'Grittrix AI for Healthcare - advanced medical diagnostics illustration',
  },
  {
    name: 'Retail',
    icon: 'ShoppingCart',
    link: '/industries/retail',
    imageSrc: '/media/retail.webp',
    altText: 'Grittrix AI for Retail - e-commerce optimization illustration',
  },
  {
    name: 'Agriculture',
    icon: 'Leaf',
    link: '/industries/agriculture',
    imageSrc: '/media/agriculture.webp',
    altText: 'Grittrix AI for Agriculture - smart farming solutions illustration',
  },
  {
    name: 'Education',
    icon: 'BookOpen',
    link: '/industries/education',
    imageSrc: '/media/education.webp',
    altText: 'Grittrix AI for Education - personalized learning platforms illustration',
  },
];

const whyGrittrixFeatures = [
    {
        title: "Emerging Market Expertise",
        description: "Deep understanding of local dynamics to build culturally and contextually relevant AI solutions.",
        icon: "Globe"
    },
    {
        title: "Localized AI Solutions",
        description: "We don't just apply technology; we adapt it, ensuring our AI-powered tools are effective in your specific environment.",
        icon: "Cpu"
    },
    {
        title: "Agile & Transparent Partnership",
        description: "We work with you every step of the way, ensuring our custom software solutions meet your exact needs on time.",
        icon: "Users"
    },
    {
        title: "Impact-Driven Innovation",
        description: "Our goal is tangible results. We build AI tools to drive growth, increase efficiency, and deliver real-world value.",
        icon: "TrendingUp"
    }
];

const whoWeWorkWithItems = [
  { name: 'Clinics and Pharmacies', icon: 'Stethoscope' },
  { name: 'Retail Businesses', icon: 'Store' },
  { name: 'Farmer Cooperatives', icon: 'Sprout' },
  { name: 'Educational NGOs', icon: 'GraduationCap' },
  { name: 'Local Governments', icon: 'Building' },
];

export default function Home() {
  return (
    <article className="overflow-x-hidden">
      <HeroSection />

      <section className="py-16 md:py-24 bg-background" aria-labelledby="welcome-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-section-in">
            <h2 id="welcome-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">Welcome to Grittrix: AI Solutions for the Real World</h2>
            <div className="prose prose-lg prose-invert text-foreground/80 max-w-none mx-auto space-y-4">
              <p>At Grittrix, we believe technology should be intelligent, inclusive, and deeply connected to the communities it serves. That’s why we’re on a mission to transform lives and economies in emerging markets through locally-adapted AI solutions that address real-world challenges across healthcare, agriculture, education, and retail.</p>
              <p>Whether you're a business looking to scale, a government solving public-sector problems, or an entrepreneur building from scratch, we are your innovation partner.</p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-primary/90 hover:bg-primary text-primary-foreground" aria-label="View Grittrix Pricing Plans">
                <Link href="/design-services">
                  <span>See Pricing Plans</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10" aria-labelledby="why-grittrix-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 id="why-grittrix-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Why Work With Grittrix?</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">We provide more than just technology. We deliver custom software solutions and strategic partnerships to help you drive growth and automate your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGrittrixFeatures.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon];
              return (
                <div key={feature.title} className="p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow text-center animate-section-in" style={{ animationDelay: `${index * 150}ms`}}>
                  <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-5">
                    {FeatureIcon && <FeatureIcon className="h-8 w-8 text-primary" aria-hidden="true" />}
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm text-center text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 animate-text-glow">Our AI-Powered Software Features</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">We don't just build software. We build intelligent systems that learn, adapt, and grow with your business in emerging markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon];
              return (
                <div key={feature.name} className="p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow animate-section-in" style={{ animationDelay: `${index * 150}ms`}}>
                  <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-5">
                    {FeatureIcon && <FeatureIcon className="h-8 w-8 text-primary" aria-hidden="true" />}
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-primary text-center mb-3">{feature.name}</h3>
                  <p className="text-sm text-center text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10" aria-labelledby="solutions-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 id="solutions-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 animate-text-glow">Solutions for Every Sector</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation and growth in your industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry, index) => {
              const IndustryIcon = iconMap[industry.icon];
              return (
                <Link href={industry.link} key={industry.name} className="block group animate-section-in" style={{ animationDelay: `${index * 150}ms`}} aria-label={`Explore AI solutions for ${industry.name}`}>
                  <Card className="bg-card h-full text-center p-6 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="p-0 items-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                            {IndustryIcon && <IndustryIcon className="h-10 w-10 text-primary" aria-hidden="true" />}
                        </div>
                        <CardTitle className="font-headline text-xl text-primary group-hover:text-primary/90">{industry.name}</CardTitle>
                    </CardHeader>
                    <div className="relative aspect-video w-full rounded-md overflow-hidden">
                      <Image
                        src={industry.imageSrc}
                        alt={industry.altText}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={`${industry.name.toLowerCase()} technology`}
                      />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-section-in">
                    <h2 id="partners-heading" className="text-3xl font-bold font-headline text-primary mb-4">Who We Work With</h2>
                    <p className="text-lg text-foreground/80 mb-8">
                        We partner with a diverse range of organizations committed to innovation and growth in emerging markets, from startups to large enterprises.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 animate-section-in animation-delay-200">
                    {whoWeWorkWithItems.map((item) => {
                        const ItemIcon = iconMap[item.icon] || BriefcaseBusiness;
                        return (
                            <div key={item.name} className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="p-2 bg-primary/10 rounded-md">
                                    <ItemIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                </div>
                                <span className="font-medium text-foreground/90">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 rounded-lg shadow-xl">
              <div className="animate-section-in">
                  <h2 id="mission-heading" className="text-3xl font-bold font-headline text-primary mb-4">Driven by Purpose, Built with Passion</h2>
                  <p className="text-foreground/80 mb-6">We don’t just build products; we build trust. Grittrix empowers people to work for themselves, take control of their futures, and drive sustainable development through accessible technology.</p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" aria-label="Explore Grittrix Technologies">
                    <Link href="/services">
                      Start Your Innovation Journey
                    </Link>
                  </Button>
              </div>
              <div className="flex justify-center items-center animate-section-in animation-delay-200">
                  <GrittrixLogo className="w-auto" />
              </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10" aria-labelledby="promise-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-section-in">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <ShieldCheck className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h2 id="promise-heading" className="text-3xl font-bold font-headline text-primary mb-4">Our Promise</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We believe in technology with trust. Your data stays yours. Our platform is secure, compliant, and constantly improving.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-section-in">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6 animate-text-glow">Ready to Build the Future?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">Let's solve, scale, and succeed together. Schedule a free consultation to see how Grittrix can help you harness the power of AI to automate and grow your business.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href={`/contact?subject=${encodeURIComponent('Free Consultation Request')}`}>
                <span>Book a Free Consultation</span>
              </Link>
            </Button>
             <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
              <Link href="/services">
                <span>View Our Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
