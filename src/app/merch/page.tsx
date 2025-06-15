import { PageHeader } from '@/components/PageHeader';
import { MerchandiseItemCard } from '@/components/sections/MerchandiseItem';
import type { MerchandiseItem } from '@/lib/types';

const merchandiseItems: MerchandiseItem[] = [
  { id: '1', name: 'Grittrix AI Tee', price: '$29.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'tshirt mockup', description: 'Comfortable cotton tee with the Grittrix logo.' },
  { id: '2', name: 'Grittrix "Innovate" Hoodie', price: '$59.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'hoodie mockup', description: 'Premium hoodie, perfect for tech enthusiasts.' },
  { id: '3', name: 'Grittrix Data Mug', price: '$19.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'mug mockup', description: 'Start your day with AI-powered inspiration.' },
  { id: '4', name: 'Grittrix Tech Cap', price: '$24.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'cap mockup', description: 'Stylish cap featuring the Grittrix emblem.' },
  { id: '5', name: 'Grittrix AI Notebook', price: '$15.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'notebook mockup', description: 'Jot down your brilliant AI ideas.' },
  { id: '6', name: 'Grittrix "Future" Sticker Pack', price: '$9.99', imageUrl: 'https://placehold.co/400x400.png', imageHint: 'sticker mockup', description: 'Decorate your gear with Grittrix pride.' },
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
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Get your hands on exclusive Grittrix merchandise. Perfect for tech enthusiasts, AI practitioners, and supporters of innovation in emerging markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {merchandiseItems.map((item) => (
              <MerchandiseItemCard key={item.id} item={item} />
            ))}
          </div>
           <div className="text-center mt-16">
            <p className="text-foreground/70">Our merchandise store is currently under development. Stay tuned for updates!</p>
          </div>
        </div>
      </section>
    </>
  );
}
