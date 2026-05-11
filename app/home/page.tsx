'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { SVGProps } from 'react';

export default function HomePage() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Dates', href: '/dates', icon: CalendarCheckIcon },
    { name: 'Scheduled', href: '/scheduled', icon: ClockIcon },
    { name: 'Support', href: '/support', icon: HeadphonesIcon },
  ];

  return (
    // Adicionado pb-24 para o conteúdo não sumir atrás do footer fixo
    <div className="min-h-screen text-white flex flex-col items-center px-4 py-8 pb-24 relative overflow-hidden bg-[#0a0a0a]">
      
      {/* Header Corrigido */}
      <header className="relative w-full max-w-md mb-8">
        <div className="flex justify-between items-center w-full">
          <Image
            src="/logo1.svg"
            alt="MY GREEN"
            width={60}
            height={60}
            priority
          />
          <Link
            href="/notifi"
            className="w-10 h-10 flex items-center justify-center border border-[#B08D3A] rounded-full hover:bg-[#22994A] transition-colors"
          >
            X
          </Link>
        </div>

        <div className="text-xl font-bold mt-6">
          Welcome back, <span className="text-[#B08D3A]">@USER</span>
        </div>
      </header>

      {/* Menu Principal */}
      <main className="relative z-10 w-full max-w-md space-y-4">
        <MenuButton 
          href="/create-card" 
          icon={CardPenIcon} 
          title="CREATE YOUR GREETING CARD" 
          subtitle="Personalize your message"
        />
        <MenuButton 
          href="/dates" 
          icon={CalendarHeartIcon} 
          title="IMPORTANT DATES" 
          subtitle="Never forget a moment"
        />
        <MenuButton 
          href="/scheduled" 
          icon={ClockIcon} 
          title="SCHEDULED CARDS" 
          subtitle="Manage your queue"
        />
        <MenuButton 
          href="/giftcards" 
          icon={ClockIcon} // Considere trocar este ícone para um de presente
          title="GIFT CARDS" 
          subtitle="Buy and send credits"
        />
        <MenuButton 
          href="/myorders" 
          icon={HeadphonesIcon} 
          title="MY ORDERS" 
          subtitle="Track your orders"
        />
      </main>

      {/* Footer Fixo */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-black/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-md mx-auto px-4 py-3">
          <ul className="flex justify-around items-center">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <li key={tab.name}>
                  <Link
                    href={tab.href}
                    className={`flex flex-col items-center p-2 transition-all duration-300 ${
                      isActive ? 'text-[#B08D3A]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
                    <span className="text-[10px] mt-1 uppercase tracking-wider">
                      {tab.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </div>
  );
}

// --- Componente Reutilizável Corrigido ---
type MenuButtonProps = {
  href: string;
  icon: React.ElementType; // Melhor prática para ícones
  title: string;
  subtitle: string;
};

function MenuButton({ href, icon: Icon, title, subtitle }: MenuButtonProps) {
  return (
    <Link
      href={href}
      className="group block w-full p-4 border border-[#B08D3A]/40 rounded-xl bg-white/5 hover:bg-[#22994A]/20 hover:border-[#22994A] transition-all duration-300 transform active:scale-95"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-[#B08D3A]/10 rounded-lg group-hover:bg-[#B08D3A]/20 transition-colors">
            <Icon className="w-6 h-6 text-[#B08D3A]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-[#B08D3A] group-hover:text-white transition-colors">
              {title}
            </span>
            <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
              {subtitle}
            </span>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#B08D3A] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

// --- Ícones SVG Inline ---



function CardPenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4a1 1 0 001 1h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18l-4 4m0 0l4-4m0 0H8" />
    </svg>
  );
}

function CalendarHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}


function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CalendarCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HeadphonesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}