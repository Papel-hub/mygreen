"use client";

import { RequestModel } from "@/types/request";

interface Props {
    request: RequestModel;
}

export default function OrderInformation({ request }: Props) {

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">

            {/* Title */}
            <h2 className="text-gray-900 font-bold text-base mb-1">
                Order Information
            </h2>

            <p className="text-xs text-gray-400 mb-3">
                Order #{request.orderNumber}
            </p>

            {/* Content */}
            <div className="flex gap-4">

                {/* Product image */}
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">

                    {request.product?.image ? (
                        <img
                            src={request.product.image}
                            alt={request.product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                            No image
                        </div>
                    )}

                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">

                    <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2">
                        {request.product.name}
                    </h3>

                    {request.product.message && (
                        <>
                            <p className="text-xs text-gray-400">
                                Personalised message:
                            </p>

                            <p className="text-xs font-semibold text-gray-700 italic">
                                "{request.product.message}"
                            </p>
                        </>
                    )}

                    <div className="mt-2 text-xs text-gray-500">
                        Weight: {request.product.weight}kg
                    </div>

                </div>

            </div>

        </div>
    );
}