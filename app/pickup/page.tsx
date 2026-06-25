"use client";

import { useState } from "react";
import { ArrowLeft, Map, Store, Gift, ShoppingBag, CheckCircle2 } from "lucide-react";

// Dados fictícios baseados na sua imagem
const pickupPoints = [
  {
    id: "green-corner",
    name: "The Green Corner",
    address: "123 Grafton Street, Dublin 2",
    distance: "1.2 km",
    icon: Store,
  },
  {
    id: "shamrock-gifts",
    name: "Shamrock Gifts",
    address: "45 O'Connell Street, Dublin 1",
    distance: "2.4 km",
    icon: Gift,
  },
  {
    id: "emerald-boutique",
    name: "Emerald Boutique",
    address: "80 St. Stephen's Green, Dublin 2",
    distance: "3.1 km",
    icon: ShoppingBag,
  },
];

export default function PickupScreen() {
  const [selectedPoint, setSelectedPoint] = useState("green-corner");

  return (
    <div className="relative mx-auto max-w-md h-[844px] bg-slate-100 shadow-2xl rounded-[40px] overflow-hidden border-8 border-black flex flex-col font-sans select-none">
      
      {/* --- STATUS BAR SIMULADA --- */}
      <div className="bg-[#042414] text-white px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold tracking-wider">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-2.5 bg-white rounded-xs inline-block"></span>
          <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
        </div>
      </div>

      {/* --- HEADER --- */}
      <header className="bg-[#042414] text-white px-4 py-4 flex items-center justify-between">
        <button className="p-1 hover:bg-emerald-900 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold tracking-wide">Select Pickup Point</h1>
        <button className="p-1 hover:bg-emerald-900 rounded-full transition-colors">
          <Map className="w-6 h-6" />
        </button>
      </header>

      {/* --- ÁREA DO MAPA --- */}
      {/* Substitua a URL por uma imagem de mapa local se preferir */}
      <div 
        className="flex-1 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')" }}
      >
        {/* Overlay leve para suavizar o mapa caso queira aproximar do tom pastel */}
        <div className="absolute inset-0 bg-stone-200/30 pointer-events-none" />

        {/* Pin Centralizado (Dourado/Amarelo do layout) */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce">
          <div className="w-8 h-8 bg-[#D4A373] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#D4A373] mx-auto -mt-[1px]" />
        </div>

        {/* Pins Secundários (Verdes) */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#042414] rounded-full border border-white shadow-md" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#042414] rounded-full border border-white shadow-md" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#042414] rounded-full border border-white shadow-md" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#042414] rounded-full border border-white shadow-md" />
      </div>

      {/* --- CONTAINER DOS CARD DE SELEÇÃO --- */}
      <div className="bg-white px-4 pt-5 pb-6 rounded-t-[32px] -mt-8 relative z-20 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-3">
        
        {/* Lista de Locais */}
        <div className="flex flex-col gap-1 divide-y divide-gray-100">
          {pickupPoints.map((point) => {
            const IconComponent = point.icon;
            const isSelected = selectedPoint === point.id;

            return (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(point.id)}
                className="flex items-center justify-between py-3 cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  {/* Ícone Redondo Verde */}
                  <div className="w-11 h-11 rounded-full bg-[#042414] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <IconComponent className="w-5 h-5 text-[#E6F4EA]" />
                  </div>
                  
                  {/* Texto */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{point.name}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{point.address}</p>
                  </div>
                </div>

                {/* Distância e Radio Button */}
                <div className="flex items-center gap-4 text-right">
                  <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">
                    {point.distance}
                  </span>
                  
                  {/* Radio customizado */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    {isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-[#042414] fill-[#042414] stroke-white" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-gray-400 transition-colors" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- BOTÃO DE CONFIRMAÇÃO --- */}
        <button 
          className="w-full mt-2 py-3.5 bg-[#042414] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-[0.99] tracking-wider text-sm"
          onClick={() => alert(`Ponto selecionado: ${selectedPoint}`)}
        >
          CONTINUE
        </button>

      </div>
    </div>
  );
}