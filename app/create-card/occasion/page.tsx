'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Edit3, Eye, ArrowRight } from 'lucide-react';
import RealTimePreviewModal from './../components/RealTimePreviewModal';
import Image from 'next/image';

interface OccasionOption {
  id: string;
  label: string;
}

const occasions: OccasionOption[] = [
  { id: 'romantic', label: 'Romantic' },
  { id: 'friendship', label: 'Friendship' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'family', label: 'Family' },
  { id: 'luxury', label: 'Luxury Edition' },
];

export default function SelectOccasionPage() {
  const router = useRouter();
  
  const [selectedOccasion, setSelectedOccasion] = useState<string>('romantic');
  const [customTitle, setCustomTitle] = useState<string>('To My Beautiful Wife ❤️');
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const handleContinue = () => {
    // Navega para a próxima etapa do fluxo
    router.push(`/create-card/media`);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-[#082214] text-white select-none overflow-x-hidden font-sans">
      
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

      <div className="relative z-10 w-full max-w-md mx-auto px-5 pt-6 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
            <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center
            border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]
             rounded-lg text-emerald-100
              transition-all  active:scale-95 border"
            aria-label="Voltar"
            >
            <ArrowLeft className="h-5 w-5" />
            </button>

          <h1 className="text-sm font-semibold text-stone-100">
            Create Your Greeting Card
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#D4A038] font-bold">1</span> of 3
          </div>
        </header>

        {/* Headline */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A038] leading-tight">
            Select Occasion
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Choose The Emotional Theme For Your Personalized Greeting Card
          </p>
        </div>

        {/* Grid de Ocasiões (Botões Pils com Ícone de Coração) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {occasions.map((item) => {
            const isSelected = selectedOccasion === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedOccasion(item.id)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'border-[#D4A038] bg-[#0B2C1A] text-white shadow-md'
                    : 'border-emerald-800/60 bg-[#0B2C1A]/60 text-stone-300 hover:border-emerald-700 hover:bg-[#0B2C1A]'
                }`}
              >
                <span>{item.label}</span>
                <Heart
                  className={`h-4 w-4 ${
                    isSelected
                      ? 'fill-[#D4A038] text-[#D4A038]'
                      : 'text-stone-400 group-hover:text-stone-200'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Campo de Título Customizado */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-stone-300 mb-2">
            Custom Title
          </label>
          <div className="relative flex items-center rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] px-4 py-3.5 focus-within:border-[#D4A038]">
            <input
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="e.g To My Beautiful Wife ❤️"
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none"
            />
            <Edit3 className="h-4 w-4 text-stone-400 shrink-0 ml-2" />
          </div>
        </div>

        {/* Botão Principal de Ação */}
        <button
          onClick={handleContinue}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B88E2C] py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
        >
          <span>Continue To Customize</span>
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

      {/* RODAPÉ FIXO - Botão "Preview" */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-800/60 bg-[#082214]/95 px-5 py-4 backdrop-blur-md">
        <div className="w-full max-w-md mx-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex w-full items-center justify-between rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] px-5 py-3.5 text-xs font-semibold text-stone-200 hover:bg-[#103822] transition-all"
          >
            <span>Preview</span>
            <Eye className="h-4 w-4 text-stone-300" />
          </button>
        </div>
      </div>

      {/* Modal de Prévia em Tempo Real */}
      <RealTimePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        occasionTitle={
          occasions.find((o) => o.id === selectedOccasion)?.label
        }
        customTitle={customTitle}
      />

    </main>
  );
}