
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 192 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Grittrix AI Solutions Logo"
      className={cn("h-auto", className)} // Ensure responsiveness, width controlled by parent or className
      // Recommended to set width via className e.g., "w-48 h-10" or let parent control it
      {...props}
    >
      <title>Grittrix AI Solutions Logo</title>
      {/* Abstract G - using primary theme color */}
      <path d="M28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10V30C20 32.2091 21.7909 34 24 34H26" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
      <path d="M24 34C28.4183 34 32 30.4183 32 26V22H22" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
      <path d="M22 22L26 22" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
      <path d="M20 10H12C9.79086 10 8 11.7909 8 14V16" stroke="hsl(var(--primary))" strokeWidth="2.5"/>

      {/* Text "Grittrix" - using primary theme color */}
      <text x="42" y="27" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="20" fill="hsl(var(--primary))" fontWeight="bold">
        Grittrix
      </text>
    </svg>
  );
}
    