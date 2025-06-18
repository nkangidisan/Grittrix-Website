
import Image from 'next/image';
import type { MerchandiseItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface MerchandiseItemProps {
  item: MerchandiseItem;
}

export function MerchandiseItemCard({ item }: MerchandiseItemProps) {
  const imageAltText = item.description ? `${item.name} - ${item.description}` : `Grittrix Merchandise: ${item.name}`;
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={item.imageUrl} 
            alt={imageAltText}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
           <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
            GRITTRIX
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg text-primary mb-1 group-hover:text-primary/90 transition-colors">{item.name}</CardTitle>
        {item.description && <CardDescription className="text-xs text-foreground/70 mb-2 line-clamp-2">{item.description}</CardDescription>}
        {item.price && <p className="text-md font-semibold text-primary">{item.price}</p>} {/* Changed accent to primary */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary border-primary/50 text-primary"> {/* Changed accent to primary for hover and text */}
          <ShoppingCart className="mr-2 h-4 w-4" />
          View Item
        </Button>
      </CardFooter>
    </Card>
  );
}
