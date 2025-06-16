
import type { Metadata, ResolvingMetadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import type { Product } from '@/lib/types';
import { productsList } from '@/app/products/page';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';

type Props = {
  params: { productId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = params.productId.toLowerCase();
  const product = productsList.find(p => p.id.toLowerCase() === productId);

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: `${product.name} | Grittrix Products`,
    description: product.tagline,
    openGraph: {
        title: `${product.name} | Grittrix Products`,
        description: product.tagline,
        images: [{ url: product.imageUrl, alt: product.name }],
    }
  };
}


export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = productsList.find(p => p.id.toLowerCase() === params.productId.toLowerCase());

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Products', href: '/products' },
    { name: product.name }
  ];

  const IconComponent = product.icon;
  const imageAltText = product.imageHint ? `${product.name} - ${product.imageHint}` : `${product.name} product visualization by Grittrix`;

  return (
    <>
      <PageHeader
        title={product.name}
        description={product.tagline}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-24">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl mb-8">
                <Image
                  src={product.imageUrl} 
                  alt={imageAltText}
                  fill
                  className="object-cover"
                  priority={product.id === 'CORE'} 
                  {...(product.imageUrl.startsWith('https://placehold.co') && product.imageHint && { 'data-ai-hint': product.imageHint })}
                />
              </div>
              <div className="flex items-center space-x-3 mb-4 p-4 bg-secondary/10 rounded-lg">
                <div className="p-3 bg-primary/20 rounded-lg">
                    <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-headline text-primary">{product.name}</h2>
                    <p className="text-md text-accent font-semibold">{product.tagline}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-headline text-primary mb-3">Product Overview</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">{product.description}</p>

              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold font-headline text-primary mb-4">Key Features & Benefits</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-6 bg-card rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold font-headline text-primary mb-3 flex items-center">
                    <Zap className="h-6 w-6 text-accent mr-2"/>
                    Transform Your Business
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {product.name} is designed to integrate seamlessly into your operations, providing immediate value and long-term strategic advantages.
                </p>
                <Button size="lg" asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/contact?subject=Inquiry about ${product.name}`}>Request a Demo or Consultation</Link>
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-3">Potential Use Cases</h3>
                <p className="text-foreground/80 text-sm">Detailed use cases and success stories coming soon. Contact us to learn how {product.name} can be applied to your specific challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

    