import Link from "next/link";
import WelcomeHeader from "./components/WelcomeHeader";
import {
  Flower2,
  UserRound,
  UserPlus,
  LogIn,
} from "lucide-react";

export default function WelcomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-[#042414] overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      
      {/* Glow de fundo para manter a identidade visual premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031A0E]/60 via-[#031A0E]/80 to-[#031A0E] z-0" />

      <main className="flex flex-col flex-grow w-full max-w-md px-6 pt-12 pb-8 sm:pt-20 z-10">
        
        {/* Cabeçalho */}
        <div className="mb-10 w-full animate-fade-up">
          <WelcomeHeader />
        </div>

        {/* Botões Principais */}
        <section className="flex flex-col w-full gap-4 animate-fade-up" style={{ animationDelay: '150ms' }}>
          
          {/* LOGIN */}
          <Link
            href="/login"
            className="group flex h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#169B62] to-[#0B4627] font-bold tracking-wide text-white shadow-[0_8px_20px_rgba(11,70,39,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_25px_rgba(22,155,98,0.4)] active:scale-95"
          >
            <LogIn className="h-5 w-5" />
            LOGIN
          </Link>

          {/* CREATE ACCOUNT */}
          <Link
            href="/register"
            className="group flex h-14 items-center justify-center gap-3 rounded-lg bg-white font-bold tracking-wide text-[#042414] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-gray-100 active:scale-95"
          >
            <UserPlus className="h-5 w-5" />
            CREATE ACCOUNT
          </Link>

          {/* GUEST */}
          <Link
            href="/home"
            className="group flex h-14 items-center justify-center gap-3 rounded-lg border border-[#D4AF37]/60 bg-[#D4AF37]/5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] active:scale-95"
          >
            Continue as Guest
          </Link>

          {/* DIVIDER */}
          <div className="flex items-center py-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <span className="px-4 text-[10px] font-bold tracking-[0.35em] text-[#D4AF37] uppercase">
              Partners
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* DRIVER */}
          <Link
            href="/partner/login"
            className="group flex h-14 items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/40 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#D4AF37]/50 hover:bg-black/60 hover:text-white active:scale-95"
          >
            <UserRound className="h-5 w-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            PARTNER DRIVER
          </Link>

          {/* FLOWER SHOP */}
          <Link
            href="/flower/register"
            className="group flex h-14 items-center justify-center gap-4 rounded-lg border border-white/10 bg-black/40 px-5 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#D4AF37]/50 hover:bg-black/60 hover:text-white active:scale-95"
          >
            <Flower2 className="h-6 w-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] tracking-wider text-white/60 group-hover:text-white/80 transition-colors">
                FLOWER SHOP
              </span>
              <span className="text-sm font-semibold tracking-wide">
                PARTNER REGISTRATION
              </span>
            </div>
          </Link>

        </section>

        {/* Espaçador para empurrar o footer para baixo */}
        <div className="flex-grow" />

        {/* Footer */}
        <footer className="flex flex-col items-center gap-5 pb-4 pt-12 animate-fade-up" style={{ animationDelay: '300ms' }}>
          
          {/* Linha Decorativa Menor */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          {/* Links de Políticas */}
          <div className="flex items-center gap-6 text-xs text-white/50 font-light">
            <Link href="/privacy" className="transition-colors hover:text-[#D4AF37]">
              Privacy
            </Link>
            <span className="text-white/20 text-[8px]">●</span>
            <Link href="/terms" className="transition-colors hover:text-[#D4AF37]">
              Terms
            </Link>
            <span className="text-white/20 text-[8px]">●</span>
            <Link href="/contact" className="transition-colors hover:text-[#D4AF37]">
              Contact
            </Link>
          </div>

          {/* Copyright e Slogan */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-[10px] tracking-widest text-white/40">
              © {year} MY GREEN DIAMOND
            </p>
            <p className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37]/60">
              Ireland • Premium Gifts • Flowers • Experiences
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}