
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This configures Genkit to use the Google AI provider
// and sets 'gemini-1.0-pro' as the default model.

// !! IMPORTANT !!
// If "Model not found" errors persist (e.g., "NOT_FOUND: Model 'gemini-1.0-pro' not found"),
// it is highly likely an issue with your Google Cloud Project setup or API Key, NOT the model name itself.
// PLEASE VERIFY THE FOLLOWING IN YOUR GOOGLE CLOUD PROJECT AND ENVIRONMENT:
// 1. API Key: Your GOOGLE_API_KEY (or GEMINI_API_KEY) must be correctly set in your .env file
//    or environment variables. The key must be valid and have permissions for the relevant AI services.
// 2. APIs Enabled: The Google Cloud project associated with your API key must have the
//    "Generative Language API" (if using Gemini API directly) or the "Vertex AI API" (if using models
//    via Vertex AI) ENABLED. You can check and enable APIs in the Google Cloud Console.
// 3. Billing: Billing must be enabled for your Google Cloud project. Many AI services require this.
// 4. Model Access: Ensure your project has access to the 'gemini-1.0-pro' model. Access can sometimes be
//    region-specific or require specific terms to be accepted in the Google Cloud Console.
// 5. Correct Project: Ensure the API key is associated with the correct Google Cloud project where
//    the above are configured.

export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.0-pro', // Using a widely available and robust model.
});
