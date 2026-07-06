"use client";

import {
  Euro,
  Truck,
  Star,
  CheckCircle2,
} from "lucide-react";

import StatCard from "./StatCard";

interface StatsGridProps {
  earnings?: string;
  deliveries?: number;
  rating?: number;
  acceptanceRate?: number;
}

export default function StatsGrid({
  earnings = "€0.00",
  deliveries = 0,
  rating = 0,
  acceptanceRate = 0,
}: StatsGridProps) {
  return (
    <section className="grid grid-cols-2 gap-4">
      <StatCard
        title="Today's Earnings"
        value={earnings}
        icon={Euro}
        iconColor="text-[#169B62]"
        bgColor="bg-green-50"
      />

      <StatCard
        title="Deliveries"
        value={deliveries}
        icon={Truck}
        iconColor="text-[#FF8200]"
        bgColor="bg-orange-50"
      />

      <StatCard
        title="Rating"
        value={rating.toFixed(2)}
        icon={Star}
        iconColor="text-yellow-500"
        bgColor="bg-yellow-50"
      />

      <StatCard
        title="Acceptance"
        value={`${acceptanceRate}%`}
        icon={CheckCircle2}
        iconColor="text-sky-600"
        bgColor="bg-sky-50"
      />
    </section>
  );
}