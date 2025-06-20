import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { productsList } from '@/app/products/page';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata(props: any): Promise<Metadata> {
  const productId = props?.params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: 'This product could not be found.',
    };
  }

  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : new URL(product.imageUrl, domainBase).toString();

  return {
    title: `${product.name} | Grittrix Products`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} | Grittrix Products`,
      description: product.tagline,
      images: [{ url: absoluteImageUrl, alt: `Image for ${product.name}` }],
    },
  };
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    notFound();
    return null;
  }

  return (
    <>
      {/* Simplified Header */}
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
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={product.imageUrl}
              alt={`${product.name} - ${product.tagline || 'Product image'}`}
              fill
              className="object-cover"
              priority
              data-ai-hint={`${product.id.toLowerCase()} interface`}
            />
          </div>

          <h2 className="text-2xl font-bold font-headline text-primary mb-4">About {product.name}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">{product.description}</p>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-foreground/70 mb-4">
              For a comprehensive overview of all our offerings, please visit our main products
              page or contact our expert team for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/products" className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to All Products
                </Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/contact?subject=Inquiry%20about%20${encodeURIComponent(product.name)}`}>
                  Contact Us for More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
