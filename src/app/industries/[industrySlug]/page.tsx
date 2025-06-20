
import * as React from 'react';
import type { Metadata } from 'next';
// PageHeader, Image, Link, Button, ArrowLeft, CheckCircle, ExternalLink are temporarily removed for diagnostics
import { notFound } from 'next/navigation';
import type { IndustryDetails, UseCase, RelatedServiceLink } from '@/lib/types'; // Correctly import exported types


const industryDetailsData: { [key: string]: IndustryDetails } = {
  healthcare: {
    slug: 'healthcare',
    title: 'AI in Healthcare',
    description:
      'Leveraging AI for improved patient care, diagnostics, drug discovery, and operational efficiency in healthcare.',
    image: '/media/health.webp',
    dataAiHint: 'healthcare technology',
    fullDescription:
      'Our AI solutions for healthcare focus on accelerating diagnostics through image analysis, personalizing treatment plans based on genetic and historical data, and optimizing hospital workflows. We aim to reduce costs, improve patient outcomes, and support healthcare professionals with intelligent tools. Our Grittrix Health™ platform offers predictive patient triage, smart pharmacy inventory management, AI-assisted medical image analysis, and seamless EHR integration.',
    keyFeatures: [
      'AI-powered diagnostic tools (e.g., medical image analysis)',
      'Personalized treatment planning & adherence monitoring',
      'Predictive analytics for patient outcomes & risk stratification',
      'Operational efficiency optimization (e.g., hospital workflows)',
      'Drug discovery and research support with AI',
      'Smart pharmacy inventory and expiry management',
      'Telemedicine platform integration with AI chatbots'
    ],
    useCases: [
      {
        title: 'AfroHealth AI Platform',
        description:
          'An integrated platform for African healthcare providers to access AI-driven insights for diagnosis and patient management, tailored to local needs and data scarcity.',
        image: '/media/AfroHealthAIPlatform.jpg',
        dataAiHint: 'healthcare platform',
      },
      {
        title: 'AI Dashboards and Reporting Tools',
        description:
          'Interactive dashboards providing real-time insights into hospital performance, resource allocation, and patient flow, enabling data-driven decision-making.',
        image: '/media/AIDashboardsandReportingTools.png',
        dataAiHint: 'healthcare dashboard',
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-applications' },
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-analytics-services' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/integrations' },
    ],
  },
  agriculture: {
    slug: 'agriculture',
    title: 'AI in Agriculture',
    description:
      'Applying AI for smart farming, crop yield prediction, pest and disease detection, and resource optimization in agriculture.',
    image: '/media/agriculture.webp',
    dataAiHint: 'agriculture technology',
    fullDescription:
      "We provide AI solutions that empower farmers and agribusinesses with predictive insights and automation. Grittrix Agro™ technologies help optimize planting and harvesting schedules, manage resources like water and fertilizer more efficiently, and detect issues like pests or diseases early, leading to increased yields and reduced waste. This includes crop health monitoring via satellite/drone imagery and market linkage tools.",
    keyFeatures: [
      'Crop yield prediction models and harvest planning',
      'Pest and disease detection using image recognition',
      'Resource optimization (water, fertilizer, pesticides)',
      'Automated monitoring and analysis (e.g., drone/satellite imagery)',
      'Supply chain forecasting and logistics optimization',
      'Soil data analysis and nutrient management',
      'Weather pattern analysis and climate adaptation strategies'
    ],
    useCases: [
      {
        title: 'AgriGrow Farmer Portal',
        description:
          'A web and mobile portal providing farmers with personalized insights, weather forecasts, market prices, and AI-driven recommendations for optimal farming practices.',
        image: '/media/AgriGrowFarmerPortal.png',
        dataAiHint: 'agriculture portal',
      },
      {
        title: 'Disease and Stock Prediction Models',
        description:
          'AI models that predict potential crop diseases or livestock health issues based on environmental data and historical patterns, allowing for proactive intervention.',
        image: '/media/DiseaseandStockPredictionModels.webp',
        dataAiHint: 'crop prediction',
      },
    ],
    relatedServices: [
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-analytics-services' },
      { name: 'Smart Forecasting Engines', href: '/services/forecasting' },
      { name: 'Cloud Hosting & Deployment', href: '/services/cloud-services' },
    ],
  },
  education: {
    slug: 'education',
    title: 'AI in Education',
    description:
      'Transforming education with AI for personalized learning, automated grading, administrative efficiency, and student support.',
    image: '/media/education.webp',
    dataAiHint: 'education technology',
    fullDescription:
      'Our Grittrix Learn™ AI solutions for education aim to create more engaging and effective learning environments. We offer tools for personalized learning paths adapted to individual student needs, automated assessment and feedback systems, 24/7 AI tutoring, and AI assistants to support educators and administrators, improving efficiency and student outcomes.',
    keyFeatures: [
      'Personalized learning platforms with adaptive content',
      'Automated grading and feedback systems',
      'Student performance analytics and progress dashboards',
      'AI-powered intelligent tutoring systems (24/7 support)',
      'Administrative task automation for educational institutions',
      'Personalized skill gap analysis and learning recommendations',
      'Teacher support tools and resource optimization'
    ],
    useCases: [
      {
        title: 'AI-Powered Learning Platforms',
        description:
          'Adaptive learning platforms that tailor content and pace to each student\'s learning style and progress, providing a truly personalized educational experience.',
        image: '/media/ExperienceswithAI.png',
        dataAiHint: 'learning platform',
      },
      {
        title: 'Smart Administrative Assistants',
        description:
          'AI tools that automate routine administrative tasks for educators and institutions, such as scheduling, communication, and data entry, freeing up time for teaching and student interaction.',
        image: '/media/SmartForecastingEngines.png', 
        dataAiHint: 'education admin',
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-applications' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/integrations' },
      { name: 'Staff Training & Technical Support', href: '/services/training-support' },
    ],
  },
  retail: {
    slug: 'retail',
    title: 'AI in Retail & E-commerce',
    description:
      'Enhancing customer experience, optimizing inventory, predicting sales trends, and personalizing marketing in the retail sector using AI.',
    image: '/media/retail.webp',
    dataAiHint: 'retail technology',
    fullDescription:
      'We help retail businesses thrive in a competitive landscape with AI-driven insights from Grittrix Retail™. Our solutions include AI for personalized product recommendations, demand forecasting to optimize inventory, customer sentiment analysis, and automation of pricing and promotions, leading to increased sales and customer satisfaction. We also offer smart store layout insights.',
    keyFeatures: [
      'Personalized product recommendations and marketing',
      'Demand forecasting and inventory optimization',
      'Customer sentiment analysis and churn prediction',
      'Automated dynamic pricing and promotion strategies',
      'Fraud detection and prevention systems',
      'Supply chain visibility and logistics optimization',
      'Smart store layout and shelf management insights'
    ],
    useCases: [
      {
        title: 'RetailSense E-commerce',
        description:
          'An AI-enhanced e-commerce platform providing personalized shopping experiences, intelligent search, and predictive insights for online retailers.',
        image: '/media/RetailSenseE-commerce.jpg',
        dataAiHint: 'retail e-commerce',
      },
      {
        title: 'Smart Forecasting Engines',
        description:
          'AI models that analyze sales data, market trends, and external factors to provide accurate demand forecasts, enabling better inventory management and reducing stockouts or overstock.',
        image: '/media/SmartForecastingEngines.png',
        dataAiHint: 'retail forecast',
      },
    ],
    relatedServices: [
      { name: 'Custom Web & Mobile Applications', href: '/services/custom-applications' },
      { name: 'Data Collection, Cleaning, and Analysis', href: '/services/data-analytics-services' },
      { name: 'Software Integrations (POS, EHR, LMS, CRMs)', href: '/services/integrations' },
    ],
  },
};

