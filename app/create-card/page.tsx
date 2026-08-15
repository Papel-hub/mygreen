'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Smartphone, 
  Truck, 
  Sparkles, 
  Scan, 
  Image as ImageIcon, 
  Layers 
} from 'lucide-react';
import Image from 'next/image';
import type { LucideIcon } from "lucide-react";

interface CardOption {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  recommended?: boolean;
}

const cardOptions: CardOption[] = [
  {
    id: 'digital',
    title: 'Digital Card',
    description: 'Delivered Instantly Via Link, Email Or SMS. Add Text, Audio Or Video.',
    icon: Smartphone,
    recommended: true,

  },
  {
    id: 'Printed',
    title: 'Printed Card',
    description: 'Premium Printed Card Delivered To The Door. Add A Gift Card Or Bouquet.',
    icon: Truck,
  },
  {
    id: 'ai',
    title: 'AI Greeting Cards',
    description: 'Create A Unique Card Using AI.',
    icon: Sparkles,
  },
  {
    id: 'scanner',
    title: 'Scanner Greeting Cards',
    description: 'Digitise Your Printed Card.',
    icon: Scan,
  },
  {
    id: 'photo',
    title: 'Photo Greeting Cards',
    description: 'Create A Card From Your Photos.',
    icon: ImageIcon,
  },
  {
    id: 'both',
    title: 'Digital + Printed',
    description: 'Best Of Both — Instant Digital Reveal Plus A Premium Printed Delivery.',
    icon: Layers,
  },
];

export default function ChooseCardTypePage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>('digital');

  const handleContinue = () => {
    if (selectedType) {
      // Avança para o próximo passo passando o tipo escolhido
      router.push(`/create-card/occasion`);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#082214] px-5 pt-6 pb-24 text-white select-none overflow-x-hidden font-sans">
      
        {/* Imagem de Fundo Otimizada do Next.js */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <Image
            src="/images/img1.svg" // public/images/
            alt="Background"
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-30" // Ajuste a opacidade como preferir
            />
        </div>

      {/* Conteúdo Rolável (Header, Título e Lista de Cartões) */}
      <div className="relative z-10 w-full max-w-md mx-auto px-5 pt-6 pb-28">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
            <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center
            border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]
             rounded-lg text-emerald-100
              transition-all active:scale-95 border"
            aria-label="Voltar"
            >
            <ArrowLeft className="h-5 w-5" />
            </button>

          <h1 className="text-base font-semibold text-stone-100">
            Choose Card Type
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#D4A038] font-bold">1</span> of 3
          </div>
        </header>

        {/* Headline */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A038] leading-tight">
            How would you like to send it?
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Choose How Your Greeting Card Will Be Delivered.
          </p>
        </div>

        {/* Opções de Seleção */}
        <div className="space-y-3.5">
          {cardOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedType === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={`relative flex items-center gap-4 rounded-2xl p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-2 border-[#B08D2A] bg-[#B08D2A]/20 shadow-lg shadow-[#D4A038]/10'
                    : ' shadow-lg shadow-[#D4A038]/10 border border-[#B08D2A]/70 bg-[#0B2C1A]/80 hover:border-emerald-700/80 hover:bg-[#0B2C1A]'
                }`}
              >
                {/* Badge RECOMMENDED */}
                {option.recommended && (
                  <div className="absolute -top-2.5 right-4 rounded-md bg-[#B08D2A] px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow-md">
                    Recommended
                  </div>
                )}

                {/* Ícone */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                    isSelected
                      ? 'border-[#B08D2A]/70 bg-[#B08D2A]/30 text-[#D4A038]'
                      : 'border-[#B08D2A]/70 bg-[#B08D2A]/20 text-stone-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Textos */}
                <div className="flex-1 pr-2">
                  <h3 className="text-sm font-semibold text-stone-100">
                    {option.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-stone-400 font-light">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* RODAPÉ FIXO COM O BOTÃO CONTINUE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pt-2 pointer-events-none">
        <div className="pointer-events-auto flex w-full 
        max-w-md items-center justify-around rounded-t-2xl  border-t border-transition-all border-[#B08D2A] hover:border-[#B08D2A]/70
        hover:bg-[#103822] active:scale-[0.98]80 bg-[#0B2C1A]/95 px-3 py-2 shadow-2xl backdrop-blur-md">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full rounded-2xl border border-emerald-700/50 bg-[#0E3A24] py-3.5 text-center text-sm font-medium text-emerald-200/80 shadow-lg transition-all hover:bg-[#144d31] hover:text-white active:scale-[0.99] disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>

    </main>
  );
}