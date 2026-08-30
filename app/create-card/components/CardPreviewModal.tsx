'use client';

import { X, RefreshCw } from 'lucide-react';
import Image from 'next/image';

interface CardPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardImageSrc?: string;
  title?: string;
  occasion?: string;
  onChangeTemplate?: () => void;
}

export default function CardPreviewModal({
  isOpen,
  onClose,
  cardImageSrc = '/images/card-template.svg', // Caminho do SVG do seu cartão
  title = 'My Green Diamond',
  occasion = 'Romantic',
  onChangeTemplate,
}: CardPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      
      {/* Container Principal do Modal */}
      <div className="relative flex w-full max-w-lg flex-col items-center rounded-3xl border border-[#B08D2A]/60 bg-[#061B10]/95 px-6 py-6 shadow-2xl">
        
        {/* Header do Modal */}
        <div className="flex w-full items-center justify-between border-b border-[#B08D2A]/20 pb-4 mb-4">
          <h2 className="text-sm font-medium text-[#B08D2A]">
            Real Time Preview
          </h2>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-full border border-[#B08D2A]/40 bg-[#082214] px-3 py-1 text-xs text-stone-300 transition-all hover:bg-[#0E351F] hover:text-white"
          >
            <span>Close</span>
            <X className="h-3.5 w-3.5 text-[#B08D2A]" />
          </button>
        </div>

        {/* Moldura do Cartão SVG */}
        <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4] rounded-2xl border-2 border-[#B08D2A] p-2 bg-[#0B2C1A] shadow-xl overflow-hidden flex items-center justify-center">
          
          {/* Renderização do SVG */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={cardImageSrc}
              alt="Greeting Card Preview"
              fill
              priority
              className="object-contain"
            />

            {/* Camada Dinâmica sobre o SVG (caso precise injetar textos por cima) */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 px-6 text-center pointer-events-none">
              <span className="font-serif text-xs text-[#B08D2A] tracking-wider uppercase">
                {title}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#082214] mt-1">
                {occasion}
              </h3>
            </div>
          </div>

        </div>

        {/* Botão Inferior: Change Greeting Card Template */}
        <div className="mt-6 w-full flex justify-center">
          <button
            onClick={onChangeTemplate}
            className="flex items-center gap-2 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A] px-5 py-2.5 text-xs font-medium text-stone-200 transition-all hover:bg-[#0E351F] hover:text-white active:scale-95"
          >
            <span>Change Greeting Card Template</span>
            <RefreshCw className="h-3.5 w-3.5 text-[#B08D2A]" />
          </button>
        </div>

      </div>

    </div>
  );
}