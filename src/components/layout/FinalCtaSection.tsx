
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Let's Build the Future Together.</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join the movement. Work with a team that combines cutting-edge AI with real empathy for the people it serves. From concept to execution, Grittrix is here to help you solve, scale, and succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-background/90 hover:bg-background text-foreground border-transparent hover:border-foreground/50 transform transition-transform hover:scale-105" asChild>
            <Link href="/products">
              <span>Explore Our Solutions</span>
            </Link>
          </Button>
          <Button size="lg" variant="default" className="bg-transparent hover:bg-background/20 text-primary-foreground border-primary-foreground hover:border-primary-foreground/80 transform transition-transform hover:scale-105" asChild>
            <Link href={`/contact?subject=${encodeURIComponent('Free Consultation Request')}`}>
              <span>Book a Free Consultation</span>
            </Link>
          </Button>
           <Button size="lg" variant="ghost" className="hover:bg-background/20 text-primary-foreground transform transition-transform hover:scale-105" asChild>
            <Link href="/industries">
              <span>See Our Impact</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

    