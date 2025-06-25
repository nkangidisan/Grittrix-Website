
'use server';

/**
 * @fileOverview An AI agent for optimizing website content for SEO and trust-building.
 * NOTE: AI functionality is temporarily disabled to ensure project stability.
 * This file provides static fallback content.
 */

export interface OptimizeContentInput {
  pageType: 'About Us' | 'Services';
  keywords?: string;
  companyInfo?: string;
}

export interface OptimizeContentOutput {
  title: string;
  content: string;
}

// Fallback static content provider
const getFallbackContent = (pageType: 'About Us' | 'Services'): OptimizeContentOutput => {
  if (pageType === 'About Us') {
    return {
      title: "About Grittrix: Redefining Industries with Technology",
      content: "Grittrix is on a mission to redefine industries through accessible, scalable, and localized technology.\n\nBorn from a passion to solve real-world challenges in emerging markets, Grittrix develops intelligent systems for sectors that matter: health, retail, agriculture, and education.\n\nWe believe that powerful technology shouldn't just be for the privileged few. Our tools empower even the smallest organizations to thrive."
    };
  }
  return {
    title: "Our AI-Powered Services & Platforms",
    content: "Grittrix delivers a comprehensive suite of ready-to-use, AI-powered platforms and services designed to modernize your operations and drive growth.\n\nWe specialize in making advanced technology accessible and impactful for businesses in emerging markets."
  };
};

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  console.log(`[Static Content] Providing fallback content for page type: ${input.pageType}`);
  return Promise.resolve(getFallbackContent(input.pageType));
}
