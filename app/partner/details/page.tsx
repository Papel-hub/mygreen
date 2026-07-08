import React from 'react';
import { ArrowLeft, Bell, MapPin, Navigation, Clock } from 'lucide-react';

interface RequestDetailsProps {
  onBack: () => void;
  onSendOffer: () => void;
}

export default function RequestDetails({
  onBack,
  onSendOffer,
}: RequestDetailsProps) {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen shadow-lg flex flex-col font-sans">
      
      {/* Header Verde Principal */}
      <div className="bg-[#169B62] to-green-700 text-white pt-10 pb-4 px-4 rounded-b-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-1 hover:bg-green-600 rounded-lg transition">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold tracking-wide">Request Details</h1>
          <button className="p-1 hover:bg-green-600 rounded-lg transition">
            <Bell className="w-5 h-5" />
          </button>
        </div>
        
        {/* Banner de Status / Expiração */}
        <div className="bg-green-600/50 border border-green-500/30 text-center py-2 px-4 rounded-lg text-sm font-medium backdrop-blur-sm">
          New Request <span className="mx-1.5">•</span> <span className="text-green-200">Expires in 15:34</span>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 px-4 py-5 space-y-6 overflow-y-auto">
        
        {/* Seção: Order Information */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 font-bold text-base mb-1">Order Information</h2>
          <p className="text-xs text-gray-400 mb-3">Order #IGD4587</p>
          
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
              <img 
                src="/api/placeholder/100/100" 
                alt="Bouquet of Roses" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2">
                Bouquet of Roses with Greeting Card
              </h3>
              <p className="text-xs text-gray-400">Personalised message:</p>
              <p className="text-xs font-semibold text-gray-700 italic">&quot;Happy Birthday!&quot;</p>
            </div>
          </div>
        </div>

        {/* Seção: Rota (Collection & Delivery) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="text-green-800 font-bold text-base mb-4">Collection</h2>
          
          <div className="relative pl-8 space-y-6">
            {/* Linha tracejada conectora */}
            <div className="absolute left-[11px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-gray-300"></div>

            {/* Ponto de Recolha (Collection) */}
            <div className="relative">
              <div className="absolute -left-8 p-1 bg-green-50 rounded-lg text-green-700 z-10">
                 <MapPin size={16} className="text-[#] mt-0.5 shrink-0" />

              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Dublin 4, Ireland</p>
                <p className="text-xs text-gray-500">Today, 2:00 PM – 3:00 PM</p>
              </div>
            </div>

            {/* Indicador de Tipo de Envio intermediário */}
            <div className="text-xs font-bold text-green-600 tracking-wide uppercase my-1">
              Delivery
            </div>

            {/* Ponto de Entrega (Delivery) */}
            <div className="relative">
              <div className="absolute -left-8 p-1 bg-orange-50 rounded-lg text-orange-600 z-10">
                 <MapPin size={16} className="text-[#] mt-0.5 shrink-0" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Dublin 8, Ireland</p>
                <p className="text-xs text-gray-500">Today, 4:00 PM – 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Divisor Interno */}
          <hr className="my-4 border-gray-100" />

          {/* Métricas: Distância e Tempo Estimado */}
          <div className="grid grid-cols-2 divide-x divide-gray-100 text-center">
            <div>
              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-0.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>Distance</span>
              </div>
              <p className="text-sm font-bold text-gray-800">7.2 km</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-0.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Est. Time</span>
              </div>
              <p className="text-sm font-bold text-gray-800">22 min</p>
            </div>
          </div>
        </div>

        {/* Seção da Oferta */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 font-bold text-base">Your Offer</h2>
            <p className="text-xs text-gray-400 mt-0.5">You set your own price</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-xl">
            <span className="text-lg font-extrabold text-gray-800">€ 9.50</span>
          </div>
        </div>

      </div>

      {/* Botão de Ação Inferior Fixo */}
      <div className="p-4 bg-white border-t border-gray-100 rounded-t-3xl shadow-xl">
        <button 
          onClick={onSendOffer}
          className="w-full bg-[#FF8200] hover:bg-orange-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-[0.99]"
        >
          Send Offer
        </button>
      </div>

    </div>
  );
}