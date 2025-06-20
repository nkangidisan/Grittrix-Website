
import * as React from 'react';
import type { Metadata } from 'next';
import { productsList } from '@/app/products/page'; // Import productsList
import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { CheckCircle } from 'lucide-react';
// import { PageHeader } from '@/components/PageHeader';

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

// Using props: any to work around potential PageProps build issues
export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId as string | undefined;

  if (!productId) {
    notFound();
    return null;
  }

  const product = productsList.find(p => p.id.toLowerCase() === productId.toLowerCase());

  if (!product) {
    notFound();
    return null;
  }

  // const breadcrumbs = [
  //   { name: 'Products', href: '/products' },
  //   { name: product.name },
  // ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
      <p className="text-xl text-foreground/80 mb-4">{product.tagline}</p>
      <p className="text-md text-foreground/70">Simplified content for debugging. Full product details, image, and features will be restored.</p>
      <p className="mt-4 text-foreground/70">{product.description}</p>
      {/* 
        Temporarily removed for diagnostics:
        <PageHeader
          title={product.name}
          description={product.tagline}
          breadcrumbs={breadcrumbs}
        />
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <Image
                  src={product.imageUrl}
                  alt={`Concept illustration for ${product.name}`}
                  fill
                  className="object-cover"
                  priority={product.id === 'CORE'} 
                  data-ai-hint={`${product.name.toLowerCase()} interface`}
              />
            </div>
            <div className="animate-slide-in-up">
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
            </div>
        </div>

        <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/contact?subject=${encodeURIComponent('Inquiry about ' + product.name)}`}>
                <span>Request Info for {product.name}</span>
            </Link>
            </Button>
        </div>
      */}
    </div>
  );
}
