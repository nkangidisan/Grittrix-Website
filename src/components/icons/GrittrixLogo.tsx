import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Note: Ensure you have your logo image placed at /public/grittrix-logo-with-tagline.png
// The intrinsic size of the logo image is assumed to be 200x50 here for example.
// Adjust width and height props below to match your actual image dimensions for optimal display.

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/grittrix-logo-with-tagline.png" // Path relative to the /public directory
        alt="Grittrix - Redefining Industries with Technology"
        width={200} // Intrinsic width of the image
        height={50} // Intrinsic height of the image
        priority // If the logo is critical for LCP
        className="object-contain" // Ensures the image scales nicely within the given dimensions
      />
    </div>
  );
}
