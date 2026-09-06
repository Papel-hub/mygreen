'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Search, MapPin } from 'lucide-react';

const COUNTIES = [
  { name: 'Dublin', shops: 12 },
  { name: 'Cork', shops: 12 },
  { name: 'Galway', shops: 12 },
  { name: 'Limerick', shops: 12 },
  { name: 'Waterford', shops: 12 },
  { name: 'Kilkenny', shops: 12 },
];

export default function LocationPage() {
  const [selectedCounty, setSelectedCounty] = useState<string | null>('Dublin');
  const [search, setSearch] = useState('');

  const filteredCounties = COUNTIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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
              href="/bouquets"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Add Bouquet
            </h1>
            <div className="w-10" />
          </header>

          {/* Titles */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#B08D2A] sm:text-2xl">
              Where should we deliver?
            </h2>
            <p className="mt-1 text-xs text-stone-300">
              Select The Recipient's County To See Local Flower Shops.
            </p>
          </div>

          <p className="mb-3 text-xs font-medium text-stone-300">Digital Delivery</p>

          {/* Search Bar */}
          <div className="relative mb-5">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search county..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 py-3 pl-10 pr-4 text-xs text-white placeholder-stone-400 backdrop-blur-sm transition-all focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
            />
          </div>

          {/* County List */}
          <div className="space-y-3">
            {filteredCounties.map((county) => {
              const isSelected = selectedCounty === county.name;
              return (
                <button
                  key={county.name}
                  onClick={() => setSelectedCounty(county.name)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D2A] ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#0B2C1A] text-[#B08D2A] shadow-sm'
                      : 'border-[#B08D2A]/20 bg-[#061B10]/80 text-stone-300 hover:bg-[#0B2C1A]/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`h-4 w-4 ${isSelected ? 'text-[#B08D2A]' : 'text-stone-400'}`} />
                    <span>{county.name}</span>
                  </div>
                  <span className="text-[11px] text-stone-400">{county.shops} shops</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link
            href="/add-bouquet/shops"
            className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95"
          >
            Continue
          </Link>
        </div>
      </main>
    </div>
  );
}