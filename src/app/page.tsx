
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

      {/* 2. TRUST / VALUE INDICATOR STRIP */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-section-in">
              <p className="text-3xl font-bold text-foreground">43%</p>
              <p className="text-sm text-muted-foreground">Reduced Wastage</p>
            </div>
            <div className="animate-section-in animation-delay-200">
              <p className="text-3xl font-bold text-foreground">95%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="animate-section-in animation-delay-400">
              <p className="text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Industries Served</p>
            </div>
            <div className="animate-section-in animation-delay-600">
              <p className="text-3xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE SECTION 1 */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl animate-section-in">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text on left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Data, Smarter.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Grittrix transforms raw data into your most valuable asset. Our AI-powered dashboards provide real-time analytics and predictive forecasts, empowering you to stop guessing and start making decisions with confidence.
              </p>
              <Button variant="link" asChild className="text-primary p-0 text-lg">
                <Link href="/services">
                  Explore our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Image on right */}
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/media/core.png"
                alt="Grittrix AI Dashboard showing analytics"
                fill
                className="object-cover"
                data-ai-hint="analytics dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE SECTION 2 */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl animate-section-in">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image on left */}
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg order-last md:order-first">
              <Image
                src="/media/servicepage.webp"
                alt="Illustration of modular design"
                fill
                className="object-cover"
                data-ai-hint="modular design"
              />
            </div>
            {/* Text on right */}
            <div className="order-first md:order-last">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Growth.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our CORE AI engine features a modular design, allowing you to pay only for the features you need today and scale effortlessly as your business grows. It's enterprise-grade power, tailored for you.
              </p>
              <Button variant="link" asChild className="text-primary p-0 text-lg">
                <Link href="/products/CORE">
                  Learn about Grittrix CORE™ <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. PROCESS SECTION */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center animate-section-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">A simple, transparent process to integrate AI into your business.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Discovery</h3>
              <p className="text-muted-foreground">We start by understanding your unique challenges and goals.</p>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Integration</h3>
              <p className="text-muted-foreground">We deploy our modular AI solutions, tailored to your workflow.</p>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Growth</h3>
              <p className="text-muted-foreground">You get the insights to drive efficiency, growth, and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES/USE CASE SECTION */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center animate-section-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Solutions for Every Sector</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation in your industry.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry) => {
              const IndustryIcon = iconMap[industry.icon];
              return (
                <Link href={industry.link} key={industry.name}>
                  <Card className="bg-background text-left p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                    <CardHeader className="p-0 items-start mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mb-3">
                        {IndustryIcon && <IndustryIcon className="h-8 w-8 text-primary" />}
                      </div>
                      <CardTitle className="font-headline text-xl text-foreground">{industry.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center animate-section-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to transform your business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build the future together. Schedule a free consultation to see how Grittrix can help you solve, scale, and succeed.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/contact?subject=${encodeURIComponent('Free Consultation Request')}`}>Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
