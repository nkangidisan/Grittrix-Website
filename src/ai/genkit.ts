
import 'dotenv/config';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Attempt to load GEMINI_API_KEY first, then fall back to GOOGLE_API_KEY
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.warn(
    "################################################################################################\n" +
    "!! WARNING: API KEY NOT FOUND !!\n" +
    "################################################################################################\n" +
    "Neither GEMINI_API_KEY nor GOOGLE_API_KEY is set in your .env file or environment variables.\n" +
    "The application will likely fail when trying to contact Google AI services.\n" +
    "Please create a .env file in the root of your project and add your API key:\n" +
    "Example: GEMINI_API_KEY=AIzaSy...................\n" +
    "See the detailed troubleshooting steps below if you encounter 'Model not found' errors.\n" +
    "################################################################################################\n"
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey, // Explicitly pass the API key
      // You can also specify other options like defaultModel, defaultVisionModel, etc. here if needed
      // apiVersion: 'v1beta', // Or 'v1' - try 'v1beta' if 'v1' isn't working or vice-versa
    }),
  ],
  model: 'gemini-1.0-pro', // Default model for text generation
  // visionModel: 'gemini-pro-vision', // Default model for vision tasks if you use them separately
});

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
//      - Is it the EXACT key you tested successfully with the `curl` command (see step D below)?
//      - Is it valid and not expired?
//      - Does it have permissions for the correct API (see point 2)?
//      - (Best Practice): Create a new API key if unsure. Ensure it's properly restricted
//        for security but has the necessary API permissions.
//    - Ensure the .env file is in the ROOT directory of your project, not inside src/ or any other subfolder.
//    - Ensure the .env file is being loaded. (Your `src/ai/dev.ts` should handle this for dev mode via `dotenv/config`).
//      If you've just modified it, **RESTART BOTH YOUR NEXT.JS DEV SERVER (`npm run dev`) AND YOUR GENKIT DEV SERVER (`npm run genkit:dev`)**.
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
//       **THIS IS VERY IMPORTANT FOR .env CHANGES TO BE PICKED UP.**
//
//    B. VERIFY .env LOADING: Ensure your `.env` file is being loaded correctly.
//       Add `console.log("GEMINI_API_KEY_LOADED_IN_GENKIT_CONFIG:", process.env.GEMINI_API_KEY);`
//       at the very top of this file (`src/ai/genkit.ts`) (outside any function) to see if it's loaded when the Genkit server starts.
//       Remove this log after testing.
//
//    C. NEW API KEY: Create a brand new API key in your GCP project.
//       Ensure it has permissions for the "Generative Language API". Test this new key.
//       Remember to restrict it properly after testing (e.g., API restrictions, Application restrictions).
//       Replace the old key in your .env file with this new one and restart servers.
//
//    D. DIRECT API TEST (CRUCIAL): Test your API key and project setup with a very simple, direct API call
//       (e.g., using `curl` or a Google API client library outside of Genkit/Next.js)
//       to confirm the key and project setup can access the `gemini-1.0-pro` model.
//       Example `curl` for Generative Language API (replace YOUR_API_KEY with the key from your .env file, and ensure your project has the API enabled and billing active):
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
//    G. API VERSION: In the `googleAI` plugin configuration above, you can try switching `apiVersion` between `'v1'` and `'v1beta'` if one isn't working.
//
// ####################################################################################
