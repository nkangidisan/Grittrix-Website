
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Determine which API key to use. Prioritize GEMINI_API_KEY if set.
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

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
//    - GEMINI_API_KEY (or GOOGLE_API_KEY):
//      - Is it correctly set? (e.g., GEMINI_API_KEY=AIzaSy......)
//      - Is it valid and not expired?
//      - Does it have permissions for the correct API (see point 2)?
//      - (Best Practice): Create a new API key if unsure. Ensure it's properly restricted
//        for security but has the necessary API permissions.
//    - Ensure the .env file is in the ROOT directory of your project, not inside src/ or any other subfolder.
//    - Ensure the .env file is being loaded. (Your `src/ai/dev.ts` should handle this for dev mode).
//      If you've just modified it, restart your development server (`npm run dev` and `npm run genkit:dev`).
//
// 2. GOOGLE CLOUD PROJECT (associated with the API key):
//    - "GENERATIVE LANGUAGE API" ENABLED:
//      - In Google Cloud Console (console.cloud.google.com), navigate to "APIs & Services" > "Enabled APIs & services".
//      - Click "+ ENABLE APIS AND SERVICES".
//      - Search for "Generative Language API".
//      - Ensure it is ENABLED for your project. (This is the most common API for `googleAI()` with Gemini models like 'gemini-1.0-pro').
//      - ALTERNATIVELY, if you intend to use Vertex AI models directly via a Vertex AI endpoint (less common for this setup with `googleAI()` plugin unless specifically configured), ensure the "Vertex AI API" is enabled. For `gemini-1.0-pro` via `googleAI()`, the "Generative Language API" is usually the one.
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
//    A. RESTART SERVERS: After any change to `.env` or GCP settings, fully stop and restart
//       both your Next.js dev server (`npm run dev`) and your Genkit dev server (`npm run genkit:dev`).
//
//    B. VERIFY .env LOADING: Ensure your `.env` file is being loaded correctly.
//       Add `console.log("GEMINI_API_KEY_LOADED:", process.env.GEMINI_API_KEY);`
//       at the very top of `src/ai/genkit.ts` (outside any function) to see if it's loaded when the server starts.
//       Remove this log after testing.
//
//    C. NEW API KEY: Create a brand new API key in your GCP project.
//       Ensure it has permissions for the "Generative Language API". Test this new key.
//       Remember to restrict it properly after testing (e.g., API restrictions, Application restrictions).
//
//    D. DIRECT API TEST (CRUCIAL): Test your API key and project setup with a very simple, direct API call
//       (e.g., using `curl` or a Google API client library outside of Genkit/Next.js)
//       to confirm the key and project setup can access the `gemini-1.0-pro` model.
//       Example `curl` for Generative Language API (replace YOUR_API_KEY and ensure your project has the API enabled and billing active):
//       \`\`\`bash
//       curl -X POST \
//            -H "Content-Type: application/json" \
//            -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
//            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=YOUR_API_KEY"
//       \`\`\`
//       If this \`curl\` command fails with a "not found," "permission denied," "API not enabled," or similar error,
//       the issue is definitively with your GCP setup or API Key, not the Genkit code itself.
//       If it works, the issue might be how the key is passed to the application or a subtle Next.js/Genkit interaction specific to your environment.
//
//    E. CHECK FOR TYPOS IN `.env`: Ensure `GEMINI_API_KEY=...` has no extra spaces or characters.
//
//    F. REGION/LOCATION: While less common for this specific error with `gemini-1.0-pro`, some models or services
//       might have regional availability. Ensure your project and API key usage align with Google's terms and availability.
//
// ####################################################################################

export const ai = genkit({
  plugins: [
    googleAI(apiKey ? { apiKey } : {}), // Pass apiKey if available, otherwise rely on ADC
  ],
  model: 'gemini-1.0-pro', // Using a widely available and robust model.
});

// For debugging, you can log if the API key is being detected by genkit.ts
if (!apiKey) {
  console.warn("[Genkit Init] Neither GEMINI_API_KEY nor GOOGLE_API_KEY was found in environment variables. Genkit will try to use Application Default Credentials if available.");
} else {
  // To avoid logging the actual key, just confirm which one was found, or that one was found.
  // console.log(`[Genkit Init] Using API key from environment variable: ${process.env.GEMINI_API_KEY ? 'GEMINI_API_KEY' : 'GOOGLE_API_KEY'}`);
}
