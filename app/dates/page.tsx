// app/dates/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import DateItem from '@/app/dates/components/DateItem';
import AddContactButton from '@/app/dates/components/AddContactButton';

// Dados mockados — depois substitua por dados do Firebase/API
const importantDates = [
  {
    id: 1,
    name: 'Emma',
    eventType: 'Birthday',
    date: '12 May',
    daysLeft: 3,
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'John',
    eventType: 'Birthday',
    date: '24 June',
    daysLeft: 46,
    imageUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Mom',
    eventType: 'Birthday',
    date: '10 July',
    daysLeft: 62,
    imageUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Sophie',
    eventType: 'Birthday',
    date: '18 August',
    daysLeft: 101,
    imageUrl: 'https://i.pravatar.cc/150?img=4',
  },
];

export default function ImportantDatesPage() {
  return (
    <div className="min-h-screen bg-white pb-20"> {/* pb-20 para não cobrir com footer */}
      
      {/* Header Verde */}
      <Header title="Important Dates" backTo="/home" />

      {/* Lista de Datas */}
      <main className="p-4 max-w-2xl mx-auto mt-6 space-y-6">
        {importantDates.map((item) => (
          <DateItem key={item.id} {...item} />
        ))}
      </main>

      {/* Botão Adicionar Contato */}
      <AddContactButton />

    </div>
  );
}