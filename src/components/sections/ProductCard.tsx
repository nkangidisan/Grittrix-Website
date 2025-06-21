
import * as React from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import type { ElementType } from 'react';


interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const IconComponent = product.icon as ElementType;
  const imageAltText = `Grittrix Product: ${product.name} - ${product.tagline}`;
  const productImageUrl = product.imageUrl; 

  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                 {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
            </div>
            <CardTitle className="font-headline text-2xl text-primary group-hover:text-primary/90 transition-colors">{product.name}</CardTitle>
        </div>
        <CardDescription className="text-sm font-semibold text-primary h-10">{product.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={productImageUrl} 
            alt={imageAltText}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={`${product.id.toLowerCase()} interface`}
          />
        </div>
        <p className="text-sm text-foreground/70 mb-4 leading-relaxed line-clamp-4">{product.description}</p>
        {product.features && product.features.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-foreground/90 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-xs text-foreground/70">
                  <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary p-0 h-auto group-hover:underline">
          <Link href={`/products/${product.id}`}>
            <span>
              View Details <Info className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
