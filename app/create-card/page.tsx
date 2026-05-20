// app/create-card/page.tsx
'use client';

import { useState } from 'react';

import Header from '@/components/Header';
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
    "You are a special person in my life..."
  );

  const handleSubmit = () => {
    console.log({
      occasions: selectedOccasions,
      to: toName,
      from: isAnonymous ? 'Anonymous' : fromName,
      message,
    });
    alert('Card created successfully! 🎉');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Novo Header Componentizado */}
      <Header title="Create Your Greeting Card" backTo="/home" />
      {/* Formulário */}
      <main className="p-4 max-w-2xl mx-auto mt-6 space-y-6">
        
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
          className="w-full py-3 bg-[#042414] hover:bg-green-800 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
        >
          CREATE CARD
        </button>

      </main>
    </div>
  );
}