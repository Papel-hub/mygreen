"use client";

import React, { useState } from 'react';
import { MapPin, Navigation, DollarSign, Clock, ShoppingBag, Power, User, ShieldCheck, ChevronRight } from 'lucide-react';

export default function DriverHomePage() {
  const [isOnline, setIsOnline] = useState(true);
  
  // Dados simulados baseados no mercado da Irlanda (€)
  const [todayEarnings, setTodayEarnings] = useState('84.50');
  const [completedDeliveries, setCompletedDeliveries] = useState(4);
  const [hoursOnline, setHoursOnline] = useState('3.5');

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col antialiased font-sans">
      
      {/* 1. TOP BAR / NAVBAR */}
      <header className="bg-white/80 border-b border-neutral-900 px-4 py-3 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-neutral-900 border border-[#169B62] flex items-center justify-center text-sm shadow-md">
            👤
          </div>
          <div>
            <h2 className="text-xs font-bold text-white tracking-wide uppercase">John Doe</h2>
            <div className="flex items-center space-x-1">
              <ShieldCheck size={12} className="text-[#169B62]" />
              <span className="text-[10px] text-neutral-400">Verified Courier</span>
            </div>
          </div>
        </div>

        {/* TOGGLE STATUS: ONLINE / OFFLINE (YANGO STYLE) */}
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md ${
            isOnline 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20' 
              : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-400 border border-neutral-700'
          }`}
        >
          <Power size={14} className={isOnline ? 'animate-pulse' : ''} />
          <span>{isOnline ? 'Online' : 'Offline'}</span>
        </button>
      </header>

      {/* 2. LIVE MAP AREA (SIMULADO POR CSS COM ESTILO ESCURO DE LOGÍSTICA) */}
      <main className="flex-1 relative w-full overflow-hidden flex flex-col justify-between">
        
        {/* Mock de Mapa de Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-white z-0 opacity-80">
          {/* Linhas de grade simulando ruas do mapa */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Indicador de localização atual do motorista */}
          {isOnline && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-sky-500 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#169B62] border-2 border-white rounded-full shadow-lg relative z-10"></div>
              <div className="mt-2 bg-white/80 border border-neutral-800 text-[9px] text-neutral-300 px-2 py-0.5 rounded-md backdrop-blur-sm whitespace-nowrap">
                📍 Dublin City Centre
              </div>
            </div>
          )}
        </div>

        {/* CARD DE GANHOS DO DIA (RÁPIDO ACESSO) */}
        <div className="relative z-10 p-4 w-full max-w-md mx-auto mt-2">
          <div className="bg-white/60 border border-neutral-900 backdrop-blur-md rounded-xl p-4 grid grid-cols-3 gap-2 text-center shadow-lg">
            <div>
              <div className="flex items-center justify-center text-neutral-500 mb-0.5">
                <DollarSign size={14} className="text-[#169B62]" />
              </div>
              <span className="text-base font-white text-white">€{todayEarnings}</span>
              <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5">Earnings</p>
            </div>
            <div className="border-x border-neutral-900">
              <div className="flex items-center justify-center text-neutral-500 mb-0.5">
                <ShoppingBag size={14} />
              </div>
              <span className="text-base font-white text-white">{completedDeliveries}</span>
              <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5">Orders</p>
            </div>
            <div>
              <div className="flex items-center justify-center text-neutral-500 mb-0.5">
                <Clock size={14} />
              </div>
              <span className="text-base font-white text-white">{hoursOnline}h</span>
              <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5">Online Time</p>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM PANEL: INTERAÇÃO DE CORRIDA */}
        <div className="relative z-10 p-4 w-full max-w-md mx-auto mb-4">
          {isOnline ? (
            /* ESTADO 1: ONLINE E AGUARDANDO PEDIDOS */
            <div className="bg-white/90 border border-[#169B62]/20 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#169B62]/10 flex items-center justify-center text-[#169B62] border border-[#169B62]/30 animate-pulse">
                  <Navigation size={22} className="rotate-45" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#169B62]">Looking for Flower Orders</h3>
                <p className="text-xs text-neutral-400 mt-1">Stay near high-demand areas in Dublin for quick match.</p>
              </div>
              
              {/* Notificação Fictícia de Zona de Alta Demanda */}
              <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-3 flex items-center justify-between text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🔥</span>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-200">High Demand Zone Nearby</h4>
                    <p className="text-[10px] text-neutral-500">Dublin 2 / Grafton St area has 3+ pending shops</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-neutral-500" />
              </div>
            </div>
          ) : (
            /* ESTADO 2: OFFLINE */
            <div className="bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl">
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mx-auto text-neutral-500 mb-3">
                <Power size={18} />
              </div>
              <h3 className="text-sm font-bold text-neutral-300 uppercase tracking-wider">You are Currently Offline</h3>
              <p className="text-xs text-neutral-500 mt-1 mb-4">Switch your status to Online to start receiving delivery requests.</p>
              <button 
                onClick={() => setIsOnline(true)}
                className="w-full py-3 bg-[#169B62] hover:bg-[#0E6F46] text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition"
              >
                Go Online Now
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}