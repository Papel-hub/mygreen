"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { sendOffer } from "@/services/offerService";

interface Props {
    requestId: string;
    offer: string;
}

export default function SendOfferButton({
    requestId,
    offer
}: Props) {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const onSend = async () => {

        setError("");

        const value = Number(offer);

        if (!value || value <= 0) {

            setError("Invalid offer value");

            return;

        }

        try {

            setLoading(true);

            await sendOffer(requestId, value);

            router.push(`/requests/${requestId}/confirmation`);

        } catch (err: any) {

            setError("Failed to send offer");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="w-full">

            {error && (

                <div className="mb-3 bg-red-50 border border-red-100 text-red-600 text-xs p-2 rounded-lg">
                    {error}
                </div>

            )}

            <button
                onClick={onSend}
                disabled={loading}
                className={`
                    w-full py-3.5 rounded-xl font-bold text-white
                    transition active:scale-[0.99]
                    ${loading
                        ? "bg-gray-400"
                        : "bg-[#FF8200] hover:bg-orange-500"
                    }
                `}
            >

                {loading ? "Sending offer..." : "Send Offer"}

            </button>

        </div>

    );

}