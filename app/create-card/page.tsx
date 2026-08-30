'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Smartphone, 
  Truck, 
  Sparkles, 
  Scan, 
  Image as ImageIcon, 
  Layers 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CardOption {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  targetPath: string;
  recommended?: boolean;
}

const CARD_OPTIONS: CardOption[] = [
  {
    id: 'digital',
    title: 'Digital Card',
    description: 'Delivered Instantly Via Link, Email Or SMS. Add Text, Audio Or Video.',
    icon: Smartphone,
    targetPath: '/create-card/digital',
    recommended: true,
  },
  {
    id: 'printed',
    title: 'Printed Card',
    description: 'Premium Printed Card Delivered To The Door. Add A Gift Card Or Bouquet.',
    icon: Truck,
    targetPath: '/create-card/printed',
  },
  {
    id: 'ai',
    title: 'AI Greeting Cards',
    description: 'Create A Unique Card Using AI.',
    icon: Sparkles,
    targetPath: '/create-card/ai',
  },
  {
    id: 'scanner',
    title: 'Scanner Greeting Cards',
    description: 'Digitise Your Printed Card.',
    icon: Scan,
    targetPath: '/scanner-cards/step-1',
  },
  {
    id: 'photo',
    title: 'Photo Greeting Cards',
    description: 'Create A Card From Your Photos.',
    icon: ImageIcon,
    targetPath: '/create-card/photo',
  },
  {
    id: 'both',
    title: 'Digital + Printed',
    description: 'Best Of Both — Instant Digital Reveal Plus A Premium Printed Delivery.',
    icon: Layers,
    targetPath: '/create-card/hybrid',
  },
];

export default function ChooseCardTypePage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>('digital');

  const selectedOption = CARD_OPTIONS.find((opt) => opt.id === selectedType);

  const handleContinue = () => {
    if (selectedOption) {
      router.push(selectedOption.targetPath);
    }
  };

  return (
    <main className="relative flex min-h-dvh w-full select-none flex-col overflow-x-hidden bg-[#082214] font-sans text-white">
      
      {/* Texture Background Image */}
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

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-2xl flex-1 px-4 pt-6 pb-28 sm:px-8">
        
        {/* Step Header */}
        <header className="mb-8 flex items-center justify-between">
          <button 
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] shadow-sm transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] active:scale-95"
            aria-label="Go back to previous step"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-sm font-medium text-stone-100 sm:text-base">
            Choose Card Type
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="font-bold text-[#B08D2A]">1</span> of 3
          </div>
        </header>

        {/* Headline */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-normal leading-tight text-[#B08D2A] sm:text-3xl">
            How would you like to send it?
          </h2>
          <p className="mt-1.5 text-xs font-normal text-stone-300 sm:text-sm">
            Choose How Your Greeting Card Will Be Delivered.
          </p>
        </div>

        {/* Card Options Selector (Radio Group semantics for A11y) */}
        <div 
          role="radiogroup" 
          aria-label="Select delivery option for greeting card"
          className="space-y-3"
        >
          {CARD_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedType === option.id;

            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedType(option.id)}
                className={`relative flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#B08D2A] ${
                  isSelected
                    ? 'border-2 border-[#B08D2A] bg-[#0B2C1A] shadow-lg ring-2 ring-[#B08D2A]/40'
                    : 'border border-[#B08D2A]/30 bg-[#0B2C1A]/60 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A] active:scale-[0.99]'
                }`}
              >
                {/* Badge RECOMMENDED */}
                {option.recommended && (
                  <span className="absolute -top-2.5 right-4 rounded-md bg-[#B08D2A] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#082214] shadow-sm">
                    Recommended
                  </span>
                )}

                {/* Icon Container */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors sm:h-11 sm:w-11 ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                      : 'border-[#B08D2A]/40 bg-[#082214]/60 text-[#B08D2A]/80'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Texts */}
                <div className="flex-1 pr-2">
                  <h3 className="text-xs font-semibold text-stone-100 sm:text-sm">
                    {option.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-stone-300/80">
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fixed Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-[#B08D2A]/30 bg-[#061B10]/95 px-4 py-4 backdrop-blur-md">
        <div className="w-full max-w-md">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedType}
            className={`w-full rounded-2xl border py-3.5 text-center text-xs font-semibold shadow-md transition-all duration-200 sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B08D2A] ${
              selectedType
                ? 'cursor-pointer border-[#B08D2A] bg-[#B08D2A] text-[#082214] shadow-amber-900/20 hover:bg-[#c6a032] active:scale-[0.99]'
                : 'cursor-not-allowed border-[#B08D2A]/30 bg-[#0B2C1A]/50 text-stone-500 opacity-60'
            }`}
          >
            Continue 
          </button>
        </div>
      </footer>

    </main>
  );
}