import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  UserRound,
  UserPlus,
  LogIn,
} from "lucide-react";

export default function WelcomeActions() {
  return (
    <section className="w-full max-w-sm space-y-4">

      {/* LOGIN */}

      <Link
        href="/login"
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-[#0B4627]
          font-semibold
          text-white
          shadow-[0_12px_30px_rgba(0,0,0,.35)]
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-[#106437]
          active:scale-95
        "
      >
        <LogIn className="h-5 w-5" />

        LOGIN
      </Link>

      {/* CREATE ACCOUNT */}

      <Link
        href="/register"
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/15
          bg-white
          font-semibold
          text-[#0B4627]
          shadow-xl
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-[#F6F6F6]
          active:scale-95
        "
      >
        <UserPlus className="h-5 w-5" />
        CREATE ACCOUNT
      </Link>

      {/* GUEST */}

      <Link
        href="/home"
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-[#D4AF37]
          bg-black/35
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-black/50
          hover:scale-[1.02]
          active:scale-95
        "
      >
        Continue as Guest
      </Link>

      {/* DIVIDER */}

      <div className="flex items-center py-3">

        <div className="h-px flex-1 bg-white/20" />

        <span className="px-4 text-xs font-bold tracking-[0.35em] text-[#D4AF37]">
          PARTNERS
        </span>

        <div className="h-px flex-1 bg-white/20" />

      </div>

      {/* DRIVER */}

      <Link
        href="/partner/login"
        className="
          group
          flex
          h-14
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-[#D4AF37]/50
          bg-black/40
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-[#D4AF37]
          hover:bg-black/60
          hover:scale-[1.02]
          active:scale-95
        "
      >
        <UserRound className="h-5 w-5 text-[#D4AF37]" />
        PARTNER DRIVER
      </Link>

      {/* FLOWER SHOP */}

      <Link
        href="/flower/register"
        className="
          group
          flex
          h-16
          items-center
          justify-center
          gap-4
          rounded-2xl
          border
          border-[#D4AF37]/50
          bg-black/40
          px-5
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-[#D4AF37]
          hover:bg-black/60
          hover:scale-[1.02]
          active:scale-95
        "
      >
        <Flower2 className="h-6 w-6 text-[#D4AF37]" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-white/80">
            FLOWER SHOP
          </span>
          <span className="font-semibold tracking-wide">
            PARTNER REGISTRATION
          </span>
        </div>
      </Link>

    </section>
  );
}