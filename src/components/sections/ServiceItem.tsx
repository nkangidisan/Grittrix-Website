
import * as React from 'react';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ElementType } from 'react';

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceItemProps) {
  const IconComponent = service.icon as ElementType; // Cast to ElementType
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader className="flex-row items-center space-x-4 pb-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl text-primary group-hover:text-primary/90 transition-colors">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
      </CardContent>
      {/* The detail link has been removed to prevent errors while the detail pages are disabled. */}
    </Card>
  );
}
