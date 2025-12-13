
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-background text-foreground pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text + CTA */}
          <div className="text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary">
              <span className="block animate-hero-in">We create modern,</span>
              <span className="block animate-hero-in animation-delay-200">
                innovative, <span className="animate-text-glow">AI-powered</span>
              </span>
              <span className="block text-foreground animate-hero-in animation-delay-400">software, websites & apps</span>
              <span className="block text-foreground/70 animate-hero-in animation-delay-600">that produce results.</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-10 max-w-xl animate-hero-in animation-delay-600">
             A problem isn't truly solved until it's solved for all. Grittrix build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-in animation-delay-600">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
                <Link href={`/contact?subject=${encodeURIComponent('Demo Request for AI Tools')}`}>
                  <span>
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg transform transition-transform hover:scale-105">
                 <Link href="/about">
                  <span>Talk to Our Experts</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative animate-hero-in animation-delay-400">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl animate-float-subtle">
               <Image
                src="/media/homepage.jpg" 
                alt="AI-powered tools from Grittrix helping automate business processes across multiple devices"
                fill 
                className="object-cover"
                data-ai-hint="AI business automation"
                priority 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
