'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SPLASH_DURATION = 3500;

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      // Aqui você pode verificar autenticação antes do redirect
      router.replace('/welcome');
    }, SPLASH_DURATION);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/splash-bg.jpg"
          alt="Ireland Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div
          className="
          absolute inset-0
          bg-gradient-to-b
          from-green-950/20
          via-black/40
          to-black
        "
        />
      </div>

      {/* Partículas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span className="particle left-[12%] top-[18%]" />

        <span className="particle left-[75%] top-[22%]" />

        <span className="particle left-[30%] top-[72%]" />

        <span className="particle left-[85%] top-[82%]" />

        <span className="particle left-[55%] top-[14%]" />

      </div>

      {/* Conteúdo */}
      <section
        className="
        relative
        z-10
        flex
        w-full
        max-w-md
        flex-col
        items-center
        px-8
        animate-fade-up
      "
      >
        {/* Glow */}
        <div className="absolute -z-10 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[110px]" />

        {/* Logo */}
        <div className="logo-breathing relative mb-10 h-64 w-64">

          <Image
            src="/main-logo-badge.png"
            alt="Ireland My Green Diamond"
            fill
            priority
            sizes="256px"
            className="object-contain drop-shadow-[0_0_35px_rgba(212,175,55,.35)]"
          />

        </div>

        {/* Nome */}
        <h1
          className="
          text-center
          font-serif
          text-5xl
          leading-tight
          text-white
          drop-shadow-[0_0_20px_rgba(255,255,255,.25)]
          md:text-6xl
        "
        >
          My Green
          <br />
          Diamond
        </h1>

        <p
          className="
          mt-4
          text-xl
          italic
          tracking-[0.25em]
          text-[#D4AF37]
        "
        >
          For All Occasions
        </p>

        {/* Divisor */}
        <div className="mt-12 flex w-full items-center">

          <div
            className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
          "
          />

          <div className="mx-5 text-[#D4AF37]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 drop-shadow-[0_0_12px_rgba(212,175,55,.6)]"
            >
              <path d="M12,11.5c0-1.9-1.5-3.5-3.5-3.5S5,9.6,5,11.5c0,1.2,0.6,2.3,1.5,2.9C5.6,15.1,5,16.2,5,17.4C5,19.4,6.6,21,8.5,21S12,19.4,12,17.4c0-1.2-0.6-2.3-1.5-2.9C11.4,13.8,12,12.7,12,11.5z" />
            </svg>
          </div>

          <div
            className="
            h-px
            flex-1
            bg-gradient-to-l
            from-transparent
            via-[#D4AF37]
            to-transparent
          "
          />

        </div>
                {/* Loading */}
        <div className="mt-16 flex flex-col items-center">

          <div className="relative h-14 w-14">

            {/* Anel externo */}
            <div
              className="
              absolute
              inset-0
              rounded-full
              border
              border-white/10
            "
            />

            {/* Anel dourado */}
            <div
              className="
              absolute
              inset-0
              rounded-full
              border-[3px]
              border-transparent
              border-t-[#D4AF37]
              border-r-[#D4AF37]
              animate-spin
            "
            />

            {/* Núcleo */}
            <div
              className="
              absolute
              left-1/2
              top-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_15px_rgba(212,175,55,.9)]
            "
            />

          </div>

          <p
            className="
            mt-8
            text-sm
            tracking-[0.35em]
            uppercase
            text-white/80
            animate-pulse
          "
          >
            Preparing your experience...
          </p>

        </div>

      </section>

      {/* Luz inferior */}
      <div
        className="
        absolute
        bottom-8
        h-2
        w-2
        rounded-full
        bg-[#D4AF37]
        blur-sm
        shadow-[0_0_20px_rgba(212,175,55,.8)]
      "
      />

      {/* Vinheta */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        shadow-[inset_0_0_180px_rgba(0,0,0,.75)]
      "
      />

    </main>
  );
}