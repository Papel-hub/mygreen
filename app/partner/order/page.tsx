"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ArrowRight, DollarSign, AlertCircle, ShoppingBag } from 'lucide-react';

interface IncomingOrderProps {
  onAccept: () => void;
  onReject: () => void;
}

export default function IncomingOrderScreen({ onAccept, onReject }: IncomingOrderProps) {
  // Cronômetro regressivo de 15 segundos para aceitar a entrega (Yango style)
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (countdown === 0) {
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Dados fictícios de uma floricultura em Dublin
  const orderDetails = {
    earnings: '14.20',
    shopName: 'The Golden Rose Boutique',
    pickupAddress: 'Grafton Street, Dublin 2',
    deliveryAddress: 'Rathmines Rd Upper, Dublin 6',
    pickupDistance: '0.8 km away',
    deliveryDistance: '3.4 km ride',
    itemsCount: 2
  };

  // Cálculo da barra de progresso circular ou linear baseada no tempo restante
  const progressWidth = (countdown / 15) * 100;

  return (
    <div className="min-h-screen bg-white text-white flex flex-col items-center justify-between p-4 antialiased font-sans relative overflow-hidden">
      
      {/* 1. ANIMAÇÃO DE FUNDO E ALERTA DE NOVO PEDIDO */} 
      <div className="w-full max-w-md pt-6 text-center z-10">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#169B62]/10 border border-[#FF8200]/30 text-[#FF8200] rounded-full text-[10px] font-bold tracking-widest uppercase animate-pulse">
          <AlertCircle size={12} />
          <span>New Delivery Request</span>
        </span>
        
        {/* GRANDE EXIBIÇÃO DE GANHO */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">You Earn</p>
          <div className="flex items-baseline text-white mt-1">
            <span className="text-2xl font-bold text-[#169B62] mr-1">€</span>
            <span className="text-5xl font-black tracking-tight">{orderDetails.earnings}</span>
          </div>
        </div>
      </div>

      {/* 2. CARD DETALHADO DA ROTA (FLOWER SHOP -> CLIENTE) */}
      <div className="w-full max-w-md bg-black/60 border border-neutral-900 rounded-2xl p-5 shadow-2xl backdrop-blur-xl z-10 space-y-4">
        
        {/* Info do estabelecimento e quantidade */}
        <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-[#169B62]/10 rounded-lg text-[#169B62]">
              <ShoppingBag size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-200">{orderDetails.shopName}</h3>
              <p className="text-[10px] text-neutral-500 uppercase font-medium">{orderDetails.itemsCount} Flower Bouquets</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md">
            {orderDetails.pickupDistance}
          </span>
        </div>

        {/* Linha do Trajeto (Timeline de Endereços) */}
        <div className="relative space-y-5 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-neutral-800">
          
          {/* Ponto A: Coleta (Shop) */}
          <div className="flex items-start space-x-3 relative">
            <div className="w-6 h-6 rounded-full bg-[#169B62] flex items-center justify-center text-black font-black text-[10px] z-10 shadow-md shadow-[#169B62]/20">
              A
            </div>
            <div className="flex-1">
              <span className="text-[9px] text-[#169B62] uppercase tracking-wider font-bold block">Pickup (Flower Shop)</span>
              <p className="text-xs font-medium text-neutral-200 mt-0.5">{orderDetails.pickupAddress}</p>
            </div>
          </div>

          {/* Ponto B: Entrega (Cliente) */}
          <div className="flex items-start space-x-3 relative">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-black text-[10px] z-10 shadow-md">
              B
            </div>
            <div className="flex-1">
              <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-bold block">Delivery</span>
              <p className="text-xs font-medium text-neutral-200 mt-0.5">{orderDetails.deliveryAddress}</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">Total Ride: {orderDetails.deliveryDistance}</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. TIMER E BOTÕES DE AÇÃO */}
      <div className="w-full max-w-md space-y-4 z-10 pb-4">
        
        {/* Barra de Progresso do Tempo Regressivo */}
        <div className="space-y-1.5 px-1">
          <div className="flex justify-between items-center text-xs">
            <span className="text-neutral-500 uppercase tracking-wider font-medium text-[10px]">Offer expires in</span>
            <span className={`font-black tracking-wide ${countdown <= 5 ? 'text-red-500 animate-pulse' : 'text-[#169B62]'}`}>
              {countdown}s
            </span>
          </div>
          <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-linear ${
                countdown <= 5 ? 'bg-red-500' : 'bg-[#169B62]'
              }`}
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>

        {/* Botões Aceitar / Recusar */}
        <div className="flex space-x-3">
          <button 
            onClick={onReject}
            className="flex-1 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-200 font-bold rounded-xl text-xs uppercase tracking-widest transition"
          >
            Decline
          </button>
          
          <button 
            onClick={onAccept}
            className="flex-[2] py-4 bg-[#169B62] hover:bg-[#0E6F46] text-black font-extrabold rounded-xl text-xs uppercase tracking-widest transition shadow-xl shadow-[#169B62]/20 flex items-center justify-center space-x-2"
          >
            <span>Accept Order</span>
            <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Grid de fundo simulando mapa escuro desfocado */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] z-0 pointer-events-none"></div>
    </div>
  );
}