'use client';

import Link from 'next/link';
import { Cake, ArrowRight, ChevronRight, ShoppingBag } from 'lucide-react';

export type OrderStatus = 'Confirmed' | 'On Delivery' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  id: string;
  title: string;
  orderId: string;
  status: OrderStatus;
  href?: string;
  icon?: React.ReactNode;
}

interface RecentOrdersProps {
  orders?: OrderItem[];
  viewAllHref?: string;
}

// Mapeamento visual para cada status do pedido
const STATUS_STYLES: Record<OrderStatus, string> = {
  Confirmed: 'border-[#B08D2A] bg-[#B08D2A]/10 text-[#B08D2A]',
  'On Delivery': 'border-amber-500/70 bg-amber-500/10 text-amber-400',
  Delivered: 'border-emerald-500/70 bg-emerald-500/10 text-emerald-400',
  Cancelled: 'border-rose-500/70 bg-rose-500/10 text-rose-400',
};

const DEFAULT_ORDERS: OrderItem[] = [
  {
    id: '1',
    title: 'Birthday Greeting Card',
    orderId: '#MGD-92841',
    status: 'Confirmed',
    href: '/my-orders/MGD-92841',
  },
  {
    id: '2',
    title: 'Birthday Greeting Card',
    orderId: '#MGD-92842',
    status: 'On Delivery',
    href: '/my-orders/MGD-92842',
  },
];

export default function RecentOrders({
  orders = DEFAULT_ORDERS,
  viewAllHref = '/my-orders',
}: RecentOrdersProps) {
  return (
    <section className="my-5 w-full">
      {/* Header da Seção */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-stone-200">
          Recent Orders
        </h3>
        <Link
          href={viewAllHref}
          className="group flex items-center gap-1 rounded-sm text-xs font-medium text-stone-300 transition-colors hover:text-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
        >
          <span>View All</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Lista de Pedidos */}
      <div className="space-y-3">
        {orders.map((order) => {
          const itemHref = order.href || `/my-orders/${order.id}`;

          return (
            <Link
              key={order.id}
              href={itemHref}
              className="group flex cursor-pointer items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4 shadow-lg shadow-[#D4A038]/10 transition-all hover:border-[#B08D2A] hover:bg-[#103822] focus:outline-none focus:ring-2 focus:ring-[#B08D2A] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                {/* Ícone */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B08D2A]/70 text-[#B08D2A]">
                  {order.icon || <Cake className="h-5 w-5" />}
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-stone-100">
                    {order.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-light text-stone-400">
                    Order ID: {order.orderId}
                  </p>
                </div>
              </div>

              {/* Status & Seta Indicativa */}
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block rounded-lg border px-2.5 py-1 text-[10px] font-medium ${
                    STATUS_STYLES[order.status] || STATUS_STYLES.Confirmed
                  }`}
                >
                  {order.status}
                </span>
                <ChevronRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B08D2A]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}