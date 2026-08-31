
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Smartphone, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-background text-foreground pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text + CTA */}
          <div className="text-left z-10">
            <div className="mb-6 animate-hero-in">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                AI-POWERED SOFTWARE & DIGITAL PRODUCTS
              </span>
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
              <span className="block animate-hero-in">
                We create modern, innovative, AI-powered 
                <span className="text-primary animate-text-glow"> software, websites, web and mobile applications </span>
                that produce results.
              </span>
            </h1>
            
            <p className="text-lg text-foreground/70 mb-10 max-w-xl animate-hero-in animation-delay-400 leading-relaxed">
              A problem isn't truly solved until it's solved for all. Grittrix builds
              products that help create opportunities for everyone, whether down the
              street or across the globe. Bring your insight, imagination and a healthy
              disregard for the impossible. Bring everything that makes you unique.
              Together, we can build for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-in animation-delay-600">
              <Button 
                size="lg" 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all transform hover:scale-105"
              >
                <Link href="https://9000-firebase-studio-1750012083885.cluster-44kx2eiocbhe2tyk3zoyo3ryuo.cloudworkstations.dev/contact?subject=Demo%20Request%20for%20AI%20Tools">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-white/20 text-white hover:bg-white/10 h-14 px-8 font-bold backdrop-blur-sm transition-all transform hover:scale-105"
              >
                 <Link href="https://9000-firebase-studio-1750012083885.cluster-44kx2eiocbhe2tyk3zoyo3ryuo.cloudworkstations.dev/design-services">
                  Check Out Our Work
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Column: Video Media Panel */}
          <div className="relative animate-hero-in animation-delay-400 lg:ml-auto w-full max-w-[640px]">
            {/* Main Video Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] bg-card group">
               <video
                src="/vid.mp4" 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Interactive Labels */}
              <div className="absolute top-6 left-6 z-20 animate-float-subtle">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                  <Cpu className="h-3 w-3 text-primary" />
                  AI-Powered
                </div>
              </div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-float-subtle animation-delay-200">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                  <Smartphone className="h-3 w-3 text-primary" />
                  Web & Mobile
                </div>
              </div>

              <div className="absolute bottom-20 right-6 z-20 animate-float-subtle animation-delay-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  Built to Scale
                </div>
              </div>
            </div>

            {/* Decorative background blur element */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
