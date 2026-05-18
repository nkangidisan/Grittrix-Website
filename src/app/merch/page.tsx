import * as React from 'react';
import type { Metadata } from 'next';
import { MerchClient } from './MerchClient';

export const metadata: Metadata = {
  title: 'Grittrix Merchandise | Premium Apparel for Innovators',
  description: 'Premium apparel engineered for innovators, creators, professionals, and modern businesses. Designed to represent, built to perform.',
};

export default function MerchPage() {
  return <MerchClient />;
}