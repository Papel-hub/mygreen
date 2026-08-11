'use client';

import { Cake, ArrowRight } from 'lucide-react';

interface OrderItem {
  id: string;
  title: string;
  orderId: string;
  status: 'Confirmed' | 'On Delivery' | 'Delivered';
}

const orders: OrderItem[] = [
  {
    id: '1',
    title: 'Birthday Greeting Card',
    orderId: '#MGD-92841',
    status: 'Confirmed',
  },
  {
    id: '2',
    title: 'Birthday Greeting Card',
    orderId: '#MGD-92841',
    status: 'On Delivery',
  },
];

export default function RecentOrders() {
  return (
    <section className="my-5 w-full">
      {/* Header da Seção */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-stone-200 tracking-wide">
          Recent Orders
        </h3>
        <button className="flex items-center gap-1 text-xs font-medium text-stone-300 hover:text-[#B08D2A] transition-colors">
          <span>View All</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Lista de Pedidos */}
      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] p-4 transition-all hover:border-[#B08D2A] hover:bg-[#103822] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              {/* Ícone */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B08D2A]/70 text-[#B08D2A]">
                <Cake className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-stone-100">
                  {order.title}
                </h4>
                <p className="text-[11px] text-stone-400 font-light mt-0.5">
                  Order ID: {order.orderId}
                </p>
              </div>
            </div>

            {/* Badge de Status */}
            <div>
              <span
                className={`inline-block rounded-lg px-2.5 py-1 text-[10px] font-medium border ${
                  order.status === 'Confirmed'
                    ? 'border-[#B08D2A] bg-[#B08D2A]/10 text-[#B08D2A]'
                    : 'border-[#B08D2A]/70 bg-emerald-500/10 text-emerald-400'
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}