import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const sectors = [
  "HEALTHCARE",
  "AGRICULTURE",
  "EDUCATION",
  "FINANCE",
  "LOGISTICS",
  "RETAIL"
];

export function WelcomeSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-[hsl(var(--accent-lime))] rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl animate-section-in">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-8">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="url(#sparkle-grad)" />
              <defs>
                <linearGradient id="sparkle-grad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B4FF" />
                  <stop offset="1" stopColor="#00E5A0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-headline text-[#0a1128] mb-6 leading-tight max-w-3xl mx-auto">
            Welcome to Grittrix Technologies: Solutions for the Real World
          </h2>
          
          <p className="text-[#3a4155] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            At Grittrix Technologies, we believe technology should be intelligent,
            inclusive, and deeply connected to the communities it serves. That's why
            we're on a mission to transform lives and economies in emerging markets
            through locally adapted solutions that address real world challenges
            across healthcare, agriculture, education, finance, logistics and retail.
            Whether you're a business looking to scale, a government solving public
            sector problems, or an entrepreneur building from scratch, we are your
            innovation partner.
          </p>

          <Button 
            size="lg" 
            asChild 
            className="bg-[#0a1128] hover:bg-[#1a2138] text-white font-bold h-14 px-10 rounded-full"
          >
            <Link href="https://9000-firebase-studio-1750012083885.cluster-44kx2eiocbhe2tyk3zoyo3ryuo.cloudworkstations.dev/design-services">
              See Pricing Plans
            </Link>
          </Button>
        </div>

        {/* Connector Graphic */}
        <div className="relative h-24 md:h-32 max-w-5xl mx-auto pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            {/* Convergence Point and radiating lines */}
            <g opacity="0.4">
              {/* Converging upward point center: 500, 20 */}
              <path d="M500,20 L150,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              <path d="M500,20 L300,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              <path d="M500,20 L450,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              <path d="M500,20 L550,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              <path d="M500,20 L700,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              <path d="M500,20 L850,100" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
              
              {/* Convergence glow point */}
              <circle cx="500" cy="20" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
            </g>
          </svg>
        </div>

        {/* Pill Row */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sectors.map((sector, index) => (
              <div
                key={sector}
                className={`
                  px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest transition-all duration-300
                  ${index === 0 
                    ? 'bg-[hsl(var(--accent-lime))] text-[#0a1128] border-none shadow-[0_0_20px_rgba(217,255,102,0.3)]' 
                    : 'bg-[#0a1128] text-white border border-[hsl(var(--primary)/30)] hover:border-[hsl(var(--primary))]'
                  }
                `}
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
