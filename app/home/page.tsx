'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

import { 
  PlusIcon, CalendarIcon, ClockIcon, CreditCardIcon, TruckIcon, 
  HomeIcon, ClipboardListIcon, GiftIcon, UserIcon, BellIcon, 
  ChevronRight, Loader2
} from 'lucide-react';

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Monitor Firebase auth state change safely
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login'); 
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const menuItems = [
    { title: "CREATE YOUR GREETING CARD", subtitle: "Craft a personalized message", icon: PlusIcon, href: "/create-card" },
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

  // Get display name or extract from email cleanly
  const getGreetingName = (): string => {
    if (!user) return 'User';
    if (user.displayName) return user.displayName;
    if (user.email) {
      const emailName = user.email.split('@')[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    return 'User';
  };

  // Safe Loading State matching the Dark Emerald Aesthetic
  if (loading) {
    return (
      <div className="min-h-screen bg-[#042414] flex flex-col items-center justify-center text-white select-none">
        <Loader2 className="animate-spin text-[#D4AF37] mb-4" size={40} />
        <p className="text-sm font-light tracking-widest text-white/70 uppercase">
          Loading your green paradise...
        </p>
      </div>
    );
  }

  // Prevent layout shifts during active redirection
  if (!user) return null;

  return (
    <div className="min-h-screen text-white relative flex flex-col select-none bg-[#031A0E]">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Fixed Navigation Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#042414]/80 border-b border-[#D4AF37]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/home" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-24 h-12">
                <Image 
                  src="/logo1.svg" 
                  alt="My Green Diamond Logo" 
                  fill
                  priority 
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block text-left border-l border-[#D4AF37]/30 pl-3">
                <h1 className="text-lg font-serif leading-none tracking-wide">Ireland</h1>
                <p className="text-[9px] text-[#D4AF37] uppercase tracking-widest mt-0.5">My Green Diamond</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-3">
              <button 
                className="p-2 text-[#D4AF37] hover:text-white transition-colors rounded-full hover:bg-[#D4AF37]/10 active:scale-95"
                aria-label="Notifications"
              >
                <BellIcon size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Header Spacer */}
      <div className="h-16" />

      {/* Greeting Hero Section */}
      <section className="relative z-10 px-6 py-6 mt-4 max-w-2xl w-full mx-auto">
        <h2 className="text-3xl font-serif text-[#D4AF37] leading-tight">
          Welcome back, <br/> {getGreetingName()}! 💚
        </h2>
        <p className="text-sm text-white/70 font-light mt-1.5">What would you like to do today?</p>
      </section>

      {/* Main Grid Menu */}
      <main className="relative z-10 px-6 flex-1 space-y-4 pb-28 max-w-2xl w-full mx-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center justify-between p-4 rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#06331C]/90 to-[#042414]/95 shadow-xl active:scale-[0.98] hover:border-[#D4AF37]/60 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#D4AF37] bg-[#D4AF37]/10 p-2.5 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                  <IconComponent size={26} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-wider text-white uppercase">{item.title}</span>
                  {item.subtitle && <span className="text-[11px] text-white/60 mt-0.5 font-light">{item.subtitle}</span>}
                </div>
              </div>
              <ChevronRight size={18} className="text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} aria-hidden="true" />
            </Link>
          );
        })}
      </main>

      {/* Fixed Bottom Tab Navigation */}
      <footer className="fixed bottom-0 w-full bg-[#042414]/95 backdrop-blur-md border-t border-[#D4AF37]/25 px-2 py-2 z-50 safe-bottom">
        <nav className="flex justify-around items-center max-w-lg mx-auto h-12">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const TabIcon = tab.icon;
            return (
              <Link 
                key={tab.name} 
                href={tab.href} 
                className="flex flex-col items-center justify-center flex-1 h-full gap-0.5 group"
              >
                <TabIcon 
                  size={20} 
                  className={`transition-all duration-200 ${
                    isActive ? "text-[#D4AF37] scale-110" : "text-white/50 group-hover:text-white/80"
                  }`} 
                />
                <span className={`text-[9px] tracking-wide transition-colors duration-200 ${
                  isActive ? "text-[#D4AF37] font-semibold" : "text-white/50 group-hover:text-white/80"
                }`}>
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