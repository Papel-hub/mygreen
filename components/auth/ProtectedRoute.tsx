"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/providers/AuthProvider";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/partner/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-[#169B62] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}