import { optimizeContent, type OptimizeContentOutput } from '@/ai/flows/content-optimization';
import { PageHeader } from '@/components/PageHeader';
import { ServiceItem } from '@/components/sections/ServiceItem';
import type { Service } from '@/lib/types';
import { LayoutDashboard, TrendingUp, Globe, Smartphone, Briefcase, BrainCircuit, Bot } from 'lucide-react';
import Image from 'next/image';

const servicesList: Service[] = [
  { id: '1', title: 'AI Dashboards & Analytics', description: 'Unlock actionable insights with custom-built AI dashboards. Visualize complex data, track KPIs, and make informed decisions with powerful analytics at your fingertips.', icon: LayoutDashboard, detailsUrl: '/services/ai-dashboards' },
  { id: '2', title: 'Predictive Forecasting', description: 'Leverage machine learning models for accurate demand forecasting, trend analysis, and risk assessment. Stay ahead of the curve with data-driven predictions.', icon: TrendingUp, detailsUrl: '/services/forecasting' },
  { id: '3', title: 'Custom Websites & Web Apps', description: 'Build high-performance, scalable, and secure web solutions tailored to your business needs. From corporate sites to complex web applications.', icon: Globe, detailsUrl: '/services/web-development' },
  { id: '4', title: 'Mobile Application Development', description: 'Engage your customers with intuitive and feature-rich mobile apps for iOS and Android, powered by AI capabilities for enhanced user experience.', icon: Smartphone, detailsUrl: '/services/mobile-apps' },
  { id: '5', title: 'Business Management Systems', description: 'Streamline your operations with comprehensive ERP, CRM, and SCM solutions integrated with AI for automation and efficiency.', icon: Briefcase, detailsUrl: '/services/business-systems' },
  { id: '6', title: 'AI Model Development & Integration', description: 'Develop and deploy custom AI models (NLP, Computer Vision, etc.) to solve specific business problems and integrate them seamlessly into your existing workflows.', icon: BrainCircuit, detailsUrl: '/services/ai-models' },
  { id: '7', title: 'AI Chatbots & Virtual Assistants', description: 'Enhance customer service and engagement with intelligent AI-powered chatbots and virtual assistants, available 24/7.', icon: Bot, detailsUrl: '/services/chatbots' },
];

export default async function ServicesPage() {
  let optimizedData: OptimizeContentOutput | null = null;
  try {
    optimizedData = await optimizeContent({
      pageType: 'Services',
      keywords: 'AI services, machine learning solutions, custom software development, AI dashboards, business forecasting, AI in Africa',
      companyInfo: 'Grittrix offers a comprehensive suite of AI-powered services including AI dashboards, predictive forecasting, custom website and application development, and integrated business management systems. We focus on delivering tangible results for businesses in emerging markets.'
    });
  } catch (error) {
    console.error("Failed to fetch optimized content for Services:", error);
    optimizedData = {
        title: "Our AI-Powered Services",
        content: "Grittrix provides a wide array of AI-driven services designed to help businesses innovate and grow. From advanced analytics and forecasting to custom software solutions, we tailor our expertise to meet your unique challenges in the dynamic landscape of emerging markets."
    }
  }

  const breadcrumbs = [{ name: 'Services' }];

  return (
    <>
      <PageHeader
        title={optimizedData?.title || "Our AI-Powered Services"}
        description={optimizedData?.content.substring(0, optimizedData.content.indexOf('.') + 1) || "Explore our comprehensive suite of AI solutions designed to empower your business and drive innovation in emerging markets."}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">What We Offer</h2>
             <div className="prose prose-lg prose-invert text-foreground/80 max-w-3xl mx-auto">
                 {optimizedData?.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                 ))}
                 {!optimizedData && <p>We specialize in transforming businesses through a diverse range of AI-driven services. Our expertise spans data analytics, machine learning, custom software development, and strategic AI integration, helping you navigate the complexities of the digital age and achieve sustainable success.</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary mb-6">Custom Solutions for Unique Challenges</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At Grittrix, we understand that one size doesn't fit all. Our approach is to deeply understand your specific business context, challenges, and goals. We then co-create tailored AI strategies and solutions that deliver maximum impact and value.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start"><BrainCircuit className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Bespoke AI model development to fit your data and objectives.</span></li>
                <li className="flex items-start"><Globe className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Seamless integration with your existing systems and workflows.</span></li>
                <li className="flex items-start"><TrendingUp className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" /><span>Scalable solutions that grow with your business.</span></li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
               <Image src="https://placehold.co/600x400.png" alt="Custom AI Solutions" layout="fill" objectFit="cover" data-ai-hint="data analysis charts" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Placeholder pages for individual services - can be expanded later
export function generateStaticParams() {
  return servicesList.map(service => ({
    slug: service.detailsUrl?.replace('/services/', '')
  }));
}
