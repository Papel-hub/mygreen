'use client';

import { useEffect, useRef } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config'; // Ajuste o caminho da sua config do Firebase

const SPLASH_DURATION = 3500;

export default function SplashScreen() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Tenta reproduzir o vídeo de fundo (se houver) com tratamento de fallback
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay do vídeo falhou ou bloqueado pelo navegador:", error);
      });
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      // Checa a autenticação com Firebase antes de redirecionar
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.replace('/home');
        } else {
          router.replace('/welcome');
        }
      });

      return () => unsubscribe();
    }, SPLASH_DURATION);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031A0E] text-white select-none">
      


      {/* Sombreamento/Overlay do fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031A0E]/60 via-[#031A0E]/80 to-[#031A0E] z-0" />

      {/* Conteúdo */}
      <section className="relative z-10 flex w-full max-w-md flex-col items-center px-8 text-center animate-fade-in">
        
        {/* Glow de Fundo Emissão Esmeralda */}
        <div className="absolute -z-10 h-72 w-72 rounded-full bg-[#169B62]/25 blur-[120px] pointer-events-none" />

        {/* Logo Com Efeito Breathing */}
        <div className="relative mb-8 h-48 w-48 sm:h-56 sm:w-56 transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/logo00.svg"
            alt="Ireland My Green Diamond"
            fill
            priority
            sizes="(max-w-768px) 224px, 256px"
            className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          />
        </div>

        {/* Título Principal */}
        <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
          My Green
          <br />
          <span className="text-[#D4AF37]">Diamond</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-3 text-lg sm:text-xl italic tracking-[0.2em] text-[#169B62] font-medium">
          For All Occasions
        </p>

        {/* Divisor Gradiente Elegante */}
        <div className="mt-8 flex w-3/4 items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>

        {/* Loader Personalizado */}
        <div className="mt-12 flex flex-col items-center">
          <div className="relative h-12 w-12">
            {/* Anel Externo Translúcido */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* Anel Giratório Esmeralda/Dourado */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#D4AF37] border-r-[#169B62] animate-spin" />
          </div>

          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-white/70 animate-pulse font-light">
            Preparing your experience...
          </p>
        </div>

      </section>
    </main>
  );
}