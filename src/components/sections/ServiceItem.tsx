
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceItemProps) {
  const IconComponent = service.icon;
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
      {service.detailsUrl && (
        <div className="p-6 pt-0">
          <Button variant="link" asChild className="text-primary p-0 h-auto group-hover:underline">
            <Link href={service.detailsUrl}>
              <span>
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
