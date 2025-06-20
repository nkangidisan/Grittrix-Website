
import * as React from 'react';
import type { Metadata } from 'next';
import type { Industry } from '@/lib/types';
import { HeartPulse, ShoppingCart, Leaf, BookOpen, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { ElementType } from 'react';

interface IndustryData extends Omit<Industry, 'icon' | 'imageHint'> {
  icon: ElementType; // Lucide icon component
}

const industriesData: { [key: string]: IndustryData } = {
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Empowering healthcare providers with AI to improve patient outcomes, enhance diagnostics, and streamline operations.',
    icon: HeartPulse as ElementType,
    imageUrl: '/media/health.webp',
    painPoints: [
      'Late disease detection and diagnosis',
      'Inefficient patient data management',
      'Resource allocation challenges in hospitals',
      'High operational costs',
      'Limited access to specialized medical expertise in remote areas'
    ],
    solutions: [
      'AI-powered diagnostic tools for early disease detection (e.g., medical image analysis)',
      'Personalized treatment plans based on patient data and predictive analytics',
      'Intelligent systems for hospital operations management and resource optimization',
      'AI-driven platforms for remote patient monitoring and telemedicine',
      'Drug discovery and development acceleration using AI models'
    ],
  },
  retail: {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Transforming the retail landscape with AI for personalized experiences, optimized supply chains, and smarter operations.',
    icon: ShoppingCart as ElementType,
    imageUrl: '/media/retail.webp',
    painPoints: [
      'Understanding customer behavior and preferences',
      'Inventory mismanagement (overstocking/understocking)',
      'Inefficient supply chain and logistics',
      'High customer churn rates',
      'Competition from online and offline players'
    ],
    solutions: [
      'AI-driven personalization engines for product recommendations and targeted marketing',
      'Demand forecasting and inventory optimization models',
      'Intelligent supply chain management and route optimization',
      'AI-powered chatbots for customer service and support',
      'Customer segmentation and churn prediction analytics'
    ],
  },
  agriculture: {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Driving sustainable agriculture and food security with AI-powered precision farming and data analytics.',
    icon: Leaf as ElementType,
    imageUrl: '/media/agriculture.webp',
    painPoints: [
      'Unpredictable weather patterns and climate change impact',
      'Crop diseases and pest infestations',
      'Inefficient use of resources (water, fertilizers)',
      'Lack of access to timely market information',
      'Post-harvest losses'
    ],
    solutions: [
      'AI-based crop monitoring using satellite imagery and drone technology',
      'Precision agriculture for optimized irrigation and fertilization',
      'Early detection of crop diseases and pest outbreaks through image analysis',
      'Yield prediction models to aid planning and market access',
      'AI-driven platforms for connecting farmers to markets and supply chains'
    ],
  },
  education: {
    id: 'education',
    name: 'Education',
    description: 'Personalizing learning and enhancing educational outcomes with adaptive AI technologies.',
    icon: BookOpen as ElementType,
    imageUrl: '/media/education.webp',
    painPoints: [
      'One-size-fits-all learning approaches',
      'Difficulty in catering to diverse student needs',
      'High dropout rates in certain segments',
      'Administrative burden on educators',
      'Skill gaps between education and industry demands'
    ],
    solutions: [
      'AI-powered adaptive learning platforms that personalize content and pace for each student',
      'Intelligent tutoring systems providing individualized support',
      'Automated grading and feedback tools to reduce teacher workload',
      'AI-driven analytics to identify at-risk students and provide interventions',
      'Personalized career guidance and skill development platforms'
    ],
  },
};

export async function generateMetadata(
  props: any 
): Promise<Metadata> {
  const industrySlug = props?.params?.industrySlug;

  if (!industrySlug) {
    return {
      title: 'Industry Details | Grittrix AI Solutions',
      description: 'Learn more about our industry-specific AI solutions.',
    };
  }
  const industry = industriesData[industrySlug];

  if (!industry) {
    return {
      title: 'Industry Not Found | Grittrix AI Solutions',
      description: `Details for industry "${industrySlug}" could not be found.`,
    };
  }
  
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = industry.imageUrl.startsWith('http') ? industry.imageUrl : new URL(industry.imageUrl, domainBase).toString();

  return {
    title: `${industry.name} Solutions | Grittrix AI`,
    description: industry.description,
    openGraph: {
        title: `${industry.name} Solutions | Grittrix AI`,
        description: industry.description,
        images: [{ url: absoluteImageUrl, alt: `AI in ${industry.name} illustration` }],
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    industrySlug: slug,
  }));
}

export default function IndustryDetailPage(props: any) {
  const industrySlug = props?.params?.industrySlug;

  if (!industrySlug) {
    notFound();
    return null;
  }

  const industry = industriesData[industrySlug];

  if (!industry) {
    notFound();
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">{industry.name}</h1>
      <p className="text-lg text-foreground/80 mb-6">{industry.description}</p>
      
      <div className="relative h-auto md:h-[calc(800px*9/16)] w-full aspect-[4/3] md:aspect-auto md:max-h-[500px] my-8">
        <Image
            src={industry.imageUrl}
            alt={`Concept illustration for AI applications in ${industry.name}`}
            fill
            className="object-contain rounded-lg shadow-xl"
            priority
            data-ai-hint={`${industry.name.toLowerCase()} technology`}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
            Key Challenges
          </h2>
          <ul className="space-y-3">
            {industry.painPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-destructive/70 mr-3 mt-1 shrink-0" />
                <span className="text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <Lightbulb className="h-8 w-8 text-primary mr-3" />
            Our AI Solutions
          </h2>
          <ul className="space-y-3">
            {industry.solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span className="text-foreground/80">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + industry.name + ' solutions')}`}>
            <span>Discuss Your {industry.name} Needs</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
