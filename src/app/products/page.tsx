import { PageHeader } from '@/components/PageHeader';
import { ProductCard } from '@/components/sections/ProductCard';
import type { Product } from '@/lib/types';
import { Cpu, Stethoscope, Store, Sprout, GraduationCap } from 'lucide-react';

const productsList: Product[] = [
  { 
    id: 'CORE', 
    name: 'Grittrix CORE™', 
    tagline: 'The Central AI Engine for Your Enterprise.',
    description: 'A robust and scalable AI platform that serves as the foundation for developing and deploying custom AI solutions across your organization. Integrates seamlessly with existing systems.',
    icon: Cpu, 
    imageUrl: 'https://placehold.co/400x300.png', 
    imageHint: 'AI core processor',
    features: ['Modular Architecture', 'Scalable Processing', 'Advanced Data Security', 'Multi-Model Support', 'API Integrations']
  },
  { 
    id: 'Health', 
    name: 'Grittrix Health™', 
    tagline: 'AI-Powered Insights for Better Healthcare Outcomes.',
    description: 'A suite of AI tools for the healthcare industry, including diagnostic support, patient risk stratification, personalized treatment planning, and hospital operations optimization.',
    icon: Stethoscope, 
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'medical AI analysis',
    features: ['Medical Image Analysis', 'Predictive Diagnostics', 'Patient Outcome Prediction', 'Resource Optimization', 'Telehealth Integration']
  },
  { 
    id: 'Retail', 
    name: 'Grittrix Retail™', 
    tagline: 'Intelligent Solutions for Smarter Retail Operations.',
    description: 'AI-driven platform for retailers to enhance customer experiences, optimize inventory, personalize marketing, and streamline supply chain management.',
    icon: Store, 
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'retail analytics dashboard',
    features: ['Personalized Recommendations', 'Demand Forecasting', 'Inventory Optimization', 'Customer Segmentation', 'Automated Customer Service']
  },
  { 
    id: 'Agro', 
    name: 'Grittrix Agro™', 
    tagline: 'Precision AI for Sustainable and Productive Agriculture.',
    description: 'AI solutions for modern farming, including crop monitoring, yield prediction, pest and disease detection, and resource management for sustainable agriculture.',
    icon: Sprout, 
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'agritech farm data',
    features: ['Crop Health Monitoring', 'Yield Prediction', 'Precision Irrigation', 'Pest & Disease Detection', 'Market Linkage Tools']
  },
  { 
    id: 'Learn', 
    name: 'Grittrix Learn™', 
    tagline: 'Adaptive AI for Personalized Education and Skill Development.',
    description: 'An AI-powered learning platform that offers personalized learning paths, adaptive assessments, and intelligent tutoring to enhance educational experiences for students and professionals.',
    icon: GraduationCap, 
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'e-learning platform interface',
    features: ['Adaptive Learning Paths', 'Personalized Content', 'Automated Assessment', 'Skill Gap Analysis', 'Corporate Training Modules']
  },
];

export default function ProductsPage() {
  const breadcrumbs = [{ name: 'Products' }];

  return (
    <>
      <PageHeader
        title="Our Flagship Products"
        description="Discover Grittrix's suite of AI-powered products, meticulously designed to address specific industry needs and drive transformative results."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Innovate with Grittrix</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Each Grittrix product is built on our core AI engine, tailored to deliver specialized capabilities and unlock new value in your sector.
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
