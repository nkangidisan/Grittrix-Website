import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { SolutionsTabSection } from '@/components/sections/SolutionsTabSection';
import { Button } from '@/components/ui/button';
import {
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, CheckCircle, Building, Info, Settings, BriefcaseBusiness, PencilLine, Tag, ShoppingBag, ServerCog, MonitorPlay, Cpu, Stethoscope, Store, Sprout, GraduationCap, Globe, Users, TrendingUp, ShieldCheck,
  Code, Smartphone, PenTool, Cloud, ArrowUpRight, Share2, Laptop, User
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ElementType } from 'react';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Grittrix Technologies | AI Powered Software, Websites & Apps',
  description: 'Grittrix builds modern, AI powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Grittrix Technologies | AI Powered Software, Websites & Apps',
    description: 'Grittrix builds modern, AI powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
    url: 'https://grittrix.com/',
    images: [{ url: '/media/homepage.jpg', width: 1200, height: 630, alt: 'Grittrix Technologies - AI Software & Apps' }],
    type: 'website',
  }
};

const iconMap: { [key: string]: ElementType } = {
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, CheckCircle, Building, Info, Settings, BriefcaseBusiness, PencilLine, Tag, ShoppingBag, ServerCog, MonitorPlay, Cpu, Stethoscope, Store, Sprout, GraduationCap, Globe, Users, TrendingUp
};

const whyGrittrixFeatures = [
    {
        title: "Emerging Market Expertise",
        description: "Deep understanding of local dynamics to build culturally and contextually relevant AI solutions."
    },
    {
        title: "Localized AI Solutions",
        description: "We don't just apply technology; we adapt it, ensuring our AI powered tools are effective in your specific environment."
    },
    {
        title: "Agile & Transparent Partnership",
        description: "We work with you every step of the way, ensuring our custom software solutions meet your exact needs on time."
    },
    {
        title: "Impact-Driven Innovation",
        description: "Our goal is tangible results. We build AI tools to drive growth, increase efficiency, and deliver real-world value."
    }
];

const keyFeatures = [
  { 
    title: 'Insight Dashboards', 
    description: 'Real-time analytics and forecasts tailored to your sector.' 
  },
  { 
    title: 'AI Modules', 
    description: 'Plug in smart tools to predict sales or detect diseases.' 
  },
  { 
    title: 'Modular Design', 
    description: 'Only pay for the features you need and scale as you grow.' 
  },
  { 
    title: 'Data-Driven Decisions', 
    description: 'Stop guessing. Start acting with data-backed intelligence.' 
  },
];

const whoWeWorkWithItems = [
  { name: 'Clinics and Pharmacies', icon: 'Stethoscope' },
  { name: 'Retail Businesses', icon: 'Store' },
  { name: 'Farmer Cooperatives', icon: 'Sprout' },
  { name: 'Educational NGOs', icon: 'GraduationCap' },
  { name: 'Local Governments', icon: 'Building' },
];

/**
 * Reusable Card Component for Grid Sections
 */
function GridCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[hsl(var(--card-mint))] border border-[hsl(var(--border-glow))] shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_0_20px_rgba(190,90,50,0.2)] transition-shadow duration-300">
      <h3 className="text-2xl font-bold font-headline text-[#0a1128] mb-3 text-left">
        {title}
      </h3>
      <p className="text-[#3a4155] text-sm md:text-base leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
}

/**
 * Reusable Card for Services Overview Section
 */
