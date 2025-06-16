
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/media/images/grittrix%20logo%20(1).png"
        alt="Grittrix - Redefining Industries with Technology"
        width={499}
        height={499}
        priority
        className="object-contain w-auto h-full"
      />
    </div>
  );
}
