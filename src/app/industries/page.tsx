
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { IndustryCard } from '@/components/sections/IndustryCard';
import { HeartPulse, ShoppingCart, Leaf, BookOpen } from 'lucide-react';
import type { ElementType } from 'react';
import type { IndustryDetails } from '@/lib/types'; // Import IndustryDetails

export const metadata: Metadata = {
  title: 'Industries We Serve | Grittrix AI Solutions',
  description: 'Grittrix delivers specialized AI solutions for Healthcare, Retail, Agriculture, and Education, tailored to emerging markets. Discover how we transform these key sectors.',
};

// Use a simplified version for the overview, full details are in [industrySlug]/page.tsx
interface IndustryOverviewType {
  id: string;
  name: string;
  description: string; // This will be the more comprehensive description for the card
  icon: ElementType;
  imageUrl: string; 
  altText: string;
}

// Data for the overview cards on /industries page
// Descriptions are made more comprehensive here
const industriesOverview: IndustryOverviewType[] = [
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    description: 'Revolutionizing patient care with AI-driven diagnostics, personalized medicine, and operational efficiency. Our Grittrix Health™ platform offers predictive patient triage, smart pharmacy inventory management, AI-assisted medical image analysis, and seamless EHR integration for enhanced healthcare delivery in emerging markets.', 
    icon: HeartPulse as ElementType, 
    imageUrl: 'https://placehold.co/600x338.png', 
    altText: 'AI in Healthcare illustration: advanced diagnostics and patient care by Grittrix' 
  },
  { 
    id: 'retail', 
    name: 'Retail & E-commerce', 
    description: 'Transforming customer experiences with AI-powered personalization, supply chain optimization, and intelligent inventory management. Grittrix Retail™ provides AI sales forecasting, automated inventory replenishment, dynamic pricing, and customer sentiment analysis to boost sales and efficiency for online and physical stores.', 
    icon: ShoppingCart as ElementType, 
    imageUrl: 'https://placehold.co/600x338.png', 
    altText: 'AI in Retail illustration: personalized e-commerce experiences by Grittrix' 
  },
  { 
    id: 'agriculture', 
    name: 'Agriculture', 
    description: 'Enhancing food security with AI-driven precision farming, crop monitoring, and yield prediction. Grittrix Agro™ features AI crop health monitoring via satellite/drone imagery, precision irrigation/fertilization advice, automated pest detection, and market linkage tools for sustainable and productive agriculture.', 
    icon: Leaf as ElementType, 
    imageUrl: 'https://placehold.co/600x338.png', 
    altText: 'AI in Agriculture illustration: precision farming and crop monitoring by Grittrix' 
  },
  { 
    id: 'education', 
    name: 'Education', 
    description: 'Personalizing learning journeys with adaptive AI tutors, intelligent content delivery, and data-driven insights. Grittrix Learn™ offers adaptive learning paths, 24/7 AI tutoring, student performance analytics, automated assessment assistance, and teacher support tools to improve educational outcomes and efficiency.', 
    icon: BookOpen as ElementType, 
    imageUrl: 'https://placehold.co/600x338.png', 
    altText: 'AI in Education illustration: adaptive learning and intelligent tutoring by Grittrix' 
  },
];

export default function IndustriesPage() {
  const breadcrumbs = [{ name: 'Industries' }];

  return (
    <>
      <PageHeader
        title="Industries We Transform"
        description="Grittrix delivers specialized AI solutions tailored to the unique challenges and opportunities within key sectors across Africa and emerging markets. Each solution is designed for maximum impact and efficiency."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Sector Expertise</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation, efficiency, and growth in your industry. More details on our approach and impact for each sector are provided below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesOverview.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={{ 
                  id: industry.id,
                  name: industry.name,
                  description: industry.description, // Passing the more detailed description
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
