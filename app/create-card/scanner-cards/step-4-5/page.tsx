'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Music, 
  Mic, 
  Video, 
  QrCode, 
  Plus, 
  Check, 
  Bookmark, 
  Send, 
  Printer 
} from 'lucide-react';

type Step = 'add-media' | 'preview';

interface MediaOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const mediaOptions: MediaOption[] = [
  { id: 'music', title: 'Music', subtitle: 'Add Background Music', icon: Music },
  { id: 'voice', title: 'Voice Recording', subtitle: 'Record Or Upload', icon: Mic },
  { id: 'video', title: 'Video', subtitle: 'Upload Video', icon: Video },
  { id: 'qrcode', title: 'QR Code', subtitle: 'Generate QR Code', icon: QrCode },
];

export default function CardFinalizationFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('add-media');

  // Controle de Mídias Adicionadas
  const [addedMedia, setAddedMedia] = useState<Record<string, boolean>>({
    music: false,
    voice: false,
    video: false,
    qrcode: false,
  });

  const toggleMedia = (id: string) => {
    setAddedMedia((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Textura de Fundo */}
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

      {/* ========================================== */}
      {/* TELA 1: ADD MEDIA (Step 7 of 9)            */}
      {/* ========================================== */}
      {currentStep === 'add-media' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
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
                Scanner Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">7</span> of 9
              </div>
            </header>

            {/* Título */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Add Media
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Personalise Your Greeting Card.
              </p>
            </div>

            {/* Lista de Opções de Mídia */}
            <div className="space-y-3">
              {mediaOptions.map((option) => {
                const Icon = option.icon;
                const isAdded = addedMedia[option.id];

                return (
                  <div
                    key={option.id}
                    onClick={() => toggleMedia(option.id)}
                    className={`flex items-center justify-between rounded-2xl p-4 border transition-all cursor-pointer ${
                      isAdded
                        ? 'border-[#B08D2A] bg-[#0B2C1A] ring-1 ring-[#B08D2A]'
                        : 'border-[#B08D2A]/30 bg-[#0B2C1A]/60 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                        isAdded 
                          ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]' 
                          : 'border-[#B08D2A]/40 bg-[#082214]/60 text-[#B08D2A]/80'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-stone-100">
                          {option.title}
                        </h3>
                        <p className="text-[11px] text-stone-300/80 font-normal">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${
                        isAdded
                          ? 'bg-[#B08D2A] border-[#B08D2A] text-[#082214]'
                          : 'border-[#B08D2A]/40 text-[#B08D2A] hover:bg-[#B08D2A]/20'
                      }`}
                    >
                      {isAdded ? <Check className="h-4 w-4 stroke-[3]" /> : <Plus className="h-4 w-4" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rodapé Com Botão Continuar */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md">
              <button
                type="button"
                onClick={() => setCurrentStep('preview')}
                className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
              >
                Continue &rarr;
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* ========================================== */}
      {/* TELA 2: GREETING CARD PREVIEW (Step 9)     */}
      {/* ========================================== */}
      {currentStep === 'preview' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-36 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentStep('add-media')}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Greeting Card Preview
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">9</span> of 9
              </div>
            </header>

            {/* Container do Cartão em Destaque */}
            <div className="flex flex-col items-center justify-center my-2">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl border-2 border-[#B08D2A] bg-[#fcf8ee] text-[#1c2e24] p-6 shadow-2xl flex flex-col justify-between items-center text-center shadow-amber-950/50 ring-4 ring-[#B08D2A]/20">
                
                {/* Detalhes Ornamentados Dourados */}
                <div className="w-full flex items-center justify-between border-b border-[#B08D2A]/30 pb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D2A]">
                    ☘ My Green Diamond
                  </span>
                  <span className="text-[10px] italic text-[#B08D2A]/80">
                    Romantic
                  </span>
                </div>

                {/* Conteúdo do Cartão */}
                <div className="my-auto space-y-4 px-2">
                  <p className="text-xs font-serif text-stone-600">
                    To: <br />
                    <span className="text-sm font-bold text-[#1c2e24]">Dear Emma</span>
                  </p>

                  <p className="font-serif italic text-xs sm:text-sm text-stone-800 leading-relaxed px-3">
                    &ldquo;You Are My Today And All Of My Tomorrows. This Emerald Shines With Only A Fraction Of Your Brilliant Light.&rdquo;
                  </p>

                  <p className="text-xs font-serif text-stone-600">
                    From: <br />
                    <span className="text-sm font-bold text-[#1c2e24]">Daniel</span>
                  </p>
                </div>

                {/* Rodapé Interno do Cartão */}
                <div className="w-full border-t border-[#B08D2A]/30 pt-3 flex items-center justify-center gap-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#B08D2A] font-semibold">
                    Ireland My Green Diamond
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-stone-400 mt-4 italic">
                Preview Your AI-Generated Greeting Card.
              </p>
            </div>
          </div>

          {/* Rodapé de Ações Finais */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md space-y-2.5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => alert('Card Saved!')}
                  className="w-1/2 rounded-2xl border border-[#B08D2A]/50 bg-[#0B2C1A] py-3 text-center text-xs font-semibold text-stone-200 hover:bg-[#0E351F] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                >
                  <Bookmark className="h-4 w-4 text-[#B08D2A]" /> Save
                </button>

                <button
                  type="button"
                  onClick={() => alert('Opening Digital Share Options...')}
                  className="w-1/2 rounded-2xl bg-[#c04b36] border border-rose-600/60 py-3 text-center text-xs font-semibold text-white hover:bg-[#d1533d] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <Send className="h-4 w-4" /> Send Digitally
                </button>
              </div>

              <button
                type="button"
                onClick={() => alert('Proceeding to Checkout Print...')}
                className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20 flex items-center justify-center gap-2"
              >
                <Printer className="h-4 w-4" /> Purchase High-Resolution Print
              </button>
            </div>
          </footer>
        </div>
      )}

    </main>
  );
}