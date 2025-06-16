
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/PageHeader';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Grittrix AI Solutions',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  const breadcrumbs = [{ name: '404 - Page Not Found' }];
  return (
    <>
      <PageHeader
        title="404 - Page Not Found"
        description="Oops! The page you're looking for doesn't exist or has been moved."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="h-24 w-24 text-destructive mx-auto mb-8" />
          <p className="text-xl text-foreground/80 mb-8">
            We can't seem to find the page you're looking for.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/">Go back to Homepage</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
