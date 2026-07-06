import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { PenSquare, Star,
    LayoutDashboard, 
  ClipboardList, 
  ShieldCheck, Car, CheckCircle2, Clock, Calendar, Home, Inbox, Truck, User } from 'lucide-react';

export default function UserProfile({ onEdit, onNavigate }) {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen shadow-lg flex flex-col font-sans relative">
      
      {/* Cabeçalho Verde de Fundo */}
      <div className="bg-green-800 text-white rounded-b-lg pt-10 pb-20 px-4 flex items-center justify-between">
        <div className="w-6"></div> {/* Espaçador para alinhar o título */}
        <h1 className="text-lg font-semibold tracking-wide">My Profile</h1>
        <button onClick={onEdit} className="p-1 hover:bg-green-700 rounded-lg transition">
          <PenSquare className="w-5 h-5" />
        </button>
      </div>

      {/* Container do Card Principal que sobe em cima do fundo verde */}
      <div className="flex-1 px-4 -mt-14 pb-24 space-y-4 z-10">
        
        {/* Bloco de Informações do Usuário */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center">
          {/* Avatar com borda */}
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200 -mt-16 mb-3">
            <img 
              src="/api/placeholder/150/150" 
              alt="Aoife Murphy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nome e Avaliação */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h2 className="text-xl font-bold text-gray-800">Marco Morais</h2>
            <div className="flex items-center gap-0.5 text-sm font-bold text-gray-800">
              <span>4.8</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>

          {/* Entregas Concluídas */}
          <p className="text-sm font-semibold text-green-600 mb-4">
            128 Deliveries Completed
          </p>

          {/* Badges/Crachás de Verificação */}
          <div className="flex gap-2 w-full justify-center">
            <span className="flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Driver
            </span>
            <span className="flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Vehicle Verified
            </span>
          </div>
        </div>

        {/* Seção: Transport */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Transport</p>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-xl text-gray-700 mt-0.5">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Car</h3>
                <p className="text-xs text-gray-500 font-medium">Toyota Corolla - 182-D-12345</p>
              </div>
            </div>
            {/* Imagem do Carro Lateral */}
            <div className="w-20 h-12 flex items-center justify-center">
              <img 
                src="/api/placeholder/80/45" 
                alt="Toyota Corolla" 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Seção: Estatísticas (Métricas de Performance) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 divide-y divide-gray-100">
          {/* Taxa de Conclusão */}
          <div className="flex items-center justify-between py-3 first:pt-0">
            <div className="flex items-center gap-2.5 text-gray-500">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-600">Completion Rate</span>
            </div>
            <span className="text-sm font-bold text-gray-800">98%</span>
          </div>

          {/* Tempo Médio de Entrega */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2.5 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-600">Average Delivery Time</span>
            </div>
            <span className="text-sm font-bold text-gray-800">28 min</span>
          </div>

          {/* Data de Registro */}
          <div className="flex items-center justify-between py-3 last:pb-0">
            <div className="flex items-center gap-2.5 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-600">Member Since</span>
            </div>
            <span className="text-sm font-bold text-gray-800">May 2024</span>
          </div>
        </div>

      </div>

      {/* 5. Barra de Navegação Inferior (Bottom Nav Bar) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 z-50 shadow-xl">
        <div className="max-w-md mx-auto flex justify-between items-center">
          
          <Link 
          href="/parter/home"
          className="flex flex-col items-center gap-1 text-[#169B62] flex-1 py-1">
            <LayoutDashboard size={20} className="stroke-[2.5]" />
            <span className="text-[10px] font-bold">Dashboard</span>
          </Link>
          
          <Link 
          href="/parter/Requests"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 flex-1 py-1">
            <ClipboardList size={20} />
            <span className="text-[10px] font-medium">Requests</span>
          </Link>
          
          <Link 
          href="/partner/deliveries"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 flex-1 py-1">
            <Truck size={20} />
            <span className="text-[10px] font-medium">Deliveries</span>
          </Link>
          
          <Link 
          href="/partner/profile"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 flex-1 py-1">
            <User size={20} />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
          
        </div>
      </nav>

    </div>
  );
}