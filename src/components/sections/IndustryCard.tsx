import Image from 'next/image';
import Link from 'next/link';
import type { Industry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  industry: Omit<Industry, 'painPoints' | 'solutions'>; // Use a simplified type for overview card
  linkHref: string;
}

export function IndustryCard({ industry, linkHref }: IndustryCardProps) {
  const IconComponent = industry.icon;
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader>
        <div className="relative aspect-video w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={industry.imageUrl}
            alt={industry.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={industry.imageHint}
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
