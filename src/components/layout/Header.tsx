
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { NavLink } from './NavLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Grittrix Home">
            <GrittrixLogo className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/contact?subject=${encodeURIComponent('Demo Request')}`} legacyBehavior passHref>
                <a><span>Request a Demo</span></a>
              </Link>
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation')}`} legacyBehavior passHref>
                <a><span>Talk to Our Experts</span></a>
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle> 
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Grittrix Home">
                    <GrittrixLogo className="h-8 w-auto" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg">
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink href="/hosting" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Hosting</NavLink>
                  <NavLink href="/design-services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Design Services</NavLink>
                  <NavLink href="/merch" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Merch</NavLink>
                </nav>
                <div className="mt-8 flex flex-col space-y-3">
                   <Button variant="outline" asChild>
                     <Link href={`/contact?subject=${encodeURIComponent('Demo Request')}`} onClick={() => setIsMobileMenuOpen(false)} legacyBehavior passHref>
                       <a><span>Request a Demo</span></a>
                     </Link>
                   </Button>
                   <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                     <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation')}`} onClick={() => setIsMobileMenuOpen(false)} legacyBehavior passHref>
                       <a><span>Talk to Our Experts</span></a>
                     </Link>
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
