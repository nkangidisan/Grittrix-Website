
'use server';

/**
 * @fileOverview An AI agent for optimizing website content for SEO and trust-building.
 *
 * - optimizeContent - A function that optimizes website content.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

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
  content: z.string().describe("The optimized content for the page. This content should be plain text, suitable for rendering directly within HTML paragraph tags. Use double newlines (\\n\\n) to separate distinct paragraphs. Do not include any HTML tags (e.g., <h1>, <p>, <strong>) in this content string."),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const contentOptimizerPrompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  // Model defaults to what's set in ai/genkit.ts (e.g., 'gemini-1.0-pro')
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an expert content writer specializing in SEO optimization and trust-building content.

You will generate content for the "{{pageType}}" page of a website.

Optimize the content for the following keywords: {{keywords}}.

Use the following information about the company to provide context and build trust: {{companyInfo}}.

Ensure the content is engaging, informative, and optimized for search engines.
The 'content' field in your output should be formatted as plain text suitable for direct rendering in HTML paragraph tags.
Use double newlines (\\n\\n) to separate distinct paragraphs.
IMPORTANT: Do NOT include any HTML tags (e.g., <h1>, <p>, <strong>, <ul>, <li>) in the content string itself.
Your output must be a JSON object matching the defined schema, containing a 'title' and 'content'.`,
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async (input: OptimizeContentInput): Promise<OptimizeContentOutput> => {
    try {
      const generationResult = await contentOptimizerPrompt(input);
      const output = generationResult.output; 

      if (!output) {
        console.error(`[${optimizeContentFlow.name}] No structured output received from model for input:`, JSON.stringify(input));
        throw new Error("Content optimization failed: No structured output was received from the AI model.");
      }
      return output;
    } catch (e: any) {
      let errorMessage = "AI content optimization failed";
      // Check if the error message is about the model not being found
      if (e.message && e.message.includes("NOT_FOUND") && e.message.includes("Model")) {
          errorMessage = `${errorMessage}: ${e.message}. THIS ALMOST ALWAYS INDICATES AN ISSUE WITH YOUR GOOGLE CLOUD PROJECT SETUP (API KEY, ENABLED APIS, BILLING) - PLEASE METICULOUSLY CHECK THE TROUBLESHOOTING STEPS IN THE COMMENTS OF THE 'src/ai/genkit.ts' FILE.`;
      } else if (e.message) {
          errorMessage = `${errorMessage}: ${e.message}`;
      } else {
        errorMessage = `${errorMessage} due to an unknown error: ${String(e)}`;
      }
      // Log the processed errorMessage string first, then the raw error object.
      console.error(`[${optimizeContentFlow.name}] ${errorMessage}. Original error object:`, e);
      throw new Error(errorMessage);
    }
  }
);
