
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This configures Genkit to use the Google AI provider
// and sets 'gemini-1.0-pro' as the default model.
// If "Model not found" errors occur, please verify:
// 1. Your GOOGLE_API_KEY (or GEMINI_API_KEY) is correctly set in your environment.
// 2. The associated Google Cloud project has the Generative Language API or Vertex AI API enabled.
// 3. Billing is enabled for the Google Cloud project.
// 4. The project has access to the specified model.
export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.0-pro',
});
