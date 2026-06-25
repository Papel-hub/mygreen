"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  User, 
  Mic, 
  Video, 
  Camera, 
  PlusSquare,
  Gift,
  Check
} from "lucide-react";

export default function CustomizeCardScreen() {
  const [message, setMessage] = useState(
    "You are a special person in my life. Thank you for being there and for all the beautiful moments we share together. Wishing you happiness today and always!"
  );
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="min-h-screen text-white relative flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="bg-[#042414] text-white px-4 py-4 flex items-center relative">
        <button className="p-1 hover:bg-emerald-900 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="flex-grow text-center text-base font-semibold tracking-wide pr-7">
          Create Your Greeting Card
        </h1>
      </header>

      {/* --- PROGRESS BAR (STEPS) --- */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex justify-between items-center">
        <Step number={1} label="Occasion" status="completed" />
        <div className="h-px bg-emerald-700 flex-1 mx-2 mt-[-12px]"></div>
        <Step number={2} label="Customize" status="active" />
        <div className="h-px bg-gray-200 flex-1 mx-2 mt-[-12px]"></div>
        <Step number={3} label="Delivery" status="pending" />
        <div className="h-px bg-gray-200 flex-1 mx-2 mt-[-12px]"></div>
        <Step number={4} label="Review" status="pending" />
      </div>

      {/* --- FORMULÁRIO (SCROLLABLE CONTENT) --- */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 pb-24">
        
        {/* SEÇÃO TO & FROM */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">To & From</p>
          
          <div className="flex items-center gap-4">
            <label className="w-12 text-sm font-bold text-gray-700">From</label>
            <div className="flex-1 flex items-center border-b border-gray-200 py-2">
              <input type="text" defaultValue="Emma" className="w-full bg-transparent outline-none text-sm font-medium" />
              <User className="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-12 text-sm font-bold text-gray-700">To</label>
            <div className="flex-1 flex items-center border-b border-gray-200 py-2">
              <input type="text" defaultValue="Daniel" className="w-full bg-transparent outline-none text-sm font-medium" />
              <User className="w-4 h-4 text-gray-300" />
            </div>
          </div>

          {/* TOGGLE ANONYMOUS */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold text-gray-700">Send anonymously</span>
            <button 
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`w-11 h-6 rounded-full transition-colors relative ${isAnonymous ? 'bg-emerald-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isAnonymous ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        {/* SEÇÃO MENSAGEM */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Message <span className="lowercase font-normal">(Max 500 characters)</span></p>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <textarea 
              className="w-full h-32 bg-transparent outline-none text-sm leading-relaxed text-gray-700 resize-none italic"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="text-right text-[10px] text-gray-400 font-medium mt-2">
              {message.length}/500
            </div>
          </div>
        </div>

        {/* SEÇÃO ADD MEDIA */}
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ADD MEDIA <span className="lowercase font-normal">(Optional)</span></p>
          <div className="grid grid-cols-4 gap-2">
            <MediaTile icon={Mic} label="Audio" />
            <MediaTile icon={Video} label="Video" />
            <MediaTile icon={Camera} label="Photo" />
            <MediaTile icon={PlusSquare} label="Audio + Video" />
          </div>
        </div>

        {/* SEÇÃO ADD GIFT CARD */}
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ADD GIFT CARD <span className="lowercase font-normal">(Optional)</span></p>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-emerald-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-amber-100 rounded-md flex items-center justify-center text-amber-600">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-600">Add a gift card to your greeting</span>
            </div>
            <PlusSquare className="w-5 h-5 text-emerald-800" />
          </div>
        </div>
      </div>

      {/* --- BOTÃO FIXO INFERIOR --- */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent">
        <button className="w-full py-4 bg-[#042414] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.99] tracking-widest text-xs uppercase">
          Preview Card
        </button>
      </div>

    </div>
  );
}

// Sub-componente para os Passos do Topo
function Step({ number, label, status }: { number: number, label: string, status: 'completed' | 'active' | 'pending' }) {
  const styles = {
    completed: "bg-emerald-800 text-white border-emerald-800",
    active: "bg-[#042414] text-white border-[#042414] ring-4 ring-emerald-50",
    pending: "bg-white text-gray-300 border-gray-200"
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all ${styles[status]}`}>
        {status === 'completed' ? <Check className="w-3 h-3" /> : number}
      </div>
      <span className={`text-[9px] font-bold uppercase tracking-tight ${status === 'pending' ? 'text-gray-300' : 'text-emerald-900'}`}>
        {label}
      </span>
    </div>
  );
}

// Sub-componente para os Tiles de Mídia
function MediaTile({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-full aspect-square bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-emerald-600 transition-all">
        <Icon className="w-6 h-6 text-emerald-800 stroke-[1.5]" />
      </div>
      <span className="text-[10px] font-bold text-emerald-900 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}