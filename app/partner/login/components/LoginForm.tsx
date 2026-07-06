"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FirebaseError } from "firebase/app";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { useAuth } from "@/providers/AuthProvider";

import Divider from "./Divider";
import GoogleButton from "./GoogleButton";
import LoadingButton from "./LoadingButton";

export default function LoginForm() {
  const router = useRouter();

  const { login, loginWithGoogle } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] =
    useState<boolean>(false);

  const [rememberMe, setRememberMe] =
    useState<boolean>(false);

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      await login(email, password);

      router.replace("/partner/home");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      setLoading(true);
      setError("");

      await loginWithGoogle();

      router.replace("/partner/home");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unable to sign in with Google.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
            ) => setEmail(event.target.value)}
            placeholder="name@email.com"
            className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-4 transition focus:border-[#169B62] focus:outline-none focus:ring-2 focus:ring-[#169B62]/20"
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
            ) => setPassword(event.target.value)}
            placeholder="••••••••"
            className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-12 transition focus:border-[#169B62] focus:outline-none focus:ring-2 focus:ring-[#169B62]/20"
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() =>
              setShowPassword((previous) => !previous)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#169B62]"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
            ) => setRememberMe(event.target.checked)}
            className="h-4 w-4 accent-[#169B62]"
          />

          Remember me
        </label>

        <Link
          href="/partner/forgot-password"
          className="text-sm font-semibold text-[#169B62] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Error */}

      {error.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Login */}

      <LoadingButton
        loading={loading}
        text="Sign In"
      />

      <Divider />

      <GoogleButton
        loading={loading}
        onClick={handleGoogleLogin}
      />
    </form>
  );
}