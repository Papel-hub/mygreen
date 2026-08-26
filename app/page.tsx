'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomeScreen() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch {
        // Trata erro de autoplay bloqueado
      }
    };

    void startVideo();
  }, []);

  const handleVideoEnded = () => {
    if (hasRedirectedRef.current) return;
    hasRedirectedRef.current = true;
    router.replace('/welcome');
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-between bg-white px-4 py-6 sm:px-8 sm:py-10 md:py-14 select-none">
      
      {/* Espaçador Superior Fluido */}
      <div aria-hidden="true" className="h-2 w-full flex-shrink-0" />

      {/* Conteúdo Central */}
      <section className="flex w-full max-w-lg flex-col items-center justify-center text-center my-auto py-4">
        
        {/* Título Principal */}
        <h1 className="animate-slide-down font-serif text-2xl font-normal tracking-wide text-[var(--color-brand-title,#2F2D29)] xs:text-3xl sm:text-4xl md:text-5xl">
          Ireland, my green diamond
        </h1>

        {/* Divisor com Subtítulo */}
        <div className="animate-slide-down animation-delay-200 mt-3 flex w-full max-w-xs items-center justify-center gap-3 sm:mt-4 sm:max-w-sm">
          <div className="h-px flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />
          
          <span className="whitespace-nowrap text-xs font-medium tracking-wide text-[var(--color-brand-green,#0F3D2E)] sm:text-sm md:text-base">
            For All Occasions
          </span>

          <div className="h-px flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />
        </div>

        {/* Vídeo / Ilustração */}
        <div className="relative mt-6 mb-4 flex aspect-square w-56 items-center justify-center xs:w-64 sm:mt-10 sm:mb-6 sm:w-72 md:w-80">
          <video
            ref={videoRef}
            src="/videos/splash.mp4"
            muted
            playsInline
            autoPlay
            preload="auto"
            onEnded={handleVideoEnded}
            className="h-full w-full object-contain"
            aria-label="Ireland My Green Diamond Logo"
          />
        </div>

      </section>

      {/* Indicador de Carregamento (Footer) */}
      <footer className="flex w-full flex-shrink-0 justify-center pb-2 sm:pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)] sm:h-2.5 sm:w-2.5 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)] sm:h-2.5 sm:w-2.5 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)] sm:h-2.5 sm:w-2.5" />
        </div>
      </footer>

    </main>
  );
}