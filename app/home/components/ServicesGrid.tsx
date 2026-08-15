'use client';

import { Gift, Calendar, Mail, Layers, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function ServiceCard({ icon, title, subtitle, onClick }: ServiceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group flex cursor-pointer shadow-lg shadow-[#D4A038]/10 flex-col justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4 transition-all hover:border-[#B08D2A] hover:bg-[#103822] active:scale-[0.98]"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-[#B08D2A]">{icon}</div>
        <ChevronRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B08D2A]" />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-stone-100">{title}</h4>
        <p className="mt-0.5 text-[11px] text-stone-300 font-light">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="my-4 w-full">
      <h3 className="mb-3 text-sm font-semibold text-stone-200 tracking-wide">
        Services & Tools
      </h3>

      {/* Grid 2x2 para os 4 primeiros cards */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <ServiceCard
          icon={<Gift className="h-5 w-5" />}
          title="Gift Cards"
          subtitle="NFC & Digital Cards."
        />
        <ServiceCard
          icon={<Calendar className="h-5 w-5" />}
          title="Important Dates"
          subtitle="NFC & Digital Cards."
        />
        <ServiceCard
          icon={<Mail className="h-5 w-5" />}
          title="Scheduled Cards"
          subtitle="Manage Deliveries"
        />
        <ServiceCard
          icon={<Layers className="h-5 w-5" />}
          title="My Orders"
          subtitle="Track Deliveries & History."
        />
      </div>

      {/* Card Retangular Estendido na Parte Inferior */}
      <div className="group flex cursor-pointer shadow-lg shadow-[#D4A038]/10 items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] px-4 py-3.5 transition-all hover:border-[#B08D2A] hover:bg-[#103822] active:scale-[0.98]">
        <div className="flex items-center gap-3">
          <div className="text-[#B08D2A]">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-100">Scheduled Cards</h4>
            <p className="text-[11px] text-stone-300 font-light">Manage Deliveries</p>
          </div>
        </div>
      </div>
    </section>
  );
}