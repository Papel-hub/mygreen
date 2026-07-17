'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  onBack?: () => void; // Opcional: caso queiras passar um comportamento de voltar personalizado
}

export default function Header({ title, onBack }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back(); // Volta para a página anterior do histórico por padrão
    }
  };

  return (
    <header className="bg-[#042414] px-4 py-4 flex items-center relative border-b border-[#D4AF37]/10 z-10 w-full">
      <button 
        onClick={handleBack}
        className="p-1 hover:bg-emerald-950/50 active:scale-95 rounded-full transition-all text-[#D4AF37]"
        aria-label="Go back"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <h1 className="flex-grow text-center text-sm font-serif tracking-widest uppercase text-white pr-7">
        {title}
      </h1>
    </header>
  );
}