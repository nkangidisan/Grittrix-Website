
import * as React from 'react';
import type { Metadata } from 'next';
import { MerchClient } from './MerchClient';

export const metadata: Metadata = {
  title: 'Grittrix Merchandise | Premium Techwear & Branded Apparel',
  description: 'Shop the Grittrix Signature Series—premium techwear and corporate branded apparel engineered for innovators and modern startups.',
  alternates: { canonical: '/merch' },
  openGraph: {
    title: 'Grittrix Merchandise | Premium Techwear for Innovators',
    description: 'Designed to Represent. Built to Perform. Premium branded apparel for the world-class professional.',
    url: 'https://grittrix.com/merch',
    images: [{ url: '/collar.jpeg', width: 1200, height: 630, alt: 'Grittrix Premium Techwear' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grittrix Techwear | Branded Apparel',
    images: ['/collar.jpeg'],
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
