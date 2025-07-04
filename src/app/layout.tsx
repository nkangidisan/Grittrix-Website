
import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FinalCtaSection } from '@/components/layout/FinalCtaSection';

export const metadata: Metadata = {
  metadataBase: new URL('https://grittrix.com'),
  title: {
    default: 'Grittrix | AI Solutions for Business & Process Automation',
    template: '%s | Grittrix AI Solutions',
  },
  description: 'Grittrix provides cutting-edge AI solutions and AI-powered tools for businesses in Healthcare, Retail, Agriculture, and Education. We specialize in automating processes, providing data-driven insights, and building custom web and mobile applications to help companies scale and succeed in emerging markets.',
  keywords: ['AI solutions for business', 'AI for small business', 'AI-powered tools', 'automate processes with AI', 'custom software solutions', 'process automation', 'drive growth', 'best website designers', 'best webapp designers', 'AI in healthcare', 'AI in retail', 'AI in agriculture', 'AI in education', 'machine learning Africa', 'Grittrix', 'emerging markets'],
  openGraph: {
    title: 'Grittrix | AI Solutions for Business & Process Automation',
    description: 'Discover AI-Powered tools and services to automate your processes and drive growth. Grittrix specializes in solutions for Healthcare, Retail, Agriculture, and Education.',
    url: 'https://grittrix.com',
    siteName: 'Grittrix AI Solutions',
    images: [
      {
        url: '/media/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Grittrix AI Solutions - AI-powered tools to automate business processes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix | AI Solutions for Business & Process Automation',
    description: 'Pioneering AI-Powered Solutions for Healthcare, Retail,Agriculture, and Education in Africa and other emerging markets.',
    images: ['/media/homepage.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grittrix AI Solutions",
    "url": "https://grittrix.com",
    "logo": "https://grittrix.com/media/disanlogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-756-693840",
      "contactType": "Customer Service",
      "email": "hello@grittrix.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/grittrix/",
      "https://x.com/grittrix",
      "https://www.facebook.com/Grittrix/"
    ],
    "description": "Grittrix provides cutting-edge AI solutions and AI-powered tools for businesses in Healthcare, Retail, Agriculture, and Education. We specialize in automating processes and providing data-driven insights to help companies scale and succeed in emerging markets."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grittrix AI Solutions",
    "url": "https://grittrix.com",
    "description": "Your partner for AI solutions, AI-powered tools, and process automation for businesses in emerging markets. We also feature some of the best website and webapp designers for your custom projects."
  };

  return (
    <html lang="en" className="dark">
      <head>
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <FinalCtaSection />
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
