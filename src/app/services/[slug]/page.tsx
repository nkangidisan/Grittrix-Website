import { PageHeader } from '@/components/PageHeader';
import { servicesList } from '@/app/services/page'; // Assuming servicesList is exported or defined in a shared place
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

// This is a simplified placeholder. In a real app, data would come from a CMS or database.
const serviceDetailsData: { [key: string]: any } = {
    'ai-dashboards': { title: 'AI Dashboards & Analytics', description: 'Unlock actionable insights with custom-built AI dashboards.', longDescription: 'Our AI Dashboards & Analytics service empowers your organization to transform raw data into strategic assets. We design and develop intuitive, interactive dashboards that provide real-time insights into your key performance indicators (KPIs), operational metrics, and market trends. By leveraging advanced data visualization techniques and AI-driven analytics, we help you identify patterns, uncover hidden opportunities, and make data-backed decisions with confidence. These dashboards are tailored to your specific industry and business needs, ensuring relevance and maximum impact.', features: ['Real-time data visualization', 'Custom KPI tracking', 'Predictive analytics integration', 'User-friendly interface', 'Mobile-responsive design', 'Secure data handling'], imageHint: 'data dashboard screen' },
    'forecasting': { title: 'Predictive Forecasting', description: 'Leverage machine learning models for accurate demand forecasting.', longDescription: 'Stay ahead of market dynamics with our Predictive Forecasting solutions. We utilize sophisticated machine learning algorithms and statistical models to analyze historical data, identify influencing factors, and generate accurate forecasts for demand, sales, resource allocation, and more. Our approach helps businesses optimize inventory, improve financial planning, mitigate risks, and capitalize on emerging trends. We work closely with you to understand your specific forecasting needs and deliver models that are both robust and interpretable.', features: ['Demand & sales forecasting', 'Financial trend analysis', 'Inventory optimization', 'Resource allocation planning', 'Risk assessment models', 'Scenario modeling'], imageHint: 'financial graphs' },
    // Add more details for other services
};


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceInfo = servicesList.find(s => s.detailsUrl === `/services/${params.slug}`);
  const details = serviceDetailsData[params.slug];

  if (!serviceInfo || !details) {
    notFound();
  }
  
  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: details.title }
  ];

  return (
    <>
      <PageHeader
        title={details.title}
        description={details.description}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={`https://placehold.co/600x400.png`} 
                alt={details.title} 
                layout="fill" 
                objectFit="cover" 
                data-ai-hint={details.imageHint || "technology service"}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">Service Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">{details.longDescription}</p>
              {details.features && details.features.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold font-headline text-primary mb-3">Key Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {details.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-foreground/80">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?subject=Service Inquiry">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// If servicesList is defined in the same file as ServicesPage, ensure it's accessible here for generateStaticParams
// For simplicity, I'm assuming servicesList is available.
// You might need to move servicesList to a shared location or fetch it.
export async function generateStaticParams() {
  return servicesList
    .filter(service => service.detailsUrl)
    .map(service => ({
      slug: service.detailsUrl!.replace('/services/', ''),
    }));
}
