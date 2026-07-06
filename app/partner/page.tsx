"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PartnerDriverSplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.replace("/partner/login");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F7FFF9] to-[#E8FFF2] px-6">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#169B62]/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#169B62]/10 blur-3xl" />

      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">

        {/* Logo */}

        <div className="relative h-44 w-44 animate-[pulse_3s_ease-in-out_infinite]">

          <Image
            src="/images/logo0.svg"
            alt="Ireland My Green Diamond"
            fill
            priority
            className="object-contain"
          />

        </div>

        {/* Title */}

        <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-[#169B62]">

          Partner Driver

        </h1>

        {/* Subtitle */}

        <p className="mt-4 max-w-xs text-center text-base leading-7 text-gray-600">

          Deliver with freedom,
          manage your deliveries and
          track your earnings in one place.

        </p>

        {/* Illustration */}

        <div className="relative mt-10 h-48 w-full max-w-xs">

          <Image
            src="/images/driver-welcome-illustration.png"
            alt="Partner Driver"
            fill
            className="object-contain"
            priority
          />

        </div>

        {/* Loading */}

        <div className="mt-8 flex flex-col items-center">

          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#169B62]/20 border-t-[#169B62]" />

          <p className="mt-5 text-sm font-medium tracking-wide text-gray-500">

            Preparing your workspace...

          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <p className="text-xs tracking-wide text-gray-400">

          Ireland My Green Diamond

        </p>

      </div>

    </main>
  );
}