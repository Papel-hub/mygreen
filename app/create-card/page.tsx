// app/create-card/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import OccasionSelector from '@/app/create-card/components/OccasionSelector';
import InputWithIcon, { UserIcon } from '@/app/create-card/components/InputWithIcon';
import AnonymousToggle from '@/app/create-card/components/AnonymousToggle';
import MessageTextarea from '@/app/create-card/components/MessageTextarea';

type Occasion = 'Friendship' | 'Family' | 'Love' | 'Birthday' | 'Celebration' | 'Custom';

export default function CreateGreetingCardPage() {
  const [selectedOccasions, setSelectedOccasions] = useState<Occasion[]>(['Friendship']);
  const [toName, setToName] = useState('Emma');
  const [fromName, setFromName] = useState('Daniel');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState(
    "You are a special person in my life.\nThank you for being there and for all the beautiful moments we share together.\nWishing you happiness today and always!"
  );

  const handleSubmit = () => {
    console.log({
      occasions: selectedOccasions,
      to: toName,
      from: isAnonymous ? 'Anonymous' : fromName,
      message,
    });
    alert('Card created successfully! ');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Header Verde */}
      <header className="bg-green-700 text-white px-4 py-4 flex items-center sticky top-0 z-40">
        <Link href="/" aria-label="Back" className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold">Create Your Greeting Card</h1>
      </header>

      {/* Formulário */}
      <main className="p-4 max-w-2xl mx-auto">
        
        <OccasionSelector 
          selected={selectedOccasions} 
          onChange={setSelectedOccasions} 
        />

        <InputWithIcon 
          label="TO:" 
          value={toName} 
          onChange={setToName} 
          placeholder="Recipient's name"
          icon={UserIcon}
        />

        <InputWithIcon 
          label="FROM:" 
          value={fromName} 
          onChange={setFromName} 
          placeholder="Your name"
          icon={UserIcon}
        />

        <AnonymousToggle 
          checked={isAnonymous} 
          onChange={setIsAnonymous} 
        />

        <MessageTextarea 
          value={message} 
          onChange={setMessage} 
        />

        {/* Botão Enviar */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
        >
          CREATE CARD
        </button>

      </main>
    </div>
  );
}