
'use client';

import * as React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ServiceItem } from '@/components/sections/ServiceItem';
import { servicesList } from '@/lib/servicesData';
import {
  BrainCircuit, Cable, TrendingUp
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  const fallbackTitle = "Our AI-Powered Services & Platforms";
  const fallbackContent = "Grittrix delivers a comprehensive suite of ready-to-use, AI-powered platforms and services designed to modernize your operations and drive growth.\n\nWe specialize in making advanced technology accessible and impactful for businesses in emerging markets.";

  const breadcrumbs = [{ name: 'Services' }];
  const pageTitle = fallbackTitle;
  const serviceIntroContent = fallbackContent;

  return (
    <>
      <PageHeader
        title={pageTitle}
        description={serviceIntroContent.split('\n\n')[0] || "Explore our comprehensive suite of AI solutions designed to empower your business and drive innovation in emerging markets."}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-6">What We Deliver</h2>
             <div className="prose prose-lg prose-invert text-foreground/80 max-w-3xl mx-auto space-y-4">
                 {serviceIntroContent.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                 ))}
                 {!fallbackContent.includes("We specialize in transforming businesses") && <p>We specialize in transforming businesses through a diverse range of AI-driven services. Our expertise spans data analytics, machine learning, custom software development, and strategic AI integration, helping you navigate the complexities of the digital age and achieve sustainable success.</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <div key={service.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl font-bold font-headline text-primary mb-6">Custom Solutions for Unique Challenges</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At Grittrix, we understand that one size doesn't fit all. Our approach is to deeply understand your specific business context, challenges, and goals. We then co-create tailored AI strategies and solutions that deliver maximum impact and value.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start"><BrainCircuit className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" /><span>Bespoke AI model development to fit your data and objectives.</span></li>
                <li className="flex items-start"><Cable className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" /><span>Seamless integration with your existing systems and workflows.</span></li>
                <li className="flex items-start"><TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" /><span>Scalable solutions that grow with your business.</span></li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl animate-fade-in animation-delay-300">
               <Image 
                src="/media/servicepage.webp"
                data-ai-hint="custom solution"
                alt="Grittrix - Custom AI Solutions" 
                fill 
                className="object-cover" 
                />
                 <div className="hidden md:block absolute top-1/4 -left-10 w-40 h-40 animate-float opacity-80">
                    <Image
                      src="/media/sphere-white.webp"
                      alt="Floating abstract white sphere"
                      fill
                      className="object-contain"
                      data-ai-hint="abstract sphere"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
