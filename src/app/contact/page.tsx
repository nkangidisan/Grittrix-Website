
'use client';

import * as React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const breadcrumbs = [{ name: 'Contact Us' }];
  const whatsappMessage = "Hello Grittrix, I'm interested in your AI solutions.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  
  const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Grittrix | AI Solutions for Your Business",
      "description": "Get in touch with Grittrix for a free consultation on AI solutions, custom software, and process automation to drive growth for your business.",
      "url": "https://grittrix.com/contact",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://grittrix.com/contact"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Grittrix AI Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://grittrix.com/media/disanlogo.png"
        }
      }
  };

  return (
    <>
      <head>
        <title>Contact Grittrix | AI Solutions for Your Business</title>
        <meta name="description" content="Get in touch with Grittrix for a free consultation on AI solutions, custom software, and process automation to drive growth for your business." />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
          />
      </head>
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
              <React.Suspense fallback={<p className="text-foreground/80">Loading form...</p>}>
                <ContactForm />
              </React.Suspense>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Contact Information</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:hello@grittrix.com" className="hover:text-primary">hello@grittrix.com</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:info@grittrix.com" className="hover:text-primary">info@grittrix.com</a>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                        <a href="tel:+256756693840" className="hover:text-primary block">+256 756693840</a>
                    </div>
                  </li>
                   <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-3 text-primary" />
                    <a href={`https://wa.me/256756693840?text=${encodedWhatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Chat on WhatsApp (+256)</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Business Hours</h3>
                <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM (EAT / GMT+3)</p>
                <p className="text-foreground/80">Saturday - Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-headline text-primary mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  {[
                    { href: 'https://www.linkedin.com/company/grittrix/', label: 'LinkedIn', icon: Linkedin },
                    { href: 'https://x.com/grittrix', label: 'Twitter', icon: Twitter },
                    { href: 'https://www.facebook.com/Grittrix/', label: 'Facebook', icon: Facebook },
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
