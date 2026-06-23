"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase/client";
import { getUserProfile } from "@/lib/auth/service";
import type { UserProfile } from "@/lib/auth/types";

type AuthStatus = "loading" | "signed-in" | "signed-out";

interface AuthContextValue {
  status: AuthStatus;
  profile: UserProfile | null;
  isConfigured: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  status: "loading",
  profile: null,
  isConfigured: false,
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>(() =>
    isFirebaseConfigured ? "loading" : "signed-out",
  );
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [uid, setUid] = useState<string | null>(null);

  const refreshProfile = useCallback(async () => {
    if (!uid) return;
    try {
      setProfile(await getUserProfile(uid));
    } catch {
      /* profile is best-effort display data; auth state itself is unaffected */
    }
  }, [uid]);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) return;
    setPersistence(auth, browserLocalPersistence).catch(() => {});

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUid(null);
        setProfile(null);
        setStatus("signed-out");
        return;
      }
      setUid(user.uid);
      setStatus("signed-in");
      try {
        setProfile(await getUserProfile(user.uid));
      } catch {
        setProfile(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ status, profile, isConfigured: isFirebaseConfigured, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
