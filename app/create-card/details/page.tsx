'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, ArrowRight } from 'lucide-react';
import CardPreviewModal from './../components/CardPreviewModal';

const occasions = [
  { id: 'romantic', label: 'Romantic' },
  { id: 'friendship', label: 'Friendship' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'family', label: 'Family' },
  { id: 'luxury', label: 'Luxury Edition' },
];

export default function RecipientDetailsPage() {
  const router = useRouter();

  const [toName, setToName] = useState<string>('');
  const [fromName, setFromName] = useState<string>('');
  const [sendAnonymously, setSendAnonymously] = useState<boolean>(false);
  const [customTitle, setCustomTitle] = useState<string>('');
  
  // Estado de Abertura do Modal
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const getSelectedLabel = () => {
    return occasions.find((o) => o.id === selectedOccasion)?.label || 'Romantic';
  };
  const [selectedOccasion, setSelectedOccasion] = useState<string>('romantic');

  const handleContinue = () => {
    // Avançar para a etapa de mídia
    router.push(
      `/create-card/media?to=${encodeURIComponent(toName)}&from=${encodeURIComponent(
        fromName
      )}&anonymous=${sendAnonymously}`
    );
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-[#082214] text-white select-none overflow-x-hidden font-sans">
      
      {/* Background Texture / Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 bg-center bg-cover"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(15, 61, 46, 0.4) 0%, rgba(8, 34, 20, 1) 100%), url('/images/shamrock-pattern.png')`
        }}
      />
        {/* Header */}
        <header className="mb-8 flex w-full sm:px-12 items-center border-b 
        border-[#B08D2A]/30 bg-[#061B10]/95 px-4 py-4 backdrop-blur-md  justify-between">  
          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B08D2A]/50 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#123824] active:scale-95"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-sm font-semibold text-stone-100">
            Create Your Greeting Card
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#D4A038] font-bold">2</span> of 4
          </div>
        </header>

      <div className="relative px-8 z-10 mx-auto w-full max-w-6xl flex-1 pt-6 pb-28 sm:px-8">
        


        {/* Headline */}
        <div className="mb-6 sm:px-8 px-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A]">
            Recipient & Details
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300">
            Enter Your Recipient&apos;s Details To Personalize Your Greeting.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6 px-8 sm:px-16">
          
          {/* To Field */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-2">
            To
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3.5">
              <input
                type="text"
                value={toName}
                onChange={(e) => setToName(e.target.value)}
                placeholder="Recipient name"
                className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          {/* From Field */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-2">
            From
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3.5">
              <input
                type="text"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                disabled={sendAnonymously}
                placeholder="Your name"
                className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Send Anonymously Switch */}
          <div className="flex items-center justify-between rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
            <div>
              <p className="text-xs font-semibold text-white">
                Send Anonymously
              </p>
              <p className="text-[10px] text-stone-400 font-light mt-0.5">
                Hides your signature name
              </p>
            </div>

            {/* Custom Toggle */}
            <button
              type="button"
              onClick={() => setSendAnonymously(!sendAnonymously)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                sendAnonymously ? 'bg-[#D4A038]' : 'bg-stone-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  sendAnonymously ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        {/* Submit Button */}
        <button
          onClick={handleContinue}
          className="flex w-full items-center  justify-center gap-2 rounded-2xl
           bg-[#B88E2C] py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
        >
          <span>Continue To Media</span>
        </button>
        </div>



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