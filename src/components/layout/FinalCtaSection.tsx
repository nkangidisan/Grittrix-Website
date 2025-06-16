
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Build Smarter Operations?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Let’s show you how Grittrix can transform your clinic, shop, farm, or school — starting today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-background/90 hover:bg-background text-foreground border-transparent hover:border-foreground/50 transform transition-transform hover:scale-105" asChild>
            <Link href="/contact?subject=Free Consultation">Book a Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent hover:bg-background/20 text-primary-foreground border-primary-foreground hover:border-primary-foreground/80 transform transition-transform hover:scale-105" asChild>
            <Link href="/hosting#pricing">See Pricing Plans</Link>
          </Button>
          <Button size="lg" variant="ghost" className="hover:bg-background/20 text-primary-foreground transform transition-transform hover:scale-105" asChild>
            <Link href="/contact?subject=Join Grittrix Network">Join the Grittrix Network</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
