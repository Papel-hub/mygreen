"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  Wifi, 
  ArrowLeftRight, 
  Columns, 
  Snowflake, 
  XCircle, 
  RotateCw,
  Gem
} from "lucide-react";

export default function AddGiftCardScreen() {
  const [amount, setAmount] = useState("50.00");
  const [selectedPreset, setSelectedPreset] = useState("€50");

  const presets = ["€25", "€50", "€100", "€150", "Other"];

  return (
    <div className="mx-auto max-w-md h-[844px] bg-white shadow-2xl rounded-[40px] overflow-hidden border-8 border-black flex flex-col font-sans select-none overflow-y-auto">
      
      {/* --- HEADER --- */}
      <header className="bg-[#042414] text-white px-4 py-6 flex items-center relative">
        <button className="p-1 hover:bg-emerald-900 rounded-full transition-colors z-10">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold tracking-tight">
          Add Gift Card (Optional)
        </h1>
      </header>

      <div className="p-5 flex flex-col gap-6">
        
        {/* --- CARTÃO VIRTUAL (PREVIEW) --- */}
        <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-[#06331c] via-[#042414] to-[#0a4d2b] rounded-2xl p-5 shadow-xl relative overflow-hidden text-white border border-emerald-800/30">
          {/* Brilho do Cartão */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
          
          <div className="flex justify-between items-start mb-4">
            {/* Chip EMV */}
            <div className="w-10 h-8 bg-gradient-to-br from-amber-200 to-amber-500 rounded-md shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 grid grid-cols-2 gap-px opacity-30">
                  <div className="border-b border-r border-black/20"></div>
                  <div className="border-b border-black/20"></div>
               </div>
            </div>
            
            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center border-2 border-emerald-200">
                <Gem className="w-6 h-6 text-emerald-800" />
              </div>
              <span className="text-[6px] uppercase tracking-widest mt-1 opacity-70">Diamond Elite</span>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-black italic tracking-tighter mb-1">MEMBERSHIP</h2>
            <h2 className="text-4xl font-black italic tracking-tighter leading-none mb-4">CARD</h2>
            
            <p className="text-[8px] font-mono tracking-[0.2em] opacity-80 mb-2">
              4421 8821 9022 7712 4018
            </p>
          </div>

          <div className="flex justify-between items-end">
            <Wifi className="w-5 h-5 rotate-90 text-amber-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">
              For all occasions
            </span>
          </div>
        </div>

        {/* --- SELEÇÃO DE VALOR --- */}
        <div className="flex flex-col gap-3">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Choose Amount
          </label>
          
          {/* Input de Valor */}
          <div className="flex items-center border-2 border-gray-100 rounded-xl px-4 py-3 bg-gray-50 focus-within:border-emerald-500 focus-within:bg-white transition-all">
             <span className="text-xl font-medium text-gray-500 mr-3">€</span>
             <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-xl font-bold outline-none text-gray-800"
             />
          </div>

          {/* Chips de Valor Rápido */}
          <div className="flex justify-between gap-2 mt-1">
            {presets.map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setSelectedPreset(preset);
                  if (preset !== "Other") setAmount(preset.replace("€", "") + ".00");
                }}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedPreset === preset 
                  ? "bg-[#042414] text-white border-[#042414]" 
                  : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID DE AÇÕES RÁPIDAS --- */}
        <div className="grid grid-cols-5 gap-2 pt-4">
          <QuickAction icon={ArrowLeftRight} label="Transfer" />
          <QuickAction icon={Columns} label="Split" />
          <QuickAction icon={Snowflake} label="Freeze" />
          <QuickAction icon={XCircle} label="Cancel" />
          <QuickAction icon={RotateCw} label="Reissue" />
        </div>

        {/* --- BOTÕES FINAIS --- */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="w-full py-4 bg-[#042414] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] tracking-widest text-xs uppercase">
            Add Gift Card
          </button>
          
          <button className="w-full py-2 bg-transparent text-emerald-900 font-bold text-xs tracking-widest uppercase hover:underline">
            Skip this step
          </button>
        </div>

      </div>
    </div>
  );
}

// Sub-componente para as ações (Transfer, Split, etc)
function QuickAction({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all">
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-emerald-700" />
      </div>
      <span className="text-[10px] font-bold text-gray-400 group-hover:text-emerald-900 transition-colors">
        {label}
      </span>
    </div>
  );
}