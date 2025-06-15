'use server';

/**
 * @fileOverview An AI agent for optimizing website content for SEO and trust-building.
 *
 * - optimizeContent - A function that optimizes website content.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  pageType: z
    .enum(['About Us', 'Services'])
    .describe('The type of website page to generate content for.'),
  keywords: z.string().describe('Relevant keywords for SEO optimization.'),
  companyInfo: z.string().describe('Information about the company for context.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  title: z.string().describe('The optimized title for the page.'),
  content: z.string().describe('The optimized content for the page.'),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an expert content writer specializing in SEO optimization and trust-building content.

You will generate content for the "{{pageType}}" page of a website.

Optimize the content for the following keywords: {{keywords}}.

Use the following information about the company to provide context and build trust: {{companyInfo}}.

Ensure the content is engaging, informative, and optimized for search engines.

Title:
Content:`, // No Handlebars functions, awaits, or complex logic here.
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
