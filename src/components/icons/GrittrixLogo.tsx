
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props as any}>
      <Image
        src="/media/logo.png" 
        alt="Grittrix AI Solutions Logo - Redefining Industries with Technology"
        width={192} 
        height={40} 
        priority
        className="object-contain w-auto h-full" 
      />
    </div>
  );
}
    
