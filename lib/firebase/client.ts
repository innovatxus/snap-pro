import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

// Type-only imports are erased at compile time — zero Firebase SDK in this
// module's static footprint. The actual SDK is dynamically imported inside
// getFirebaseClient() so it never appears in the initial JS bundle and only
// downloads after first paint when auth is actually needed.

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Sync boolean for cheap initial-state decisions — no SDK import required.
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId,
);

export interface FirebaseClient {
  auth: Auth;
  db: Firestore;
}

// undefined = not yet resolved; null = not configured
let _cached: FirebaseClient | null | undefined;

/**
 * Returns the initialised Firebase client, lazily importing the SDK on the
 * first call and serving the cached instance on every subsequent call.
 * Returns null when the required env vars are absent.
 */
export async function getFirebaseClient(): Promise<FirebaseClient | null> {
  if (_cached !== undefined) return _cached;

  if (!isFirebaseConfigured) {
    _cached = null;
    return null;
  }

  const [{ initializeApp, getApps, getApp }, { getAuth }, { getFirestore }] =
    await Promise.all([
      import("firebase/app"),
      import("firebase/auth"),
      import("firebase/firestore"),
    ]);

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  _cached = { auth: getAuth(app), db: getFirestore(app) };
  return _cached;
}
