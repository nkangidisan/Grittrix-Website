
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
// Image, Button, Link, ArrowLeft, PageHeader were removed for diagnostics
import { productsList } from '@/app/products/page'; // This is the source of products

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
  let openGraphImages;

  if (domainBase && product.imageUrl) {
    try {
      const absoluteImageUrl = product.imageUrl.startsWith('http')
        ? product.imageUrl
        : new URL(product.imageUrl, domainBase).toString();
      openGraphImages = [{ url: absoluteImageUrl, alt: `Image for ${product.name}` }];
    } catch (e) {
      console.warn(`[generateMetadata] Failed to construct absolute image URL for ${product.id}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${product.imageUrl}"`);
      openGraphImages = [];
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${product.id}.`);
    }
    openGraphImages = product.imageUrl ? [{ url: product.imageUrl, alt: `Image for ${product.name}` }] : [];
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

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const productId = params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    notFound();
    return null;
  }

  // Simplified content
  return (
    <>
      <section className="py-12 md:py-16 bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-2xl font-bold font-headline text-primary mb-4">About {product.name}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">{product.description}</p>
          <p className="text-foreground/70 mb-4">
            Further product details and features have been temporarily simplified for diagnostics.
          </p>
        </div>
      </section>
    </>
  );
}

    