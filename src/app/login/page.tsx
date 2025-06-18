
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import MainLayout from '@/app/(main)/layout'; // Import the main layout

export const metadata: Metadata = {
  title: 'Login | Grittrix AI Solutions',
  description: 'Access your Grittrix admin dashboard or authoring tools. Firebase Authentication coming soon.',
  robots: {
    index: false, 
    follow: false,
  },
};

export default function LoginPage() {
  const breadcrumbs = [{ name: 'Login' }];

  return (
    <MainLayout> {/* Wrap with MainLayout */}
      <PageHeader
        title="Admin & Author Login"
        description="Access your Grittrix dashboard or authoring tools."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
          <Card className="bg-card shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl text-primary">Sign In</CardTitle>
              <CardDescription className="text-foreground/70">
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="mt-1 bg-input/50" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1 bg-input/50" />
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Checkbox placeholder */}
                </div>
                <div className="text-sm">
                  <Link href="#" className="font-medium text-primary hover:underline"> {/* Updated to primary for accent */}
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
              <p className="text-center text-sm text-foreground/70">
                Firebase Authentication integration coming soon.
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
