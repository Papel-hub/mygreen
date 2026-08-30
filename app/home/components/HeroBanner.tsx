'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroBanner({
  title = 'Create Your Greeting Card',
  description = 'Create And Personalize A Greeting Card With Gifts, Flowers, Audio, And Video Messages.',
  ctaText = 'Start Creating',
  ctaHref = '/create-card',
}: HeroBannerProps) {
  return (
    <section className="relative my-3 w-full overflow-hidden rounded-3xl border border-[#B08D2A]/70 bg-[#0B2C1A]/90 p-5 shadow-lg shadow-[#D4A038]/10">
      {/* Brilhos decorativos de fundo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#B08D2A]/10 blur-2xl" 
      />

      {/* Título & Descrição */}
      <div className="relative z-10">
        <h2 className="font-serif text-lg font-normal text-stone-100 sm:text-xl">
          {title}
        </h2>
        <p className="mt-1 max-w-[90%] text-xs font-light leading-relaxed text-stone-300">
          {description}
        </p>
      </div>

      {/* Botão CTA Principal Dourado */}
      <Link
        href={ctaHref}
        className="group relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#0B2C1A] active:scale-[0.99]"
      >
        <span>{ctaText}</span>
        <ChevronRight className="h-4 w-4 stroke-[3] transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}