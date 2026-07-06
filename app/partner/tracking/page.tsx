import React from 'react';
import { ArrowLeft, MapPin, 
    Phone, MessageSquare, Star, Car } from 'lucide-react';

export default function Tracking({ onBack }) {
  // Passos do progresso
  const steps = [
    { label: "Confirmed", active: true, done: true },
    { label: "On the way", active: true, done: false },
    { label: "Collected", active: false, done: false },
    { label: "En Route", active: false, done: false },
    { label: "Delivered", active: false, done: false },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen shadow-lg flex flex-col font-sans relative overflow-hidden">
      
      {/* Header Superior Absoluto (Fica flutuando sobre o mapa) */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-10 pb-4 px-4 bg-gradient-to-b from-green-800/90 to-green-800/20 text-white flex items-center justify-between">
        <button onClick={onBack} className="p-1 bg-green-800/50 hover:bg-green-700 backdrop-blur-sm rounded-lg transition">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold tracking-wide drop-shadow-sm">Tracking</h1>
        <button className="text-sm font-medium hover:underline px-2 py-1 bg-green-800/50 backdrop-blur-sm rounded-lg">
          Help
        </button>
      </div>

      {/* Mock de Mapa de Fundo */}
      <div className="flex-1 bg-gray-200 relative pt-24">
        {/* Usando um fundo estilizado para simular ruas se não houver API integrada ainda */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 opacity-70"></div>

        {/* Banner: Driver En Route */}
        <div className="absolute top-28 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-green-100 shadow-md flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">Driver En Route</h4>
              <p className="text-[11px] text-gray-400">Your order is on the way</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-200 border">
            <img src="/api/placeholder/50/50" alt="Driver mini" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* SVG Simbolizando a Rota do Mapa */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-12">
          <svg className="w-full h-full text-green-600" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Linha do Trajeto */}
            <path d="M120 40 L120 80 L80 120 L130 180 L170 240" stroke="#047857" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 1" />
            <path d="M120 40 L120 80 L80 120 L130 180 L170 240" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Pin Azul (Origem/Coleção) */}
            <circle cx="120" cy="40" r="6" fill="#1d4ed8" stroke="white" strokeWidth="2" />
            <circle cx="120" cy="40" r="3" fill="white" />
            
            {/* Ícone do Carro no meio da rota */}
            <g transform="translate(100, 140)">
              <rect x="0" y="0" width="22" height="22" rx="6" fill="#065f46" />
              <path d="M5 11h12" stroke="white" strokeWidth="1.5"/> {/* Representação minimalista */}
            </g>

            {/* Pin Laranja (Destino) */}
            <circle cx="170" cy="240" r="6" fill="#f97316" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Painel Inferior de Status do Pedido */}
      <div className="bg-white rounded-t-3xl shadow-2xl p-4 space-y-4 border-t border-gray-100 z-20">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-extrabold text-gray-800 text-sm">Order #IGD4587</h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Estimated arrival</p>
            <p className="text-sm font-black text-gray-800">4:35 PM</p>
          </div>
        </div>

        {/* Linha de Progresso (Stepper) */}
        <div className="flex items-center justify-between relative pt-2 px-1">
          {/* Barra cinza de fundo conectora */}
          <div className="absolute top-[19px] left-6 right-6 h-0.5 bg-gray-200 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 relative">
              {/* Indicador visual circular */}
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all border-2 ${
                step.done 
                  ? 'bg-green-600 border-green-600 text-white' 
                  : step.active 
                    ? 'bg-white border-green-600 text-green-600' 
                    : 'bg-white border-gray-300 text-gray-300'
              }`}>
                {step.done ? (
                  <span className="text-[10px] font-bold">✓</span>
                ) : (
                  <div className={`w-1.5 h-1.5 rounded-lg ${step.active ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                )}
              </div>
              <span className={`text-[9px] font-bold mt-1.5 text-center whitespace-nowrap ${step.active || step.done ? 'text-gray-800' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <hr className="border-gray-100 my-1" />

        {/* Card do Condutor / Ações de Contacto */}
        <div className="flex items-center justify-between bg-gray-50/60 p-2.5 rounded-2xl border border-gray-100">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 border border-white shadow-sm">
              <img src="/api/placeholder/100/100" alt="Sean O'Connor" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Sean O'Connor</h4>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                <span className="font-bold text-gray-700">4.9</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="mx-1">•</span>
                <span className="text-[11px]">182-D-12345</span>
              </div>
            </div>
          </div>

          {/* Botões redondos de ação */}
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition shadow-sm">
              <Phone className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center text-white hover:bg-green-800 transition shadow-sm">
              <MessageSquare className="w-4 h-4 fill-white" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}