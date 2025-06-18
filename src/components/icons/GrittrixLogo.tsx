
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Reverted to use next/image with a raster logo as per user clarification.
// User needs to ensure 'public/media/Grittrixlogo.png' (or .jpeg) exists.
// Defaulting to .png for logos.

interface GrittrixLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function GrittrixLogo({ className, width = 150, height = 33 }: GrittrixLogoProps) {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <Image
        src="/media/Grittrixlogo.png" 
        alt="Grittrix AI Solutions Logo"
        fill
        className="object-contain"
        priority 
      />
    </div>
  );
}
    
