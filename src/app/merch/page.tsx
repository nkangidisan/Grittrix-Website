
import * as React from 'react';
import type { Metadata } from 'next';
import { MerchClient } from './MerchClient';

export const metadata: Metadata = {
  title: 'Grittrix Merchandise | Premium Techwear & Corporate Branded Apparel',
  description: 'Shop the Grittrix Signature Series—premium tech-fashion engineered for innovators. Custom corporate branding, team kits, and professional apparel for modern startups.',
  keywords: [
    'Grittrix Merch', 
    'Premium Techwear', 
    'Corporate Branded Apparel', 
    'Tech Company Shirts', 
    'Professional Polo Shirts', 
    'Custom Startup Merchandise', 
    'Branded Caps', 
    'Tech Fashion'
  ],
  alternates: {
    canonical: '/merch',
  },
  openGraph: {
    title: 'Grittrix Merchandise | Premium Techwear for Innovators',
    description: 'Designed to Represent. Built to Perform. Premium branded apparel for the world-class professional.',
    images: [{ url: '/collar.jpeg', width: 1200, height: 630, alt: 'Grittrix Premium Techwear Collection' }],
  }
};

export default function MerchPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://grittrix.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Merchandise",
        "item": "https://grittrix.com/merch"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MerchClient />
    </>
  );
}
