
import Link from 'next/link';
import { GrittrixLogo } from '@/components/icons/GrittrixLogo';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, Phone, MessageCircle, Building, Users, Briefcase, Cpu, Server, Tv, ShoppingBag, BookOpen, Layers, HelpCircle, ShieldAlert as PrivacyIcon } from 'lucide-react';

const socialLinks = [
  { href: 'https://www.linkedin.com/company/grittrix/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com/grittrix', label: 'Twitter', icon: Twitter },
  { href: 'https://www.facebook.com/Grittrix/', label: 'Facebook', icon: Facebook },
  { href: 'https://www.instagram.com/grittrix/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.youtube.com/@AI_in_White_Coats', label: 'YouTube', icon: Youtube },
];

const footerNavs = [
  {
    label: 'Company',
    icon: Building,
    items: [
      { href: '/about', name: 'About Us', icon: Users },
      { href: '/careers', name: 'Careers', icon: Briefcase },
      { href: '/blog', name: 'Blog', icon: BookOpen },
    ],
  },
  {
    label: 'Offerings',
    icon: Cpu,
    items: [
      { href: '/services', name: 'AI Services', icon: Briefcase },
      { href: '/products', name: 'Products', icon: Cpu },
      { href: '/industries', name: 'Industries', icon: Layers },
      { href: '/design-services', name: 'Web/App Design', icon: Tv },
      { href: '/hosting', name: 'Hosting', icon: Server },
    ],
  },
  {
    label: 'Resources',
    icon: BookOpen,
    items: [
      { href: '/merch', name: 'Grittrix Merch', icon: ShoppingBag },
      { href: '/faq', name: 'FAQ', icon: HelpCircle },
      { href: '/privacy', name: 'Privacy Policy', icon: PrivacyIcon },
    ],
  },
];


export function Footer() {
  const whatsappMessage = "Welcome to Grittrix, Redefining Industries with Technology! We build powerful, websites, webapps and affordable AI and data solutions tailored for healthcare, retail, agriculture, and education helping businesses and institutions unlock smarter decisions, automate operations, and scale with confidence. Let us know how we can serve you at our best.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);

  return (
    <footer className="bg-background border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" aria-label="Grittrix Home">
              <GrittrixLogo className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              🔍 Pioneering AI-driven solutions for Africa and emerging markets. We are Grittrix — Redefining Industries with Technology.
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
              <h3 className="text-md font-semibold font-headline text-primary mb-4 flex items-center">
                <nav.icon className="h-5 w-5 mr-2" />
                {nav.label}
              </h3>
              <ul className="space-y-3">
                {nav.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center group"
                    >
                      <item.icon className="h-4 w-4 mr-2 text-primary/70 group-hover:text-primary transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-md font-semibold font-headline text-primary mb-4 flex items-center"><Phone className="h-5 w-5 mr-2" />Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary/80 shrink-0"/>
                <a href="mailto:hello@grittrix.com" className="text-sm text-foreground/70 hover:text-primary break-all">hello@grittrix.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary/80 shrink-0"/>
                <a href="mailto:info@grittrix.com" className="text-sm text-foreground/70 hover:text-primary break-all">info@grittrix.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary/80 shrink-0 mt-0.5"/>
                <div className="text-sm text-foreground/70">
                    <a href="tel:+919714688324" className="hover:text-primary block">+91 9714688324</a>
                    <a href="tel:+256756693840" className="hover:text-primary block">+256 756693840</a>
                </div>
              </li>
               <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary/80 shrink-0"/>
                <a href={`https://wa.me/256756693840?text=${encodedWhatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary">WhatsApp (+256)</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; 2025 Grittrix AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
