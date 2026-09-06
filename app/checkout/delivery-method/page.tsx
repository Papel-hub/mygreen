'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Link2, 
  MessageSquare, 
  PhoneCall, 
  Store, 
  MapPin, 
  Truck, 
  Package, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const DIGITAL_OPTIONS = [
  {
    id: 'email',
    title: 'Email',
    subtitle: 'Sent To Their Inbox',
    icon: Mail,
  },
  {
    id: 'secure-link',
    title: 'Secure Link',
    subtitle: 'Share A Private Link',
    icon: Link2,
  },
  {
    id: 'sms',
    title: 'SMS',
    subtitle: 'Sent By Text Message',
    icon: MessageSquare,
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    subtitle: 'Send Securely Via WhatsApp.',
    icon: PhoneCall,
  },
];

const PHYSICAL_OPTIONS = [
  {
    id: 'partner-florist',
    title: 'Partner Florist',
    subtitle: 'Collect From A Partner Florist.',
    icon: Store,
  },
  {
    id: 'meet-point',
    title: 'Meet Point / Pickup Point',
    subtitle: 'Collect From A Pickup Point.',
    icon: MapPin,
  },
  {
    id: 'partner-driver',
    title: 'Partner Driver Delivery',
    subtitle: 'Delivered By A Partner Driver.',
    icon: Truck,
  },
  {
    id: 'an-post',
    title: 'An Post',
    subtitle: 'Delivered Via An Post.',
    icon: Package,
  },
];

export default function DeliveryMethodPage() {
  const [selectedDigital, setSelectedDigital] = useState<string>('secure-link');
  const [selectedPhysical, setSelectedPhysical] = useState<string>('meet-point');

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
              href="/add-bouquet/packaging"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] focus:outline-none focus:ring-2 focus:ring-[#B08D2A]"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-base font-semibold text-stone-100 sm:text-lg">
              Delivery Method
            </h1>
            <span className="text-xs font-medium text-stone-300">
              Step <strong className="text-[#B08D2A]">1</strong> of 3
            </span>
          </header>

          {/* Titles */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#B08D2A] sm:text-2xl">
              How should we deliver?
            </h2>
            <p className="mt-1 text-xs text-stone-300">
              Options Depend On Your Card Type —{' '}
              <span className="font-semibold text-emerald-400">Digital + Physical.</span>
            </p>
          </div>

          {/* Digital Delivery Section */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-stone-200">
              Digital Delivery
            </h3>
            <div className="space-y-2.5">
              {DIGITAL_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedDigital === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedDigital(option.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3.5 transition-all ${
                      isSelected
                        ? 'border-[#B08D2A] bg-[#0B2C1A] text-white shadow-sm ring-1 ring-[#B08D2A]'
                        : 'border-[#B08D2A]/30 bg-[#061B10]/80 text-stone-300 backdrop-blur-sm hover:border-[#B08D2A]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                          isSelected
                            ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                            : 'border-[#B08D2A]/30 bg-[#0B2C1A] text-stone-400'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold leading-tight text-stone-100">
                          {option.title}
                        </h4>
                        <p className="mt-0.5 text-[10px] text-stone-400">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 fill-[#B08D2A] text-[#082214]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Physical & Printed Delivery Section */}
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-stone-200">
              Physical & Printed Delivery
            </h3>
            <div className="space-y-2.5">
              {PHYSICAL_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedPhysical === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedPhysical(option.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3.5 transition-all ${
                      isSelected
                        ? 'border-[#B08D2A] bg-[#0B2C1A] text-white shadow-sm ring-1 ring-[#B08D2A]'
                        : 'border-[#B08D2A]/30 bg-[#061B10]/80 text-stone-300 backdrop-blur-sm hover:border-[#B08D2A]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                          isSelected
                            ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                            : 'border-[#B08D2A]/30 bg-[#0B2C1A] text-stone-400'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold leading-tight text-stone-100">
                          {option.title}
                        </h4>
                        <p className="mt-0.5 text-[10px] text-stone-400">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 fill-[#B08D2A] text-[#082214]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Fixed Action Area */}
        <div className="pt-6">
          <Link
            href="/checkout/content-review"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#967622] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] focus:ring-offset-2 focus:ring-offset-[#082214] active:scale-95"
          >
            Continue → Content Review
          </Link>
        </div>
      </main>
    </div>
  );
}