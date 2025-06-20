import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import type { IndustryDetails } from '@/lib/types';
import Image from 'next/image';

// Dummy data for industry details
const industryDetailsData: { [key: string]: IndustryDetails } = {
  healthcare: {
    slug: 'healthcare',
    title: 'AI in Healthcare',
    description:
      'Leveraging AI for improved patient care, diagnostics, drug discovery, and operational efficiency in healthcare.',
    image: '/media/health.webp',
    fullDescription:
      'Our AI solutions for healthcare focus on accelerating diagnostics through image analysis, personalizing treatment plans based on genetic and historical data, and optimizing hospital workflows. We aim to reduce costs, improve patient outcomes, and support healthcare professionals with intelligent tools.',
    keyFeatures: [
      'AI-powered diagnostic tools',
      'Personalized treatment planning',
      'Predictive analytics for patient outcomes',
      'Operational efficiency optimization',
      'Drug discovery and research support',
    ],
    useCases: [
      {
        title: 'AfroHealth AI Platform',
        description:
          'An integrated platform for African healthcare providers to access AI-driven insights for diagnosis and patient management, tailored to local needs and data scarcity.',
        image: '/media/AfroHealthAIPlatform.jpg',
      },
      {
        title: 'AI Dashboards and Reporting Tools',
        description:
          'Interactive dashboards providing real-time insights into hospital performance, resource allocation, and patient flow, enabling data-driven decision-making.',
        image: '/media/AIDashboardsandReportingTools.png',
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-web-mobile-applications' },
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-collection-cleaning-analysis' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/software-integrations' },
    ],
  },
  agriculture: {
    slug: 'agriculture',
    title: 'AI in Agriculture',
    description:
      'Applying AI for smart farming, crop yield prediction, pest and disease detection, and resource optimization in agriculture.',
    image: '/media/agriculture.webp',
    fullDescription:
      "We provide AI solutions that empower farmers and agribusinesses with predictive insights and automation. Our technologies help optimize planting and harvesting schedules, manage resources like water and fertilizer more efficiently, and detect issues like pests or diseases early, leading to increased yields and reduced waste.",
    keyFeatures: [
      'Crop yield prediction models',
      'Pest and disease detection',
      'Resource optimization (water, fertilizer)',
      'Automated monitoring and analysis',
      'Supply chain forecasting',
    ],
    useCases: [
      {
        title: 'AgriGrow Farmer Portal',
        description:
          'A web and mobile portal providing farmers with personalized insights, weather forecasts, market prices, and AI-driven recommendations for optimal farming practices.',
        image: '/media/AgriGrowFarmerPortal.png',
      },
      {
        title: 'Disease and Stock Prediction Models',
        description:
          'AI models that predict potential crop diseases or livestock health issues based on environmental data and historical patterns, allowing for proactive intervention.',
        image: '/media/DiseaseandStockPredictionModels.webp',
      },
    ],
    relatedServices: [
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-collection-cleaning-analysis' },
      { name: 'Smart Forecasting Engines', href: '/services/smart-forecasting-engines' },
      { name: 'Cloud Hosting & Deployment', href: '/services/cloud-hosting-deployment' },
    ],
  },
  education: {
    slug: 'education',
    title: 'AI in Education',
    description:
      'Transforming education with AI for personalized learning, automated grading, administrative efficiency, and student support.',
    image: '/media/education.webp',
    fullDescription:
      'Our AI solutions for education aim to create more engaging and effective learning environments. We offer tools for personalized learning paths adapted to individual student needs, automated assessment and feedback systems, and AI assistants to support educators and administrators, improving efficiency and student outcomes.',
    keyFeatures: [
      'Personalized learning platforms',
      'Automated grading and feedback',
      'Student performance analytics',
      'AI-powered tutoring and support',
      'Administrative task automation',
    ],
    useCases: [
      {
        title: 'AI-Powered Learning Platforms',
        description:
          'Adaptive learning platforms that tailor content and pace to each student\'s learning style and progress, providing a truly personalized educational experience.',
        image: '/media/ExperienceswithAI.png', // Replace with an education-specific image if available
      },
      {
        title: 'Smart Administrative Assistants',
        description:
          'AI tools that automate routine administrative tasks for educators and institutions, such as scheduling, communication, and data entry, freeing up time for teaching and student interaction.',
        image: '/media/SmartForecastingEngines.png', // Replace with an education-specific image if available
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-web-mobile-applications' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/software-integrations' },
      { name: 'Staff Training & Technical Support', href: '/services/staff-training-technical-support' },
    ],
  },
  retail: {
    slug: 'retail',
    title: 'AI in Retail',
    description:
      'Enhancing customer experience, optimizing inventory, predicting sales trends, and personalizing marketing in the retail sector using AI.',
    image: '/media/retail.webp',
    fullDescription:
      'We help retail businesses thrive in a competitive landscape with AI-driven insights. Our solutions include AI for personalized product recommendations, demand forecasting to optimize inventory, customer sentiment analysis, and automation of pricing and promotions, leading to increased sales and customer satisfaction.',
    keyFeatures: [
      'Personalized product recommendations',
      'Demand forecasting and inventory optimization',
      'Customer sentiment analysis',
      'Automated pricing and promotions',
      'Fraud detection',
    ],
    useCases: [
      {
        title: 'RetailSense E-commerce',
        description:
          'An AI-enhanced e-commerce platform providing personalized shopping experiences, intelligent search, and predictive insights for online retailers.',
        image: '/media/RetailSenseE-commerce.jpg',
      },
      {
        title: 'Smart Forecasting Engines',
        description:
          'AI models that analyze sales data, market trends, and external factors to provide accurate demand forecasts, enabling better inventory management and reducing stockouts or overstock.',
        image: '/media/SmartForecastingEngines.png',
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-web-mobile-applications' },
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-collection-cleaning-analysis' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/software-integrations' },
    ],
  },
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const industrySlug = props?.params?.industrySlug;
  const industry = industryDetailsData[industrySlug];

  if (!industry) {
    return {
      title: 'Industry Not Found | Grittrix AI Solutions',
      description: 'This industry page does not exist.',
    };
  }

  return {
    title: `${industry.title} | Grittrix AI Solutions`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(industryDetailsData).map((slug) => ({
    industrySlug: slug,
  }));
}

export default function IndustryPage({ params }: { params: { industrySlug: string } }) {
  const industry = industryDetailsData[params.industrySlug];

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Industries', href: '/industries' },
    { name: industry.title },
  ];

  return (
    <>
      <PageHeader title={industry.title} description={industry.description} breadcrumbs={breadcrumbs} />

      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-lg md:text-xl text-foreground/90 mb-12">{industry.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Key Features</h2>
              <ul className="space-y-4 text-foreground/80">
                {industry.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Related Services</h2>
              <ul className="space-y-4">
                {industry.relatedServices.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center">
                       <svg className="flex-shrink-0 w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                       {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {industry.useCases && industry.useCases.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-8 text-center">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {industry.useCases.map((useCase, index) => (
                  <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                    <div className="relative w-full h-48">
                       <Image
                          src={useCase.image}
                          alt={useCase.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="object-cover object-center"
                        />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-headline text-foreground mb-3">{useCase.title}</h3>
                      <p className="text-foreground/80 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Consider adding a Contact/CTA section */}
    </>
  );
}