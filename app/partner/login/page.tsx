"use client";

import LoginCard from "./components/LoginCard";

export default function PartnerLoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F7FFF9] to-[#E9FFF2] px-6 py-10">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#169B62]/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#169B62]/10 blur-3xl" />

      </div>

      <LoginCard />

    </main>
  );
}