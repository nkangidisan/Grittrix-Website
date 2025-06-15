
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, ShieldCheck, Database, BarChart, Gift, Server, Globe, Lock, RotateCcw, Users } from 'lucide-react';
import Link from 'next/link';

const hostingFeatures = [
  { title: "Blazing Fast Performance", description: "Leverage our optimized infrastructure for rapid load times and smooth user experiences, critical for AI applications.", icon: Zap },
  { title: "Rock-Solid Security", description: "State-of-the-art security measures to protect your data and applications, ensuring compliance and peace of mind.", icon: ShieldCheck },
  { title: "Scalable Resources", description: "Easily scale your hosting resources up or down based on demand, ensuring your applications always perform optimally.", icon: BarChart },
  { title: "Reliable Infrastructure", description: "High uptime guarantees and robust infrastructure built for the demands of modern AI and web applications.", icon: Database },
  { title: "Expert Support", description: "Access to our team of hosting experts for any assistance you may need, 24/7.", icon: Users },
];

const pricingPlans = [
  { 
    name: "Free Trial", 
    price: "$0", 
    period: "/ 30 Days", 
    features: [
        "Test Basic AI Models", 
        "1GB SSD Storage", 
        "100GB Bandwidth", 
        "Shared Resources", 
        "Web and app hosting (Basic)",
        "SSL encryption",
        "Community Support"
    ], 
    recommended: false, 
    cta: "Start Free Trial",
    icon: Gift 
  },
  { 
    name: "Starter AI", 
    price: "$10", 
    period: "/month", 
    features: [
        "Basic AI Model Hosting", 
        "10GB SSD Storage", 
        "1TB Bandwidth", 
        "Shared CPU & RAM", 
        "Web and app hosting",
        "Custom domains",
        "SSL encryption",
        "Daily backups",
        "Local support (Email)"
    ], 
    recommended: false, 
    cta: "Get Started",
    icon: Server
  },
  { 
    name: "Pro AI", 
    price: "$30", 
    period: "/month", 
    features: [
        "Advanced AI Model Hosting", 
        "50GB NVMe Storage", 
        "5TB Bandwidth", 
        "Dedicated CPU & RAM options", 
        "Web and app hosting",
        "Custom domains",
        "SSL encryption",
        "Daily backups",
        "Local support (Priority)"
    ], 
    recommended: true, 
    cta: "Choose Pro",
    icon: Zap 
  },
  { 
    name: "Enterprise AI", 
    price: "Custom", 
    period: "", 
    features: [
        "Fully Managed Hosting", 
        "Custom AI Infrastructure", 
        "Scalable High-Performance Clusters", 
        "Web and app hosting (Dedicated)",
        "Custom domains & Advanced DNS",
        "SSL encryption (Premium)",
        "Daily backups & Disaster Recovery",
        "Local support (24/7 Premium)",
        "SLA Guarantees"
    ], 
    recommended: false, 
    cta: "Contact Sales",
    icon: Globe
  },
];

export default function HostingPage() {
  const breadcrumbs = [{ name: 'Hosting' }];

  return (
    <>
      <PageHeader
        title="AI-Optimized Hosting Solutions"
        description="Reliable, scalable, and secure hosting specifically designed for AI-powered applications and high-traffic websites. Powered by Grittrix infrastructure."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Host Your Future with Grittrix</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our hosting platform is engineered to meet the demanding requirements of AI applications, ensuring optimal performance, security, and scalability for your projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hostingFeatures.map(feature => (
              <div key={feature.title} className="p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                    <div className="p-2 bg-accent/10 rounded-md mr-3">
                        <feature.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold font-headline text-primary">{feature.title}</h3>
                </div>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Flexible Pricing Plans</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans come with our commitment to excellence and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <Card key={plan.name} className={`flex flex-col ${plan.recommended ? 'border-2 border-accent shadow-accent/30 shadow-lg' : 'bg-card'}`}>
                  {plan.recommended && <div className="py-1 px-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center rounded-t-lg -mb-px">Most Popular</div>}
                  <CardHeader className="text-center">
                    {PlanIcon && (
                        <div className="flex justify-center mb-3">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <PlanIcon className="h-8 w-8 text-primary" />
                            </div>
                        </div>
                    )}
                    <CardTitle className="font-headline text-2xl text-primary">{plan.name}</CardTitle>
                    <p className="text-4xl font-bold text-foreground my-2">
                      {plan.price}
                      {plan.period && <span className="text-sm font-normal text-foreground/70">{plan.period}</span>}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      className={`w-full ${plan.recommended ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : plan.name === "Free Trial" ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
                    >
                      <Link href={`/contact?subject=Hosting Plan: ${plan.name}`}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
           <p className="text-center mt-12 text-sm text-foreground/70">
            Need a custom solution? <Link href="/contact?subject=Custom Hosting Inquiry" className="text-accent hover:underline">Contact us</Link> for enterprise and tailored hosting packages.
          </p>
        </div>
      </section>
    </>
  );
}
