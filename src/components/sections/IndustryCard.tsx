
import Image from 'next/image';
import Link from 'next/link';
import type { Industry } from '@/lib/types'; // Keep full type
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  industry: Pick<Industry, 'id' | 'name' | 'description' | 'icon' | 'imageUrl'> & { altText?: string }; // Ensure altText is part of the expected prop
  linkHref: string;
}

export function IndustryCard({ industry, linkHref }: IndustryCardProps) {
  const IconComponent = industry.icon;
  const imageAltText = industry.altText || `Grittrix solutions for ${industry.name}`;
  
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader>
        <div className="relative aspect-video w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={industry.imageUrl}
            alt={imageAltText}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                 <IconComponent className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl text-primary group-hover:text-primary/90 transition-colors">{industry.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/70 leading-relaxed">{industry.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-accent p-0 h-auto group-hover:underline">
          <Link href={linkHref}>
            Explore Solutions <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
