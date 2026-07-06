"use client";

import { Bell, Menu } from "lucide-react";

interface HomeHeaderProps {
  partnerName?: string;
  notificationCount?: number;
}

export default function HomeHeader({
  partnerName = "Marco",
  notificationCount = 3,
}: HomeHeaderProps) {
  return (
    <header className="flex items-start justify-between">
      {/* Left */}
      <div className="flex items-start gap-4">
        <button
          className="
          h-11
          w-11
          rounded-xl
          bg-white
          shadow-sm
          border
          border-gray-100
          flex
          items-center
          justify-center
          hover:bg-gray-50
          transition
          "
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="text-sm text-gray-500">
            Good Morning 👋
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            {partnerName}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Ready for today's deliveries?
          </p>
        </div>
      </div>

      {/* Notifications */}
      <button
        className="
        relative
        h-11
        w-11
        rounded-xl
        bg-white
        shadow-sm
        border
        border-gray-100
        flex
        items-center
        justify-center
        hover:bg-gray-50
        transition
        "
      >
        <Bell size={20} />

        {notificationCount > 0 && (
          <span
            className="
            absolute
            -top-1
            -right-1
            h-5
            w-5
            rounded-full
            bg-red-500
            text-white
            text-[10px]
            flex
            items-center
            justify-center
            font-semibold
            "
          >
            {notificationCount}
          </span>
        )}
      </button>
    </header>
  );
}