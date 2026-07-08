import Link from "next/link";

export default function WelcomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-5 pb-8 pt-10">

      {/* Linha */}
      <div className="h-px w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Links */}

      <div className="flex items-center gap-6 text-xs text-white/60">

        <Link
          href="/privacy"
          className="transition hover:text-[#D4AF37]"
        >
          Privacy
        </Link>

        <span className="text-white/20">•</span>

        <Link
          href="/terms"
          className="transition hover:text-[#D4AF37]"
        >
          Terms
        </Link>

        <span className="text-white/20">•</span>

        <Link
          href="/contact"
          className="transition hover:text-[#D4AF37]"
        >
          Contact
        </Link>

      </div>

      {/* Copyright */}

      <p className="text-center text-[11px] tracking-widest text-white/40">
        © {year} MY GREEN DIAMOND
      </p>

      <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/70">
        Ireland • Premium Gifts • Flowers • Experiences
      </p>

    </footer>
  );
}