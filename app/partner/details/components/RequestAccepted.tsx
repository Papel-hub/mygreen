"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestAccepted() {

    const router = useRouter();

    return (
        <div className="max-w-md mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">

            <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="text-green-600 w-8 h-8" />
            </div>

            <h1 className="text-xl font-bold text-gray-900">
                Already Accepted
            </h1>

            <p className="text-sm text-gray-500 mt-2">
                Another driver has already accepted this request.
            </p>

            <button
                onClick={() => router.push("/")}
                className="mt-6 bg-[#169B62] text-white px-6 py-3 rounded-xl font-semibold"
            >
                Back to Home
            </button>

        </div>
    );
}