
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ProductCard } from '@/components/sections/ProductCard';
import type { Product } from '@/lib/types';
import { Cpu, Stethoscope, Store, Sprout, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our AI Products Suite | Grittrix AI Solutions',
  description: 'Discover Grittrix\'s industry-leading AI-powered products for Healthcare, Retail, Agriculture, and Education, built on our CORE AI engine.',
};

// Image URLs updated to user-provided names with .svg extension
export const productsList: Product[] = [
  {
    id: 'CORE',
    name: 'Grittrix CORE™',
    tagline: 'AI Operating System for Industry.',
    description: 'The foundational AI engine powering Grittrix solutions. CORE provides a robust, scalable, and secure platform for developing, deploying, and managing AI models and applications across diverse industrial use cases. It enables seamless data integration, advanced analytics, and intelligent automation for transformative business outcomes.',
    icon: Cpu,
    imageUrl: '/media/core.svg', // Using specific filename from user list
    features: [
      'Unified AI Development Environment',
      'Scalable Model Deployment & Management',
      'Advanced Data Ingestion & Processing Pipelines',
      'Enterprise-Grade Security & Compliance Frameworks',
      'Modular Microservices Architecture for Flexibility',
      'Real-time Analytics & Reporting APIs',
      'Multi-Cloud & On-Premise Compatibility',
    ]
  },
  {
    id: 'Health',
    name: 'Grittrix Health™',
    tagline: 'For clinics and pharmacies.',
    description: 'Empowering healthcare providers with intelligent tools. Grittrix Health™ streamlines clinic workflows, optimizes pharmacy inventory, enhances diagnostic support through AI-assisted image analysis, and enables personalized patient care via predictive analytics for improved health outcomes.',
    icon: Stethoscope,
    imageUrl: '/media/health.svg', // Using specific filename from user list
    features: [
      'AI-Assisted Medical Image Analysis (X-rays, Scans)',
      'Predictive Patient Triage & Risk Stratification',
      'Smart Pharmacy Inventory & Expiry Management',
      'Personalized Treatment Plan Adherence Monitoring',
      'Automated Health Record Summarization & Insights',
      'Telemedicine Platform Integration & AI Chatbots',
      'Disease Outbreak Prediction & Monitoring',
    ]
  },
  {
    id: 'Retail',
    name: 'Grittrix Retail™',
    tagline: 'For retail shops and FMCG.',
    description: 'Transforming retail operations and customer experiences with AI. Grittrix Retail™ offers solutions for intelligent demand forecasting, dynamic inventory optimization, hyper-personalized customer engagement, and streamlined supply chain management, helping businesses boost sales and operational efficiency.',
    icon: Store,
    imageUrl: '/media/retail.svg', // Using specific filename from user list
    features: [
      'AI-Powered Demand & Sales Forecasting',
      'Automated Inventory Replenishment & Optimization',
      'Personalized Product Recommendations & Marketing',
      'Dynamic Pricing & Promotion Strategies',
      'Supply Chain Visibility & Logistics Optimization',
      'Customer Sentiment Analysis & Churn Prediction',
      'Smart Store Layout & Shelf Management Insights',
    ]
  },
  {
    id: 'Agro',
    name: 'Grittrix Agro™',
    tagline: 'Smart agriculture insights.',
    description: 'Revolutionizing agriculture with data-driven intelligence. Grittrix Agro™ provides advanced tools for real-time crop monitoring, precise yield prediction, early pest and disease detection, and optimized resource management, promoting sustainable and highly productive farming practices.',
    icon: Sprout,
    imageUrl: '/media/agriculture.svg', // Using specific filename from user list
    features: [
      'AI-Driven Crop Health Monitoring (Satellite/Drone Imagery)',
      'Precision Irrigation & Fertilization Recommendations',
      'Automated Pest & Plant Disease Detection',
      'Accurate Yield Prediction & Harvest Planning',
      'Soil Data Analysis & Nutrient Management',
      'Weather Pattern Analysis & Climate Adaptation Strategies',
      'Market Linkage & Price Trend Forecasting',
    ]
  },
  {
    id: 'Learn',
    name: 'Grittrix Learn™',
    tagline: 'Education analytics & AI tutors.',
    description: 'Personalizing education and empowering learners with AI. Grittrix Learn™ offers adaptive learning platforms, intelligent AI tutoring systems, and comprehensive analytics to enhance student engagement, improve learning outcomes, and support educators in creating impactful educational experiences.',
    icon: GraduationCap,
    imageUrl: '/media/education.svg', // Using specific filename from user list
    features: [
      'Adaptive Learning Paths & Personalized Content Delivery',
      'AI-Powered Intelligent Tutoring System (24/7 Support)',
      'Student Performance Analytics & Progress Dashboards',
      'Automated Assessment Generation & Grading Assistance',
      'Personalized Skill Gap Analysis & Learning Recommendations',
      'Teacher Support Tools & Resource Optimization',
      'Corporate Training & Upskilling Modules',
    ]
  },
];

export default function ProductsPage() {
  const breadcrumbs = [{ name: 'Products' }];

  return (
    <>
      <PageHeader
        title="Explore Our Tech Suite"
        description="Discover Grittrix's industry-leading AI-powered products, meticulously engineered to address complex challenges and drive transformative results across key sectors."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Innovate with Grittrix</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Each Grittrix product is built on our powerful CORE™ AI engine, tailored to deliver specialized capabilities and unlock unparalleled value in your sector. We provide solutions that are not just intelligent, but also accessible and impactful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
    
