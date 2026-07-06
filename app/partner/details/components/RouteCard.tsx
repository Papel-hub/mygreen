"use client";

import { RequestModel } from "@/types/request";

import { MapPin, Navigation, Clock } from "lucide-react";

interface Props {
    request: RequestModel;
}

export default function RouteCard({ request }: Props) {

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">

            {/* Title */}
            <h2 className="text-green-800 font-bold text-base mb-4">
                Collection & Delivery
            </h2>

            {/* Timeline */}
            <div className="relative pl-8 space-y-6">

                {/* Vertical dashed line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-gray-300"></div>

                {/* PICKUP */}
                <div className="relative">

                    <div className="absolute -left-8 p-1 bg-green-50 rounded-lg text-green-700 z-10">
                        <MapPin size={16} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-800">
                            {request.pickup.address}
                        </p>

                        <p className="text-xs text-gray-500">
                            {request.pickup.startTime} - {request.pickup.endTime}
                        </p>
                    </div>

                </div>

                {/* DELIVERY LABEL */}
                <div className="text-xs font-bold text-green-600 tracking-wide uppercase">
                    Delivery
                </div>

                {/* DELIVERY */}
                <div className="relative">

                    <div className="absolute -left-8 p-1 bg-orange-50 rounded-lg text-orange-600 z-10">
                        <MapPin size={16} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-800">
                            {request.delivery.address}
                        </p>

                        <p className="text-xs text-gray-500">
                            {request.delivery.startTime} - {request.delivery.endTime}
                        </p>
                    </div>

                </div>

            </div>

            {/* Stats */}
            <hr className="my-4 border-gray-100" />

            <div className="grid grid-cols-2 divide-x divide-gray-100 text-center">

                <div>

                    <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-1">
                        <Navigation className="w-3.5 h-3.5" />
                        Distance
                    </div>

                    <p className="text-sm font-bold text-gray-800">
                        {request.distance} km
                    </p>

                </div>

                <div>

                    <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        ETA
                    </div>

                    <p className="text-sm font-bold text-gray-800">
                        {request.estimatedMinutes} min
                    </p>

                </div>

            </div>

        </div>
    );
}