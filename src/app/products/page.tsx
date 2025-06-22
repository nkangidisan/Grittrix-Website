
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ProductCard } from '@/components/sections/ProductCard';
import { productsList } from '@/lib/productsData';

export const metadata: Metadata = {
  title: 'Our AI Products Suite | Grittrix AI Solutions',
  description: 'Discover Grittrix\'s industry-leading AI-powered products for Healthcare, Retail, Agriculture, and Education, built on our CORE AI engine. Each product offers comprehensive features to drive transformation.',
};

export default function ProductsPage() {
  const breadcrumbs = [{ name: 'Products' }];

  return (
    <>
      <PageHeader
        title="Explore Our Tech Suite"
        description="Discover Grittrix's industry-leading AI-powered products, meticulously engineered to address complex challenges and drive transformative results across key sectors. Each product provides a rich set of features detailed below."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Innovate with Grittrix</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Each Grittrix product is built on our powerful CORE™ AI engine, tailored to deliver specialized capabilities and unlock unparalleled value in your sector. We provide solutions that are not just intelligent, but also accessible and impactful. Find more details for each product below.
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
