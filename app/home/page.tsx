'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  CreditCard, 
  Store, 
  Flower2, 
  Plus, 
  Bell, 
  Diamond 
} from 'lucide-react';

import HeroBanner from './components/HeroBanner';
import ServicesGrid from './components/ServicesGrid';
import UpcomingDates from './components/UpcomingDates';
import RecentOrders from './components/RecentOrders';

const NAV_ITEMS = [
  { name: 'Home', icon: HomeIcon, href: '/home' },
  { name: 'Cards', icon: CreditCard, href: '/choose-card' },
  { name: 'Store', icon: Store, href: '/store' },
  { name: 'Bouquets', icon: Flower2, href: '/bouquets' },
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Fecha a sidebar ao apertar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  // Previne scroll do body no mobile quando a sidebar estiver aberta
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  return (
    <div className="relative flex min-h-dvh w-full select-none overflow-x-hidden bg-[#082214] font-sans text-white">
      
      {/* Imagem de Fundo Otimizada */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/img1.svg"
          alt="Background Texture"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Overlay para Mobile quando Sidebar estiver aberta */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* ========================================================= */}
      {/* SIDEBAR (DESKTOP & MOBILE DRAWER)                         */}
      {/* ========================================================= */}
      <aside 
        aria-label="Sidebar Navigation"
        className={`fixed bottom-0 top-0 left-0 z-50 flex w-64 flex-col justify-between border-r border-[#B08D2A]/30 bg-[#061B10]/95 px-6 py-8 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header da Sidebar */}
          <div className="mb-10 flex items-center justify-between">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <h2 className="mb-8 px-2 font-serif text-2xl font-normal text-stone-100">
            Menu
          </h2>

          {/* Navegação Principal */}
          <nav className="space-y-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D2A] ${
                    isActive 
                      ? 'border border-[#B08D2A]/40 bg-[#0B2C1A] text-[#B08D2A] shadow-sm' 
                      : 'text-stone-300 hover:bg-[#0B2C1A]/50 hover:text-white'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-[#B08D2A]' : 'text-stone-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Botão de Criação Rápida na Sidebar */}
        <div className="pt-6">
          <Link
            href="/create-card"
            onClick={() => setSidebarOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D2A] text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#061B10] active:scale-95"
            aria-label="Create new card"
          >
            <Plus className="h-6 w-6 stroke-[2.5]" />
          </Link>
        </div>
      </aside>      

      {/* ========================================================= */}
      {/* CONTEÚDO PRINCIPAL (DASHBOARD)                            */}
      {/* ========================================================= */}
      <main className="relative z-10 flex min-h-dvh w-full flex-1 flex-col lg:pl-64">
        <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">

          {/* Top Bar Header */}
          <header className="flex items-center justify-between gap-4">
            
            {/* Botão Toggle Mobile */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] lg:hidden"
              aria-label="Open sidebar menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* User Greeting Box */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#B08D2A]/60 bg-[#082214] text-[#B08D2A]">
                <Diamond className="h-4 w-4" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-medium text-[#B08D2A]">
                  Good Morning, User
                </h1>
                <p className="text-[10px] text-stone-400 sm:text-xs">
                  Create, Gift, And Connect.
                </p>
              </div>
            </div>

            {/* Notification Icon */}
            <Link 
              href="/notifications"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
            </Link>

          </header>

          {/* Seções de Conteúdo */}
          <HeroBanner />
          <ServicesGrid />
          <UpcomingDates />
          <RecentOrders />

          {/* Footer Branding */}
          <footer className="pt-6 pb-2 text-center text-[10px] text-stone-500">
            &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
          </footer>

        </div>
      </main>

    </div>
  );
}