function ServiceCard({ title, description, icon: Icon, gradient, index }: { 
  title: string; 
  description: string; 
  icon: ElementType; 
  gradient: string;
  index: number;
}) {
  return (
    <div 
      className={cn(
        "bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group",
        index % 2 === 1 ? "sm:mt-12" : "" // Stagger effect for right column
      )}
    >
      <div className={cn(
        "w-16 h-16 rounded-2xl bg-gradient-to-br p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform",
        gradient
      )}>
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-[#0a1128]">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/**
 * New Section: High Quality Solutions (Services Overview)
 */
function ServicesOverviewSection() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance websites, flexible across all screens.",
      icon: Code,
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "Mobile Development",
      description: "We use the most current industry tools and technologies.",
      icon: Smartphone,
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "UI/UX",
      description: "We design beautiful user interfaces & experiences.",
      icon: PenTool,
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "Web Hosting",
      description: "High-speed servers to power your business in realtime.",
      icon: Cloud,
      gradient: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="py-24 bg-[#f9fafb] relative overflow-hidden" aria-labelledby="services-overview-heading">
      {/* Decorative background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#0a1128 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      {/* Scattered diamond decorators */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent/20 rotate-45 hidden xl:block"></div>
      <div className="absolute bottom-1/4 right-20 w-6 h-6 bg-accent/10 rotate-45 hidden xl:block"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/30 rotate-45 hidden xl:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="text-left animate-section-in">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              OUR SERVICES
            </span>
            <h2 id="services-overview-heading" className="text-4xl md:text-5xl font-bold font-headline text-[#0a1128] mb-6 leading-tight">
              High Quality Solutions for both Startups and Large Businesses
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
              Today, we are developing high-quality websites, mobile apps, enterprise
              applications, marketplaces and APIs. Tomorrow, you might see us making
              self-generative robots, augmented reality & intergalactic portals.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-10 shadow-lg shadow-accent/20">
              <Link href="/services">Services</Link>
            </Button>
          </div>

          {/* Right Column: Staggered Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
             {/* Small green diamond decorator in the middle of grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-accent/20 rotate-45 hidden sm:block z-0"></div>
            
            {services.map((service, index) => (
              <div key={index} className="animate-section-in" style={{ animationDelay: `${index * 150}ms` }}>
                <ServiceCard 
                  index={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  gradient={service.gradient}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <article className="overflow-x-hidden">
      <HeroSection />
      
      <WelcomeSection />

      {/* Rebuilt Section 1: Why Work With Grittrix */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#050816] to-[#0a1128]" aria-labelledby="why-grittrix-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section-in">
            <h2 id="why-grittrix-heading" className="text-4xl md:text-5xl font-bold font-headline text-white mb-4 tracking-tight">
              Why Work With Grittrix?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We provide more than just technology. We deliver custom software
              solutions and strategic partnerships to help you drive growth and
              automate your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-section-in animation-delay-200">
            {whyGrittrixFeatures.map((feature, index) => (
              <GridCard 
                key={index} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Services Overview */}
      <ServicesOverviewSection />

      {/* Rebuilt Section 2: AI Powered Software Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a1128] to-[#1e3a8a]/20" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-section-in">
            <h2 id="features-heading" className="text-4xl md:text-5xl font-bold font-headline text-white mb-4 tracking-tight">
              Our AI Powered Software Features
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don't just build software. We build intelligent systems that learn,
              adapt, and grow with your business in emerging markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-section-in animation-delay-200">
            {keyFeatures.map((feature, index) => (
              <GridCard 
                key={index} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rebuilt Section 3: Interactive Industry Solutions */}
      <SolutionsTabSection />
      
      {/* Rebuilt Section: Who We Work With */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[hsl(var(--card-teal))] rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-xl animate-section-in">
             <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                    <h2 id="partners-heading" className="text-4xl md:text-5xl font-bold font-headline text-white mb-6 leading-tight">Who We Work With</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-md">
                        We partner with a diverse range of organizations committed to innovation and growth in emerging markets, from startups to large enterprises.
                    </p>
                    <Link href="/about" className="inline-flex items-center gap-2 text-white font-bold underline underline-offset-8 hover:text-white/80 transition-colors group">
                      More information <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {whoWeWorkWithItems.map((item, index) => {
                        const ItemIcon = iconMap[item.icon] || BriefcaseBusiness;
                        return (
                            <div 
                              key={item.name} 
                              className={cn(
                                "bg-white p-6 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-lg transition-all",
                                index === 4 ? "sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:mx-auto" : ""
                              )}
                            >
                                <div className="p-2.5 bg-teal-50 rounded-lg shrink-0">
                                    <ItemIcon className="h-7 w-7 text-[hsl(var(--card-teal))]" aria-hidden="true" />
                                </div>
                                <span className="font-bold text-[#0a1128] text-lg leading-tight">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent to-[#0d824d] rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden group animate-section-in">
             <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Column */}
                <div className="lg:col-span-7">
                    <h2 id="mission-heading" className="text-4xl md:text-6xl font-bold font-headline text-white mb-6 leading-tight">Driven by Purpose, Built with Passion</h2>
                    <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                        We don't just build products; we build trust. Grittrix empowers people to work for themselves, take control of their futures, and drive sustainable development through accessible technology.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-accent font-bold rounded-full px-10 h-14 transition-all" aria-label="Explore Grittrix Technologies">
                      <Link href="/services">
                        Start Your Innovation Journey
                      </Link>
                    </Button>
                </div>
                {/* Right Column: Illustration Placeholder */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
                        {/* Platform/Blocks */}
                        <div className="absolute bottom-[15%] w-[80%] h-[12%] bg-white/20 rounded-[2rem] blur-sm animate-pulse" />
                        <div className="absolute bottom-[18%] w-[70%] h-[10%] bg-white/30 rounded-[1.5rem] shadow-lg" />
                        
                        {/* Person working on Laptop */}
                        <div className="relative z-10 flex flex-col items-center translate-y-[-10%]">
                           <div className="relative">
                              <User className="w-32 h-32 md:w-40 md:h-40 text-white/90 drop-shadow-2xl" />
                              <div className="absolute bottom-2 right-0 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                                 <Laptop className="w-8 h-8 text-white" />
                              </div>
                           </div>
                        </div>

                        {/* Floating Code Card */}
                        <div className="absolute top-[10%] left-[5%] bg-white/20 backdrop-blur-lg border border-white/30 p-4 rounded-2xl shadow-xl animate-float-subtle">
                           <Code className="w-8 h-8 text-white" />
                        </div>

                        {/* Floating Node Graphic */}
                        <div className="absolute top-[15%] right-[5%] opacity-40 animate-pulse">
                           <Share2 className="w-14 h-14 text-white" />
                        </div>
                        
                        {/* Additional floating decorators */}
                        <div className="absolute bottom-[40%] right-0 w-3 h-3 bg-white/40 rounded-full animate-ping" />
                        <div className="absolute top-[35%] right-[30%] w-2 h-2 bg-white/20 rounded-full" />
                    </div>
                </div>
             </div>
             
             {/* Background atmospheric blurs */}
             <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
             <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
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
