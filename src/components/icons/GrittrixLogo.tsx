
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Note: Ensure your logo image is placed at /public/grittrix-logo-with-tagline.png
// The width and height props below should match your actual image file dimensions.

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/grittrix-logo-with-tagline.png" // Path relative to the /public directory
        alt="Grittrix - Redefining Industries with Technology"
        width={499} // Intrinsic width of the provided image file
        height={499}  // Intrinsic height of the provided image file
        priority // If the logo is critical for LCP (Largest Contentful Paint)
        className="object-contain w-auto h-full" // Ensures the image scales nicely, maintaining aspect ratio.
      />
    </div>
  );
}
