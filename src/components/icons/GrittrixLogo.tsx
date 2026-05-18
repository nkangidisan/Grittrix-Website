import { cn } from '@/lib/utils';
import Image from 'next/image';
import logoImg from '@/app/services/logo.png';

interface GrittrixLogoProps {
  className?: string;
}

export function GrittrixLogo({ className }: GrittrixLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-14 w-14 flex-shrink-0">
        <Image
          src={logoImg}
          alt="Grittrix Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="grid">
        <span className="font-headline text-2xl font-bold leading-none text-white tracking-tighter">
          Grittrix
        </span>
        <p className="text-[10px] leading-tight text-white/50 font-medium uppercase tracking-[0.2em]">
          Protocol 4.0
        </p>
      </div>
    </div>
  );
}
