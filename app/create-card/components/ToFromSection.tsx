'use client';

import React from 'react';
import { User } from 'lucide-react';

interface ToFromSectionProps {
  fromUser: string;
  setFromUser: (val: string) => void;
  toUser: string;
  setToUser: (val: string) => void;
  isAnonymous: boolean;
  setIsAnonymous: (val: boolean) => void;
}

export default function ToFromSection({
  fromUser,
  setFromUser,
  toUser,
  setToUser,
  isAnonymous,
  setIsAnonymous,
}: ToFromSectionProps) {
  
  const handleAnonymousToggle = () => {
    const nextState = !isAnonymous;
    setIsAnonymous(nextState);
    if (nextState) {
      setFromUser('Anonymous'); // Limpa/força o nome para anônimo
    } else {
      setFromUser(''); // Libera para preenchimento novamente
    }
  };

  return (
    <div className="bg-[#042414]/80 rounded-2xl p-5 border border-[#D4AF37]/20 shadow-xl space-y-4">
      <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2">To & From</p>
      
      {/* Campo FROM */}
      <div className="flex items-center gap-4">
        <label className="w-12 text-xs font-bold text-white/80 uppercase">From</label>
        <div className={`flex-1 flex items-center border-b py-1.5 transition-colors ${
          isAnonymous ? 'border-white/5 opacity-50' : 'border-white/10'
        }`}>
          <input 
            type="text" 
            value={fromUser} 
            onChange={(e) => setFromUser(e.target.value)}
            disabled={isAnonymous}
            placeholder={isAnonymous ? "Anonymous" : "Your name"}
            className="w-full bg-transparent outline-none text-sm font-medium text-white disabled:cursor-not-allowed placeholder-white/30" 
          />
          <User className="w-4 h-4 text-[#D4AF37]/60" />
        </div>
      </div>

      {/* Campo TO */}
      <div className="flex items-center gap-4">
        <label className="w-12 text-xs font-bold text-white/80 uppercase">To</label>
        <div className="flex-1 flex items-center border-b border-white/10 py-1.5">
          <input 
            type="text" 
            value={toUser} 
            onChange={(e) => setToUser(e.target.value)}
            placeholder="Recipient's name"
            className="w-full bg-transparent outline-none text-sm font-medium text-white placeholder-white/30" 
          />
          <User className="w-4 h-4 text-[#D4AF37]/60" />
        </div>
      </div>

      {/* TOGGLE ANONYMOUS */}
      <div className="flex justify-between items-center pt-2">
        <span className="text-xs font-semibold text-white/80 uppercase">Send anonymously</span>
        <button 
          type="button"
          onClick={handleAnonymousToggle}
          className={`w-11 h-6 rounded-full transition-colors relative ${isAnonymous ? 'bg-[#169B62]' : 'bg-white/10'}`}
          aria-label="Toggle anonymity"
        >
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            isAnonymous ? 'translate-x-6' : 'translate-x-1'
          }`} />
        </button>
      </div>
    </div>
  );
}