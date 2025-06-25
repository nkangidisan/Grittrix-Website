
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { productsList } from '@/lib/productsData';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Cpu, Stethoscope, Store, Sprout, GraduationCap, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { ElementType } from 'react';

const iconMap: { [key: string]: ElementType } = {
  Cpu, Stethoscope, Store, Sprout, GraduationCap
};

interface ProductDetailPageProps {
  params: { productId: string };
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { productId } = params;
  const product = productsList.find((p) => p.id === productId);

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
    };
  }

  return {
    title: `${product.name} | Grittrix AI Products`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return productsList.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = params;
  const product = productsList.find((p) => p.id === productId);
  if (!product) notFound();

  const IconComponent = iconMap[product.icon] || HelpCircle;

  const breadcrumbs = [
    { name: 'Products', href: '/products' },
    { name: product.name },
  ];

  return (
    <>
      <PageHeader
        title={product.name}
        description={product.tagline}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
               <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={`${product.id.toLowerCase()} interface`}
                priority
                />
            </div>
            <div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                        <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline text-primary">{product.name}</h2>
                </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{product.description}</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
             <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">Key Features</h3>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start bg-card p-4 rounded-lg shadow-md">
                        <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                    </div>
                 ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
