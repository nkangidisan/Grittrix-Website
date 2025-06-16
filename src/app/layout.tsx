
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react'; // Example for Vercel Analytics

export const metadata: Metadata = {
  title: {
    default: 'Grittrix AI Solutions | Transforming Industries with AI',
    template: '%s | Grittrix AI Solutions',
  },
  description: 'Grittrix provides cutting-edge AI-powered solutions for Healthcare, Retail, Agriculture, and Education, primarily focused on Africa and emerging markets. Unlock smarter decisions, automate operations, and scale with confidence.',
  keywords: ['AI solutions', 'emerging markets', 'Africa tech', 'Grittrix', 'AI in healthcare', 'AI in retail', 'AI in agriculture', 'AI in education', 'machine learning', 'data science'],
  openGraph: {
    title: 'Grittrix AI Solutions',
    description: 'Transforming industries with AI in Africa and beyond.',
    url: 'https://www.grittrix.com', // Replace with your actual domain
    siteName: 'Grittrix AI Solutions',
    images: [
      {
        url: 'https://www.grittrix.com/media/images/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Grittrix AI Solutions - Transforming Industries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix AI Solutions',
    description: 'AI-Powered Solutions for Healthcare, Retail, Agriculture, and Education in Africa and Emerging Markets.',
    // site: '@Grittrix', // Replace with your Twitter handle
    images: ['https://www.grittrix.com/media/images/twitter-card.png'], // Replace with your actual Twitter card image URL
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
  // Add favicon links here if not handled by Next.js default in public folder
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
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
        {/* Favicon link is typically handled by Next.js if favicon.ico is in /public or /app root. 
            If you have specific favicon sizes or types, add them here or via metadata.icons object.
            Example: <link rel="icon" href="/favicon.ico" sizes="any" /> 
        */}
      </head>
      <body className="font-body bg-background text-foreground antialiased min-h-screen flex flex-col">
        {children}
        <Toaster />
        <Analytics /> {/* Example for Vercel Analytics. For Google/Firebase Analytics, add their script or setup here. */}
      </body>
    </html>
  );
}
