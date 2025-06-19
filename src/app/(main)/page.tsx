
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { 
  HeartPulse, Leaf, BookOpen, ShoppingCart, BarChartBig, BrainCircuit, Puzzle, DatabaseZap, Zap, Globe, DollarSign, LifeBuoy, CheckCircle, Briefcase, Building, GitFork, Tv, Server, ShoppingBag, Phone, Mail, ArrowRight, Home as HomeIcon, Info, Settings, MessageSquare, BriefcaseBusiness, PencilLine, Tag, ServerCog, MonitorPlay, ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyFeatures = [
  { name: 'Insight Dashboards', description: 'Get real-time analytics and forecasts tailored to your sector.', icon: BarChartBig },
  { name: 'AI Modules', description: 'Plug in smart tools to predict sales, manage stock, or detect diseases.', icon: BrainCircuit },
  { name: 'Modular Design', description: 'Only pay for the features you need — scale as you grow.', icon: Puzzle },
  { name: 'Data-Driven Decisions', description: 'Stop guessing. Start acting with data-backed intelligence.', icon: DatabaseZap },
  { name: 'Secure & Private', description: 'Your data is encrypted and securely hosted.', icon: CheckCircle }, // Updated from ShieldCheck to CheckCircle for consistency
];

const industriesServed = [
  { 
    name: 'Healthcare', 
    icon: HeartPulse, 
    link: '/industries/healthcare', 
    imageSrc: '/media/health.webp',
    altText: 'Grittrix AI for Healthcare - advanced medical diagnostics illustration',
    points: [
      'Smart patient triage',
      'AI-assisted diagnostics',
      'Drug inventory forecasting',
      'Digital health records'
    ] 
  },
  { 
    name: 'Retail', 
    icon: ShoppingCart, 
    link: '/industries/retail', 
    imageSrc: '/media/retail.webp',
    altText: 'Grittrix AI for Retail - e-commerce optimization illustration',
    points: [
      'Inventory optimization',
      'Sales prediction',
      'Low-stock alerts',
      'Customer insights'
    ] 
  },
  { 
    name: 'Agriculture', 
    icon: Leaf, 
    link: '/industries/agriculture', 
    imageSrc: '/media/agriculture.webp',
    altText: 'Grittrix AI for Agriculture - smart farming solutions illustration',
    points: [
      'AI crop disease detection',
      'Weather-based yield prediction',
      'Market price forecasting',
      'Smart farm planning tools'
    ] 
  },
  { 
    name: 'Education', 
    icon: BookOpen, 
    link: '/industries/education', 
    imageSrc: '/media/education.webp',
    altText: 'Grittrix AI for Education - personalized learning platforms illustration',
    points: [
      'AI-powered tutoring',
      'Student performance analytics',
      'Lesson planning assistance',
      'Risk alerts for at-risk students'
    ] 
  },
];

const whoWeWorkWith = [
  { name: 'Clinics and pharmacies', icon: HeartPulse },
  { name: 'Small-to-medium retail businesses', icon: ShoppingCart },
  { name: 'Farmer cooperatives and agri-entrepreneurs', icon: Leaf },
  { name: 'Schools and educational NGOs', icon: BookOpen },
  { name: 'Local governments and development partners', icon: Building },
];

const whyGrittrixPoints = [
  { name: 'Fast Setup', description: 'No need for coding or deep tech knowledge. Start using our tools in minutes.', icon: Zap },
  { name: 'Local Context', description: 'Built specifically for Africa and emerging markets — we understand your challenges.', icon: Globe },
  { name: 'Affordable Pricing', description: 'Enterprise-grade AI at prices made for small and growing businesses.', icon: DollarSign },
  { name: 'Expert Support', description: 'We don’t just sell tools. We walk with you. Real humans. Real impact.', icon: LifeBuoy },
];

const testimonials = [
    { quote: "Thanks to Grittrix, we reduced medicine wastage by 43% in just three months.", source: "Healthcare Partner", imageSrc: "/media/healthcarepartner.webp", altText: "Testimonial from a Grittrix Healthcare Partner using AI solutions" },
    { quote: "We never imagined AI could help a small farm. Grittrix made it possible.", source: "Agri-Business Owner", imageSrc: "/media/agribusinessowner.webp", altText: "Testimonial from a Grittrix Agri-Business Owner using smart farming tools" },
    { quote: "Our school is smarter. Teachers are happier. Students are thriving.", source: "Education Leader", imageSrc: "/media/educationleader.jpg", altText: "Testimonial from an Education Leader using Grittrix AI in education" }
];

const quickNavLinks = [
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/services', label: 'Services', icon: Settings },
  { href: '/industries', label: 'Industries', icon: Building },
  { href: '/careers', label: 'Careers', icon: BriefcaseBusiness },
  { href: '/blog', label: 'Blog', icon: PencilLine },
  { href: '/merch', label: 'Grittrix Merch', icon: Tag },
  { href: '/products', label: 'Products', icon: ShoppingBag },
  { href: '/hosting', label: 'Hosting', icon: ServerCog },
  { href: '/design-services', label: 'Need a Website / Web App?', icon: MonitorPlay },
];


export default function Home() {
  return (
    <>
      <HeroSection />

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6 animate-fade-in">What We Do</h2>
            <p className="text-lg text-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Grittrix is a plug-and-play AI platform for businesses and institutions in emerging markets. We provide industry-specific tools powered by AI, data science, and machine learning — designed to deliver real-time insights, automate workflows, and enhance performance without requiring a full tech team.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-fade-in">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={feature.name} className="bg-card hover:shadow-xl transition-shadow duration-300 group animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary group-hover:text-primary/90 transition-colors">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-fade-in">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {industriesServed.map((industry, index) => (
              <Card key={industry.name} className="bg-card hover:shadow-2xl transition-all duration-300 group flex flex-col md:flex-row overflow-hidden animate-slide-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image 
                    src={industry.imageSrc} 
                    alt={industry.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={`${industry.name.toLowerCase()} technology`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r md:from-black/70 md:to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform p-2 bg-primary/20 rounded-full">
                     <industry.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <CardTitle className="font-headline text-2xl text-primary mb-4 group-hover:text-primary/90 transition-colors">{industry.name}</CardTitle>
                  <ul className="space-y-2 mb-6">
                    {industry.points.map(point => (
                      <li key={point} className="flex items-center text-sm text-foreground/70">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" asChild className="text-primary group-hover:underline self-start p-0 h-auto">
                    <Link href={industry.link} className="flex items-center">
                      <span>Learn More <ArrowRight className="ml-1 h-4 w-4 inline" /></span>
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-fade-in">Who We Work With</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              We partner with a diverse range of organizations committed to innovation and growth in emerging markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whoWeWorkWith.map((partner, index) => (
              <div key={partner.name} className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <partner.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-headline text-md font-semibold text-primary">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Grittrix Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-fade-in">Why Grittrix?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGrittrixPoints.map((point, index) => (
              <Card key={point.name} className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                <CardHeader className="items-center p-0 mb-4">
                  <div className="p-4 bg-primary/10 rounded-full mb-3">
                    <point.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{point.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-foreground/70 text-sm">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Impact Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-fade-in">Proven Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card p-6 rounded-lg shadow-xl animate-slide-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-0">
                  <blockquote className="text-lg text-foreground/80 italic mb-4">"{testimonial.quote}"</blockquote>
                  <p className="text-sm font-semibold text-primary">- {testimonial.source}</p>
                  <div className="mt-4 relative aspect-[4/3] rounded overflow-hidden">
                    <Image 
                      src={testimonial.imageSrc} 
                      alt={testimonial.altText} 
                      fill
                      className="object-cover"
                      data-ai-hint="business impact"
                      />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Grittrix Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-6">
               <GrittrixLogo className="h-12 md:h-16" width={192} height={40}/>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Explore Grittrix</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Discover how our solutions and services can help you achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-up">
            {quickNavLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group bg-card p-6 rounded-lg shadow-md hover:shadow-primary/20 hover:border-primary/50 border border-transparent transition-all flex items-center space-x-4"
                >
                  <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                     <LinkIcon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-primary group-hover:text-primary/90 transition-colors">{link.label}</span>
                  <ArrowRight className="ml-auto h-5 w-5 text-primary/70 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
          <div className="mt-12 text-center space-y-4 animate-fade-in animation-delay-300">
             <h3 className="text-xl font-headline font-semibold text-primary">Connect With Us</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-foreground/80">
              <a href="tel:+919714688324" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-2 text-primary" /> +91 9714688324
              </a>
              <a href="tel:+256756693840" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-2 text-primary" /> +256 756693840
              </a>
              <a href="mailto:hello@grittrix.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-2 text-primary" /> hello@grittrix.com
              </a>
              <a href="mailto:info@grittrix.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-2 text-primary" /> info@grittrix.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-2xl animate-fade-in">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" /> {/* Replaced ShieldCheck for consistency */}
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Promise</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe in technology with trust. Your data stays yours. Our platform is secure, compliant, and constantly improving.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
