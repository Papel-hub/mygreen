"use client";

import Image from "next/image";

import {
  Clock,
  MapPin,
  Route,
  ArrowRight,
} from "lucide-react";

import { ActiveDelivery } from "@/types/delivery";

interface Props {
  delivery: ActiveDelivery;

  onViewDetails?: (
    delivery: ActiveDelivery
  ) => void;
}

export default function ActiveDeliveryCard({
  delivery,
  onViewDetails,
}: Props) {
  const progress = Math.min(
    100,
    Math.max(0, delivery.progress)
  );

  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-gray-100
      shadow-sm
      overflow-hidden
      hover:shadow-lg
      transition-all
      duration-300
      "
    >
      {/* Header */}
      <div className="p-5 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400">
              Order
            </span>

            <h3 className="font-bold text-lg">
              #{delivery.orderNumber}
            </h3>
          </div>

          <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            {delivery.status === "accepted" &&
              "Accepted"}

            {delivery.status === "picked_up" &&
              "Picked Up"}

            {delivery.status === "delivering" &&
              "Delivering"}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative h-40 bg-gray-100">
        <Image
          src={
            delivery.mapImage ||
            "/images/mini-map-placeholder.png"
          }
          alt="Route map"
          fill
          className="object-cover"
        />

        <div className="absolute top-3 left-3">
          <span
            className="
            bg-white
            text-[#169B62]
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            shadow
            "
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Addresses */}
      <div className="p-5 space-y-4">
        <div className="flex gap-3">
          <MapPin
            size={18}
            className="text-[#169B62] mt-1"
          />

          <div>
            <p className="text-sm font-semibold">
              Collection
            </p>

            <p className="text-sm text-gray-500">
              {delivery.pickupAddress}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin
            size={18}
            className="text-red-500 mt-1"
          />

          <div>
            <p className="text-sm font-semibold">
              Delivery
            </p>

            <p className="text-sm text-gray-500">
              {delivery.deliveryAddress}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 pb-5">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} />
              <span className="text-sm">
                ETA
              </span>
            </div>

            <p className="font-bold mt-1">
              {delivery.estimatedMinutes} min
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-500">
              <Route size={16} />
              <span className="text-sm">
                Distance
              </span>
            </div>

            <p className="font-bold mt-1">
              {delivery.remainingDistanceKm} km
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">
            Delivery Progress
          </span>

          <span className="font-semibold">
            {progress}%
          </span>
        </div>

        <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="
            h-full
            bg-[#169B62]
            transition-all
            duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <button
          onClick={() =>
            onViewDetails?.(delivery)
          }
          className="
          mt-6
          w-full
          h-12
          rounded-xl
          bg-[#169B62]
          hover:bg-[#11824f]
          text-white
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          transition
          "
        >
          View Details

          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}