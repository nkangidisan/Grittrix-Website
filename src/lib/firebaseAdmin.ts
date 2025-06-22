
// src/lib/firebaseAdmin.ts
import admin from 'firebase-admin';

// Ensure this path is correct for your service account key file
// For App Hosting, environment variables are preferred over a key file.
// process.env.GOOGLE_APPLICATION_CREDENTIALS should point to the key file if used locally.

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  // Check if the service account key is provided and is a non-empty string
  if (serviceAccountKey && serviceAccountKey.trim().length > 0) {
    try {
      const serviceAccount = JSON.parse(serviceAccountKey);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // If using Realtime Database
      });
    } catch (e) {
      console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. It might not be a valid JSON object. Ensure it's a valid JSON string.", e);
      console.warn("Falling back to default Firebase Admin SDK initialization due to parsing error.");
      admin.initializeApp();
    }
  } else if (process.env.GOOGLE_CLOUD_PROJECT) {
    // For Google Cloud environments (like App Hosting, Cloud Functions, App Engine)
    // where credentials are automatically discovered.
    admin.initializeApp();
  } else {
    // For other environments (e.g., local development relying on ADC via gcloud)
    // or if no specific credentials environment variables are set.
    console.warn(
      "Firebase Admin SDK initializing with default configuration. " +
      "This relies on Application Default Credentials (ADC) if available, or an emulated environment. " +
      "For local development, ensure ADC are set up (e.g., `gcloud auth application-default login`) " +
      "or provide FIREBASE_SERVICE_ACCOUNT_KEY for explicit configuration."
    );
    admin.initializeApp(); // Initialize using ADC or environment defaults
  }
}

// After the block above, admin.initializeApp() should have been called if no apps existed.
// So, we can directly export the services.
export const firestoreAdmin = admin.firestore();
export const authAdmin = admin.auth();
// export const storageAdmin = admin.storage(); // If using Firebase Storage

export default admin;

    