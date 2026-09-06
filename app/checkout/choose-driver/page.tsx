'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  RotateCcw, 
  Star, 
  Clock, 
  Bike, 
  XCircle 
} from 'lucide-react';

interface Driver {
  id: string;
  name: string;
  rating: number;
  deliveries: number;
  price: string;
  vehicleType: string;
  vehicleImage?: string;
  estPickup: string;
  available: boolean;
}

const DRIVERS_DATA: Driver[] = [
  {
    id: '1',
    name: 'Liam B.',
    rating: 4.7,
    deliveries: 158,
    price: '€7.00',
    vehicleType: 'Bicycle',
    estPickup: '~20 min',
    available: false,
  },
  {
    id: '2',
    name: 'Aoife K.',
    rating: 4.8,
    deliveries: 210,
    price: '€9.50',
    vehicleType: 'Bike',
    vehicleImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400',
    estPickup: '~10 min',
    available: true,
  },
];

const FILTERS = [
  { id: 'lowest', label: 'Lowest Price' },
  { id: 'rating', label: 'Highest Rating' },
  { id: 'deliveries', label: 'Most Deliveries' },
  { id: 'fastest', label: 'Fastest' },
];

export default function ChooseDriverPage() {
  const [activeFilter, setActiveFilter] = useState('lowest');
  const [drivers, setDrivers] = useState<Driver[]>(DRIVERS_DATA);

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

      <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col justify-between px-4 py-6 sm:px-6">
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
              Choose A Driver
            </h1>
            <div className="w-10" />
          </header>

          {/* Titles */}
          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#B08D2A] sm:text-2xl">
              Drivers near you
            </h2>
            <p className="mt-1 text-xs text-stone-300">
              Compare Offers And Pick The One That Suits You.
            </p>
          </div>

          {/* Offers Status Bar */}
          <div className="mb-5 flex items-center justify-between rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 px-4 py-3 backdrop-blur-sm">
            <span className="text-xs font-medium text-stone-200">
              All offers in · <strong className="text-white">4 drivers</strong>
            </span>
            <button
              onClick={() => {}}
              className="flex items-center gap-1.5 rounded-xl border border-[#B08D2A]/40 bg-[#082214] px-3 py-1.5 text-[11px] font-semibold text-[#B08D2A] transition-all hover:bg-[#0E351F]"
            >
              <RotateCcw className="h-3 w-3" /> Replay
            </button>
          </div>

          {/* Filter Pills */}
          <div className="mb-6 flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex-1 min-w-[100px] rounded-2xl border px-3 py-2.5 text-[11px] font-semibold transition-all ${
                    isActive
                      ? 'border-[#B08D2A] bg-[#B08D2A] text-white shadow-md'
                      : 'border-[#B08D2A]/30 bg-[#061B10]/80 text-stone-300 hover:border-[#B08D2A]/60'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Driver Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className={`flex flex-col justify-between rounded-2xl border p-4 transition-all ${
                  driver.available
                    ? 'border-[#B08D2A]/50 bg-[#0B2C1A]/90 shadow-lg'
                    : 'border-[#B08D2A]/20 bg-[#061B10]/60 opacity-80'
                }`}
              >
                <div>
                  {/* Top: Avatar, Info & Price */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C182A] border border-[#B08D2A]/30 text-base">
                        👨‍🦰
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-stone-100">{driver.name}</h3>
                        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-stone-400">
                          <Star className="h-3 w-3 fill-[#B08D2A] text-[#B08D2A]" />
                          <span className="font-bold text-white">{driver.rating}</span>
                          <span>({driver.deliveries} deliveries)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#B08D2A]">{driver.price}</span>
                      <p className="text-[9px] text-stone-400">offered</p>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="mb-4 flex items-center gap-3 rounded-xl border border-[#B08D2A]/20 bg-[#082214]/60 p-2.5">
                    {driver.vehicleImage ? (
                      <div className="relative h-10 w-12 overflow-hidden rounded-lg">
                        <img
                          src={driver.vehicleImage}
                          alt={driver.vehicleType}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-[#0D3821] text-[#B08D2A]">
                        <Bike className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <p className="text-[11px] font-semibold text-emerald-400">
                        {driver.vehicleType}
                      </p>
                      <p className="flex items-center gap-1 text-[10px] text-stone-300">
                        <Clock className="h-2.5 w-2.5 text-[#B08D2A]" /> Est. pickup {driver.estPickup}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                {driver.available ? (
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded-xl border border-[#B08D2A]/40 bg-[#082214] py-2 text-[11px] font-semibold text-stone-200 hover:bg-[#0E351F]">
                      View Profile
                    </button>
                    <button className="rounded-xl bg-[#B08D2A] py-2 text-[11px] font-semibold text-white hover:bg-[#967622]">
                      Accept
                    </button>
                  </div>
                ) : (
                  <button
                    disabled
                    className="w-full rounded-xl border border-[#B08D2A]/20 bg-[#082214]/40 py-2.5 text-[11px] font-medium text-stone-400"
                  >
                    No longer available
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Decline Area */}
        <div className="mt-8 pt-4 text-center">
          <p className="mb-3 text-[11px] text-stone-300">
            Waiting For More? You'll Be Notified As Offers Arrive.
          </p>
          <button className="w-full rounded-2xl bg-[#C84B31] py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#A83D27] active:scale-95">
            Decline All & Choose Another Method
          </button>
        </div>
      </main>
    </div>
  );
}