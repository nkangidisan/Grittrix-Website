
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GrittrixLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function GrittrixLogo({ className, width = 150, height = 33 }: GrittrixLogoProps) {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <Image
        src="https://placehold.co/150x33.png" 
        alt="Grittrix AI Solutions Logo"
        fill
        className="object-contain"
        data-ai-hint="logo"
        priority 
      />
    </div>
  );
}
