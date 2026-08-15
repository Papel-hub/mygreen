'use client';

import { Bell, Diamond } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = 'User' }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between pt-2 pb-4">
      {/* Perfil / Logo & Saudação */}
      <div className="flex items-center gap-3">
        {/* Ícone do Perfil / Diamante Verde */}
        <div className="flex h-12 w-12 items-center shadow-lg shadow-[#D4A038]/10 justify-center rounded-2xl border border-[#B08D2A] bg-[#0B2C1A] text-[#B08D2A]">
          <Diamond className="h-5 w-5 fill-[#B08D2A]/20" />
        </div>

        <div>
          <h2 className="font-serif text-base sm:text-lg font-medium text-[#B08D2A]">
            Good Morning, {userName}
          </h2>
          <p className="text-xs text-stone-300 font-light">
            Create, Gift, And Connect.
          </p>
        </div>
      </div>

      {/* Botão de Carteira / Notificações com badge de status */}
      <button 
        aria-label="Notificações"
        className="relative flex h-11 w-11 shadow-lg shadow-[#D4A038]/10 items-center justify-center rounded-2xl border border-[#B08D2A] bg-[#0B2C1A] text-emerald-100 transition-all hover:bg-[#123824] active:scale-95"
      >
        <Bell className="h-5 w-5 text-emerald-100" />
        {/* Ponto/Dot verde indicando notificação */}
        <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#0B2C1A]" />
      </button>
    </header>
  );
}