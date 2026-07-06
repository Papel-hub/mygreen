"use client";

import useCountdown from "@/hooks/useCountdown";

interface Props {
    expiresAt: string;
}

export default function Countdown({ expiresAt }: Props) {

    const { remaining, expired } = useCountdown(expiresAt);

    if (expired) {
        return (
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                <p className="text-red-600 font-semibold text-sm">
                    ⏰ This request has expired
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">

            <div className="flex items-center justify-between">

                <p className="text-xs text-gray-400">
                    Time remaining
                </p>

                <p className="text-xs font-medium text-green-600">
                    Active
                </p>

            </div>

            <div className="mt-2 text-center">

                <p className="text-2xl font-extrabold text-gray-800 tracking-wider">
                    {remaining}
                </p>

            </div>

        </div>
    );
}