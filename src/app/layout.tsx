
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
    default: 'Grittrix Technologies | AI-Powered Software, Websites & Apps',
    template: '%s | Grittrix Technologies',
  },
  description: 'Grittrix builds modern, AI-powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
  keywords: [
    'Grittrix', 
    'AI software development', 
    'web development Uganda', 
    'mobile app development', 
    'AI-powered websites', 
    'custom software Kampala', 
    'digital agency East Africa',
    'process automation', 
    'affordable website designer', 
    'AI in healthcare', 
    'AI in retail', 
    'AI in agriculture', 
    'emerging markets innovation'
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/grittrixmovies.png',
  },
  openGraph: {
    title: 'Grittrix Technologies | AI-Powered Software, Websites & Apps',
    description: 'Grittrix builds modern, AI-powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
    url: 'https://grittrix.com',
    siteName: 'Grittrix Technologies',
    images: [
      {
        url: '/media/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Grittrix Technologies - AI-Powered Software, Websites & Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix Technologies | AI-Powered Software, Websites & Apps',
    description: 'Grittrix builds modern, AI-powered software, websites & apps that produce real results — creating opportunities for businesses everywhere.',
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
    google: 'G-TE9LW27EST',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://grittrix.com/#organization",
        "name": "Grittrix Technologies",
        "alternateName": "Grittrix",
        "url": "https://grittrix.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://grittrix.com/media/disanlogo.png",
          "width": "512",
          "height": "512"
        },
        "image": "https://grittrix.com/media/homepage.jpg",
        "description": "Grittrix builds modern, AI-powered software, websites, and apps that produce results, creating opportunities for businesses in emerging markets.",
        "foundingLocation": "Kampala, Uganda",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kampala",
          "addressCountry": "Uganda"
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
        "knowsAbout": [
          "AI powered software development",
          "web development",
          "mobile app development",
          "process automation",
          "healthcare technology",
          "agricultural technology",
          "emerging markets innovation",
          "SaaS development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://grittrix.com/#website",
        "url": "https://grittrix.com",
        "name": "Grittrix Technologies",
        "publisher": { "@id": "https://grittrix.com/#organization" },
        "description": "Innovative AI-powered software, websites, and apps for global impact."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/grittrixmovies.png" />
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
