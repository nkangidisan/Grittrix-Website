import { PageHeader } from '@/components/PageHeader';
import { IndustryCard } from '@/components/sections/IndustryCard';
import type { Industry } from '@/lib/types';
import { HeartPulse, ShoppingCart, Leaf, BookOpen } from 'lucide-react';

// Simplified data for the overview page
const industriesOverview: Omit<Industry, 'painPoints' | 'solutions'>[] = [
  { id: 'healthcare', name: 'Healthcare', description: 'Revolutionizing patient care with AI-driven diagnostics, personalized medicine, and operational efficiency.', icon: HeartPulse, imageUrl: 'https://placehold.co/400x300.png', imageHint: 'health vector' }, // Updated hint
  { id: 'retail', name: 'Retail & E-commerce', description: 'Transforming customer experiences through AI-powered personalization, supply chain optimization, and intelligent inventory management.', icon: ShoppingCart, imageUrl: 'https://placehold.co/400x300.png', imageHint: 'retail isometric' }, // Updated hint
  { id: 'agriculture', name: 'Agriculture', description: 'Enhancing food security with AI-driven precision farming, crop monitoring, and yield prediction for sustainable agriculture.', icon: Leaf, imageUrl: 'https://placehold.co/400x300.png', imageHint: 'farm AI' }, // Updated hint
  { id: 'education', name: 'Education', description: 'Personalizing learning journeys with adaptive AI tutors, intelligent content delivery, and data-driven insights for educators.', icon: BookOpen, imageUrl: 'https://placehold.co/400x300.png', imageHint: 'learn AI' }, // Updated hint
];

export default function IndustriesPage() {
  const breadcrumbs = [{ name: 'Industries' }];

  return (
    <>
      <PageHeader
        title="Industries We Transform"
        description="Grittrix delivers specialized AI solutions tailored to the unique challenges and opportunities within key sectors across Africa and emerging markets."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Sector Expertise</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation, efficiency, and growth in your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesOverview.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                linkHref={`/industries/${industry.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
