'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SplashScreen() {
    const router = useRouter();

  useEffect(() => {
    // Opcional: adicionar um pequeno delay para mostrar a tela de splash
    const timer = setTimeout(() => {
      router.replace('/partner/login'); // Use '/home' se for rota absoluta, ou 'home' se relativa
    }, 3500); 

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [router]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">


      {/* 2. Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
        
        {/* Emblema Circular (Logo) */}
        <div className="relative w-64 h-64 mb-10">
          {/* Aqui você deve colocar a imagem do seu logo circular (logo-badge.png) */}
          <Image
            src="/main-logo-badge.png" 
            alt="Ireland My Green Diamond Badge"
            fill
            className="object-contain"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-white text-5xl md:text-6xl font-serif text-center leading-tight drop-shadow-lg">
          My Green<br />Diamond
        </h1>

        {/* Subtítulo Dourado */}
        <p className="text-[#169B62] text-xl font-light italic mt-3 tracking-wide">
          For All Occasions
        </p>

        {/* 3. Divisor Elegante (Linha com Trevo) */}
        <div className="flex items-center w-full mt-10">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#169B62] to-[#169B62]"></div>
          
          {/* Ícone de Trevo no Centro */}
          <div className="mx-4 text-[#169B62] text-2xl">
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            >
              <path d="M12,11.5c0-1.9-1.5-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2,0.6,2.3,1.5,2.9c-0.9,0.7-1.5,1.7-1.5,2.9c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5 c0-1.2-0.6-2.3-1.5-2.9C11.4,13.8,12,12.7,12,11.5z M12,11.5c0-1.9,1.5-3.5,3.5-3.5s3.5,1.6,3.5,3.5c0,1.2-0.6,2.3-1.5,2.9 c0.9,0.7,1.5,1.7,1.5,2.9c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5c0-1.2,0.6-2.3,1.5-2.9C12.6,13.8,12,12.7,12,11.5z M12,11.5 c0,1.9,1.5,3.5,3.5,3.5s3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5c0-1.2,0.6-2.3,1.5-2.9c-0.9-0.7-1.5-1.7-1.5-2.9 c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5" />
            </svg>
          </div>

          <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#169B62] to-[#169B62]"></div>
        </div>

        {/* 4. Spinner de Carregamento (Loading) */}
        <div className="mt-16">
          <div className="w-10 h-10 border-2 border-white/20 border-t-[#169B62] rounded-full animate-spin"></div>
        </div>

      </div>

      {/* Pequeno detalhe de luz no rodapé */}
      <div className="absolute bottom-8 z-10 w-2 h-2 bg-[#169B62] rounded-full blur-[2px] opacity-80" />
    </div>
  );
}