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
import type { LucideIcon } from 'lucide-react';

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
    id: 'printed',
    title: 'Printed Card',
    description: 'Premium Printed Card Delivered To The Door. Add A Gift Card Or Bouquet.',
    icon: Truck,
  },
  {
    id: 'ai',
    title: 'AI Greetinbg Cards',
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
      router.push(`/create-card/occasion`);
    }
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
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

      {/* Conteúdo da Tela */}
      <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-sm sm:text-base font-medium text-stone-100">
            Choose Card Type
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#B08D2A] font-bold">1</span> of 3
          </div>
        </header>

        {/* Headline */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
            How would you like to send it?
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Choose How Your Greeting Card Will Be Delivered.
          </p>
        </div>

        {/* Lista de Card Options */}
        <div className="space-y-3">
          {cardOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedType === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={`relative flex items-center gap-4 rounded-2xl p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border border-[#B08D2A] bg-[#0B2C1A] shadow-md ring-1 ring-[#B08D2A]'
                    : 'border border-[#B08D2A]/30 bg-[#0B2C1A]/60 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A]'
                }`}
              >
                {/* Badge RECOMMENDED */}
                {option.recommended && (
                  <div className="absolute -top-2.5 right-4 rounded-md bg-[#B08D2A] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#082214] shadow-sm">
                    Recommended
                  </div>
                )}

                {/* Ícone */}
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                      : 'border-[#B08D2A]/40 bg-[#082214]/60 text-[#B08D2A]/80'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Textos */}
                <div className="flex-1 pr-2">
                  <h3 className="text-xs sm:text-sm font-medium text-stone-100">
                    {option.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-stone-400 font-normal">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* RODAPÉ FIXO COM O BOTÃO CONTINUE */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/90 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full rounded-2xl bg-[#0B2C1A] border border-[#B08D2A]/60 py-3.5 text-center text-xs sm:text-sm font-medium text-stone-200 shadow-md transition-all hover:bg-[#0E351F] hover:text-white active:scale-[0.99] disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </footer>

    </main>
  );
}