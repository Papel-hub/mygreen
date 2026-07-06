"use client";

import { Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestExpired() {

    const router = useRouter();

    return (
        <div className="max-w-md mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">

            <div className="bg-red-100 p-4 rounded-full mb-4">
                <Clock className="text-red-600 w-8 h-8" />
            </div>

            <h1 className="text-xl font-bold text-gray-900">
                Request Expired
            </h1>

            <p className="text-sm text-gray-500 mt-2">
                This delivery request is no longer available.
            </p>

            <button
                onClick={() => router.push("/")}
                className="mt-6 bg-[#169B62] text-white px-6 py-3 rounded-xl font-semibold"
            >
                Go Back
            </button>

        </div>
    );
}