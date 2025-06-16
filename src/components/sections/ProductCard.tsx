
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const IconComponent = product.icon;
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                 <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl text-primary group-hover:text-primary/90 transition-colors">{product.name}</CardTitle>
        </div>
        <CardDescription className="text-sm font-semibold text-accent">{product.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={product.imageHint} // Kept for placeholders, will be ignored by Next/Image if src is local
          />
        </div>
        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{product.description}</p>
        {product.features && product.features.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-foreground/90 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => ( // Show top 3 features
                <li key={index} className="flex items-center text-xs text-foreground/70">
                  <CheckCircle className="h-3.5 w-3.5 text-accent mr-2 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full hover:bg-primary/10 hover:text-primary border-primary/50 text-primary">
          <Link href={`/products/${product.id.toLowerCase()}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
