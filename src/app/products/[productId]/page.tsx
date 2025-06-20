
import * as React from 'react';
import type { Metadata } from 'next';
import { productsList } from '@/app/products/page';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

// generateMetadata uses explicit params typing
export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const productIdParam = params?.productId;

  if (!productIdParam) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: 'The requested product could not be found or the URL is invalid.',
    };
  }
  const product = productsList.find(p => p.id.toLowerCase() === productIdParam.toLowerCase());

  if (!product) {
    return {
      title: 'Product Not Found | Grittrix AI Solutions',
      description: `The product with ID "${productIdParam}" does not exist.`,
    };
  }

  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = product.imageUrl.startsWith('http') ? product.imageUrl : new URL(product.imageUrl, domainBase).toString();

  return {
    title: `${product.name} | Grittrix Products`,
    description: product.tagline,
    openGraph: {
        title: `${product.name} | Grittrix Products`,
        description: product.tagline,
        images: [{ url: absoluteImageUrl, alt: `${product.name} illustration` }],
    }
  };
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

// Page component uses (props: any) to bypass PageProps build constraint
export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId as string | undefined;

  if (!productId) {
    notFound();
    return null; // Ensure notFound stops execution
  }

  const product = productsList.find(p => p.id.toLowerCase() === productId.toLowerCase());

  if (!product) {
    notFound();
    return null; // Ensure notFound stops execution
  }

  // Simplified rendering for diagnostics
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
      <p className="text-lg text-foreground/80 mb-2">{product.tagline}</p>
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold text-primary mb-2">Description (Simplified)</h2>
      <p className="text-md text-foreground/70">{product.description}</p>
      {/* 
        Temporarily removed complex rendering:
        - PageHeader
        - Image component and its container
        - Key Features list
        - CTA button section
      */}
    </div>
  );
}
