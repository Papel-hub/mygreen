'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, MapPin, Truck, Zap, Clock } from 'lucide-react';

const CATEGORIES = ['Romantic', 'Elegant', 'Luxury', 'Welcome'];

const PRODUCTS = [
  {
    id: 1,
    name: 'Velvet Rose Romance',
    price: '€65.00',
    status: 'In Stock',
    prepTime: '3 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
  {
    id: 2,
    name: 'Velvet Rose Romance',
    price: '€65.00',
    status: 'In Stock',
    prepTime: '3 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
  {
    id: 3,
    name: 'Velvet Rose Romance',
    price: '€65.00',
    status: 'In Stock',
    prepTime: '3 hrs',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400',
  },
];

export default function ShopDetailPage() {
  const [selectedCategory, setSelectedCategory] = useState('Romantic');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(1);

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
              href="/add-bouquet/shops"
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

          {/* Banner Hero com Card Sobreposto */}
          <div className="relative mb-6 rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-2 backdrop-blur-sm">
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800"
                alt="Emerald Blooms Banner"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Info Card */}
            <div className="relative -mt-16 mx-auto w-[92%] rounded-2xl border border-[#B08D2A]/40 bg-[#061B10]/90 p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm font-bold text-stone-100">Emerald Blooms</h2>
                <div className="flex items-center gap-1 rounded-md border border-[#B08D2A]/40 bg-[#0B2C1A] px-1.5 py-0.5 text-[10px] font-semibold text-[#B08D2A]">
                  <Star className="h-3 w-3 fill-[#B08D2A]" />
                  <span>4.8</span>
                </div>
              </div>

              <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-400">
                <MapPin className="h-3 w-3 text-[#B08D2A]" />
                <span>Dublin City & North (212 Reviews)</span>
              </div>

              {/* Delivery Badges */}
              <div className="mt-3 flex items-center gap-2 text-[10px]">
                <span className="flex items-center gap-1 rounded-lg border border-[#B08D2A]/30 bg-[#0B2C1A] px-2.5 py-1 text-stone-300">
                  <Truck className="h-3 w-3 text-[#B08D2A]" /> Same Day
                </span>
                <span className="flex items-center gap-1 rounded-lg border border-[#B08D2A]/30 bg-[#0B2C1A] px-2.5 py-1 text-stone-300">
                  <Zap className="h-3 w-3 fill-[#B08D2A] text-[#B08D2A]" /> Express
                </span>
              </div>
            </div>
          </div>

          {/* Categorias / Tags */}
          <div className="no-scrollbar mb-5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-medium transition-all focus:outline-none ${
                    isActive
                      ? 'bg-[#B08D2A] text-white shadow-sm'
                      : 'border border-[#B08D2A]/30 bg-[#0B2C1A]/80 text-stone-300 backdrop-blur-sm hover:bg-[#0E351F]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Seção Coleção Premium */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-semibold text-stone-200">
              Premium Collection
            </h3>
            <button className="text-[11px] text-stone-400 hover:text-[#B08D2A]">
              See All
            </button>
          </div>

          {/* Lista de Produtos na Horizontal Card */}
          <div className="space-y-3">
            {PRODUCTS.map((prod) => {
              const isSelected = selectedProduct === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod.id)}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-2.5 transition-all ${
                    isSelected
                      ? 'border-[#B08D2A] bg-[#0B2C1A] shadow-sm'
                      : 'border-[#B08D2A]/30 bg-[#061B10]/80 hover:border-[#B08D2A]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-[#B08D2A]/30">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-stone-100">
                        {prod.name}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-[#B08D2A]">
                        {prod.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 text-[9px]">
                    <span className="rounded-md border border-[#B08D2A]/30 bg-[#0B2C1A] px-2 py-0.5 font-medium text-emerald-400">
                      {prod.status}
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <Clock className="h-2.5 w-2.5 text-[#B08D2A]" />
                      {prod.prepTime}
                    </span>
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