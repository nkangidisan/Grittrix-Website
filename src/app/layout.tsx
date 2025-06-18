
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react'; 

export const metadata: Metadata = {
  metadataBase: new URL('https://grittrix.com'), 
  title: {
    default: 'Grittrix AI Solutions | Transforming Industries with AI',
    template: '%s | Grittrix AI Solutions',
  },
  description: 'Grittrix provides cutting-edge AI-powered solutions for Healthcare, Retail, Agriculture, and Education, primarily focused on Africa and emerging markets. Unlock smarter decisions, automate operations, and scale with confidence.',
  keywords: ['AI solutions', 'emerging markets', 'Africa tech', 'Grittrix', 'AI in healthcare', 'AI in retail', 'AI in agriculture', 'AI in education', 'machine learning', 'data science'],
  openGraph: {
    title: 'Grittrix AI Solutions | Transforming Industries with AI',
    description: 'AI-Powered Solutions for Healthcare, Retail, Agriculture, and Education in Africa and Emerging Markets.',
    url: 'https://grittrix.com', 
    siteName: 'Grittrix AI Solutions',
    images: [
      {
        url: '/media/homepage.jpg', 
        width: 1200,
        height: 630,
        alt: 'Grittrix AI Solutions - Transforming Industries with Advanced Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix AI Solutions | AI for Emerging Markets',
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
  icons: {
    icon: [
      // The primary icon definition. Using an array of IconDescriptor objects for explicitness.
      { url: '/media/grittrixlogo.png', type: 'image/png', sizes: 'any' } 
    ],
    shortcut: [ // For older browsers, often equates to favicon.ico behavior
      { url: '/media/grittrixlogo.png', type: 'image/png' }
    ],
    apple: [ // For Apple touch icons
      { url: '/media/grittrixlogo.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">{/* Enforce dark mode globally */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased min-h-screen flex flex-col">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
