
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
// Removed PageHeader, Image, Button, Link, CheckCircle imports as they are temporarily unused in the simplified render

import { productsList } from '@/app/products/page'; // Ensure this path is correct and productsList is exported

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
    title: `${product.name} | Grittrix Products`, // Changed from product.title to product.name
    description: product.description,
    openGraph: {
        title: `${product.name} | Grittrix Products`, // Changed from product.title to product.name
        description: product.description,
        images: [{ url: absoluteImageUrl, alt: `Image for ${product.name}` }], // Changed from product.title to product.name
    }
  };
}

export async function generateStaticParams() {
  return productsList.map(product => ({
    productId: product.id.toLowerCase(),
  }));
}

// Page component uses (props: any) as a workaround for potential PageProps build error.
export default function ProductDetailPage(props: any) {
  const productId = props?.params?.productId;
  const product = productsList.find(p => p.id.toLowerCase() === productId?.toLowerCase());

  if (!product) {
    notFound();
    return null; // Ensure notFound stops execution
  }

  // Simplified rendering for diagnostics
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-2">{product.name}</h1>
      <p className="text-xl text-foreground/80 mb-4">{product.tagline}</p>
      <hr className="my-6 border-border" />
      <h2 className="text-2xl font-semibold text-primary mb-3">Description</h2>
      <p className="text-md text-foreground/70 leading-relaxed">{product.description}</p>
      
      {/* 
        Temporarily removed complex rendering:
        - PageHeader component
        - Image component
        - Key Features list
        - "Request More Info" button/section
      */}
      <div className="mt-12 p-6 bg-card rounded-lg shadow-md">
        <h3 className="text-lg font-semibold font-headline text-primary mb-3">
          Further details and contact options are temporarily hidden for diagnostics.
        </h3>
        <p className="text-sm text-foreground/70">
          This is a simplified view to help diagnose a potential server error.
        </p>
      </div>
    </div>
  );
}
