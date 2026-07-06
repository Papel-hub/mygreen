"use client";

import { CheckCircle } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function ConfirmationPage() {

    const router = useRouter();
    const params = useParams();

    return (
        <div className="max-w-md mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">

            <div className="bg-green-100 p-5 rounded-full mb-4">
                <CheckCircle className="text-green-600 w-10 h-10" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
                Offer Sent!
            </h1>

            <p className="text-sm text-gray-500 mt-2">
                Your offer was successfully submitted.
                Waiting for customer response.
            </p>

            <button
                onClick={() => router.push(`/requests/${params.id}`)}
                className="mt-6 bg-[#169B62] text-white px-6 py-3 rounded-xl font-semibold"
            >
                Back to Request
            </button>

        </div>
    );
}