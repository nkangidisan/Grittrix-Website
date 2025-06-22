
import type { IndustryDetails } from '@/lib/types';

export interface IndustryOverviewType {
    id: string;
    name: string;
    description: string;
    icon: string;
    imageUrl: string;
    altText: string;
}
  
export const industriesOverview: IndustryOverviewType[] = [
    { 
      id: 'healthcare', 
      name: 'Healthcare', 
      description: 'Revolutionizing patient care with AI-driven diagnostics, personalized medicine, and operational efficiency. Our Grittrix Health™ platform offers predictive patient triage, smart pharmacy inventory management, AI-assisted medical image analysis, and seamless EHR integration for enhanced healthcare delivery in emerging markets.', 
      icon: 'HeartPulse', 
      imageUrl: '/media/health.webp', 
      altText: 'AI in Healthcare illustration: advanced diagnostics and patient care by Grittrix' 
    },
    { 
      id: 'retail', 
      name: 'Retail & E-commerce', 
      description: 'Transforming customer experiences with AI-powered personalization, supply chain optimization, and intelligent inventory management. Grittrix Retail™ provides AI sales forecasting, automated inventory replenishment, dynamic pricing, and customer sentiment analysis to boost sales and efficiency for online and physical stores.', 
      icon: 'ShoppingCart', 
      imageUrl: '/media/retail.webp', 
      altText: 'AI in Retail illustration: personalized e-commerce experiences by Grittrix' 
    },
    { 
      id: 'agriculture', 
      name: 'Agriculture', 
      description: 'Enhancing food security with AI-driven precision farming, crop monitoring, and yield prediction. Grittrix Agro™ features AI crop health monitoring via satellite/drone imagery, precision irrigation/fertilization advice, automated pest detection, and market linkage tools for sustainable and productive agriculture.', 
      icon: 'Leaf', 
      imageUrl: '/media/agriculture.webp', 
      altText: 'AI in Agriculture illustration: precision farming and crop monitoring by Grittrix' 
    },
    { 
      id: 'education', 
      name: 'Education', 
      description: 'Personalizing learning journeys with adaptive AI tutors, intelligent content delivery, and data-driven insights. Grittrix Learn™ offers adaptive learning paths, 24/7 AI tutoring, student performance analytics, automated assessment assistance, and teacher support tools to improve educational outcomes and efficiency.', 
      icon: 'BookOpen', 
      imageUrl: '/media/education.webp', 
      altText: 'AI in Education illustration: adaptive learning and intelligent tutoring by Grittrix' 
    },
];

export const industryDetailsData: { [key: string]: IndustryDetails } = {
  healthcare: {
    slug: 'healthcare',
    title: 'AI in Healthcare',
    description:
      'Leveraging AI for improved patient care, diagnostics, drug discovery, and operational efficiency in healthcare.',
    image: '/media/health.webp',
    dataAiHint: 'healthcare technology',
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
      { name: 'Software Integrations', href: '/services/integrations' },
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
        image: '/media/education.webp',
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
      { name: 'Software Integrations', href: '/services/integrations' },
      { name: 'Staff Training & Technical Support', href: '/services/training-support' },
    ],
  },
  retail: {
    slug: 'retail',
    title: 'AI in Retail',
    description:
      'Enhancing customer experience, optimizing inventory, predicting sales trends, and personalizing marketing in the retail sector using AI.',
    image: '/media/retail.webp',
    dataAiHint: 'retail technology',
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
      { name: 'Software Integrations', href: '/services/integrations' },
    ],
  },
};
