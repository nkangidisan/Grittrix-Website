
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { IndustryCard } from '@/components/sections/IndustryCard';
import { industriesOverview } from '@/lib/industriesData';

export const metadata: Metadata = {
  title: 'Industries We Serve with AI Solutions | Grittrix',
  description: 'Grittrix delivers specialized AI solutions to automate processes for Healthcare, Retail, Agriculture, and Education. Discover our AI-powered tools for these key sectors.',
};

export default function IndustriesPage() {
  const breadcrumbs = [{ name: 'Industries' }];

  return (
    <>
      <PageHeader
        title="Industries We Transform with AI Solutions"
        description="Grittrix delivers specialized AI-powered tools to automate processes and solve unique challenges within key sectors across Africa and emerging markets."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Sector Expertise</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation, efficiency, and growth in your industry. Discover our AI solutions for your business below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesOverview.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={{ 
                  id: industry.id,
                  name: industry.name,
                  description: industry.description,
                  icon: industry.icon,
                  imageUrl: industry.imageUrl,
                }}
                altText={industry.altText}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
