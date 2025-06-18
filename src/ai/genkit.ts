
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
// PLEASE METICULOUSLY VERIFY THE FOLLOWING IN YOUR GOOGLE CLOUD PROJECT
// (console.cloud.google.com) AND .env FILE:
//
// 1. .env FILE (at the root of your project):
//    - GOOGLE_API_KEY (or GEMINI_API_KEY for Gemini API directly):
//      - Is it correctly set? (e.g., GOOGLE_API_KEY=AIzaSy......)
//      - Is it valid and not expired?
//      - Does it have permissions for the "Generative Language API"?
//      - (Best Practice): Create a new API key if unsure. Ensure it's properly restricted
//        for security but has the necessary API permissions.
//    - Ensure the .env file is in the ROOT directory of your project, not inside src/ or any other subfolder.
//
// 2. GOOGLE CLOUD PROJECT (associated with the API key):
//    - "Generative Language API" ENABLED:
//      - In Google Cloud Console (console.cloud.google.com), navigate to "APIs & Services" > "Enabled APIs & services".
//      - Click "+ ENABLE APIS AND SERVICES".
//      - Search for "Generative Language API".
//      - Ensure it is ENABLED for your project. (This is the most common API for `googleAI()` with Gemini models like 'gemini-1.0-pro').
//      - Alternatively, if you intend to use Vertex AI, ensure "Vertex AI API" is enabled (though `googleAI()` typically targets the Generative Language API).
//
//    - BILLING ENABLED:
//      - AI services are generally NOT free beyond initial quotas or trials.
//      - In Google Cloud Console, navigate to "Billing".
//      - Ensure billing is ENABLED for your project and a valid payment method is configured.
//
//    - CORRECT PROJECT:
//      - Verify that your API key is associated with the *correct* Google Cloud project
//        where the API is enabled and billing is active. An API key is tied to a specific project.
//
//    - MODEL ACCESS/QUOTAS (Less common for "not found" but good to check):
//      - While 'gemini-1.0-pro' is widely available, check if your project has specific
//        restrictions or if quotas for the Generative Language API are sufficient.
//        (Usually, quota issues result in "quota exceeded" errors, not "not found").
//
// TROUBLESHOOTING STEPS:
//    A. VERIFY .env LOADING: Ensure your `.env` file is being loaded correctly by your Next.js application.
//       Genkit internally uses `dotenv` if available. The `config()` call from `dotenv` is in `src/ai/dev.ts`,
//       so for development (`npm run genkit:dev`), it should be loaded. For production builds,
//       ensure environment variables are set in your hosting environment.
//    B. NEW API KEY: Create a brand new API key in your GCP project.
//       Test this new key. Remember to restrict it properly after testing.
//    C. DIRECT API TEST: Test your API key and project setup with a very simple, direct API call
//       (e.g., using `curl` or a Google API client library outside of Genkit/Next.js)
//       to confirm the key and project setup can access the `gemini-1.0-pro` model.
//       Example `curl` for Generative Language API (replace YOUR_API_KEY):
//       ```bash
//       curl -X POST \
//            -H "Content-Type: application/json" \
//            -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
//            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=YOUR_API_KEY"
//       ```
//       If this `curl` command fails with a "not found," "permission denied," or similar error,
//       the issue is definitively with your GCP setup or API Key, not the Genkit code itself.
// ####################################################################################

export const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.0-pro', // Using a widely available and robust model.
});
