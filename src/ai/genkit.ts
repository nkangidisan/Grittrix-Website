
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// This configures Genkit to use the Google AI provider
// and sets 'gemini-1.0-pro' as the default model.

// ####################################################################################
// !! CRITICAL: "Model not found" (e.g., "NOT_FOUND: Model 'gemini-1.0-pro' not found") !!
// ####################################################################################
// This error almost ALWAYS means an issue with your Google Cloud Project setup
// or API Key, NOT the model name itself if using a standard model like 'gemini-1.0-pro'.
//
// PLEASE METICULOUSLY VERIFY THE FOLLOWING:
//
// 1. API KEY (GOOGLE_API_KEY or GEMINI_API_KEY):
//    - Is it correctly set in your .env file (at the root of your project)?
//    - Is it valid and not expired?
//    - Does it have permissions for the "Generative Language API" or "Vertex AI API"?
//    - Create a new API key if unsure and ensure it's properly restricted but functional.
//
// 2. GOOGLE CLOUD PROJECT:
//    - APIs ENABLED: In the Google Cloud Console (console.cloud.google.com) for the
//      project associated with your API key, ensure the following API is ENABLED:
//        - "Generative Language API" (usually for `googleAI()` plugin with Gemini family)
//        - OR "Vertex AI API" (if you intend to use models via Vertex AI, though
//          `googleAI()` typically points to the former).
//      Search for these APIs in the "APIs & Services" > "Enabled APIs & services" section.
//
//    - BILLING ENABLED: Billing MUST be enabled for your Google Cloud project.
//      AI services are generally not free beyond initial quotas or trials.
//      Check "Billing" in the Google Cloud Console.
//
//    - CORRECT PROJECT: Ensure your API key is associated with the *correct* Google Cloud
//      project where the APIs are enabled and billing is active.
//
//    - MODEL ACCESS/QUOTAS: While 'gemini-1.0-pro' is widely available, double-check if
//      your project has any specific restrictions or if quotas for the Generative Language API
//      are sufficient. (Usually less of an issue for "not found" vs. "quota exceeded").
//
// TROUBLESHOOTING STEPS:
//    A. Create a brand new, unrestricted API key in your Google Cloud Project.
//    B. Test this new key with a very simple, direct API call (e.g., using `curl` or a
//       Google API client library outside of Genkit) to confirm the key and project setup
//       can access the model.
//    C. Ensure your `.env` file is being loaded correctly by your application.
// ####################################################################################

export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.0-pro', // Using a widely available and robust model.
});

