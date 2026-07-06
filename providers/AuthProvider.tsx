"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  browserLocalPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

import { auth } from "@/lib/firebase/config";

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login: (
    email: string,
    password: string,
    rememberMe?: boolean,
  ) => Promise<void>;

  loginWithGoogle: () => Promise<void>;

  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: User | null) => {
        setUser(currentUser);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean = true,
  ): Promise<void> => {
    await setPersistence(
      auth,
      rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence,
    );

    await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  };

  const loginWithGoogle =
    async (): Promise<void> => {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      await signInWithPopup(auth, provider);
    };

  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      login,
      loginWithGoogle,
      logout,
    }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider.",
    );
  }

  return context;
}