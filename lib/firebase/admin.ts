import "server-only";
import { cert, getApps, getApp, initializeApp, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

// The Admin SDK service-account key IS a secret: server-only, never
// `NEXT_PUBLIC_`, never committed. The `server-only` import above makes any
// accidental client-bundle import a build error rather than a leak.
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

export const isFirebaseAdminConfigured = Boolean(serviceAccountKey);

let app: App | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseAdminConfigured) {
  const credentials = JSON.parse(serviceAccountKey as string) as Record<string, string>;
  app = getApps().length ? getApp() : initializeApp({ credential: cert(credentials) });
  auth = getAuth(app);
  db = getFirestore(app);
}

export { app, auth, db };
