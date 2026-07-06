"use client";

import { FcGoogle } from "react-icons/fc";

interface GoogleButtonProps {
  loading: boolean;
  onClick: () => Promise<void>;
}

export default function GoogleButton({
  loading,
  onClick,
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      disabled={loading}
      onClick={onClick}
      className="
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-3
        rounded-lg
        border
        border-gray-300
        bg-white
        font-medium
        text-gray-700
        transition
        hover:bg-gray-50
        hover:shadow-md
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      <FcGoogle size={22} />

      <span>
        Continue with Google
      </span>
    </button>
  );
}