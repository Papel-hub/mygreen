"use client";

import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="relative z-10 w-full max-w-md">

      <div className="rounded-3xl border border-white/50 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">

        {/* Logo */}

        <div className="mt-5 flex flex-col items-center">

          <div className="relative h-28 w-28">

            <Image
              src="/images/logo0.svg"
              alt="Ireland My Green Diamond"
              fill
              priority
              className="object-contain"
            />

          </div>

          <h1 className="mt-5 text-center text-3xl font-bold text-[#169B62]">
            Partner Driver
          </h1>

          <p className="mt-2 text-center text-sm leading-6 text-gray-500">
            Sign in to access deliveries, earnings and your driver dashboard.
          </p>

        </div>

        {/* Form */}

        <div className="mt-8">

          <LoginForm />

        </div>

        {/* Footer */}

        <div className="mt-8 border-t pt-6 text-center">

          <p className="text-sm text-gray-500">

            Don&apos;t have an account?

            <Link
              href="/partner/register"
              className="ml-2 font-semibold text-[#169B62] transition hover:text-[#11784D]"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}