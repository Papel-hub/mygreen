"use client";

import { Minus, Plus, Euro } from "lucide-react";
import { Dispatch, SetStateAction, useMemo } from "react";
import { RequestModel } from "@/types/request";

interface Props {
    request: RequestModel;
    offer: string;
    setOffer: Dispatch<SetStateAction<string>>;
}

export default function OfferCard({
    request,
    offer,
    setOffer
}: Props) {

    const currency = request.currency ?? "€";

    const suggested = request.suggestedPrice ?? 0;

    const minimum = request.minimumOffer ?? suggested;

    const maximum = request.maximumOffer ?? suggested + 20;

    const numericOffer = Number(offer) || 0;

    const increase = () => {

        const value = Math.min(maximum, numericOffer + 0.5);

        setOffer(value.toFixed(2));

    };

    const decrease = () => {

        const value = Math.max(minimum, numericOffer - 0.5);

        setOffer(value.toFixed(2));

    };

    const onInput = (value: string) => {

        if (value === "") {

            setOffer("");

            return;

        }

        const number = Number(value);

        if (isNaN(number)) return;

        setOffer(value);

    };

    const validationMessage = useMemo(() => {

        if (numericOffer < minimum)
            return `Minimum offer is ${currency}${minimum.toFixed(2)}`;

        if (numericOffer > maximum)
            return `Maximum offer is ${currency}${maximum.toFixed(2)}`;

        return "";

    }, [numericOffer, minimum, maximum, currency]);

    return (

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">

            <div className="flex items-center justify-between mb-5">

                <div>

                    <h2 className="font-bold text-gray-900 text-base">
                        Your Offer
                    </h2>

                    <p className="text-xs text-gray-400 mt-1">
                        Set the amount you want to earn.
                    </p>

                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2">

                    <p className="text-xs text-gray-500">
                        Suggested
                    </p>

                    <p className="font-bold text-green-700">
                        {currency}{suggested.toFixed(2)}
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-3">

                <button
                    onClick={decrease}
                    className="h-11 w-11 rounded-xl bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                >
                    <Minus size={18} />
                </button>

                <div className="flex-1 relative">

                    <Euro
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                    />

                    <input
                        type="number"
                        step="0.50"
                        value={offer}
                        onChange={(e) => onInput(e.target.value)}
                        className="w-full h-11 pl-9 pr-3 rounded-xl border border-gray-200 text-lg font-bold outline-none focus:border-[#169B62]"
                    />

                </div>

                <button
                    onClick={increase}
                    className="h-11 w-11 rounded-xl bg-[#169B62] text-white hover:bg-green-700 transition flex items-center justify-center"
                >
                    <Plus size={18} />
                </button>

            </div>

            <div className="mt-5 space-y-2">

                <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                        Minimum
                    </span>

                    <span className="font-semibold">
                        {currency}{minimum.toFixed(2)}
                    </span>

                </div>

                <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                        Maximum
                    </span>

                    <span className="font-semibold">
                        {currency}{maximum.toFixed(2)}
                    </span>

                </div>

                <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                        Your Offer
                    </span>

                    <span className="font-bold text-[#169B62]">
                        {currency}{numericOffer.toFixed(2)}
                    </span>

                </div>

            </div>

            {validationMessage && (

                <div className="mt-4 rounded-xl bg-red-50 border border-red-100 p-3">

                    <p className="text-red-600 text-xs">
                        {validationMessage}
                    </p>

                </div>

            )}

        </div>

    );

}