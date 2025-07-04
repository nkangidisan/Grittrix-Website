
import type { Product } from '@/lib/types';

export const productsList: Product[] = [
  {
    id: 'CORE',
    name: 'Grittrix CORE™',
    tagline: 'The AI Operating System for Business Automation.',
    description: 'The foundational AI engine powering Grittrix solutions. CORE is a robust AI-powered tool for developing and deploying applications that automate processes. It enables seamless data integration, advanced analytics, and intelligent automation for transformative business outcomes. A key AI solution for businesses aiming to scale.',
    icon: 'Cpu',
    imageUrl: '/media/core.png', 
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
    tagline: 'AI-Powered Tools for Clinics and Pharmacies.',
    description: 'An AI-powered tool empowering healthcare providers. Grittrix Health™ streamlines clinic workflows, optimizes pharmacy inventory, enhances diagnostic support through AI-assisted image analysis, and enables personalized patient care via predictive analytics. A complete AI solution to automate healthcare processes.',
    icon: 'Stethoscope',
    imageUrl: '/media/health.webp', 
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
    tagline: 'Automate Your Retail Processes with AI.',
    description: 'Transform retail operations and customer experiences with this AI-powered tool. Grittrix Retail™ offers solutions for intelligent demand forecasting, dynamic inventory optimization, hyper-personalized customer engagement, and streamlined supply chain management. The perfect AI solution for businesses in retail.',
    icon: 'Store',
    imageUrl: '/media/retail.webp', 
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
    tagline: 'AI-Powered Tools for Smart Agriculture.',
    description: 'Revolutionizing agriculture with data-driven intelligence. Grittrix Agro™ is an AI-powered tool providing advanced capabilities for real-time crop monitoring, precise yield prediction, early pest and disease detection, and optimized resource management to automate farming processes.',
    icon: 'Sprout',
    imageUrl: '/media/agriculture.webp', 
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
    tagline: 'AI-Powered Tools for Education.',
    description: 'Personalizing education and empowering learners with AI. Grittrix Learn™ is an AI-powered tool offering adaptive learning platforms, intelligent AI tutoring systems, and comprehensive analytics to enhance student engagement and outcomes. Automate educational support and administration.',
    icon: 'GraduationCap',
    imageUrl: '/media/education.webp', 
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
