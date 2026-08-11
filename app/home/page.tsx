'use client';

import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ServicesGrid from './components/ServicesGrid';
import UpcomingDates from './components/UpcomingDates';
import RecentOrders from './components/RecentOrders';
import BottomNavigation from './components/BottomNavigation';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#082214] px-5 pt-6 pb-24 text-white select-none overflow-x-hidden font-sans">
      
        {/* Imagem de Fundo Otimizada do Next.js */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <Image
            src="/images/img1.svg" // public/images/
            alt="Background"
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-30" // Ajuste a opacidade como preferir
            />
        </div>
      {/* Conteúdo Sequencial da Home */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <Header userName="Daniel" />
        <HeroBanner />
        <ServicesGrid />
        <UpcomingDates />
        <RecentOrders />
      </div>

      {/* Menu Inferior Fixo */}
      <BottomNavigation />

    </main>
  );
}