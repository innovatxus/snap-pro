import { getFirebaseClient, type FirebaseClient } from "@/lib/firebase/client";
import { AUTH_NOT_CONFIGURED_MESSAGE, getAuthErrorMessage } from "@/lib/auth/errors";
import type { DocumentData } from "firebase/firestore";
import type { User } from "firebase/auth";
import type { UserProfile } from "@/lib/auth/types";

// All firebase/auth and firebase/firestore functions are dynamically imported
// inside each function body so they never appear in the initial JS bundle.

async function requireConfigured(): Promise<FirebaseClient> {
  const client = await getFirebaseClient();
  if (!client) throw new Error(AUTH_NOT_CONFIGURED_MESSAGE);
  return client;
}

function toUserProfile(user: User, createdAt: string): UserProfile {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    createdAt,
  };
}

export function profileFromSnapshot(uid: string, data: DocumentData): UserProfile {
  return {
    uid,
    email: typeof data.email === "string" ? data.email : null,
    displayName: typeof data.displayName === "string" ? data.displayName : null,
    emailVerified: Boolean(data.emailVerified),
    createdAt: typeof data.createdAt === "string" ? data.createdAt : new Date(0).toISOString(),
  };
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const { db } = await requireConfigured();
  const { doc, getDoc } = await import("firebase/firestore");
  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;
  return profileFromSnapshot(uid, snap.data());
}

export interface SignUpInput {
  email: string;
  password: string;
  displayName: string;
}

export async function signUp({ email, password, displayName }: SignUpInput): Promise<void> {
  try {
    const { auth, db } = await requireConfigured();
    const {
      createUserWithEmailAndPassword,
      sendEmailVerification,
      updateProfile,
    } = await import("firebase/auth");
    const { doc, setDoc } = await import("firebase/firestore");

    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName });
    await sendEmailVerification(credential.user);

    const profile = toUserProfile(credential.user, new Date().toISOString());
    await setDoc(doc(db, "users", credential.user.uid), { ...profile, displayName });
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function signIn(email: string, password: string): Promise<void> {
  try {
    const { auth } = await requireConfigured();
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function signOutUser(): Promise<void> {
  try {
    const { auth } = await requireConfigured();
    const { signOut } = await import("firebase/auth");
    await signOut(auth);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function resetPassword(email: string): Promise<void> {
  try {
    const { auth } = await requireConfigured();
    const { sendPasswordResetEmail } = await import("firebase/auth");
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function resendVerificationEmail(): Promise<void> {
  try {
    const { auth } = await requireConfigured();
    const { sendEmailVerification } = await import("firebase/auth");
    if (!auth.currentUser) throw new Error("No signed-in user to verify.");
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}
