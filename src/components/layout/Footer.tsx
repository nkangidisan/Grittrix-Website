import Link from 'next/link';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, Phone, MessageCircle } from 'lucide-react';

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'YouTube', icon: Youtube },
];

const footerNavs = [
  {
    label: 'Company',
    items: [
      { href: '/about', name: 'About Us' },
      { href: '/careers', name: 'Careers' },
      { href: '/blog', name: 'Blog' },
    ],
  },
  {
    label: 'Services',
    items: [
      { href: '/services', name: 'AI Solutions' },
      { href: '/products', name: 'Products' },
      { href: '/design-services', name: 'Web/App Design' },
      { href: '/hosting', name: 'Hosting' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/contact', name: 'Contact Us' },
      { href: '/faq', name: 'FAQ' }, // Example, can be created later
      { href: '/privacy', name: 'Privacy Policy' }, // Example
    ],
  },
];


export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Grittrix Home">
              <GrittrixLogo className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Pioneering AI-driven solutions for Africa and emerging markets. We empower businesses in healthcare, retail, agriculture, and education.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {footerNavs.map((nav) => (
            <div key={nav.label}>
              <h3 className="text-md font-semibold font-headline text-primary mb-4">{nav.label}</h3>
              <ul className="space-y-3">
                {nav.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-md font-semibold font-headline text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary/80"/>
                <a href="mailto:info@grittrix.com" className="text-sm text-foreground/70 hover:text-primary">info@grittrix.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary/80"/>
                <a href="tel:+1234567890" className="text-sm text-foreground/70 hover:text-primary">+1 (234) 567-890</a>
              </li>
               <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary/80"/>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary">WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Grittrix AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
