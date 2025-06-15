'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { NavLink } from './NavLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/hosting', label: 'Hosting' },
  { href: '/design-services', label: 'Design Services' },
  { href: '/merch', label: 'Merch' },
  { href: '/contact', label: 'Contact Us' },
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
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Grittrix Home">
            <GrittrixLogo className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => ( // Show first 6 items, rest can be in a dropdown or footer
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact?subject=Demo Request">Request a Demo</Link>
            </Button>
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact?subject=Expert Consultation">Talk to Our Experts</Link>
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
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
                </nav>
                <div className="mt-8 flex flex-col space-y-3">
                   <Button variant="outline" asChild>
                     <Link href="/contact?subject=Demo Request" onClick={() => setIsMobileMenuOpen(false)}>Request a Demo</Link>
                   </Button>
                   <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                     <Link href="/contact?subject=Expert Consultation" onClick={() => setIsMobileMenuOpen(false)}>Talk to Our Experts</Link>
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
