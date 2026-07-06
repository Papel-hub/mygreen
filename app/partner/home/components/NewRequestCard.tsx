"use client";

import { MapPin, Clock, Route, Package } from "lucide-react";

import { DeliveryRequest } from "@/types/delivery";

interface Props {
  request: DeliveryRequest;

  onAccept?: (request: DeliveryRequest) => void;

  onDecline?: (request: DeliveryRequest) => void;
}

export default function NewRequestCard({
  request,
  onAccept,
  onDecline,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-5
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
          NEW REQUEST
        </span>

        <h2 className="text-2xl font-bold text-[#169B62]">
          €{request.offerPrice.toFixed(2)}
        </h2>
      </div>

      {/* Pickup */}
      <div className="flex gap-3 mb-4">
        <MapPin className="text-[#169B62]" size={18} />

        <div>
          <p className="text-sm font-semibold">
            Collection
          </p>

          <p className="text-sm text-gray-500">
            {request.pickupAddress}
          </p>
        </div>
      </div>

      {/* Delivery */}
      <div className="flex gap-3 mb-5">
        <MapPin className="text-red-500" size={18} />

        <div>
          <p className="text-sm font-semibold">
            Delivery
          </p>

          <p className="text-sm text-gray-500">
            {request.deliveryAddress}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <Route size={16} className="text-[#169B62] mb-1" />

          <p className="text-xs text-gray-400">
            Distance
          </p>

          <p className="font-semibold">
            {request.distanceKm} km
          </p>
        </div>

        <div>
          <Clock size={16} className="text-[#169B62] mb-1" />

          <p className="text-xs text-gray-400">
            ETA
          </p>

          <p className="font-semibold">
            {request.estimatedMinutes} min
          </p>
        </div>

        <div>
          <Package size={16} className="text-[#169B62] mb-1" />

          <p className="text-xs text-gray-400">
            Weight
          </p>

          <p className="font-semibold">
            {request.weightKg} kg
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onDecline?.(request)}
          className="
            flex-1
            h-11
            rounded-xl
            border
            border-red-300
            text-red-600
            font-semibold
            hover:bg-red-50
            transition
          "
        >
          Decline
        </button>

        <button
          onClick={() => onAccept?.(request)}
          className="
            flex-1
            h-11
            rounded-xl
            bg-[#FF8200]
            hover:bg-orange-600
            text-white
            font-semibold
            transition
          "
        >
          Make Offer
        </button>
      </div>
    </div>
  );
}