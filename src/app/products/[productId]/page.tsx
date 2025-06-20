
import * as React from 'react';
import type { Metadata } from 'next';
import { productsList } from '@/app/products/page';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';
import type { ElementType } from 'react';

// ProductDetailPageProps interface definition is removed as component will use props: any

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
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

export default function ProductDetailPage(props: any) {
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

  // Simplified rendering for diagnostics
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
      <p className="text-lg text-foreground/80 mb-6">{product.tagline}</p>
      
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

      <p className="text-foreground/80 leading-relaxed mb-8">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold font-headline text-primary mb-4">Key Features & Benefits</h3>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start text-foreground/80">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12 text-center">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
            <span>Request a Demo or Consultation</span>
          </Link>
        </Button>
      </div>
       <p className="mt-8 text-center text-sm text-muted-foreground">
        This is a simplified page for diagnosing an Internal Server Error. Full content and layout will be restored once the error is resolved.
      </p>
    </div>
  );
}
