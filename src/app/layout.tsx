
import * as React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://grittrix.com'),
  title: {
    default: 'Grittrix | Modern AI Software, Custom WebApps & Premium Techwear',
    template: '%s | Grittrix AI Solutions',
  },
  description: 'Grittrix creates modern, innovative, AI-powered software, websites, and apps. Discover Grittrix Merchandise—premium techwear for innovators and corporate branded apparel for modern businesses.',
  keywords: [
    'Grittrix', 
    'AI solutions', 
    'AI-powered software', 
    'custom websites', 
    'mobile apps', 
    'webapp development', 
    'process automation', 
    'affordable website designer', 
    'tech merchandise', 
    'corporate branded shirts', 
    'premium techwear', 
    'professional branded apparel', 
    'AI in healthcare', 
    'AI in retail', 
    'AI in agriculture', 
    'emerging markets'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Grittrix | Modern AI Software, Custom WebApps & Premium Techwear',
    description: 'We build results-driven AI software and premium branded merchandise for the modern professional. Partner with us for innovation.',
    url: 'https://grittrix.com',
    siteName: 'Grittrix AI Solutions',
    images: [
      {
        url: '/media/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Grittrix AI Solutions - Modern Software & Premium Merchandise',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix | Modern AI Software & Premium Branded Techwear',
    description: 'Cinematic AI media, high-end software development, and premium corporate merchandise for innovators.',
    images: ['/media/homepage.jpg'],
    creator: '@grittrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-TE9LW27EST', // Placeholder for actual search console verification if needed
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://grittrix.com/#organization",
    "name": "Grittrix",
    "alternateName": "Grittrix AI Solutions",
    "url": "https://grittrix.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://grittrix.com/media/disanlogo.png",
      "width": 512,
      "height": 512
    },
    "founder": {
        "@type": "Person",
        "name": "Nkangi Disan",
        "url": "https://www.linkedin.com/in/nkangi-disan-7ab2b62a9/"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-756-693840",
      "contactType": "Customer Service",
      "email": "hello@grittrix.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/grittrix/",
      "https://x.com/grittrix",
      "https://www.facebook.com/Grittrix/",
      "https://www.instagram.com/grittrix/",
      "https://www.youtube.com/@grittrix"
    ],
    "description": "Grittrix provides cutting-edge AI solutions and premium branded merchandise for modern businesses. Specializing in healthcare, retail, agriculture, and education tech."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://grittrix.com/#website",
    "name": "Grittrix",
    "url": "https://grittrix.com",
    "publisher": { "@ref": "https://grittrix.com/#organization" },
    "description": "Your global partner for AI software, premium techwear, and process automation."
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://grittrix.com" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TE9LW27EST"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TE9LW27EST');
            `,
          }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow" id="main-content">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
