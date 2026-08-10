'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 3000ms = 3 segundos
const REDIRECT_DELAY = 5000; 

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/welcome'); 
    }, REDIRECT_DELAY);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-white px-6 py-12 text-slate-900 select-none">
      
      {/* Espaçador superior (Status bar mobile) */}
      <div className="w-full h-2" />

      {/* Conteúdo Central */}
      <section className="flex w-full max-w-md flex-col items-center text-center">
        
        {/* Título Principal */}
        <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-[var(--color-brand-title,#2F2D29)]">
          Ireland, my green diamond
        </h1>

        {/* Divisor com Subtítulo */}
        <div className="mt-4 flex items-center justify-center gap-3 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />
          <span className="text-xs sm:text-sm text-[var(--color-brand-green,#0F3D2E)] font-medium tracking-wide">
            For All Occasions
          </span>
          <div className="h-[1px] flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />
        </div>

        {/* Logo / Ilustração */}
        <div className="relative mt-12 mb-8 h-64 w-64 sm:h-72 sm:w-72 flex items-center justify-center">
          <Image
            src="/images/Logo-Color1.svg" 
            alt="Ireland My Green Diamond Logo"
            fill
            priority
            sizes="(max-width: 768px) 256px, 288px"
            className="object-contain"
          />
        </div>

      </section>

      {/* Loading Indicator Sequencial (3 Pontinhos com animação) */}
      <footer className="w-full max-w-md flex justify-center pb-8">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-accent,#169B62)] animate-bounce [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-accent,#169B62)] animate-bounce [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-accent,#169B62)] animate-bounce" />
        </div>
      </footer>

    </main>
  );
}