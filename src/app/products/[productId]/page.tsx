
import * as React from 'react';
import type { Metadata } from 'next';
import { productsList } from '@/app/products/page';
import { notFound } from 'next/navigation';
// import Image from 'next/image'; // Temporarily remove Image
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { CheckCircle } from 'lucide-react'; // Temporarily remove CheckCircle

export async function generateMetadata(
  { params }: { params: { productId: string } }
): Promise<Metadata> {
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
  // Image URL is not used in simplified version, but keeping logic for metadata
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

export default function ProductDetailPage(props: any) { // Use props: any
  const productId = props?.params?.productId;

  if (!productId) {
    notFound();
    return null;
  }

  const product = productsList.find(p => p.id.toLowerCase() === productId.toLowerCase());

  if (!product) {
    notFound();
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
      <p className="text-lg text-foreground/80 mb-6">{product.tagline}</p>

      {/* Temporarily removed Image component
      <div className="relative h-auto md:h-[calc(800px*9/16)] w-full aspect-[4/3] md:aspect-auto md:max-h-[500px] my-8">
        <Image
            src={product.imageUrl}
            alt={`Concept illustration for ${product.name}`}
            fill
            className="object-contain rounded-lg shadow-xl"
            priority={product.id === 'CORE'}
            data-ai-hint={`${product.name.toLowerCase()} interface`}
        />
      </div>
      */}
      <div className="my-8 p-4 border border-dashed border-border text-center text-muted-foreground">
        Image placeholder for {product.name} (Original src: {product.imageUrl})
      </div>


      <p className="text-foreground/80 leading-relaxed mb-8">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold font-headline text-primary mb-4">Key Features & Benefits (Simplified)</h3>
          <ul>
            {product.features.slice(0, 2).map((feature, index) => ( // Render only first 2 features simply
              <li key={index} className="text-foreground/80 mb-1">
                - {feature}
              </li>
            ))}
            {product.features.length > 2 && <li className="text-foreground/70 text-sm">... and more.</li>}
          </ul>
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">(Contact button temporarily simplified)</p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
            <span>Request Info for {product.name}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
