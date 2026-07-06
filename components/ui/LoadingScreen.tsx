"use client";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="flex flex-col items-center">

        <div className="relative">

          <div
            className="
              w-16
              h-16
              rounded-full
              border-4
              border-[#169B62]/20
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-transparent
              border-t-[#169B62]
              animate-spin
            "
          />

        </div>

        <h2 className="mt-6 font-bold text-gray-700 text-lg">
          Loading dashboard...
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Please wait a moment.
        </p>

      </div>
    </div>
  );
}