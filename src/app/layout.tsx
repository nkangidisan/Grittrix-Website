
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
    default: 'Grittrix: Modern, Innovative AI-Powered Software, Websites & Apps',
    template: '%s | Grittrix',
  },
  description: 'Grittrix creates modern, innovative, AI-powered software, websites, and apps that produce results. We specialize in AI solutions for business process automation and growth in emerging markets.',
  keywords: ['Grittrix', 'AI solutions', 'AI-powered software', 'custom websites', 'mobile apps', 'webapp development', 'process automation', 'affordable website designer', 'cheaper webapp design', 'AI in healthcare', 'AI in retail', 'AI in agriculture', 'emerging markets'],
  openGraph: {
    title: 'Grittrix: Modern, Innovative AI-Powered Software, Websites & Apps',
    description: 'We build AI-powered software, websites, and apps that produce results. Partner with us to automate your business processes and accelerate growth.',
    url: 'https://grittrix.com',
    siteName: 'Grittrix',
    images: [
      {
        url: '/media/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Grittrix AI Solutions - Modern, AI-Powered Software, Websites & Apps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix: Modern, Innovative AI-Powered Software, Websites & Apps',
    description: 'We build AI-powered software, websites, and apps that produce results, specializing in solutions for emerging markets.',
    images: ['/media/homepage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
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
    "name": "Grittrix",
    "alternateName": "Grittrix AI Solutions",
    "url": "https://grittrix.com",
    "logo": "https://grittrix.com/media/disanlogo.png",
    "founder": {
        "@type": "Person",
        "name": "Nkangi Disan",
        "url": "https://www.linkedin.com/in/nkangi-disan-7ab2b62a9/"
    },
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
    "name": "Grittrix",
    "url": "https://grittrix.com",
    "description": "Your partner for AI solutions, AI-powered tools, and process automation for businesses in emerging markets. We also feature some of the best and most affordable website and webapp designers for your custom projects."
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
