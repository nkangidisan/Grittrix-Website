
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Note: Ensure your logo image is placed at /public/media/grittrix logo (1).png

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/media/grittrix%20logo%20(1).png" // Path relative to the /public directory
        alt="Grittrix - Redefining Industries with Technology"
        width={499} // Intrinsic width of the logo image file
        height={499}  // Intrinsic height of the logo image file
        priority // If the logo is critical for LCP (Largest Contentful Paint)
        className="object-contain w-auto h-full" // Ensures the image scales nicely, maintaining aspect ratio.
      />
    </div>
  );
}