export async function generateMetadata({ params }: { params: { industrySlug: string } }): Promise<Metadata> {
  const industrySlug = params?.industrySlug;
  const industry = industryDetailsData[industrySlug];

  if (!industry) {
    return {
      title: 'Industry Not Found | Grittrix AI Solutions',
      description: 'This industry page does not exist.',
    };
  }
  
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL;
  let openGraphImages: Array<{ url: string; alt?: string; width?: number; height?: number; }> = [];


  if (domainBase && industry.image) {
    try {
      const absoluteImageUrl = industry.image.startsWith('http') 
        ? industry.image 
        : new URL(industry.image, domainBase).toString();
      openGraphImages = [{ url: absoluteImageUrl, alt: industry.title }];
    } catch (e) {
      console.warn(`[generateMetadata industry] Failed to construct absolute image URL for ${industry.slug}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${industry.image}"`);
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata industry] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${industry.slug}.`);
    }
     if (industry.image) {
       openGraphImages = [{ url: industry.image, alt: industry.title }];
     }
  }

  return {
    title: `${industry.title} | Grittrix AI Solutions`,
    description: industry.description,
    openGraph: {
        title: `${industry.title} | Grittrix AI Solutions`,
        description: industry.description,
        images: openGraphImages,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(industryDetailsData).map((slug) => ({
    industrySlug: slug,
  }));
}

export default function IndustryPage(props: any) {
  const industrySlug = props?.params?.industrySlug;
  const industry = industryDetailsData[industrySlug];

  if (!industry) {
    notFound();
    return null; 
  }

  // Breadcrumbs data would be used by PageHeader, which is currently removed for diagnostics
  // const breadcrumbs = [
  //   { name: 'Industries', href: '/industries' },
  //   { name: industry.title },
  // ];

  return (
    <>
      {/* PageHeader is temporarily removed for diagnostics */}
      {/* <PageHeader title={industry.title} description={industry.description} breadcrumbs={breadcrumbs} /> */}

      {/* Simplified content for diagnostics */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold font-headline text-primary mb-4">{industry.title}</h1>
          <p className="text-lg text-foreground/80 mb-8">{industry.description}</p>
          <hr className="my-8 border-border" />
          <h2 className="text-2xl font-bold font-headline text-primary mb-6">Detailed Overview</h2>
          <p className="text-lg md:text-xl text-foreground/90 mb-12">{industry.fullDescription}</p>
        </div>
      </section>

      {/* The following sections are temporarily removed for diagnostics: */}
      {/* Top Image section */}
      {/* Key Features and Related Services grid */}
      {/* Use Cases section */}
      {/* Explore Further CTA section */}
    </>
  );
}
