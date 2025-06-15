// src/lib/firebaseAdmin.ts
import admin from 'firebase-admin';

// Ensure this path is correct for your service account key file
// For App Hosting, environment variables are preferred over a key file.
// process.env.GOOGLE_APPLICATION_CREDENTIALS should point to the key file if used locally.

if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    // For environments where the service account key is passed as a JSON string
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // If using Realtime Database
    });
  } else if (process.env.GOOGLE_CLOUD_PROJECT) {
    // For Google Cloud environments like Cloud Functions, App Engine, App Hosting
    admin.initializeApp();
  } else {
    // Fallback for local development if GOOGLE_APPLICATION_CREDENTIALS is set
    // Or if you want to provide a default local setup
    // console.warn("Firebase Admin SDK not fully configured. Ensure FIREBASE_SERVICE_ACCOUNT_KEY or GOOGLE_CLOUD_PROJECT (with ADC) is set.");
    // admin.initializeApp(); // This might work if Application Default Credentials are set up locally
  }
}

export const firestoreAdmin = admin.firestore();
export const authAdmin = admin.auth();
// export const storageAdmin = admin.storage(); // If using Firebase Storage

export default admin;
