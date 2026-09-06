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
  User 
} from 'lucide-react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase/config'; 
import HeroBanner from './components/HeroBanner';
import ServicesGrid from './components/ServicesGrid';
import UpcomingDates from './components/UpcomingDates';
import RecentOrders from './components/RecentOrders';

const NAV_ITEMS = [
  { name: 'Home', icon: HomeIcon, href: '/home' },
  { name: 'Cards', icon: CreditCard, href: '/choose-card' },
  { name: 'Store', icon: Store, href: '/store' },
  { name: 'Bouquets', icon: Flower2, href: '/add-bouquet/shops' },
  { name: 'Perfil', icon: User, href: '/perfil' },
  { name: 'Help', icon: User, href: '/perfil' },

];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const pathname = usePathname();

  // Detecta usuário autenticado com Firebase
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // Fecha a sidebar ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  // Previne o scroll da página no mobile quando a sidebar estiver aberta
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen]);

  return (
    <div className="relative flex min-h-dvh w-full select-none overflow-x-hidden bg-[#082214] font-sans text-white">
      
      {/* Imagem de Fundo de Textura */}
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

      {/* Backdrop para Mobile */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* ========================================================= */}
      {/* SIDEBAR NAVIGATION                                       */}
      {/* ========================================================= */}
      <aside 
        aria-label="Sidebar Navigation"
        className={`fixed bottom-0 top-0 left-0 z-50 flex w-64 flex-col justify-between border-r border-[#B08D2A]/30 bg-[#061B10]/95 px-6 py-8 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header da Sidebar */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="px-2 font-serif text-2xl font-normal text-stone-100">
              Menu
            </h2>
            {/* Botão de Fechar Apenas no Mobile */}
            <button 
              onClick={() => setSidebarOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl  shadow-lg shadow-[#D4A038]/10 border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] lg:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Lista de Navegação */}
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
                      ? 'border border-[#B08D2A]/40 bg-[#0B2C1A] text-[#B08D2A]  shadow-lg shadow-[#D4A038]/10' 
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

        {/* Botão Ação Rápida */}
        <div className="pt-6">
          <Link
            href="/create-card"
            onClick={() => setSidebarOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D2A] text-white  shadow-lg shadow-[#D4A038]/10 transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#061B10] active:scale-95"
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
              className="flex h-10 w-10 items-center  shadow-lg shadow-[#D4A038]/10 justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] lg:hidden"
              aria-label="Open sidebar menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Saudação e Logo do Usuário */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 px-4 py-2.5 shadow-lg shadow-[#D4A038]/10 backdrop-blur-sm">
              <div className="relative h-10 w-10 overflow-hidden">
                <Image
                  src="/images/logo2.svg" 
                  alt="Gold Shamrock Diamond Logo"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-medium text-[#B08D2A]">
                  Good Morning, {user?.displayName?.split(' ')[0] || '@Ghost'}
                </h1>
                <p className="text-[10px] text-stone-400 sm:text-xs">
                  Create, Gift, And Connect.
                </p>
              </div>
            </div>

            {/* Notificações */}
            <Link 
              href="/perfil"
              className="w-10 h-10 rounded-full overflow-hidden border border-[#B08D2A]/40  shadow-lg shadow-[#D4A038]/10"
            >
              <Image
                src={user?.photoURL || '/images/avatar.jpg'}
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </Link>

          </header>

          {/* Seções Principais */}
          <HeroBanner />
          <ServicesGrid />
          <UpcomingDates />
          <RecentOrders />

          {/* Rodapé */}
          <footer className="pt-6 pb-2 text-center text-[10px] text-stone-500">
            &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
          </footer>

        </div>
      </main>

    </div>
  );
}