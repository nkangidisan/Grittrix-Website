
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { servicesList } from '@/lib/servicesData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard, TrendingUp, Activity, MonitorSmartphone, CloudCog, Cable, DatabaseZap, UsersRound, HelpCircle } from 'lucide-react';
import type { ElementType } from 'react';

const iconMap: { [key: string]: ElementType } = {
  LayoutDashboard,
  TrendingUp,
  Activity,
  MonitorSmartphone,
  CloudCog,
  Cable,
  DatabaseZap,
  UsersRound,
};

// Dummy data for related services/products, as this wasn't defined
const relatedContent: Record<string, {name: string, href: string}[]> = {
  'ai-dashboards': [{ name: 'Grittrix Retail™', href: '/products/Retail' }, { name: 'Grittrix Health™', href: '/products/Health' }],
  'forecasting': [{ name: 'Grittrix Retail™', href: '/products/Retail' }, { name: 'Grittrix Agro™', href: '/products/Agro' }],
  'prediction-models': [{ name: 'Grittrix Health™', href: '/products/Health' }, { name: 'Grittrix Agro™', href: '/products/Agro' }],
  'custom-applications': [{ name: 'Web/App Design Services', href: '/design-services' }],
  'cloud-services': [{ name: 'Hosting Plans', href: '/hosting' }],
  'integrations': [{ name: 'Custom Web & Mobile Applications', href: '/services/custom-applications' }],
  'data-analytics-services': [{ name: 'AI Dashboards & Reporting Tools', href: '/services/ai-dashboards' }],
  'training-support': [{ name: 'Contact Us', href: '/contact' }],
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const service = servicesList.find((s) => s.detailsUrl === `/services/${slug}`);

  if (!service) {
    return { title: 'Service Not Found | Grittrix AI Solutions' };
  }

  return {
    title: `${service.title} | Grittrix AI Services`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return servicesList
    .filter(service => service.detailsUrl)
    .map((service) => ({
      slug: service.detailsUrl!.replace('/services/', ''),
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = servicesList.find((s) => s.detailsUrl === `/services/${slug}`);
  if (!service) notFound();

  const IconComponent = iconMap[service.icon] || HelpCircle;
  const relatedLinks = relatedContent[slug] || [];

  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: service.title },
  ];

  return (
    <>
      <PageHeader
        title={service.title}
        description="Detailed information about our AI-powered service."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl bg-card flex items-center justify-center">
               <IconComponent className="h-32 w-32 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary mb-4">{service.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{service.description} We provide comprehensive support and integration to ensure this service delivers maximum value to your operations.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + service.title)}`}>
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {relatedLinks.length > 0 && (
            <div className="mt-16 md:mt-24">
              <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">Related Products & Services</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedLinks.map((link) => (
                  <Button asChild variant="outline" key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
