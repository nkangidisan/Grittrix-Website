
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
          <div className="text-center md:text-left animate-slide-in-up">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Industries in
              <span className="block text-primary">Africa and Beyond with</span>
              Smart AI Infrastructure
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-xl mx-auto md:mx-0">
              At Grittrix, we build powerful, affordable AI and data solutions tailored for healthcare, retail, agriculture, and education — helping businesses and institutions unlock smarter decisions, automate operations, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
                <Link href={`/contact?subject=${encodeURIComponent('Demo Request')}`}>
                  <span>
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg transform transition-transform hover:scale-105 border-primary/50 text-primary hover:bg-primary/10">
                <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation')}`}>
                  <span>Talk to Our Experts</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
               <Image
                src="/media/homepage.jpg" 
                alt="AI Powered Infrastructure displaying interconnected data nodes, representing Grittrix's smart solutions for emerging markets"
                fill 
                className="object-cover"
                data-ai-hint="AI infrastructure"
                priority 
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full filter blur-2xl animate-pulse animation-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
