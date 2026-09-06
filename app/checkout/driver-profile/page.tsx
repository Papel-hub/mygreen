'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Ban, 
  Clock 
} from 'lucide-react';

const DRIVER_DATA = {
  name: 'Sean M.',
  rating: 4.9,
  deliveries: 340,
  completionRate: '98%',
  avgTime: '26m',
  offerPrice: '€12.00',
  transport: {
    type: 'Car',
    subtitle: 'Registered for transparency & safety',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=600',
  },
  reviews: [
    {
      id: '1',
      author: 'Wazeer abbasi',
      tag: 'Repeat Buyer',
      rating: 4.9,
      comment:
        'Excellent service from start to finish. The driver arrived exactly on time, handled the bouquet with great care, and was very polite throughout the delivery. Highly recommended time.',
    },
    {
      id: '2',
      author: 'Wazeer abbasi',
      tag: 'Repeat Buyer',
      rating: 4.9,
      comment:
        'Excellent service from start to finish. The driver arrived exactly on time, handled the bouquet with great care, and was very polite throughout the delivery.',
    },
  ],
};

export default function DriverProfilePage() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
              href="/checkout/choose-driver"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Driver Profile
            </h1>
            <div className="w-10" />
          </header>

          {/* Driver Identity */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#B08D2A] bg-[#0B2C1A] text-2xl shadow-md">
              👨‍💼
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-100">{DRIVER_DATA.name}</h2>
              <div className="mt-1 flex items-center gap-1.5 text-xs">
                <Star className="h-4 w-4 fill-[#B08D2A] text-[#B08D2A]" />
                <span className="font-bold text-[#B08D2A]">{DRIVER_DATA.rating}</span>
                <span className="text-stone-400">average rating</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3 text-center backdrop-blur-sm">
              <span className="text-base font-bold text-[#B08D2A]">{DRIVER_DATA.deliveries}</span>
              <span className="mt-1 text-[10px] text-stone-400">Deliveries</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3 text-center backdrop-blur-sm">
              <span className="text-base font-bold text-emerald-400">{DRIVER_DATA.completionRate}</span>
              <span className="mt-1 text-[10px] text-stone-400">Completion</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-3 text-center backdrop-blur-sm">
              <span className="text-base font-bold text-stone-100">{DRIVER_DATA.avgTime}</span>
              <span className="mt-1 text-[10px] text-stone-400">Avg time</span>
            </div>
          </div>

          {/* Layout Columns: Registered Transport & Recent Reviews */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Registered Transport Card */}
            <div>
              <h3 className="mb-2 text-xs font-semibold text-stone-300">
                Registered Transport
              </h3>
              <div className="flex flex-col justify-between rounded-2xl border border-[#B08D2A]/30 bg-[#061B10]/80 p-3.5 backdrop-blur-sm">
                <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl border border-[#B08D2A]/20 bg-[#082214]">
                  <img
                    src={DRIVER_DATA.transport.image}
                    alt={DRIVER_DATA.transport.type}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-100">
                      Type: {DRIVER_DATA.transport.type}
                    </h4>
                    <p className="mt-0.5 text-[10px] text-stone-400">
                      {DRIVER_DATA.transport.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#B08D2A]/40 bg-[#082214] text-[#B08D2A] transition-all hover:bg-[#0E351F]">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#B08D2A]/40 bg-[#082214] text-[#B08D2A] transition-all hover:bg-[#0E351F]">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews Column */}
            <div>
              <h3 className="mb-2 text-xs font-semibold text-stone-300">
                Recent Reviews
              </h3>
              <div className="space-y-3">
                {DRIVER_DATA.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-2xl border border-[#B08D2A]/30 bg-[#061B10]/80 p-3.5 backdrop-blur-sm"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#B08D2A]/30 bg-[#0B2C1A] text-xs">
                          👨
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-stone-100">{review.author}</h4>
                          <span className="inline-block rounded-full border border-[#B08D2A]/20 bg-[#082214] px-2 py-0.5 text-[8px] font-semibold text-emerald-400">
                            {review.tag}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 rounded-lg border border-[#B08D2A]/30 bg-[#082214] px-2 py-1 text-[10px] font-bold text-[#B08D2A]">
                        <Star className="h-3 w-3 fill-[#B08D2A] text-[#B08D2A]" />
                        <span>{review.rating}</span>
                      </div>
                    </div>

                    <p className="text-[11px] leading-relaxed text-stone-300 line-clamp-3">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 space-y-3 pt-4 border-t border-[#B08D2A]/20">
          {/* Main Accept Button */}
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95">
            <CheckCircle2 className="h-4 w-4" />
            Accept Offer — {DRIVER_DATA.offerPrice}
          </button>

          {/* Secondary Actions Row */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#C84B31] text-xs font-semibold text-white shadow-md transition-all hover:bg-[#A83D27] active:scale-95">
              <Ban className="h-4 w-4" />
              Decline
            </button>

            <button className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] text-xs font-semibold text-stone-200 transition-all hover:bg-[#0E351F] active:scale-95">
              <Clock className="h-4 w-4 text-[#B08D2A]" />
              Wait For More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}