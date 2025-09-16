
'use client';

import * as React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Palette, Layers, Smartphone, Rocket, CheckCircle, Star } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import type { ElementType } from 'react';


interface DesignProcessStep {
  title: string;
  description: string;
  icon: ElementType;
}

const designProcessSteps: DesignProcessStep[] = [
  { title: "Discovery & Strategy", description: "Understanding your vision, audience, and goals to craft a tailored design strategy.", icon: Palette as ElementType },
  { title: "UI/UX Design", description: "Creating intuitive user interfaces and engaging user experiences with a focus on usability and aesthetics.", icon: Layers as ElementType },
  { title: "Development", description: "Bringing designs to life with clean, efficient code and modern technologies for web and mobile platforms.", icon: Smartphone as ElementType },
  { title: "Launch & Optimization", description: "Deploying your application and continuously optimizing for performance and user satisfaction.", icon: Rocket as ElementType },
];

const portfolioItems = [
  { id: '1', title: 'AfroHealth AI Platform', category: 'Healthcare Web App', imageUrl: '/media/AfroHealthAIPlatform.jpg', altText: 'Mockup illustration of AfroHealth AI Platform on a laptop screen', dataAiHint: 'healthcare platform' },
  { id: '2', title: 'RetailSense E-commerce', category: 'Retail Mobile App', imageUrl: '/media/RetailSenseE-commerce.jpg', altText: 'RetailSense mobile e-commerce app interface illustration', dataAiHint: 'retail e-commerce' },
  { id: '3', title: 'AgriGrow Farmer Portal', category: 'Agriculture Web Portal', imageUrl: '/media/AgriGrowFarmerPortal.png', altText: 'AgriGrow farmer portal dashboard illustration displaying crop data', dataAiHint: 'agriculture portal' },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for personal sites or startups.",
    features: [
      "1-3 Page Website",
      "Custom UI/UX Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "1 Week Support",
    ],
    recommended: false,
  },
  {
    name: "Business",
    price: "$250",
    description: "Ideal for small businesses and professionals.",
    features: [
      "Up to 5 Pages",
      "Custom UI/UX Design",
      "Mobile Responsive",
      "Advanced SEO Setup",
      "CMS Integration (e.g., WordPress)",
      "Basic AI Chatbot Integration",
      "2 Weeks Support",
    ],
    recommended: false,
  },
  {
    name: "Professional",
    price: "$500",
    description: "For growing businesses needing more power.",
    features: [
      "Up to 10 Pages",
      "Premium Custom Design",
      "E-commerce Functionality",
      "Advanced AI Chatbot with NLP",
      "API Integrations (up to 3)",
      "Performance Optimization",
      "1 Month Priority Support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "$750+",
    description: "Custom solutions for large-scale projects.",
    features: [
      "Unlimited Pages",
      "Bespoke Design System",
      "Full E-commerce Suite",
      "Custom AI Model Integration",
      "Advanced API Development",
      "Dedicated Project Manager",
      "Ongoing Support & Maintenance",
    ],
    recommended: false,
  },
];


export default function DesignServicesPage() {
  const breadcrumbs = [{ name: 'Web/App Design' }];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web & App Design and Development",
    "provider": {
      "@type": "Organization",
      "name": "Grittrix AI Solutions"
    },
    "areaServed": "Worldwide",
    "description": "Grittrix offers affordable and cost-effective web/app design services. We are among the cheaper website and webapp designers for businesses looking to integrate AI without breaking the bank.",
    "name": "Affordable Web & App Design Services"
  };

  return (
    <>
      <head>
          <title>Affordable Website Designer | Cost-Effective Web App Design - Grittrix</title>
          <meta name="description" content="Looking for an affordable or cheaper website designer who delivers quality? Grittrix offers cost-effective web and webapp design with cutting-edge AI to automate your processes. Get a quote today!" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          />
      </head>
      <PageHeader
        title="Affordable Web & App Design Services"
        description="We offer cost-effective and high-quality digital experiences that drive results. Our AI-first approach ensures your project is intelligent, future-ready, and budget-friendly."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Design & Development Philosophy</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              At Grittrix, we provide top-tier design at an affordable price. We blend creative design with cutting-edge technology to build digital experiences that captivate users and achieve business objectives, making us one of the best cheaper website designers available.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {designProcessSteps.map(step => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="p-6 bg-card rounded-lg shadow-md text-center hover:shadow-primary/20 transition-shadow">
                  <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                          <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                  </div>
                  <h3 className="text-lg font-semibold font-headline text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Cost-Effective Packages</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Choose a plan that's right for you. We offer affordable packages for every stage of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col ${plan.recommended ? 'border-2 border-primary shadow-primary/30 shadow-lg relative' : 'bg-card'}`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Best Value
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl text-primary">{plan.name}</CardTitle>
                    <p className="text-4xl font-bold text-foreground my-2">{plan.price}</p>
                    <p className="text-sm text-foreground/70 h-10">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-4">
                    <Button 
                      asChild 
                      className={`w-full ${plan.recommended ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-primary/80 hover:bg-primary/70 text-primary-foreground'}`}
                    >
                      <Link href={`/contact?subject=${encodeURIComponent('Design Plan Inquiry: ' + plan.name)}`}><span>Get Started</span></Link>
                    </Button>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Portfolio</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Take a look at some of the innovative digital solutions we've delivered for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-card overflow-hidden group hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={item.imageUrl} 
                      alt={item.altText}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={item.dataAiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl text-primary mb-1 group-hover:text-primary/90 transition-colors">{item.title}</CardTitle>
                  <p className="text-sm text-accent font-medium">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">Why Choose Our Affordable Web Designers?</h2>
                    <ul className="space-y-4 text-foreground/80 text-lg">
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span><strong>Affordable AI Integration:</strong> We build smart applications that leverage AI for enhanced functionality at a cost-effective price point.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span><strong>User-Centric Design:</strong> Our designs prioritize user experience, ensuring intuitiveness and engagement.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span><strong>Emerging Market Focus:</strong> We are among the best, cheaper webapp designers for the unique contexts of users in Africa and emerging markets.</span></li>
                        <li className="flex items-start"><CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span><strong>End-to-End Solutions:</strong> From concept to launch and beyond, we provide comprehensive design and development services.</span></li>
                    </ul>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold font-headline text-primary mb-6">Request an Affordable Quote</h2>
                    <p className="text-sm text-foreground/70 mb-6">Have a project in mind? Tell us about your requirements, and we'll get back to you with a tailored, affordable proposal.</p>
                    <React.Suspense fallback={<p className="text-foreground/80">Loading form...</p>}>
                      <ContactForm />
                    </React.Suspense>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
