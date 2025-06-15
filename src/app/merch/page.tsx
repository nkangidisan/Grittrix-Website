
import { PageHeader } from '@/components/PageHeader';
import { MerchandiseItemCard } from '@/components/sections/MerchandiseItem';
import type { MerchandiseItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, Package } from 'lucide-react';

const merchandiseItems: MerchandiseItem[] = [
  { id: '1', name: 'Grittrix "Innovate" Hoodie', price: '$59.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded hoodie mockup', description: 'Premium hoodie, perfect for tech enthusiasts.' },
  { id: '2', name: 'Grittrix AI Tee', price: '$29.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded t-shirt mockup', description: 'Comfortable cotton tee with the Grittrix logo.' },
  { id: '3', name: 'Grittrix Data Mug', price: '$19.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded mug mockup', description: 'Start your day with AI-powered inspiration.' },
  { id: '4', name: 'Grittrix Tech Cap', price: '$24.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded cap mockup', description: 'Stylish cap featuring the Grittrix emblem.' },
  { id: '5', name: 'Grittrix AI Notebook', price: '$15.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded notebook mockup', description: 'Jot down your brilliant AI ideas.' },
  { id: '6', name: 'Grittrix "Future" Sticker Pack', price: '$9.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'laptop stickers mockup', description: 'Decorate your gear with Grittrix pride.' },
  { id: '7', name: 'Grittrix Insulated Bottle', price: '$34.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded water bottle', description: 'Stay hydrated while innovating.' },
  { id: '8', name: 'Grittrix Executive Pen', price: '$12.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded pen mockup', description: 'Sleek pen for your best ideas.' },
  { id: '9', name: 'Grittrix PowerBank', price: '$45.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded powerbank', description: 'Keep your devices charged on the go.' },
  { id: '10', name: 'Grittrix Tech Backpack', price: '$79.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded backpack tech', description: 'Carry your tech in style and comfort.' },
  { id: '11', name: 'Grittrix Phone Holder', price: '$18.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded phone holder', description: 'Convenient holder for your smartphone.' },
  { id: '12', name: 'Grittrix Mouse Pad', price: '$14.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'branded mouse pad', description: 'Smooth surface for precision work.' },
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
