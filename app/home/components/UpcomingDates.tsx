'use client';

import Link from 'next/link';
import { Cake, ArrowRight, ChevronRight, Calendar } from 'lucide-react';

export interface UpcomingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  daysRemaining: string;
  href: string;
  icon?: React.ReactNode;
}

interface UpcomingDatesProps {
  events?: UpcomingEvent[];
  viewAllHref?: string;
}

// Dados de fallback/exemplo caso nenhuma prop seja passada
const DEFAULT_EVENTS: UpcomingEvent[] = [
  {
    id: '1',
    title: "Emma's Birthday",
    subtitle: 'Greeting Card Delivery Set',
    date: '15 June',
    daysRemaining: 'In 11 Days',
    href: '/important-dates/emmas-birthday',
    icon: <Cake className="h-5 w-5" />,
  },
];

export default function UpcomingDates({
  events = DEFAULT_EVENTS,
  viewAllHref = '/important-dates',
}: UpcomingDatesProps) {
  return (
    <section className="my-4 w-full">
      {/* Cabeçalho da Seção com Link "View All" */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-stone-200">
          Upcoming Dates
        </h3>
        <Link
          href={viewAllHref}
          className="group flex items-center gap-1 text-xs font-medium text-stone-300 transition-colors hover:text-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A] rounded-sm"
        >
          <span>View All</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Lista/Cards de Eventos Próximos */}
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <Link
            key={event.id}
            href={event.href}
            className="group flex cursor-pointer items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4 shadow-lg shadow-[#D4A038]/10 transition-all hover:border-[#B08D2A] hover:bg-[#103822] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              {/* Ícone do Evento */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B08D2A] text-[#B08D2A]">
                {event.icon || <Calendar className="h-5 w-5" />}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-stone-100">
                  {event.title}
                </h4>
                <p className="text-[11px] font-light text-stone-300">
                  {event.subtitle}
                </p>
              </div>
            </div>

            {/* Data, Contagem & Seta Indicativa */}
            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="block text-xs font-semibold text-[#B08D2A]">
                  {event.date}
                </span>
                <span className="text-[10px] font-light text-stone-300">
                  {event.daysRemaining}
                </span>
              </div>
              <ChevronRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B08D2A]" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}