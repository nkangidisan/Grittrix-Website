
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-pro', // Changed from gemini-1.5-flash to gemini-pro
});

