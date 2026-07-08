"use client";

import useCountdown from "@/hook/useCountdown";
import { RequestStatus } from "@/types/request";

interface Props {
    status: RequestStatus;
    expiresAt: string;
}

export default function StatusBanner({ status, expiresAt }: Props) {

    const { remaining, expired } = useCountdown(expiresAt);

    const getStatusLabel = () => {
        if (expired) return "EXPIRED";

        switch (status) {
            case "NEW":
                return "NEW REQUEST";
            case "ACCEPTED":
                return "ACCEPTED";
            case "CANCELLED":
                return "CANCELLED";
            default:
                return "UNKNOWN";
        }
    };

    const getColor = () => {
        if (expired) return "bg-red-600/60 border-red-500/40";

        switch (status) {
            case "NEW":
                return "bg-green-600/50 border-green-500/30";
            case "ACCEPTED":
                return "bg-blue-600/50 border-blue-500/30";
            case "CANCELLED":
                return "bg-gray-600/50 border-gray-500/30";
            default:
                return "bg-gray-500/50";
        }
    };

    return (
        <div className="px-4 py-3">

            <div className={`
                text-center py-2 px-4 rounded-lg text-sm font-medium
                border backdrop-blur-sm text-white
                ${getColor()}
            `}>

                <span>{getStatusLabel()}</span>

                <span className="mx-2">•</span>

                {expired ? (
                    <span className="text-red-100">
                        Request expired
                    </span>
                ) : (
                    <span className="text-green-100">
                        Expires in {remaining}
                    </span>
                )}

            </div>

        </div>
    );
}