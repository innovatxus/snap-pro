import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type Auth,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, type DocumentData, type Firestore } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase/client";
import { AUTH_NOT_CONFIGURED_MESSAGE, getAuthErrorMessage } from "@/lib/auth/errors";
import type { UserProfile } from "@/lib/auth/types";

// Module-level `auth`/`db` are imported `let` bindings (live ES module
// references), so TypeScript can't narrow them from a non-null check alone —
// returning fresh locals here gives every caller a properly non-null type.
function requireConfigured(): { auth: Auth; db: Firestore } {
  if (!isFirebaseConfigured || !auth || !db) {
    throw new Error(AUTH_NOT_CONFIGURED_MESSAGE);
  }
  return { auth, db };
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
  const { db } = requireConfigured();
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
    const { auth, db } = requireConfigured();
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
    const { auth } = requireConfigured();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function signOutUser(): Promise<void> {
  try {
    const { auth } = requireConfigured();
    await signOut(auth);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function resetPassword(email: string): Promise<void> {
  try {
    const { auth } = requireConfigured();
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}

export async function resendVerificationEmail(): Promise<void> {
  try {
    const { auth } = requireConfigured();
    if (!auth.currentUser) throw new Error("No signed-in user to verify.");
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error));
  }
}
