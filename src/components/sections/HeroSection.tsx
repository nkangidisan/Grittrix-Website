
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/20 to-background text-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or animation can go here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block animate-slide-in-up">We create Modern, Innovative</span>
              <span className="block text-primary animate-slide-in-up animation-delay-300">
                <span className="animate-glow">AI-Powered Websites & Apps</span>
              </span>
              <span className="block animate-slide-in-up animation-delay-500">that produce results</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-xl mx-auto md:mx-0 animate-slide-in-up animation-delay-300">
             Grittrix delivers intelligent, AI-powered web and mobile applications designed to automate processes, drive growth, and scale with confidence. Explore our solutions for businesses in healthcare, retail, agriculture, and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-in-up animation-delay-500">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
                <Link href={`/contact?subject=${encodeURIComponent('Demo Request for AI Tools')}`}>
                  <span>
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg transform transition-transform hover:scale-105 border-primary/50 text-primary hover:bg-primary/10">
                <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation on Process Automation')}`}>
                  <span>Talk to Our Experts</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl animate-float">
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
