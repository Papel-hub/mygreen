'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function PartnerDriverSplashScreen() {
      const router = useRouter();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        router.replace('/partner/login'); // Use '/home' se for rota absoluta, ou 'home' se relativa
      }, 2500); 
  
      return () => clearTimeout(timer); 
    }, [router]);                   

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between py-12 px-6 overflow-hidden">
      
      {/* Container do Conteúdo Principal */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm z-10 my-auto">
        
        {/* Seção do Logotipo */}
        <div className="relative w-48 h-48 mb-10 flex items-center justify-center">
          {/* Substitua pelo caminho real do seu logo exportado */}
          <Image
            src="/images/logo0.svg" 
            alt="Ireland My Green Diamond Logo"
            width={192}
            height={192}
            priority
            className="object-contain"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-[#0b663b] font-sans leading-tight">
          PARTNER DRIVER
        </h1>

        {/* Subtítulo / Descrição */}
        <p className="mt-4 text-gray-600 font-normal leading-relaxed text-base max-w-[280px]">
          Delivering happiness. <br />
          One card, one bouquet at a time.
        </p>
      </div>

        {/* 4. Spinner de Carregamento (Loading) */}
        <div className="mt-14">
          <div className="w-10 h-10 border-2 border-white/20 border-t-[#169B62] rounded-full animate-spin"></div>
        </div>
    </main>
  );
}