
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { MerchandiseItemCard } from '@/components/sections/MerchandiseItem';
import type { MerchandiseItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, Package } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Grittrix Merchandise Store | Official AI Gear',
  description: 'Shop official Grittrix merchandise. Show your support for AI innovation with high-quality apparel and accessories.',
};

const merchandiseItems: MerchandiseItem[] = [
  { id: '1', name: 'Grittrix "Innovate" Hoodie', price: '$17', imageUrl: '/media/Grittrixhoodie.png', description: 'Premium hoodie, perfect for tech enthusiasts.' },
  { id: '2', name: 'Grittrix AI Tee', price: '$10', imageUrl: '/media/AITee.png', description: 'Comfortable cotton tee with the Grittrix logo.' },
  { id: '3', name: 'Grittrix Data Mug', price: '$8', imageUrl: '/media/GrittrixDataMug.png', description: 'Mug to start your day with AI-powered inspiration.' },
  { id: '4', name: 'Grittrix Tech Cap', price: '$8', imageUrl: '/media/GrittrixTechCap.png', description: 'Stylish cap featuring the Grittrix emblem.' },
  { id: '5', name: 'Grittrix AI Notebook', price: '$5', imageUrl: '/media/GrittrixAINotebook.png', description: 'Notebook to jot down your brilliant AI ideas.' },
  { id: '6', name: 'Grittrix "Future" Sticker Pack', price: '$12', imageUrl: '/media/GrittrixFutureStickerPack.png', description: 'Sticker pack to decorate your gear with Grittrix pride.' },
  { id: '7', name: 'Grittrix Insulated Bottle', price: '$8', imageUrl: '/media/GrittrixInsulatedBottle.png', description: 'Insulated bottle to stay hydrated while innovating.' },
  { id: '8', name: 'Grittrix Executive Pen', price: '$5', imageUrl: '/media/GrittrixExecutivePen.png', description: 'Sleek pen for your best ideas.' },
];


export default function MerchPage() {
  const breadcrumbs = [{ name: 'Merchandise' }];

  return (
    <>
      <PageHeader
        title="Grittrix Merchandise"
        description="Show your support for AI innovation with official Grittrix gear. High-quality items featuring our logo and tech-inspired designs."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4">Official Grittrix Store</h2>
            <p className="text-2xl font-semibold text-accent mb-2">
              Shop. Represent. Innovate.
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Get your hands on exclusive Grittrix merchandise. Perfect for tech enthusiasts, AI practitioners, and supporters of innovation in emerging markets.
            </p>
            <div className="my-8 relative aspect-[16/9] max-w-3xl mx-auto">
              <Image 
                src="/media/GrittrixMerchandise.png" 
                alt="Grittrix Merchandise Collection banner" 
                fill 
                className="object-contain rounded-lg"/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {merchandiseItems.map((item) => (
              <MerchandiseItemCard key={item.id} item={item} />
            ))}
          </div>
           <div className="mt-16 text-center space-y-6">
            <p className="text-foreground/70">
              Full e-commerce functionality with cart, payments, and automated receipts is under development.
              For now, please contact us for purchases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact?subject=Merchandise Purchase Inquiry">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now (Contact Us)
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                   <Link href="/contact?subject=Merchandise Bulk Order Inquiry">
                    <Package className="mr-2 h-5 w-5" />
                    Bulk Orders for Institutions
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
    
