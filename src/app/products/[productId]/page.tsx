// src/app/products/[productId]/page.tsx

import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import Image from 'next/image'; // Temporarily removed
// import { Button } from '@/components/ui/button'; // Temporarily removed
// import Link from 'next/link'; // Temporarily removed
import { productsList } from '@/app/products/page';
// import { PageHeader } from '@/components/PageHeader'; // Temporarily removed

export async function generateMetadata(props: { params: { productId: string } }): Promise<Metadata> {
  const productId = props?.params?.productId;
  const product = productsList.find(
    (p) => p.id.toLowerCase() === productId?.toLowerCase()
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
      console.warn(`[generateMetadata product] Failed to construct absolute image URL for ${productId}: ${(e as Error).message}. NEXT_PUBLIC_DOMAIN_URL: "${domainBase}", image: "${product.imageUrl}"`);
       if (product.imageUrl) { // Fallback to relative if URL construction fails
         openGraphImages = [{ url: product.imageUrl, alt: `Image for ${product.name}` }];
       }
    }
  } else {
    if (!domainBase) {
      console.warn(`[generateMetadata product] NEXT_PUBLIC_DOMAIN_URL is not set. Open Graph images will be relative or omitted for ${productId}.`);
    }
     if (product.imageUrl) { // Use relative URL if domainBase is not set but imageUrl exists
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

export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId;
  const product = productsList.find(
    (p) => p.id.toLowerCase() === productId?.toLowerCase()
  );

  if (!product) {
    notFound();
    return null;
  }

  // const breadcrumbs = [ // Temporarily removed
  //   { name: 'Products', href: '/products' },
  //   { name: product.name },
  // ];

  return (
    <>
      {/* <PageHeader // Temporarily removed
        title={product.name}
        description={product.tagline}
        breadcrumbs={breadcrumbs}
      /> */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold font-headline text-primary mb-4">{product.name}</h1>
          <p className="text-xl text-foreground/80 mb-6">{product.tagline}</p>
          <hr className="my-8 border-border" />
          <h2 className="text-2xl font-bold font-headline text-primary mb-4">
            About {product.name}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
            {product.description}
          </p>
          {/* Image and features temporarily removed for diagnostics */}
          {/*
          {product.imageUrl && (
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl my-8">
              <Image
                src={product.imageUrl}
                alt={`Image of ${product.name}`}
                fill
                className="object-cover"
                data-ai-hint={`${product.id.toLowerCase()} interface`}
                priority
              />
            </div>
          )}

          {product.features?.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold font-headline text-primary mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
                Request More Information
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="ml-4">
              <Link href="/products">Back to All Products</Link>
            </Button>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
