'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  PlusIcon, 
  CalendarIcon, 
  ClockIcon, 
  CreditCardIcon, 
  TruckIcon, 
  HomeIcon, 
  ClipboardListIcon, 
  GiftIcon, 
  UserIcon,
  BellIcon 
} from 'lucide-react';

export default function HomePage() {
  const pathname = usePathname();

  const menuItems = [
    { title: "CREATE YOUR GREETING CARD", subtitle: "", icon: PlusIcon, href: "/create" },
    { title: "IMPORTANT DATES", subtitle: "Never miss a special day", icon: CalendarIcon, href: "/dates" },
    { title: "SCHEDULED CARDS", subtitle: "View your scheduled cards", icon: ClockIcon, href: "/scheduled" },
    { title: "GIFT CARDS", subtitle: "Manage your gift cards", icon: CreditCardIcon, href: "/giftcards" },
    { title: "MY ORDERS", subtitle: "Track your orders", icon: TruckIcon, href: "/orders" },
  ];

  const tabs = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    { name: 'Orders', href: '/orders', icon: ClipboardListIcon },
    { name: 'Gift Cards', href: '/giftcards', icon: GiftIcon },
    { name: 'Dates', href: '/dates', icon: CalendarIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <div className="min-h-screen bg-[#042414] text-white relative flex flex-col">
      {/* Textura de fundo suave */}
      <div className="absolute inset-0 opacity-20 pointer-events-none 
      bg-[url('https://tse1.mm.bing.net/th/id/OIP.vffDfFub2iP_s3K6MnvkRQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')] bg-repeat"></div>

      {/* Header */}
      <header className="relative z-10 px-6 pt-8 pb-4 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Image src="/logo1.svg" alt="Logo" width={70} height={70} className="object-contain" />
          <div>
            <h1 className="text-xl font-serif leading-none">Ireland</h1>
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">My Green Diamond</p>
          </div>
        </div>
        <button className="p-2 text-[#D4AF37]">
          <BellIcon size={24} />
        </button>
      </header>

      {/* Boas-vindas */}
      <section className="relative z-10 px-6 py-4">
        <h2 className="text-2xl font-serif text-[#D4AF37]">Welcome back, Daniel! 💚</h2>
        <p className="text-sm text-white/70 font-light mt-1">What would you like to do today?</p>
      </section>

      {/* Menu de Botões */}
      <main className="relative z-10 px-6 flex-1 space-y-4 pb-24">
        {menuItems.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href}
            className="flex items-center justify-between p-5 rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#06331C] to-[#042414] shadow-lg active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="text-[#D4AF37]">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-wide text-white uppercase">{item.title}</span>
                {item.subtitle && <span className="text-[11px] text-white/60">{item.subtitle}</span>}
              </div>
            </div>
            <ChevronRightIcon />
          </Link>
        ))}
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 w-full bg-[#042414]/90 backdrop-blur-md border-t border-[#D4AF37]/30 px-2 py-3 z-50">
        <nav className="flex justify-around items-end">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link key={tab.name} href={tab.href} className="flex flex-col items-center gap-1 group">
                <tab.icon size={22} className={isActive ? "text-[#D4AF37]" : "text-white/60"} />
                <span className={`text-[10px] ${isActive ? "text-[#D4AF37] font-bold" : "text-white/60"}`}>
                  {tab.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </footer>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}