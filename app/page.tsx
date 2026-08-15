'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomeScreen() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasRedirectedRef = useRef(false);

  /**
   * Garante que o vídeo esteja mutado e tenta
   * iniciar o autoplay assim que a página carregar.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Necessário para permitir autoplay nos navegadores
    video.muted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch {
        // Alguns navegadores podem bloquear autoplay.
        // Não fazemos nada nesse caso.
      }
    };

    void startVideo();
  }, []);

  /**
   * Redireciona imediatamente quando o vídeo terminar.
   */
  const handleVideoEnded = () => {
    if (hasRedirectedRef.current) return;

    hasRedirectedRef.current = true;

    router.replace('/welcome');
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-white px-6 py-12 text-slate-900 select-none">
      
      {/* Espaçador superior */}
      <div className="h-2 w-full" />

      {/* Conteúdo Central */}
      <section className="flex w-full max-w-md flex-col items-center text-center">
        
        {/* Título Principal */}
        <h1 className="animate-slide-down font-serif text-3xl font-normal tracking-wide text-[var(--color-brand-title,#2F2D29)] sm:text-4xl">
          Ireland, my green diamond
        </h1>

        {/* Divisor com Subtítulo */}
        <div className="animate-slide-down animation-delay-200 mt-4 flex w-full max-w-xs items-center justify-center gap-3">
          
          <div className="h-px flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />

          <span className="text-xs font-medium tracking-wide text-[var(--color-brand-green,#0F3D2E)] sm:text-sm">
            For All Occasions
          </span>

          <div className="h-px flex-1 bg-[var(--color-brand-green,#0F3D2E)]/40" />

        </div>

        {/* Vídeo */}
        <div className="relative mt-12 mb-8 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
          <video
            ref={videoRef}
            src="/videos/splash.mp4"
            muted
            playsInline
            autoPlay
            preload="auto"
            onEnded={handleVideoEnded}
            className="h-full w-full object-cover"
            aria-label="Ireland My Green Diamond Logo"
          />
        </div>

      </section>

      {/* Loading Indicator */}
      <footer className="flex w-full max-w-md justify-center pb-8">
        <div className="flex items-center gap-2.5">
          
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)] [animation-delay:-0.3s]" />

          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)] [animation-delay:-0.15s]" />

          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[var(--color-brand-accent,#169B62)]" />

        </div>
      </footer>

    </main>
  );
}