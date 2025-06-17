
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  // Using next/image for the SVG logo file as per user's list
  return (
    <div className={cn("relative", className)} style={{ width: props.width || 150, height: props.height || 33 }}>
      <Image
        src="/media/Grittrixlogo.svg" 
        alt="Grittrix AI Solutions Logo"
        fill
        className="object-contain"
        priority // Logo is usually LCP
      />
    </div>
  );
}
    
