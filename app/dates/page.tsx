// app/dates/page.tsx
'use client';

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
      <header className="bg-green-700 text-white px-4 py-4 flex justify-between items-center sticky top-0 z-40">
        <button aria-label="Back" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Important Dates</h1>
        <button aria-label="Add new date" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </header>

      {/* Lista de Datas */}
      <main className="mt-2">
        {importantDates.map((item) => (
          <DateItem key={item.id} {...item} />
        ))}
      </main>

      {/* Botão Adicionar Contato */}
      <AddContactButton />

    </div>
  );
}