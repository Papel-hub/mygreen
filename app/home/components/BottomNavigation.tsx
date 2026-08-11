'use client';

import { useState } from 'react';
import { Home, CreditCard, Plus, Store, Flower2 } from 'lucide-react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'create', label: 'Create', icon: Plus, isAction: true },
    { id: 'store', label: 'Store', icon: Store },
    { id: 'bouquets', label: 'Bouquets', icon: Flower2 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 pt-2 pointer-events-none">
      <div className="pointer-events-auto flex w-full max-w-md items-center justify-around rounded-2xl border-t border-transition-all border-[#B08D2A] hover:border-[#B08D2A]/70 hover:bg-[#103822] active:scale-[0.98]80 bg-[#0B2C1A]/95 px-3 py-2 shadow-2xl backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          // Botão Central de Ação (+)
          if (item.isAction) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D2A] text-white shadow-lg transition-transform hover:bg-[#a27c24] active:scale-95 border-2 border-[#B08D2A]"
                aria-label="Criar Novo"
              >
                <Plus className="h-6 w-6 stroke-[3]" />
              </button>
            );
          }

          // Itens Padrão do Menu
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all active:scale-90 ${
                isActive ? 'text-[#B08D2A]' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}