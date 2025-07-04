import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GrittrixLogoProps {
  className?: string;
}

export function GrittrixLogo({ className }: GrittrixLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image
          src="/media/disanlogo.png"
          alt="Grittrix AI Solutions Logo"
          fill
          className="object-contain"
          data-ai-hint="logo"
          priority
        />
      </div>
      <div className="grid">
        <span className="font-headline text-2xl font-bold leading-none text-primary">
          Grittrix
        </span>
        <p className="text-[10px] leading-none text-foreground/70">
          Redefining Industries with Technology
        </p>
      </div>
    </div>
  );
}
