import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="py-12 md:py-16 bg-secondary/10 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <Link href="/" className="text-foreground/70 hover:text-primary text-sm">
                    Home
                  </Link>
                </div>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-foreground/50" aria-hidden="true" />
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="ml-2 text-sm font-medium text-foreground/70 hover:text-primary"
                        aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : (
                       <span className="ml-2 text-sm font-medium text-primary">
                        {item.name}
                       </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-3">{title}</h1>
        {description && <p className="text-lg text-foreground/80 max-w-3xl">{description}</p>}
      </div>
    </div>
  );
}
