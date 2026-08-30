'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Mail, 
  Link2, 
  MessageSquare, 
  MessageCircle, 
  Lock, 
  QrCode, 
  CheckCircle2 
} from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
interface DeliveryOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const deliveryOptions: DeliveryOption[] = [
  { id: 'email', title: 'Email', description: 'Sent To Their Inbox', icon: Mail },
  { id: 'secure-link', title: 'Secure Link', description: 'Share A Private Link', icon: Link2 },
  { id: 'sms', title: 'SMS', description: 'Sent By Text Message', icon: MessageSquare },
  { id: 'whatsapp', title: 'WhatsApp', description: 'Send Securely Via WhatsApp.', icon: MessageCircle },
  { id: 'facebook', title: 'Facebook Messenger', description: 'Send Via Messenger.', icon: FaFacebook },
  { id: 'instagram', title: 'Instagram', description: 'Share Privately.', icon: FaInstagram },
  { id: 'private-link', title: 'Private Link', description: 'Generate A Secure Link.', icon: Lock },
  { id: 'qr-code', title: 'QR Code', description: 'Share Using A QR Code.', icon: QrCode },
];

export default function ChooseDeliveryStep() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string>('secure-link');

  const handleContinue = () => {
    router.push(`/delivery/step-2?method=${selectedMethod}`);
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Background Texture Overlay */}
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

      <div className="relative z-10 flex-1 w-full max-w-xl mx-auto px-4 sm:px-6 pt-6 pb-28 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-sm sm:text-base font-medium text-stone-100">
            Choose Delivery
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#B08D2A] font-bold">1</span> of 3
          </div>
        </header>

        {/* Título e Seção */}
        <div className="mb-4">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#B08D2A] leading-tight">
            How should we deliver?
          </h2>
          <p className="mt-0.5 text-xs text-stone-300 font-normal">
            Choose How You&apos;d Like To Deliver Your Greeting Card.
          </p>
          <span className="inline-block mt-3 text-xs font-semibold text-stone-300">
            Digital Delivery
          </span>
        </div>

        {/* Lista de Métodos de Entrega */}
        <div className="space-y-2.5">
          {deliveryOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedMethod === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedMethod(option.id)}
                className={`group relative flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-[#B08D2A] bg-[#0E3821]/90 shadow-lg shadow-amber-950/20 ring-1 ring-[#B08D2A]/50'
                    : 'border-[#B08D2A]/25 bg-[#0B2C1A]/80 hover:border-[#B08D2A]/50 hover:bg-[#0D331E]/90'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                    isSelected 
                      ? 'border-[#B08D2A]/60 bg-[#124227] text-[#B08D2A]' 
                      : 'border-[#B08D2A]/20 bg-[#082214] text-stone-400 group-hover:text-stone-200'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isSelected ? 'text-[#B08D2A]' : 'text-stone-100'
                    }`}>
                      {option.title}
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      {option.description}
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <CheckCircle2 className="h-5 w-5 text-[#B08D2A] fill-[#B08D2A]/20 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer com Botão Continue */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
        <div className="w-full max-w-xl">
          <button
            type="button"
            onClick={handleContinue}
            className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
          >
            Continue
          </button>
        </div>
      </footer>
    </main>
  );
}