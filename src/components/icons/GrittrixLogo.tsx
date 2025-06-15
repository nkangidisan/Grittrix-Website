
import type { SVGProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Note: Ensure you have your logo image placed at /public/grittrix-logo-with-tagline.png
// The intrinsic size of the logo image. Adjust width and height props below if your actual image dimensions differ.
// For example, if your logo image is 600px wide and 150px tall, set width={600} height={150}.
// The current values (200x50) are placeholders.

export function GrittrixLogo({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/grittrix-logo-with-tagline.png" // Path relative to the /public directory
        alt="Grittrix - Redefining Industries with Technology"
        width={200} // Placeholder: Adjust to your logo's intrinsic width
        height={50}  // Placeholder: Adjust to your logo's intrinsic height
        priority // If the logo is critical for LCP (Largest Contentful Paint)
        className="object-contain w-auto h-full" // Ensures the image scales nicely within the container's height, maintaining aspect ratio.
      />
    </div>
  );
}
