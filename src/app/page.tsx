
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, Zap, Globe, DollarSign, LifeBuoy, CheckCircle, Briefcase, Building, GitFork, Tv, Server, ShoppingBag, Phone, Mail, ArrowRight, Home as HomeIcon, Info, Settings, MessageSquare, BriefcaseBusiness, PencilLine, Tag, ServerCog, MonitorPlay, ExternalLink, Cpu, Stethoscope, Store, Sprout, GraduationCap, Users, TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ElementType } from 'react';

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

const testimonials = [
    { quote: "Thanks to Grittrix, we reduced medicine wastage by 43% in just three months.", source: "Healthcare Partner" },
    { quote: "We never imagined AI could help a small farm. Grittrix made it possible.", source: "Agri-Business Owner" },
    { quote: "Our school is smarter. Teachers are happier. Students are thriving.", source: "Education Leader" }
];


export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. KEY FEATURES */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 animate-text-glow">Why Grittrix is Different</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">We don't just build software. We build intelligent systems that learn, adapt, and grow with your business in emerging markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon];
              return (
                <div key={feature.name} className="p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow animate-section-in" style={{ animationDelay: `${index * 150}ms`}}>
                  <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-5">
                    {FeatureIcon && <FeatureIcon className="h-8 w-8 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-primary text-center mb-3">{feature.name}</h3>
                  <p className="text-sm text-center text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES SERVED */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 animate-text-glow">Solutions for Every Sector</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation and growth in your industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry, index) => {
              const IndustryIcon = iconMap[industry.icon];
              return (
                <Link href={industry.link} key={industry.name} className="block group animate-section-in" style={{ animationDelay: `${index * 150}ms`}}>
                  <Card className="bg-card h-full text-center p-6 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="p-0 items-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                            {IndustryIcon && <IndustryIcon className="h-10 w-10 text-primary" />}
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

      {/* 4. CORE ENGINE SECTION */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 animate-section-in">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6 animate-text-glow">Grittrix CORE™</h2>
              <p className="text-lg text-foreground/80 mb-6">Our foundational AI engine is the powerhouse behind all our solutions. It's a robust, scalable, and secure platform designed to handle complex data and deliver real-time insights for your business.</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Scalable microservices architecture for flexibility.</span></li>
                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Enterprise-grade security to protect your data.</span></li>
                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Seamless integration with your existing systems.</span></li>
              </ul>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/products/CORE">
                  Explore Grittrix CORE™ <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-section-in animation-delay-200">
               <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl animate-float-subtle">
                 <Image 
                  src="/media/core.png" 
                  alt="Grittrix CORE AI Engine" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="AI engine"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* 5. TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-section-in">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 animate-text-glow">Trusted By Innovators</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">See what our partners and clients are saying about our impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg animate-section-in" style={{ animationDelay: `${index * 150}ms`}}>
                <p className="text-foreground/80 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-right font-semibold text-primary">- {testimonial.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-section-in">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6 animate-text-glow">Ready to Build the Future?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">Let's solve, scale, and succeed together. Schedule a free consultation to see how Grittrix can help you harness the power of AI to automate and grow your business.</p>
          <div className="flex justify-center items-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/contact?subject=${encodeURIComponent('Free Consultation Request')}`}>
                <span>Book a Free Consultation</span>
              </Link>
            </Button>
             <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/services">
                <span>View Our Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
