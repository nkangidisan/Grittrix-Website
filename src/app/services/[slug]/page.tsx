
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { servicesList } from '@/app/services/page';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';
import type { ElementType } from 'react';

interface ServiceDetailData {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  dataAiHint: string;
  icon?: ElementType; // This can be derived from servicesList
}

// This data should ideally be managed more centrally
const serviceDetailsData: { [key: string]: ServiceDetailData } = {
    'ai-dashboards': {
        title: 'AI Dashboards & Reporting Tools',
        description: 'Unlock actionable insights with custom-built AI dashboards that transform raw data into strategic assets.',
        longDescription: 'Our AI Dashboards & Reporting Tools service empowers your organization to transform raw data into strategic assets. We design and develop intuitive, interactive dashboards that provide real-time insights into your key performance indicators (KPIs), operational metrics, and market trends. By leveraging advanced data visualization techniques and AI-driven analytics, we help you identify patterns, uncover hidden opportunities, and make data-backed decisions with confidence. These dashboards are tailored to your specific industry and business needs, ensuring relevance and maximum impact.',
        features: ['Real-time data visualization', 'Custom KPI tracking', 'Predictive analytics integration', 'User-friendly interface', 'Mobile-responsive design', 'Secure data handling'],
        imageUrl: '/media/AIDashboardsandReportingTools.png',
        imageAlt: 'AI dashboard illustration showcasing charts and data visualization for business intelligence',
        dataAiHint: 'dashboard analytics'
    },
    'forecasting': {
        title: 'Smart Forecasting Engines',
        description: 'Leverage machine learning models for accurate demand forecasting, sales projections, and resource allocation.',
        longDescription: 'Stay ahead of market dynamics with our Smart Forecasting Engines. We utilize sophisticated machine learning algorithms and statistical models to analyze historical data, identify influencing factors, and generate accurate forecasts for demand, sales, resource allocation, and more. Our approach helps businesses optimize inventory, improve financial planning, mitigate risks, and capitalize on emerging trends. We work closely with you to understand your specific forecasting needs and deliver models that are both robust and interpretable.',
        features: ['Demand & sales forecasting', 'Financial trend analysis', 'Inventory optimization', 'Resource allocation planning', 'Risk assessment models', 'Scenario modeling'],
        imageUrl: '/media/SmartForecastingEngines.png',
        imageAlt: 'Graph illustration for smart forecasting engine capabilities with upward trend',
        dataAiHint: 'forecast graph'
    },
    'prediction-models': {
        title: 'Disease & Stock Prediction Models',
        description: 'Anticipate health trends and optimize inventory with advanced AI predictive modeling for healthcare and retail.',
        longDescription: 'Our Disease & Stock Prediction Models provide critical foresight for healthcare and retail sectors. For healthcare, we develop models to predict disease outbreaks and patient risk, enabling proactive interventions. For retail, our AI analyzes patterns to forecast stock needs, minimizing waste and ensuring availability. These tailored models enhance preparedness and operational efficiency.',
        features: ['Epidemiological trend prediction', 'Patient risk stratification', 'Inventory demand forecasting', 'Supply chain optimization alerts', 'Custom model training', 'Integration with existing data sources'],
        imageUrl: '/media/DiseaseandStockPredictionModels.webp',
        imageAlt: 'Abstract illustration of AI prediction models for health and stock',
        dataAiHint: 'prediction abstract'
    },
    'custom-applications': {
        title: 'Custom Web & Mobile Applications',
        description: 'Build high-performance, AI-integrated web and mobile solutions tailored to your unique business needs.',
        longDescription: 'We design and develop bespoke web and mobile applications that are not only scalable and secure but also deeply integrated with AI capabilities. From customer-facing platforms to internal operational tools, our applications are crafted to deliver intuitive user experiences and drive tangible business outcomes. We focus on modern technology stacks and agile development methodologies.',
        features: ['Responsive web design', 'Native & cross-platform mobile apps', 'AI feature integration (chatbots, recommendations)', 'Scalable backend architecture', 'User-centric UI/UX design', 'Ongoing maintenance & support'],
        imageUrl: '/media/CustomWeb&MobileApplications.webp',
        imageAlt: 'Illustrative screenshots of custom web and mobile applications on various devices',
        dataAiHint: 'app development'
    },
    'cloud-services': {
        title: 'Cloud Hosting & Deployment',
        description: 'Securely host and deploy your applications on optimized, scalable cloud infrastructure with expert management.',
        longDescription: 'Leverage the power and flexibility of the cloud with our expert hosting and deployment services. We help you choose the right cloud platform, configure robust environments, and manage your applications for optimal performance, security,and cost-efficiency. Our services cover migration, CI/CD pipeline setup, and ongoing infrastructure management.',
        features: ['Cloud strategy & consultation', 'Infrastructure setup & configuration', 'Automated deployment (CI/CD)', 'Scalability & load balancing', 'Security & compliance management', 'Cost optimization'],
        imageUrl: '/media/CloudHosting&Deployment.webp',
        imageAlt: 'Illustration of cloud servers representing hosting and deployment services',
        dataAiHint: 'cloud server'
    },
    'integrations': {
        title: 'Software Integrations (POS, EHR, LMS, CRMs)',
        description: 'Seamlessly connect your critical business systems like POS, EHR, LMS, and CRMs for unified data and streamlined workflows.',
        longDescription: 'Break down data silos and enhance operational efficiency by integrating your diverse software applications. We specialize in connecting POS systems, Electronic Health Records (EHR), Learning Management Systems (LMS), Customer Relationship Management (CRMs), and other enterprise tools. Our integrations ensure smooth data flow, enabling a holistic view of your operations.',
        features: ['API development & integration', 'Third-party system integration', 'Data synchronization solutions', 'Workflow automation', 'Custom middleware development', 'Legacy system integration'],
        imageUrl: '/media/SoftwareIntegrations(POS, EHR, LMS, CRMs).png',
        imageAlt: 'Diagram illustration showing interconnected software systems like POS, EHR, CRM',
        dataAiHint: 'software integration'
    },
    'data-analytics-services': {
        title: 'Data Collection, Cleaning, & Analysis',
        description: 'Unlock the power of your data with comprehensive services from collection and preparation to deep actionable insights.',
        longDescription: 'Transform your raw data into a strategic asset. Our end-to-end data services include robust data collection strategies, meticulous data cleaning and preparation, and advanced analytical techniques. We help you uncover hidden patterns, understand trends, and derive actionable insights to drive informed decision-making and business growth.',
        features: ['Data sourcing & collection strategies', 'Data cleansing & preprocessing', 'Exploratory data analysis (EDA)', 'Statistical modeling & analysis', 'Big data processing', 'Custom reporting & visualization'],
        imageUrl: '/media/DataCollectionCleaning,andAnalysis.webp',
        imageAlt: 'Graphs and charts illustration representing data collection, cleaning, and analysis',
        dataAiHint: 'data analysis'
    },
    'training-support': {
        title: 'Staff Training & Technical Support',
        description: 'Empower your team with comprehensive training on new systems and AI tools, backed by reliable technical support.',
        longDescription: 'Maximize the value of your technology investments with our tailored training programs and ongoing technical support. We provide hands-on training for your staff to ensure proficiency with new systems and AI tools. Our dedicated support team is available to address any technical challenges, ensuring smooth operations and continuous improvement.',
        features: ['Customized training programs', 'On-site & remote training sessions', 'User documentation & guides', 'Dedicated helpdesk support', 'Troubleshooting & issue resolution', 'Proactive system monitoring'],
        imageUrl: '/media/StaffTraining&TechnicalSupport.webp',
        imageAlt: 'Illustration of team receiving training and technical support for AI systems',
        dataAiHint: 'team training'
    }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slugParam = params?.slug;
  if (!slugParam) {
    return {
      title: 'Service Not Found | Grittrix AI Solutions',
      description: 'The requested service could not be found or the URL is invalid.',
    };
  }
  const service = serviceDetailsData[slugParam]; 

  if (!service) {
    return {
      title: 'Service Not Found | Grittrix AI Solutions',
      description: `The service with slug "${slugParam}" does not exist. This content is not available.`,
    };
  }
  
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL;
  let openGraphImages: Array<{ url: string; alt?: string; width?: number; height?: number; }> = [];

  if (domainBase && service.imageUrl) {
    try {
      const absoluteImageUrl = service.imageUrl.startsWith('http') 
        ? service.imageUrl 
        : new URL(service.imageUrl, domainBase).toString();
      openGraphImages = [{ url: absoluteImageUrl, alt: service.imageAlt }];
    } catch (e) {
      console.warn(`[generateMetadata service] Failed to construct absolute image URL for ${slugParam}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${service.imageUrl}"`);
       if (service.imageUrl) { // Fallback to relative if URL construction fails
         openGraphImages = [{ url: service.imageUrl, alt: service.imageAlt }];
       }
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata service] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${slugParam}.`);
    }
     if (service.imageUrl) { // Use relative URL if domainBase is not set but imageUrl exists
       openGraphImages = [{ url: service.imageUrl, alt: service.imageAlt }];
     }
  }

  return {
    title: `${service.title} | Grittrix Services`,
    description: service.description,
    openGraph: {
        title: `${service.title} | Grittrix Services`,
        description: service.description,
        images: openGraphImages,
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceDetailsData).map(slug => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  if (!slug) {
    notFound();
    return null;
  }

  const serviceInfoFromList = servicesList.find(s => s.detailsUrl === `/services/${slug}`);
  const details = serviceDetailsData[slug];

  if (!details) {
    notFound();
    return null;
  }

  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: details.title }
  ];

  const IconComponent = serviceInfoFromList?.icon as ElementType | undefined;

  return (
    <>
      <PageHeader
        title={details.title}
        description={details.description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src={details.imageUrl}
                alt={details.imageAlt}
                fill
                className="object-cover"
                priority
                data-ai-hint={details.dataAiHint}
              />
            </div>

            <div className="animate-slide-in-up">
              {IconComponent && (
                <div className="mb-6 flex items-center space-x-3 p-3 bg-primary/10 rounded-lg w-max">
                    <IconComponent className="h-10 w-10 text-primary" />
                    <h2 className="text-2xl font-bold font-headline text-primary">{details.title}</h2>
                </div>
              )}
              {!IconComponent && <h2 className="text-3xl font-bold font-headline text-primary mb-6">{details.title}</h2>}

              <h3 className="text-xl font-semibold font-headline text-primary mb-3 mt-4">Service Overview</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">{details.longDescription}</p>

              {details.features && details.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold font-headline text-primary mb-4">Key Aspects & Benefits</h3>
                  <ul className="space-y-3">
                    {details.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
               <div className="p-6 bg-card rounded-lg shadow-md">
                 <h3 className="text-lg font-semibold font-headline text-primary mb-3 flex items-center">
                    <Zap className="h-6 w-6 text-primary mr-2"/>
                    Ready to Get Started?
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Let us help you leverage this service to achieve your business goals. Contact us for a consultation.
                </p>
                <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + details.title)}`}>
                    <span>Discuss Your Project</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
