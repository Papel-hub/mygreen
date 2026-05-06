'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePageRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Opcional: adicionar um pequeno delay para mostrar a tela de splash
    const timer = setTimeout(() => {
      router.replace('/home'); // Use '/home' se for rota absoluta, ou 'home' se relativa
    }, 1500); // 1.5 segundos de delay

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0F5A2A] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Logo com animação de entrada */}
      <div className="animate-fade-in-up mb-8">
        <Image
          src="/logo0.svg"
          alt="MY GREEN - Bem-vindo!"
          width={160}
          height={60}
          priority
          className="drop-shadow-lg"
          style={{ height: 'auto', width: 'auto' }}
        />
      </div>

      {/* Spinner com cor correta e animação suave */}
      <div className="relative">
        <div className="w-10 h-10 border-4 border-white/30 border-t-[#3FAF5C] rounded-full animate-spin"></div>
        {/* Efeito de brilho sutil atrás do spinner */}
        <div className="absolute inset-0 w-10 h-10 bg-[#3FAF5C]/20 blur-xl rounded-full animate-pulse"></div>
      </div>

      {/* Mensagem de carregamento */}
      <p className="mt-6 text-white/90 text-sm font-medium tracking-wide animate-fade-in">
        Preparando sua experiência...
      </p>

      {/* Barra de progresso sutil (opcional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div className="h-full bg-[#3FAF5C] animate-progress-bar"></div>
      </div>
    </div>
  );
}