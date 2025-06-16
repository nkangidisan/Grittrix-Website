
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  // To use a placeholder, the SVGProps for the outer div might not be fully applicable
  // Casting to `any` for props to simplify, or adjust props type for a div
  return (
    <div className={cn("relative", className)} {...props as any}>
      <Image
        src="https://placehold.co/192x40.png?text=Grittrix" 
        alt="Grittrix AI Solutions Logo - Redefining Industries with Technology"
        data-ai-hint="logo company"
        width={192} 
        height={40} 
        priority
        className="object-contain w-auto h-full" 
      />
    </div>
  );
}
    

    
