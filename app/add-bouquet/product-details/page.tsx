'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  Play, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Minus, 
  Plus, 
  Flower2 
} from 'lucide-react';

const SIZES = [
  { id: 'standard', name: 'Standard', priceLabel: 'Included', price: 0 },
  { id: 'large', name: 'Large', priceLabel: '+€15', price: 15 },
  { id: 'grand', name: 'Grand', priceLabel: '+€30', price: 30 },
];

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('standard');
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 65;
  const currentSizeObj = SIZES.find((s) => s.id === selectedSize);
  const sizePrice = currentSizeObj ? currentSizeObj.price : 0;
  const expressPrice = expressDelivery ? 8 : 0;

  const totalPrice = ((basePrice + sizePrice + expressPrice) * quantity).toFixed(2);

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
              href="/add-bouquet/shop-details"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Flower Details
            </h1>
            <div className="w-10" />
          </header>

          {/* Media Player Container */}
          <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]">
            <img
              src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800"
              alt="Velvet Rose Romance"
              className="h-full w-full object-cover"
            />
            {/* Carousel Dots */}
            <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>

            {/* Watch Video Button */}
            <button className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-xl border border-[#B08D2A]/40 bg-[#061B10]/80 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md hover:bg-[#061B10]">
              <Play className="h-3 w-3 fill-white" /> Watch video
            </button>
          </div>

          {/* Title & Rating */}
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-100">Velvet Rose Romance</h2>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-stone-400">
                <span>Emerald Blooms</span>
                <span className="text-[#B08D2A]">★</span>
                <span className="font-medium text-[#B08D2A]">4.8</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-xs leading-relaxed text-stone-300">
            A luxurious arrangement of deep red roses, soft eucalyptus and delicate baby's breath — hand-tied in premium wrap.
          </p>

          {/* Ingredients/Tags */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px]">
            <span className="rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-3 py-1 text-stone-300 backdrop-blur-sm">
              🌹 Red roses
            </span>
            <span className="rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-3 py-1 text-stone-300 backdrop-blur-sm">
              🌿 Eucalyptus
            </span>
            <span className="rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-3 py-1 text-stone-300 backdrop-blur-sm">
              🤍 Baby's breath
            </span>
          </div>

          {/* Preparation Alert Box */}
          <div className="mb-6 flex items-start gap-2.5 rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3.5 text-xs text-stone-300 backdrop-blur-sm">
            <AlertTriangle className="h-4 w-4 shrink-0 text-[#B08D2A]" />
            <p className="text-[11px] leading-snug">
              This bouquet needs <strong className="text-white">3 hrs prep</strong>. Earliest delivery:{' '}
              <strong className="text-white">today 6 PM</strong>. Add express for priority dispatch.
            </p>
          </div>

          {/* Size Options */}
          <div className="mb-6 space-y-2.5">
            <label className="block text-xs font-semibold text-stone-200">Size</label>
            {SIZES.map((size) => {
              const isSelected = selectedSize === size.id;
              return (
                <div
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3.5 text-xs transition-all ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#0B2C1A] text-white shadow-sm'
                      : 'border-[#B08D2A]/30 bg-[#061B10]/80 text-stone-300 hover:border-[#B08D2A]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isSelected ? 'border-[#B08D2A]' : 'border-stone-500'
                      }`}
                    >
                      {isSelected && <div className="h-2 w-2 rounded-full bg-[#B08D2A]" />}
                    </div>
                    <span className="font-medium">{size.name}</span>
                  </div>
                  <span className="text-stone-400">{size.priceLabel}</span>
                </div>
              );
            })}

            {/* Express Delivery Option */}
            <div
              onClick={() => setExpressDelivery(!expressDelivery)}
              className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3.5 text-xs transition-all ${
                expressDelivery
                  ? 'border-[#B08D2A] bg-[#0B2C1A] text-white shadow-sm'
                  : 'border-[#B08D2A]/30 bg-[#061B10]/80 text-stone-300 hover:border-[#B08D2A]/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                    expressDelivery ? 'border-[#B08D2A]' : 'border-stone-500'
                  }`}
                >
                  {expressDelivery && <div className="h-2 w-2 rounded-full bg-[#B08D2A]" />}
                </div>
                <div>
                  <p className="font-medium text-stone-100">Express Delivery</p>
                  <p className="text-[10px] text-stone-400">Priority Same-Day . Dublin</p>
                </div>
              </div>
              <span className="text-stone-400">+€8</span>
            </div>
          </div>

          {/* Status Indicators Grid */}
          <div className="mb-6 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3.5 backdrop-blur-sm">
              <div>
                <p className="text-[10px] text-stone-400">Availability</p>
                <p className="mt-0.5 font-semibold text-emerald-400">• In Stock</p>
              </div>
              <TrendingUp className="h-4 w-4 text-[#B08D2A]" />
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3.5 backdrop-blur-sm">
              <div>
                <p className="text-[10px] text-stone-400">Prep Time</p>
                <p className="mt-0.5 font-semibold text-stone-200">3 Hours</p>
              </div>
              <Clock className="h-4 w-4 text-[#B08D2A]" />
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-4 py-3 backdrop-blur-sm">
            <span className="text-xs font-semibold text-stone-200">Quantity</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#B08D2A]/40 bg-[#082214] text-[#B08D2A] transition-all hover:bg-[#0E351F]"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-4 text-center text-xs font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#B08D2A]/40 bg-[#082214] text-[#B08D2A] transition-all hover:bg-[#0E351F]"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Fixed Action Area */}
        <div className="border-t border-[#B08D2A]/20 bg-[#082214] pt-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-stone-400">Total</span>
            <span className="font-bold text-[#B08D2A]">€{totalPrice}</span>
          </div>

          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95">
            <Flower2 className="h-4 w-4" />
            Add Bouquet To Card
          </button>
        </div>
      </main>
    </div>
  );
}