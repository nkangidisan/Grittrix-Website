
// src/app/products/[productId]/page.tsx
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsList } from '@/app/products/page';

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const product = productsList.find(
    (p) => p.id.toLowerCase() === params.productId?.toLowerCase()
  );

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
      console.warn(`[generateMetadata product] Failed to construct absolute image URL for ${params.productId}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${product.imageUrl}"`);
       if (product.imageUrl) {
         openGraphImages = [{ url: product.imageUrl, alt: `Image for ${product.name}` }];
       }
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata product] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${params.productId}.`);
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
  return productsList.map((product) => ({
    productId: product.id.toLowerCase(),
  }));
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = productsList.find(
    (p) => p.id.toLowerCase() === params.productId?.toLowerCase()
  );

  if (!product) {
    notFound();
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
         <h1 className="text-4xl font-bold font-headline text-primary mb-4">{product.name}</h1>
         <p className="text-lg font-semibold text-primary/90 mb-6">{product.tagline}</p>
         <div className="text-lg text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
           {product.description.split('\n\n').map((paragraph, index) => (
             <p key={index} className="mb-4">{paragraph}</p>
           ))}
         </div>
      </div>
    </section>
  );
}
