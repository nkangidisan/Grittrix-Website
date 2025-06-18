
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ServiceItem } from '@/components/sections/ServiceItem';
import type { Service } from '@/lib/types';
import {
  LayoutDashboard, TrendingUp, Activity, MonitorSmartphone, CloudCog, Cable, DatabaseZap, UsersRound, BrainCircuit
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AI-Powered Services & Platforms | Grittrix AI Solutions',
  description: 'Explore Grittrix\'s comprehensive suite of AI services, including dashboards, forecasting, custom app development, cloud solutions, and data analytics.',
};

export const servicesList: Service[] = [
  { id: '1', title: 'AI Dashboards & Reporting Tools', description: 'Transform raw data into strategic assets with intuitive, real-time analytics dashboards tailored to your needs.', icon: LayoutDashboard, detailsUrl: '/services/ai-dashboards' },
  { id: '2', title: 'Smart Forecasting Engines', description: 'Utilize machine learning to accurately predict demand, sales, and resource needs, optimizing planning and mitigating risks.', icon: TrendingUp, detailsUrl: '/services/forecasting' },
  { id: '3', title: 'Disease & Stock Prediction Models', description: 'Leverage AI to anticipate health trends and optimize inventory with advanced predictive modeling for better preparedness.', icon: Activity, detailsUrl: '/services/prediction-models' },
  { id: '4', title: 'Custom Web & Mobile Applications', description: 'Develop high-performance, scalable web and mobile solutions with AI integration for enhanced user experiences.', icon: MonitorSmartphone, detailsUrl: '/services/custom-applications' },
  { id: '5', title: 'Cloud Hosting & Deployment', description: 'Securely host and deploy your applications on optimized cloud infrastructure, ensuring scalability and reliability.', icon: CloudCog, detailsUrl: '/services/cloud-services' },
  { id: '6', title: 'Software Integrations', description: 'Seamlessly connect your critical systems (POS, EHR, LMS, CRMs) for unified data flow and operational efficiency.', icon: Cable, detailsUrl: '/services/integrations' },
  { id: '7', title: 'Data Collection, Cleaning, & Analysis', description: 'Unlock the power of your data with end-to-end services from collection and preparation to deep analysis and insights.', icon: DatabaseZap, detailsUrl: '/services/data-analytics-services' },
  { id: '8', title: 'Staff Training & Technical Support', description: 'Empower your team with comprehensive training and reliable technical support to maximize technology adoption.', icon: UsersRound, detailsUrl: '/services/training-support' },
];

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
