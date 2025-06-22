
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { industryDetailsData } from '@/lib/industriesData';

interface PageProps {
  params: { industrySlug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industrySlug } = params;
  const industry = industryDetailsData[industrySlug];

  if (!industry) {
    return {
      title: 'Industry Not Found | Grittrix AI Solutions',
      description: 'This industry page does not exist.',
    };
  }
  
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = industry.image.startsWith('http') 
    ? industry.image 
    : new URL(industry.image, domainBase).toString();

  return {
    title: `${industry.title} | Grittrix AI Solutions`,
    description: industry.description,
    openGraph: {
        title: `${industry.title} | Grittrix AI Solutions`,
        description: industry.description,
        images: [{ url: absoluteImageUrl, alt: industry.title }],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(industryDetailsData).map((slug) => ({
    industrySlug: slug,
  }));
}

export default function IndustryPage({ params }: PageProps) {
  const industry = industryDetailsData[params.industrySlug];

  if (!industry) {
    notFound();
    return null; 
  }

  const breadcrumbs = [
    { name: 'Industries', href: '/industries' },
    { name: industry.title },
  ];

  return (
    <>
      <PageHeader title={industry.title} description={industry.description} breadcrumbs={breadcrumbs} />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary mb-6">Detailed Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{industry.fullDescription}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={industry.image}
                data-ai-hint={industry.dataAiHint}
                alt={industry.title} 
                fill
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary mb-6">Key Features</h3>
              <ul className="space-y-4 text-lg text-foreground/80">
                {industry.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary mb-6">Related Services</h3>
               <div className="flex flex-col space-y-3">
                {industry.relatedServices.map((service, index) => (
                  <Link key={index} href={service.href} className="group bg-card p-4 rounded-lg shadow-md hover:shadow-primary/20 transition-all flex items-center justify-between">
                    <span className="font-medium text-primary group-hover:text-primary/90">{service.name}</span>
                    <ArrowRight className="h-5 w-5 text-primary/70 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.useCases.map((useCase, index) => (
              <Card key={index} className="bg-card overflow-hidden group hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={useCase.image} 
                      alt={useCase.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={useCase.dataAiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl text-primary mb-2 group-hover:text-primary/90">{useCase.title}</CardTitle>
                  <p className="text-sm text-foreground/70">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
