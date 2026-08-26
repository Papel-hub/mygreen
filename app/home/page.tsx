'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Home as HomeIcon, 
  CreditCard, 
  Store, 
  Flower2, 
  Plus, 
  Gift, 
  Calendar, 
  Clock, 
  Package, 
  ChevronRight, 
  Bell, 
  Diamond 
} from 'lucide-react';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', icon: HomeIcon, href: '/home' },
    { name: 'Cards', icon: CreditCard, href: '/cards' },
    { name: 'Store', icon: Store, href: '/store' },
    { name: 'Bouquets', icon: Flower2, href: '/bouquets' },
  ];

  return (
    <div className="relative flex min-h-dvh w-full bg-[#082214] text-white font-sans select-none overflow-x-hidden">
      
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

      {/* Overlay para Mobile quando Sidebar aberta */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ========================================================= */}
      {/* SIDEBAR (DESKTOP & MOBILE DRAWER)                         */}
      {/* ========================================================= */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col justify-between border-r border-[#B08D2A]/30 bg-[#061B10]/95 px-6 py-8 transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div>
          {/* Header da Sidebar */}
          <div className="flex items-center justify-between mb-10">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F]"
              aria-label="Menu"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <h2 className="font-serif text-2xl font-normal text-stone-100 mb-8 px-2">
            Menu
          </h2>

          {/* Navegação Principal */}
          <nav className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[#0B2C1A] text-[#B08D2A] border border-[#B08D2A]/40 shadow-sm' 
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

        {/* Botão Flutuante Inferior da Sidebar */}
        <div className="pt-6">
          <button 
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D2A] text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-95"
            aria-label="Adicionar Novo"
          >
            <Plus className="h-6 w-6 stroke-[2.5]" />
          </button>
        </div>

      </aside>

      {/* ========================================================= */}
      {/* CONTEÚDO PRINCIPAL (DASHBOARD)                            */}
      {/* ========================================================= */}
      <main className="relative z-10 flex flex-1 flex-col lg:pl-64 w-full min-h-dvh">
        
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">

          {/* Top Bar Header */}
          <header className="flex items-center justify-between gap-4">
            
            {/* Botão Toggle Mobile */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A]"
              aria-label="Abrir Menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* User Greeting Box */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 px-4 py-2.5 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#B08D2A]/60 bg-[#082214] text-[#B08D2A]">
                <Diamond className="h-4 w-4" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-medium text-[#B08D2A]">
                  Good Morning, Daniel
                </h1>
                <p className="text-[10px] sm:text-xs text-stone-400">
                  Create, Gift, And Connect.
                </p>
              </div>
            </div>

            {/* Notification Icon */}
            <button 
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 text-[#B08D2A] transition-all hover:bg-[#0E351F]"
              aria-label="Notificações"
            >
              <Bell className="h-4 w-4" />
            </button>

          </header>

          {/* Hero Banner - Create Greeting Card */}
          <section className="relative overflow-hidden rounded-3xl border border-[#B08D2A]/50 bg-gradient-to-r from-[#0B2C1A] via-[#0E3821] to-[#0B2C1A] p-6 sm:p-8 text-center shadow-md">
            <h2 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
              Create Your Greeting Card
            </h2>
            <p className="mt-1.5 text-xs text-stone-300 max-w-md mx-auto">
              Create And Personalize A Greeting Card With Gifts, Flowers, Audio, And Video Messages.
            </p>

            <button 
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              <span>Start Creating</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </section>

          {/* Seção: Services & Tools */}
          <section className="space-y-3">
            <h3 className="text-xs sm:text-sm font-medium text-stone-300 px-1">
              Services & Tools
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Gift Cards */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 p-4 transition-all hover:border-[#B08D2A] hover:bg-[#0B2C1A]">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Gift className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">Gift Cards</h4>
                    <p className="text-[10px] text-stone-400">NFC & Digital Cards.</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </div>

              {/* Important Dates */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 p-4 transition-all hover:border-[#B08D2A] hover:bg-[#0B2C1A]">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">Important Dates</h4>
                    <p className="text-[10px] text-stone-400">NFC & Digital Cards.</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </div>

              {/* Scheduled Cards */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 p-4 transition-all hover:border-[#B08D2A] hover:bg-[#0B2C1A]">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">Scheduled Cards</h4>
                    <p className="text-[10px] text-stone-400">Manage Deliveries.</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </div>

              {/* My Orders */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 p-4 transition-all hover:border-[#B08D2A] hover:bg-[#0B2C1A]">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">My Orders</h4>
                    <p className="text-[10px] text-stone-400">Track Deliveries & History.</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </div>

            </div>

            {/* Banner Adicional: Scheduled Deliveries */}
            <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 p-4 mt-3">
              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-stone-100">Scheduled Cards</h4>
                  <p className="text-[10px] text-stone-400">Manage Deliveries.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção: Upcoming Dates */}
          <section className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs sm:text-sm font-medium text-stone-300">
                Upcoming Dates
              </h3>
              <button className="text-[11px] font-medium text-[#B08D2A] hover:underline flex items-center gap-0.5">
                View All +
              </button>
            </div>

            <div className="space-y-2.5">
              {[1, 2].map((id) => (
                <div key={id} className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 px-4 py-3 sm:py-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                      <Gift className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-stone-100">Emma&apos;s Birthday</h4>
                      <p className="text-[10px] text-stone-400">Greeting Card Delivery Set</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-semibold text-[#B08D2A]">15 June</span>
                    <span className="text-[10px] text-stone-400">In 11 Days</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção: Recent Orders */}
          <section className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs sm:text-sm font-medium text-stone-300">
                Recent Orders
              </h3>
              <button className="text-[11px] font-medium text-[#B08D2A] hover:underline flex items-center gap-0.5">
                View All +
              </button>
            </div>

            <div className="space-y-2.5">
              {/* Pedido 1: Confirmed */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 px-4 py-3 sm:py-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Gift className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">Birthday Greeting Card</h4>
                    <p className="text-[10px] text-stone-400">Order ID: #MGD-92841</p>
                  </div>
                </div>
                <span className="rounded-xl border border-[#B08D2A]/60 bg-[#082214] px-3 py-1 text-[10px] font-medium text-[#B08D2A]">
                  Confirmed
                </span>
              </div>

              {/* Pedido 2: On Delivery */}
              <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/70 px-4 py-3 sm:py-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082214] text-[#B08D2A]">
                    <Gift className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-100">Birthday Greeting Card</h4>
                    <p className="text-[10px] text-stone-400">Order ID: #MGD-92841</p>
                  </div>
                </div>
                <span className="rounded-xl border border-emerald-500/40 bg-[#082214] px-3 py-1 text-[10px] font-medium text-emerald-400">
                  On Delivery
                </span>
              </div>
            </div>
          </section>

          {/* Footer Branding */}
          <footer className="pt-6 pb-2 text-center text-[10px] text-stone-500">
            &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
          </footer>

        </div>

      </main>

    </div>
  );
}