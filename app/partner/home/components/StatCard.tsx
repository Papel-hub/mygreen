"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-[#169B62]",
  bgColor = "bg-[#EAF7F1]",
}: StatCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">
        <div
          className={`
            h-12
            w-12
            rounded-xl
            flex
            items-center
            justify-center
            ${bgColor}
          `}
        >
          <Icon className={`${iconColor}`} size={22} />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-500 font-medium">
          {title}
        </p>

        <h2 className="mt-1 text-3xl font-bold text-gray-900">
          {value}
        </h2>
      </div>
    </div>
  );
}