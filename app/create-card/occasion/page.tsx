'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Pencil, Eye } from 'lucide-react';
import Image from 'next/image';
import CardPreviewModal from '../components/CardPreviewModal';

const occasions = [
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
  
  // Estado de Abertura do Modal
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/create-card/customize');
  };

  const getSelectedLabel = () => {
    return occasions.find((o) => o.id === selectedOccasion)?.label || 'Romantic';
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Background Texture */}
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

      {/* Main Content */}
      <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28">
        <header className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
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

        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A]">
            Select Occasion
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300">
            Choose The Emotional Theme For Your Personalized Greeting Card
          </p>
        </div>

        <form onSubmit={handleContinue} className="space-y-6">
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
                  <Heart className={`h-4 w-4 ${isSelected ? 'text-[#B08D2A] fill-[#B08D2A]' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-300 mb-2">Custom Title</label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3.5">
              <input
                type="text"
                placeholder="e.g. To My Beautiful Wife ❤️"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
              />
              <Pencil className="h-4 w-4 text-[#B08D2A] shrink-0 ml-2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24]"
          >
            Continue To Customize &rarr;
          </button>
        </form>
      </div>

      {/* Rodapé Fixo - Abre o Modal ao Clicar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-[#061B10]/90 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
        <div className="w-full max-w-sm">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0B2C1A] border border-[#B08D2A]/60 py-3 text-center text-xs font-medium text-stone-200 transition-all hover:bg-[#0E351F]"
          >
            <span>Preview</span>
            <Eye className="h-4 w-4 text-[#B08D2A]" />
          </button>
        </div>
      </footer>

      {/* COMPONENTE MODAL DE PREVIEW */}
      <CardPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        cardImageSrc="/images/card-template.svg" // Insira aqui o caminho real do seu arquivo SVG
        title={customTitle || 'My Green Diamond'}
        occasion={getSelectedLabel()}
        onChangeTemplate={() => alert('Change Template Clicked')}
      />

    </main>
  );
}