
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';
import { productsList } from '@/app/products/page';
import type { Product } from '@/lib/types';

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const productId = params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: 'This product could not be found.',
    };
  }
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = product.imageUrl.startsWith('http') ? product.imageUrl : new URL(product.imageUrl, domainBase).toString();

  return {
    title: `${product.name} | Grittrix Products`,
    description: product.description,
    openGraph: {
        title: `${product.name} | Grittrix Products`,
        description: product.description,
        images: [{ url: absoluteImageUrl, alt: `Image for ${product.name}` }],
    }
  };
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

export default function ProductDetailPage(props: any) { // Using (props: any)
  const productId = props?.params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    notFound();
    return null; 
  }
  
  // Simplified rendering for diagnostics
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
      <p className="text-xl text-primary/90 mb-4">{product.tagline}</p>
      <hr className="my-6 border-border" />
      <h2 className="text-2xl font-bold text-primary mb-3">Description</h2>
      <p className="text-md text-foreground/80">{product.description}</p>
    </div>
  );
}
