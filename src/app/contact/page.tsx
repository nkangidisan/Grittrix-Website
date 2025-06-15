import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const breadcrumbs = [{ name: 'Contact Us' }];

  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help and answer any question you might have. We look forward to hearing from you!"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-card p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Contact Information</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <a href="mailto:info@grittrix.com" className="hover:text-primary">info@grittrix.com</a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-accent" />
                    <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a> (HQ)
                  </li>
                   <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-3 text-accent" />
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Chat on WhatsApp</a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-accent mt-1" />
                    <span>123 AI Avenue, Tech City, TC 54321, Emerging Market Hub (Placeholder Address)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Business Hours</h3>
                <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM (GMT+1)</p>
                <p className="text-foreground/80">Saturday - Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  {[
                    { href: '#', label: 'LinkedIn', icon: Linkedin },
                    { href: '#', label: 'Twitter', icon: Twitter },
                    { href: '#', label: 'Facebook', icon: Facebook },
                  ].map(social => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary/20 rounded-full hover:bg-primary/20">
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
