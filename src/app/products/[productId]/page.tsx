
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image'; // Restored for basic image display
import { Button } from '@/components/ui/button'; // Restored for basic CTA
import Link from 'next/link'; // Restored for basic CTA
import { productsList } from '@/app/products/page';

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const productId = params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: 'This product could not be found.',
    };
  }

  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL;
  let openGraphImages: Array<{ url: string; alt?: string; width?: number; height?: number; }> = [];

  if (domainBase && product.imageUrl) {
    try {
      const absoluteImageUrl = product.imageUrl.startsWith('http')
        ? product.imageUrl
        : new URL(product.imageUrl, domainBase).toString();
      openGraphImages = [{ url: absoluteImageUrl, alt: `Image for ${product.name}` }];
    } catch (e) {
      console.warn(`[generateMetadata product] Failed to construct absolute image URL for ${product.id}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${product.imageUrl}"`);
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata product] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${product.id}.`);
    }
    if (product.imageUrl) {
      openGraphImages = [{ url: product.imageUrl, alt: `Image for ${product.name}` }];
    }
  }

  return {
    title: `${product.name} | Grittrix Products`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} | Grittrix Products`,
      description: product.tagline,
      images: openGraphImages,
    },
  };
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

// Using (props: any) as a workaround for the specific build environment PageProps constraint
export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    notFound();
    return null;
  }

  return (
    <>
      {/* Simplified PageHeader - direct rendering */}
      <section className="py-12 md:py-16 bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li><Link href="/" className="text-foreground/70 hover:text-primary text-sm">Home</Link></li>
              <li><span className="text-foreground/50 mx-2">/</span><Link href="/products" className="text-foreground/70 hover:text-primary text-sm">Products</Link></li>
              <li><span className="text-foreground/50 mx-2">/</span><span className="text-sm font-medium text-primary">{product.name}</span></li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-3">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="text-lg text-foreground/80 max-w-3xl">{product.tagline}</p>
          )}
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {product.imageUrl && (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={product.imageUrl}
                  alt={`Image of ${product.name}`}
                  fill
                  className="object-cover"
                  data-ai-hint={`${product.id.toLowerCase()} interface`}
                />
              </div>
            )}
            <div className={!product.imageUrl ? 'md:col-span-2' : ''}>
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">About {product.name}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold font-headline text-primary mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
                <span>Request More Information</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="ml-4">
              <Link href="/products">
                <span>Back to All Products</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
