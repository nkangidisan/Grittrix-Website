
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { NavLink } from './NavLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainNavItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
];

const moreNavItems = [
    { href: '/careers', label: 'Careers' },
    { href: '/hosting', label: 'Hosting' },
    { href: '/design-services', label: 'Design Services' },
    { href: '/merch', label: 'Merchandise' },
    { href: '/faq', label: 'FAQ' },
];

const allMobileNavItems = [
  { href: '/', label: 'Home' },
  ...mainNavItems,
  ...moreNavItems,
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
            {mainNavItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10 text-foreground/80 flex items-center gap-1">
                  More <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {moreNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation')}`}>
                <span>Contact Us</span>
              </Link>
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href={`/contact?subject=${encodeURIComponent('Demo Request')}`}>
                <span>Request a Demo</span>
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
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0 flex flex-col">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle> 
                <div className="flex justify-between items-center p-6 border-b border-border">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Grittrix Home">
                    <GrittrixLogo className="h-8 w-auto" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <ScrollArea className="flex-grow p-6">
                  <nav className="flex flex-col space-y-3">
                    {allMobileNavItems.map((item) => (
                      <NavLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg">
                        {item.label}
                      </NavLink>
                    ))}
                  </nav>
                </ScrollArea>
                <div className="p-6 border-t border-border flex flex-col space-y-3">
                   <Button variant="outline" asChild>
                     <Link href={`/contact?subject=${encodeURIComponent('Demo Request')}`} onClick={() => setIsMobileMenuOpen(false)}>
                       <span>Request a Demo</span>
                     </Link>
                   </Button>
                   <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                     <Link href={`/contact?subject=${encodeURIComponent('Expert Consultation')}`} onClick={() => setIsMobileMenuOpen(false)}>
                       <span>Talk to Our Experts</span>
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
