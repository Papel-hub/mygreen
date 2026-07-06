"use client";

import { ArrowLeft, Bell } from "lucide-react";

interface Props {
    onBack: () => void;
}

export default function RequestHeader({ onBack }: Props) {
    return (
        <div className="bg-[#169B62] text-white pt-10 pb-4 px-4 rounded-b-lg shadow-md">

            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">

                <button
                    onClick={onBack}
                    className="p-1 hover:bg-green-600 rounded-lg transition"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <h1 className="text-lg font-semibold tracking-wide">
                    Request Details
                </h1>

                <button className="p-1 hover:bg-green-600 rounded-lg transition">
                    <Bell className="w-5 h-5" />
                </button>

            </div>

            {/* Status banner placeholder (fica visualmente igual ao teu original) */}
            <div className="bg-green-600/50 border border-green-500/30 text-center py-2 px-4 rounded-lg text-sm font-medium backdrop-blur-sm">
                New Request <span className="mx-1">•</span>
                <span className="text-green-200 ml-1">
                    Loading status...
                </span>
            </div>

        </div>
    );
}