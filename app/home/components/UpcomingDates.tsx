'use client';

import { Cake, ArrowRight } from 'lucide-react';

export default function UpcomingDates() {
  return (
    <section className="my-4 w-full">
      {/* Cabeçalho da Seção com Link "View All" */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-stone-200 tracking-wide">
          Upcoming Dates
        </h3>
        <button className="flex items-center gap-1 text-xs font-medium text-stone-300 hover:text-[#B08D2A] transition-colors">
          <span>View All</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Card de Evento Próximo */}
      <div className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4">
        <div className="flex items-center gap-3">
          {/* Ícone de Bolo / Aniversário */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B08D2A]] text-[#B08D2A]">
            <Cake className="h-5 w-5" />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-stone-100">
              Emma&apos;s Birthday
            </h4>
            <p className="text-[11px] text-stone-300 font-light">
              Greeting Card Delivery Set
            </p>
          </div>
        </div>

        {/* Data & Contagem */}
        <div className="text-right">
          <span className="block text-xs font-semibold text-[#B08D2A]">
            15 June
          </span>
          <span className="text-[10px] text-stone-300 font-light">
            In 11 Days
          </span>
        </div>
      </div>
    </section>
  );
}