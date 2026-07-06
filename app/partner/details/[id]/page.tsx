"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useRequest from "@/hooks/useRequest";
import useRealtimeRequest from "@/hooks/useRealtimeRequest";

import RequestHeader from "@/components/request/RequestHeader";
import StatusBanner from "@/components/request/StatusBanner";
import Countdown from "@/components/request/Countdown";
import OrderInformation from "@/components/request/OrderInformation";
import RouteCard from "@/components/request/RouteCard";
import RouteMap from "@/components/request/RouteMap";
import OfferCard from "@/components/request/OfferCard";
import SendOfferButton from "@/components/request/SendOfferButton";

import RequestExpired from "@/components/request/RequestExpired";
import RequestAccepted from "@/components/request/RequestAccepted";
import LoadingSkeleton from "@/components/request/LoadingSkeleton";

export default function RequestPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const { loading, request, error, reload } = useRequest(id);

    const [offer, setOffer] = useState<string>("");

    // realtime updates (Firestore onSnapshot)
    useRealtimeRequest(id, () => {
        reload();
    });

    // set default offer when request loads
    useEffect(() => {
        if (request?.suggestedPrice) {
            setOffer(String(request.suggestedPrice));
        }
    }, [request]);

    if (loading) return <LoadingSkeleton />;

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    if (!request) return null;

    // STATUS HANDLING
    if (request.status === "EXPIRED") {
        return <RequestExpired />;
    }

    if (request.status === "ACCEPTED") {
        return <RequestAccepted />;
    }

    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col font-sans">

            {/* HEADER */}
            <RequestHeader
                onBack={() => router.back()}
            />

            {/* STATUS + COUNTDOWN */}
            <StatusBanner
                status={request.status}
                expiresAt={request.expiresAt}
            />

            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">

                {/* ORDER INFO */}
                <OrderInformation request={request} />

                {/* ROUTE INFO */}
                <RouteCard request={request} />

                {/* MAP */}
                <RouteMap request={request} />

                {/* OFFER */}
                <OfferCard
                    request={request}
                    offer={offer}
                    setOffer={setOffer}
                />

                {/* COUNTDOWN (optional standalone visual) */}
                <Countdown expiresAt={request.expiresAt} />

            </div>

            {/* ACTION BUTTON */}
            <div className="p-4 bg-white border-t border-gray-100">
                <SendOfferButton
                    requestId={request.id}
                    offer={offer}
                />
            </div>

        </div>
    );
}