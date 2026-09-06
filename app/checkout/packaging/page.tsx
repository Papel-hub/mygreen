'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, PackageCheck } from 'lucide-react';

const PACKAGING_OPTIONS = [
  {
    id: 'none',
    title: 'No Packaging',
    subtitle: 'Standard envelope',
    badge: 'Free',
    price: 0,
    isPremium: false,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600',
  },
  {
    id: 'premium',
    title: 'Premium Packaging',
    subtitle: 'Luxury gift box with ribbon',
    badge: '+€9.99',
    price: 9.99,
    isPremium: true,
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd45d1?q=80&w=600',
  },
];

export default function PackagingPage() {
  const [selectedOption, setSelectedOption] = useState<string>('premium');

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
              href="/add-bouquet/product-details"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Packaging
            </h1>
            <div className="w-10" />
          </header>

          {/* Titles */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#B08D2A] sm:text-2xl">
              Choose your packaging
            </h2>
            <p className="mt-1 text-xs text-stone-300">
              How Would You Like The Physical Card Delivered?
            </p>
          </div>

          {/* Cards Options Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {PACKAGING_OPTIONS.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-2.5 transition-all ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#0B2C1A] shadow-lg ring-1 ring-[#B08D2A]'
                      : 'border-[#B08D2A]/30 bg-[#061B10]/80 backdrop-blur-sm hover:border-[#B08D2A]/60'
                  }`}
                >
                  {/* Option Image Container */}
                  <div className="relative h-28 w-full overflow-hidden rounded-xl">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Premium Tag on Top-Left */}
                    {option.isPremium && (
                      <span className="absolute left-2 top-2 rounded-md border border-[#B08D2A]/40 bg-[#061B10]/80 px-2 py-0.5 text-[9px] font-bold text-[#B08D2A] backdrop-blur-md">
                        PREMIUM
                      </span>
                    )}
                  </div>

                  {/* Card Content Footer */}
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <h3 className="text-xs font-bold leading-tight text-stone-100">
                        {option.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] text-stone-400">
                        {option.subtitle}
                      </p>
                    </div>

                    {/* Price / Badge */}
                    <span
                      className={`shrink-0 rounded-lg border px-2 py-1 text-[10px] font-semibold ${
                        isSelected
                          ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                          : 'border-[#B08D2A]/20 bg-[#0B2C1A] text-stone-300'
                      }`}
                    >
                      {option.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link
            href="/checkout/summary"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95"
          >
            <PackageCheck className="h-4 w-4" />
            Continue
          </Link>
        </div>
      </main>
    </div>
  );
}