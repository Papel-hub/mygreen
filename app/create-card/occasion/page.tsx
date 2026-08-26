'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Pencil, Eye } from 'lucide-react';
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
  const [customTitle, setCustomTitle] = useState<string>('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/create-card/customize');
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

      {/* Conteúdo Central */}
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
            Create Your Greeting Card
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#B08D2A] font-bold">1</span> of 3
          </div>
        </header>

        {/* Headline */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
            Select Occasion
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Choose The Emotional Theme For Your Personalized Greeting Card
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleContinue} className="space-y-6">
          
          {/* Grid de Ocasiões (2 Colunas) */}
          <div className="grid grid-cols-2 gap-3">
            {occasions.map((item) => {
              const isSelected = selectedOccasion === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedOccasion(item.id)}
                  className={`flex items-center justify-between rounded-2xl p-4 text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'border border-[#B08D2A] bg-[#0B2C1A] text-white shadow-md ring-1 ring-[#B08D2A]'
                      : 'border border-[#B08D2A]/30 bg-[#0B2C1A]/60 text-stone-300 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A]'
                  }`}
                >
                  <span>{item.label}</span>
                  <Heart className={`h-4 w-4 transition-colors ${isSelected ? 'text-[#B08D2A] fill-[#B08D2A]' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Campo Custom Title */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-2">
              Custom Title
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3.5 transition-all focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <input
                type="text"
                placeholder="e.g. To My Beautiful Wife ❤️"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
              />
              <Pencil className="h-4 w-4 text-[#B08D2A] shrink-0 ml-2" />
            </div>
          </div>

          {/* Botão Continue To Customize */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Continue To Customize &rarr;
            </button>
          </div>

        </form>

      </div>

      {/* RODAPÉ FIXO COM O BOTÃO PREVIEW */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/90 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
        <div className="w-full max-w-sm">
          <button
            type="button"
            onClick={() => alert('Previewing Card...')}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0B2C1A] border border-[#B08D2A]/60 py-3 text-center text-xs font-medium text-stone-200 shadow-md transition-all hover:bg-[#0E351F] hover:text-white active:scale-[0.99]"
          >
            <span>Preview</span>
            <Eye className="h-4 w-4 text-[#B08D2A]" />
          </button>
        </div>
      </footer>

    </main>
  );
}