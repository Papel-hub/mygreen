'use client';

import { useState } from 'react';
import { 
  X, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Mic, 
  Maximize2,
  Image as ImageIcon, 
  Video 
} from 'lucide-react';

export interface MediaItem {
  type: 'text' | 'audio' | 'photo' | 'video';
  content: string; 
  customTitle?: string;
}

interface RealTimePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  occasionTitle?: string;
  toName?: string;
  fromName?: string;
  isAnonymous?: boolean;
  mediaItems?: MediaItem[];
  customTitle?: string;
}

export default function RealTimePreviewModal({
  isOpen,
  onClose,
  occasionTitle = 'Romantic',
  toName = 'Emma',
  fromName = 'Daniel',
  isAnonymous = false,
  customTitle = 'Romantc',
  mediaItems = [
    { type: 'text', content: 'You Are My Today And All Of My Tomorrows. This Emerald Shines With Only A Fraction Of Your Brilliant Light.' },
    { type: 'audio', content: '0:01' },
    { type: 'photo', content: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500' }
  ],
}: RealTimePreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const currentMedia = mediaItems[currentIndex] || mediaItems[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center p-4 transition-opacity">
      <div className="relative w-full max-w-md rounded-3xl border border-emerald-800/80 bg-[#082214] p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5">
        
        {/* Header do Modal */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-[#D4A038]">
            Real Time Preview
          </h3>
          <button
            onClick={onClose}
            className="flex items-center gap-1 rounded-full bg-[#0B2C1A] px-2.5 py-1 text-xs text-stone-300 hover:text-white transition-colors border border-emerald-800/60"
          >
            <span>Close</span>
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Template Físico do Cartão */}
        <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-2xl border-4 border-[#D4A038]/80 bg-[#F5EFE0] p-5 text-stone-900 shadow-inner flex flex-col justify-between items-center text-center">
          
          {/* Cantos Decorativos */}
          <div className="absolute top-2 left-2 h-7 w-7 border-t-2 border-l-2 border-[#D4A038]" />
          <div className="absolute top-2 right-2 h-7 w-7 border-t-2 border-r-2 border-[#D4A038]" />
          <div className="absolute bottom-2 left-2 h-7 w-7 border-b-2 border-l-2 border-[#D4A038]" />
          <div className="absolute bottom-2 right-2 h-7 w-7 border-b-2 border-r-2 border-[#D4A038]" />

          {/* Cabeçalho do Cartão */}
          <div className="mt-1 space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88E2C]">
              My Green Diamond
            </span>
            <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-800">
              {occasionTitle}
            </h4>
            <div className="mx-auto h-[1px] w-8 bg-[#B88E2C]/50 my-1" />
          </div>

          {/* Destinatário */}
          <div className="space-y-0.5">
            <p className="text-[10px] font-serif text-[#B88E2C] font-semibold">
              To:
            </p>
            <p className="font-serif text-xs sm:text-sm font-bold text-stone-800">
              Dear {toName || 'Someone'}
            </p>
          </div>

          {/* BANNER CENTRAL / CARROSSEL DE MÍDIAS */}
          <div className="relative my-auto w-full px-1 flex items-center justify-center min-h-[110px]">
            
            {/* Seta Esquerda (Apenas se tiver mais de 1 item) */}
            {mediaItems.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 flex h-7 w-7 -translate-x-1 items-center justify-center rounded-full bg-[#082214]/80 text-[#D4A038] shadow-md hover:bg-[#082214] transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            {/* Conteúdo Dinâmico do Banner */}
            <div className="w-full px-4">
              
              {/* TIPO: TEXTO / MENSAGEM */}
              {currentMedia.type === 'text' && (
                <div className="animate-in fade-in">
                  <p className="font-serif text-xs leading-relaxed font-semibold text-stone-800 line-clamp-4">
                    {currentMedia.content}
                  </p>
                </div>
              )}

              {/* TIPO: ÁUDIO */}
              {currentMedia.type === 'audio' && (
                <div className="w-full rounded-2xl border border-emerald-900/40 bg-[#082214] p-3 text-white shadow-lg animate-in fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Mic className="h-3.5 w-3.5 text-[#D4A038]" />
                      <span className="text-[10px] font-medium text-stone-200">Audio Message</span>
                    </div>
                    <span className="rounded bg-[#123824] px-1.5 py-0.5 text-[9px] font-mono text-[#D4A038]">
                      {currentMedia.content}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B88E2C] text-stone-900 active:scale-95 transition-transform"
                    >
                      {isPlayingAudio ? (
                        <Pause className="h-3.5 w-3.5 fill-current" />
                      ) : (
                        <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div className="flex flex-1 items-center gap-0.5 h-4">
                      {[30, 60, 100, 70, 40, 80, 50, 90, 60, 40, 70, 30].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1 rounded-full ${i < 4 ? 'bg-[#D4A038]' : 'bg-emerald-800'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
{currentMedia.type === 'photo' && (
  <div className="relative mx-auto aspect-[16/10] w-full max-w-[260px] overflow-hidden rounded-xl border border-[#D4A038]/70 shadow-md animate-in fade-in">
    <img
      src={currentMedia.content}
      alt="Photo Message"
      className="h-full w-full object-cover"
    />
    
    {/* Ícone de Enquadramento no Canto Inferior Direito */}
    <div className="absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-md bg-[#082214]/80 text-[#D4A038] border border-[#D4A038]/50">
      <Maximize2 className="h-3 w-3" />
    </div>
  </div>
)}

              {/* TIPO: VÍDEO */}
              {currentMedia.type === 'video' && (
                <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-[#D4A038]/60 bg-black shadow-md animate-in fade-in flex items-center justify-center">
                  <img
                    src={currentMedia.content}
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A038] text-stone-900 shadow-lg">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </div>
                </div>
              )}

            </div>

            {/* Seta Direita (Apenas se tiver mais de 1 item) */}
            {mediaItems.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 z-10 flex h-7 w-7 translate-x-1 items-center justify-center rounded-full bg-[#082214]/80 text-[#D4A038] shadow-md hover:bg-[#082214] transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}

          </div>

          {/* Dots Indicadores do Banner */}
          {mediaItems.length > 1 && (
            <div className="flex items-center gap-1.5 -mt-1 mb-1">
              {mediaItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-4 bg-[#B88E2C]'
                      : 'w-1.5 bg-[#B88E2C]/30'
                  }`}
                  aria-label={`Ir para mídia ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Remetente */}
          <div className="mb-0.5 space-y-0.5">
            <p className="text-[10px] font-serif text-[#B88E2C] font-semibold">
              From:
            </p>
            <p className="font-serif text-xs sm:text-sm font-bold text-stone-800">
              {isAnonymous ? 'Someone Special 🤫' : fromName || 'Your Friend'}
            </p>
            <div className="pt-0.5 text-[#B88E2C]">
              <span className="text-[10px]">☘️</span>
            </div>
          </div>

        </div>

        {/* Botão de Trocar Template */}
        <div className="mt-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-700/60 bg-[#0E3A24] py-3.5 text-xs font-semibold text-emerald-100 hover:bg-[#144d31] transition-all active:scale-[0.99]"
          >
            <span>Change Greeting Card Template</span>
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}