'use client';
import { ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function HeroBanner() {
  
  return (
    <section className="relative my-3 w-full shadow-lg shadow-[#D4A038]/10 overflow-hidden rounded-3xl border border-[#B08D2A]/70 bg-[#0B2C1A]/90 p-5">
      {/* Brilho decorativo de fundo */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

      {/* Título & Descrição */}
      <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
        Create Your Greeting Card
      </h3>
      <p className="mt-1 text-xs text-stone-300 font-light leading-relaxed max-w-[90%]">
        Create And Personalize A Greeting Card With Gifts, Flowers, Audio, And Video Messages.
      </p>

      {/* Botão CTA Principal Dourado */}
          <Link 
            href="/create-card"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
          >
        <span>Start Creating</span>
        <ChevronRight className="h-4 w-4 stroke-[3]" />
      </Link>
    </section>
  );
}