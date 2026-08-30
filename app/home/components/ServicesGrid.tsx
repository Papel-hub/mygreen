'use client';

import Link from 'next/link';
import { Gift, Calendar, Mail, Layers, ChevronRight, Send } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Gift className="h-5 w-5" />,
    title: 'Gift Cards',
    subtitle: 'NFC & Digital Cards.',
    href: '/gift-cards',
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: 'Important Dates',
    subtitle: 'NFC & Digital Cards.',
    href: '/important-dates',
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Scheduled Cards',
    subtitle: 'Manage Deliveries',
    href: '/scheduled-cards',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'My Orders',
    subtitle: 'Track Deliveries & History.',
    href: '/my-orders',
  },
];

const FEATURED_SERVICE: ServiceItem = {
  icon: <Send className="h-5 w-5" />,
  title: 'Custom Express Delivery',
  subtitle: 'Send instant personalized cards to recipients',
  href: '/express-delivery',
};

function ServiceCard({ icon, title, subtitle, href }: ServiceItem) {
  return (
    <Link
      href={href}
      className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4 shadow-lg shadow-[#D4A038]/10 transition-all hover:border-[#B08D2A] hover:bg-[#103822] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] active:scale-[0.98]"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="text-[#B08D2A]">{icon}</div>
        <ChevronRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B08D2A]" />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-stone-100">{title}</h4>
        <p className="mt-0.5 text-[11px] font-light text-stone-300">{subtitle}</p>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="my-4 w-full">
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-stone-200">
        Services & Tools
      </h3>

      {/* Grid 2x2 com os cards de navegação */}
      <div className="mb-3 grid grid-cols-2 gap-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>

      {/* Card Retangular Inferior de Destaque */}
      <Link
        href={FEATURED_SERVICE.href}
        className="group flex cursor-pointer items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] px-4 py-3.5 shadow-lg shadow-[#D4A038]/10 transition-all hover:border-[#B08D2A] hover:bg-[#103822] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#B08D2A]">{FEATURED_SERVICE.icon}</div>
          <div>
            <h4 className="text-sm font-semibold text-stone-100">
              {FEATURED_SERVICE.title}
            </h4>
            <p className="text-[11px] font-light text-stone-300">
              {FEATURED_SERVICE.subtitle}
            </p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B08D2A]" />
      </Link>
    </section>
  );
}