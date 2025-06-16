
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/media/grittrix logo (1).png"
        alt="Grittrix AI Solutions Logo - Redefining Industries with Technology"
        width={192} // Example width, adjust as needed or use fill if parent has dimensions
        height={40} // Example height, to maintain aspect ratio with width
        priority
        className="object-contain w-auto h-full" // h-full will respect parent's height if set
      />
    </div>
  );
}

    