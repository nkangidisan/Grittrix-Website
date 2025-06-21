
import type { Service } from '@/lib/types';
import {
  LayoutDashboard, TrendingUp, Activity, MonitorSmartphone, CloudCog, Cable, DatabaseZap, UsersRound
} from 'lucide-react';
import type { ElementType } from 'react';

export const servicesList: Service[] = [
  { id: '1', title: 'AI Dashboards & Reporting Tools', description: 'Transform raw data into strategic assets with intuitive, real-time analytics dashboards tailored to your needs.', icon: LayoutDashboard as ElementType, detailsUrl: '/services/ai-dashboards' },
  { id: '2', title: 'Smart Forecasting Engines', description: 'Utilize machine learning to accurately predict demand, sales, and resource needs, optimizing planning and mitigating risks.', icon: TrendingUp as ElementType, detailsUrl: '/services/forecasting' },
  { id: '3', title: 'Disease & Stock Prediction Models', description: 'Leverage AI to anticipate health trends and optimize inventory with advanced predictive modeling for better preparedness.', icon: Activity as ElementType, detailsUrl: '/services/prediction-models' },
  { id: '4', title: 'Custom Web & Mobile Applications', description: 'Develop high-performance, scalable web and mobile solutions with AI integration for enhanced user experiences.', icon: MonitorSmartphone as ElementType, detailsUrl: '/services/custom-applications' },
  { id: '5', title: 'Cloud Hosting & Deployment', description: 'Securely host and deploy your applications on optimized cloud infrastructure, ensuring scalability and reliability.', icon: CloudCog as ElementType, detailsUrl: '/services/cloud-services' },
  { id: '6', title: 'Software Integrations', description: 'Seamlessly connect your critical systems (POS, EHR, LMS, CRMs) for unified data flow and operational efficiency.', icon: Cable as ElementType, detailsUrl: '/services/integrations' },
  { id: '7', title: 'Data Collection, Cleaning, & Analysis', description: 'Unlock the power of your data with end-to-end services from collection and preparation to deep analysis and insights.', icon: DatabaseZap as ElementType, detailsUrl: '/services/data-analytics-services' },
  { id: '8', title: 'Staff Training & Technical Support', description: 'Empower your team with comprehensive training and reliable technical support to maximize technology adoption.', icon: UsersRound as ElementType, detailsUrl: '/services/training-support' },
];
