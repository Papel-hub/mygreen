'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  CalendarIcon, 
  HomeIcon, ClipboardListIcon, UserIcon, 
} from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    { name: 'Orders', href: '/orders', icon: ClipboardListIcon },
    { name: 'Dates', href: '/dates', icon: CalendarIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-[#042414]/95 backdrop-blur-md border-t border-[#D4AF37]/25 px-2 py-1 z-40 safe-bottom shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <nav className="flex justify-around items-center max-w-lg mx-auto h-12 relative">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const TabIcon = tab.icon;
          
          return (
            <Link 
              key={tab.name} 
              href={tab.href} 
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 group relative"
            >
              {/* Indicador de Tab Ativa (Linha dourada iluminada no topo da tab) */}
              {isActive && (
                <div className="absolute top-0 w-10 h-[3px] bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] animate-pulse" />
              )}

              <div className="relative flex items-center justify-center mt-1">
                <TabIcon 
                  size={20} 
                  className={`transition-all duration-300 ${
                    isActive 
                      ? "text-[#D4AF37] scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" 
                      : "text-white/40 group-hover:text-white/80 group-hover:scale-105"
                  }`} 
                />
              </div>

              <span className={`text-[9px] tracking-widest font-bold uppercase transition-colors duration-300 ${
                isActive 
                  ? "text-[#D4AF37]" 
                  : "text-white/40 group-hover:text-white/70"
              }`}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}