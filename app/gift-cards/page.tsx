'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Wifi, 
  CreditCard, 
  PackageCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function ChooseCardTypePage() {
  const router = useRouter();
  
  // Estado local para gerenciar o tipo de cartão selecionado
  const [selectedType, setSelectedType] = useState<'digital' | 'physical'>('digital');
  const [amount] = useState<string>('50.00');

  // Ação ao clicar em "Add Gift Card"
  const handleAddGiftCard = () => {
    // Redireciona para a próxima etapa passando o tipo via Query Params ou State
    router.push(`/choose-delivery?giftCard=${selectedType}&amount=${amount}`);
  };

  // Ação ao clicar em "Skip"
  const handleSkip = () => {
    router.push('/choose-delivery?giftCard=none');
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Texture Background Overlay */}
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
          {/* Header */}
        <header className="mb-8 flex w-full sm:px-12 items-center border-b 
        border-[#B08D2A]/30 bg-[#061B10]/95 px-4 py-4 backdrop-blur-md  justify-between">            <button 
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

      <div className="relative px-8 z-10 mx-auto w-full max-w-6xl flex-1 pt-6 pb-28 sm:px-8">




          {/* Título Principal */}
        {/* Headline */}
        <div className="mb-6 sm:px-8 px-3">
          <h2 className="font-serif text-2xl font-normal leading-tight text-[#B08D2A] sm:text-3xl">
              Add an official gift card
            </h2>
            <p className="mt-0.5 text-xs text-stone-300 font-normal">
              Ireland My Green Diamond Gift Card — NFC &amp; QR
            </p>
          </div>

          {/* Mockup do Cartão Verde e Dourado */}
          <div className="relative w-full rounded-2xl border border-[#B08D2A]/40 bg-gradient-to-br from-[#0E3821] to-[#061D11] p-6 shadow-2xl mb-6 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-36 w-36 rounded-full bg-[#B08D2A]/10 blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-[#B08D2A] uppercase">
                MY GREEN DIAMOND
              </span>
              <Wifi className="h-5 w-5 text-[#B08D2A]/80 transform rotate-90" />
            </div>

            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-stone-100 tracking-tight">
                €{amount}
              </span>
            </div>

            <div className="flex items-end justify-between pt-2">
              <div className="text-xs tracking-widest text-stone-400 font-mono">
                •••• •••• •••• 0000
              </div>
              
              <div className="h-8 w-8 rounded-md border border-[#B08D2A]/60 bg-[#B08D2A]/20 flex items-center justify-center p-1">
                <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                  <div className="bg-[#B08D2A] rounded-sm" />
                  <div className="bg-[#B08D2A] rounded-sm" />
                  <div className="bg-[#B08D2A] rounded-sm" />
                  <div className="bg-[#B08D2A] rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Opções Selecionáveis */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-stone-300">
              Gift Card Type
            </h3>

            {/* Digital Card */}
            <div
              onClick={() => setSelectedType('digital')}
              className={`group relative flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                selectedType === 'digital'
                  ? 'border-[#B08D2A] bg-[#0E3821]/90 shadow-lg shadow-amber-950/20 ring-1 ring-[#B08D2A]/50'
                  : 'border-[#B08D2A]/25 bg-[#0B2C1A]/80 hover:border-[#B08D2A]/50 hover:bg-[#0D331E]/90'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors mt-0.5 ${
                  selectedType === 'digital' 
                    ? 'border-[#B08D2A]/60 bg-[#124227] text-[#B08D2A]' 
                    : 'border-[#B08D2A]/20 bg-[#082214] text-stone-400 group-hover:text-stone-200'
                }`}>
                  <CreditCard className="h-5 w-5" />
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-semibold transition-colors ${
                    selectedType === 'digital' ? 'text-[#B08D2A]' : 'text-stone-100'
                  }`}>
                    Digital Card
                  </h4>
                  <p className="text-[11px] text-stone-400 leading-snug">
                    Sent With The Card, Redeemable<br />Instantly
                  </p>
                </div>
              </div>

              {selectedType === 'digital' && (
                <CheckCircle2 className="h-5 w-5 text-[#B08D2A] fill-[#B08D2A]/20 flex-shrink-0" />
              )}
            </div>

            {/* Physical Card */}
            <div
              onClick={() => setSelectedType('physical')}
              className={`group relative flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                selectedType === 'physical'
                  ? 'border-[#B08D2A] bg-[#0E3821]/90 shadow-lg shadow-amber-950/20 ring-1 ring-[#B08D2A]/50'
                  : 'border-[#B08D2A]/25 bg-[#0B2C1A]/80 hover:border-[#B08D2A]/50 hover:bg-[#0D331E]/90'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors mt-0.5 ${
                  selectedType === 'physical' 
                    ? 'border-[#B08D2A]/60 bg-[#124227] text-[#B08D2A]' 
                    : 'border-[#B08D2A]/20 bg-[#082214] text-stone-400 group-hover:text-stone-200'
                }`}>
                  <PackageCheck className="h-5 w-5" />
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-semibold transition-colors ${
                    selectedType === 'physical' ? 'text-[#B08D2A]' : 'text-stone-100'
                  }`}>
                    Physical Card
                  </h4>
                  <p className="text-[11px] text-stone-400 leading-snug">
                    Premium NFC Card, Delivered With The Order
                  </p>
                </div>
              </div>

              {selectedType === 'physical' && (
                <CheckCircle2 className="h-5 w-5 text-[#B08D2A] fill-[#B08D2A]/20 flex-shrink-0" />
              )}
            </div>
          </div>

        {/* Rodapé Fixo */}
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
          <div className="w-full max-w-xl flex items-center gap-3">
            <button
              type="button"
              onClick={handleSkip}
              className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] active:scale-[0.99] transition-all"
            >
              Skip
            </button>
            <button
              type="button"
              onClick={handleAddGiftCard}
              className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
            >
              Add Gift Card 
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}