
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Grittrix AI Solutions',
  description: 'Manage Grittrix content, users, and settings. Access restricted to authorized personnel.',
  robots: {
    index: false, 
    follow: false,
  },
};

export default function AdminPage() {
  const breadcrumbs = [{ name: 'Admin Dashboard' }];

  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        description="Manage Grittrix content, users, and settings."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-lg shadow-xl text-center">
            <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-6" />
            <h2 className="text-2xl font-bold font-headline text-primary mb-4">Protected Area</h2>
            <p className="text-foreground/80">
              This is the Grittrix admin dashboard. Access is restricted to authorized personnel only.
            </p>
            <p className="mt-4 text-sm text-foreground/70">
              Full admin functionality with Firebase Authentication is under development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
