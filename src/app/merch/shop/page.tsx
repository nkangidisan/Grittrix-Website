import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ShoppingBag, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grittrix Shop | Exclusive Tech Apparel',
  description: 'Shop the exclusive Grittrix tech-fashion collection. Premium apparel for innovators.',
};

export default function ShopPage() {
  const breadcrumbs = [{ name: 'Merchandise', href: '/merch' }, { name: 'Shop' }];

  return (
    <>
      <PageHeader
        title="Grittrix Exclusive Shop"
        description="Browse our full collection of premium tech-fashion. Built to represent, engineered to perform."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-black/5">
            <div className="inline-flex p-6 bg-[#0f5f3d]/10 rounded-full mb-8 text-[#0f5f3d]">
              <Construction className="h-12 w-12" />
            </div>
            <h2 className="text-4xl font-headline font-bold mb-4">Store Under Maintenance</h2>
            <p className="text-gray-500 mb-8 text-lg">
              We are currently optimizing our checkout experience to provide you with the best service possible. Please check back in a few days or contact our team for manual orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] rounded-full px-8 h-14" asChild>
                <Link href="/contact">Inquire about Orders</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14" asChild>
                <Link href="/merch">View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
