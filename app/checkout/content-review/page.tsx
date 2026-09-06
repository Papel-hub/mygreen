'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Check, 
  Loader2, 
  Bell 
} from 'lucide-react';

const REVIEW_ITEMS = [
  { id: 'message', label: 'Personal Message', status: 'completed' },
  { id: 'audio', label: 'Audio Recording', status: 'completed' },
  { id: 'video', label: 'Video Messages', status: 'completed' },
  { id: 'images', label: 'Checking Images', status: 'pending' },
];

export default function ContentReviewPage() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="relative flex min-h-dvh w-full select-none flex-col justify-between overflow-x-hidden bg-[#082214] font-sans text-white">
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

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-between px-4 py-6 sm:px-6">
        <div>
          {/* Header */}
          <header className="mb-6 flex items-center justify-between">
            <Link
              href="/checkout/delivery-method"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Content Review
            </h1>
            <span className="text-xs font-medium text-stone-300">
              Step <strong className="text-[#B08D2A]">1</strong> of 3
            </span>
          </header>

          {/* Banner de Sucesso da Submissão */}
          <div className="mb-6 flex flex-col items-center justify-center rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 p-6 text-center backdrop-blur-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B08D2A]/40 bg-[#082214] text-[#B08D2A]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-base font-bold text-stone-100 sm:text-lg">
              Submitted Successfully
            </h2>
            <p className="mt-1 max-w-xs text-xs text-stone-300">
              Your Greeting Card Has Been Submitted And Is Currently Being Reviewed.
            </p>
          </div>

          {/* Subtítulo da Lista */}
          <p className="mb-3 text-xs font-medium text-[#B08D2A]">
            Released after approval
          </p>

          {/* Card da Lista de Verificação */}
          <div className="mb-6 rounded-2xl border border-[#B08D2A]/30 bg-[#061B10]/80 p-4 space-y-4 backdrop-blur-sm">
            {REVIEW_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-[#B08D2A]/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-xs font-medium text-stone-200">
                  {item.label}
                </span>

                {item.status === 'completed' ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B08D2A] text-[#082214]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#B08D2A]/60 bg-transparent text-[#B08D2A]">
                    <Loader2 className="h-3 w-3 animate-spin" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mensagem Informativa */}
          <div className="mb-6 border-l-2 border-[#B08D2A] pl-3.5 py-1">
            <p className="text-xs leading-relaxed text-stone-300">
              You don't need to do anything else. Your card will be delivered automatically once the review is complete.
            </p>
          </div>

          {/* Status Animated Dots */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-300">
            <span>Reviewing</span>
            <span className="flex gap-1 text-[#B08D2A]">
              <span className="animate-pulse">.</span>
              <span className="animate-pulse delay-150">.</span>
              <span className="animate-pulse delay-300">.</span>
            </span>
          </div>
        </div>

        {/* Footer Fixed Action Area */}
        <div className="pt-6">
          <button
            onClick={() => setNotified(!notified)}
            className={`flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95 ${
              notified
                ? 'border border-[#B08D2A] bg-[#0B2C1A] text-[#B08D2A]'
                : 'bg-[#B08D2A] text-white shadow-lg hover:bg-[#967622]'
            }`}
          >
            <Bell className="h-4 w-4" />
            {notified ? 'Notification Enabled' : 'Notify Me When Ready'}
          </button>
        </div>
      </main>
    </div>
  );
}