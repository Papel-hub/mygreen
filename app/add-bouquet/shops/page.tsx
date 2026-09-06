'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Heart, Star, ChevronDown, Clock, Zap } from 'lucide-react';

const SHOPS = [
  {
    id: 1,
    name: 'Emerald Blooms',
    location: 'Dublin City & North',
    rating: 4.8,
    reviews: 12,
    delivery: 'Same Day . 2-4 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
  {
    id: 2,
    name: 'Emerald Blooms',
    location: 'Dublin City & North',
    rating: 4.8,
    reviews: 12,
    delivery: 'Same Day . 2-4 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
  {
    id: 3,
    name: 'Emerald Blooms',
    location: 'Dublin City & North',
    rating: 4.8,
    reviews: 12,
    delivery: 'Same Day . 2-4 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
  {
    id: 4,
    name: 'Emerald Blooms',
    location: 'Dublin City & North',
    rating: 4.8,
    reviews: 12,
    delivery: 'Same Day . 2-4 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
];

export default function ShopsPage() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

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
              href="/add-bouquet/location"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Flower Shops
            </h1>
            <div className="w-10" />
          </header>

          {/* Delivery Location Banner */}
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 p-3.5 backdrop-blur-sm">
            <div>
              <p className="text-[10px] text-stone-400">Delivering To</p>
              <div className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-[#B08D2A]">
                <MapPin className="h-3.5 w-3.5" />
                <span>Dublin</span>
                <ChevronDown className="h-3.5 w-3.5 text-stone-400" />
              </div>
            </div>
            <Link
              href="/add-bouquet/location"
              className="rounded-xl border border-[#B08D2A]/40 bg-[#082214] px-3 py-1.5 text-xs font-medium text-stone-200 transition-all hover:bg-[#0E351F]"
            >
              Change
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="no-scrollbar mb-5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <button className="flex items-center gap-1 rounded-full bg-[#B08D2A] px-3 py-1.5 font-semibold text-white shadow-sm transition-all hover:bg-[#967622]">
              Rating <ChevronDown className="h-3 w-3" />
            </button>
            <button className="whitespace-nowrap rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-3 py-1.5 text-stone-300 backdrop-blur-sm transition-all hover:bg-[#0E351F]">
              Delivery Time
            </button>
            <button className="whitespace-nowrap rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-3 py-1.5 text-stone-300 backdrop-blur-sm transition-all hover:bg-[#0E351F]">
              Express First
            </button>
          </div>

          {/* Shops Grid */}
          <div className="grid grid-cols-2 gap-3">
            {SHOPS.map((shop) => {
              const isFav = favorites.includes(shop.id);
              return (
                <div
                  key={shop.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 backdrop-blur-sm transition-all hover:border-[#B08D2A]/60"
                >
                  {/* Card Image */}
                  <div className="relative h-28 w-full">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 flex items-center gap-0.5 rounded-lg border border-[#B08D2A]/40 bg-[#061B10]/80 px-1.5 py-0.5 text-[9px] font-medium text-stone-200 backdrop-blur-md">
                      <Zap className="h-2.5 w-2.5 fill-[#B08D2A] text-[#B08D2A]" /> Express
                    </span>
                    <button
                      onClick={() => toggleFavorite(shop.id)}
                      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-[#B08D2A]/30 bg-[#061B10]/70 text-white backdrop-blur-md transition-all active:scale-90"
                      aria-label="Favorite shop"
                    >
                      <Heart
                        className={`h-3.5 w-3.5 ${
                          isFav ? 'fill-[#B08D2A] text-[#B08D2A]' : 'text-white'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-1 flex-col justify-between p-2.5">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="text-xs font-bold leading-tight text-stone-100">
                          {shop.name}
                        </h3>
                        <div className="flex items-center gap-0.5 text-[10px] font-semibold text-[#B08D2A]">
                          <Star className="h-3 w-3 fill-[#B08D2A]" />
                          <span>{shop.rating}</span>
                        </div>
                      </div>
                      <p className="mt-1 text-[10px] text-stone-400">
                        {shop.location} • ({shop.reviews} Reviews)
                      </p>
                    </div>

                    {/* Delivery Badge */}
                    <div className="mt-2.5 flex items-center gap-1.5 rounded-xl border border-[#B08D2A]/20 bg-[#061B10]/80 p-1.5 text-[9px] text-stone-300">
                      <Clock className="h-3 w-3 text-[#B08D2A]" />
                      <div>
                        <p className="font-medium text-stone-200">Est Delivery</p>
                        <p className="text-stone-400">{shop.delivery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95">
            Continue
          </button>
        </div>
      </main>
    </div>
  );
}