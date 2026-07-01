import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  Bell, 
  Star, 
  MapPin, 
  Clock, 
  LayoutDashboard, 
  ClipboardList, 
  Truck, 
  User 
} from "lucide-react";

import NewRequests from '@/app/partner/home/components/NewRequests';
import ActiveDelivery from '@/app/partner/home/components/ActiveDelivery';



export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f7f4] pb-24 font-sans antialiased text-gray-900">
      
      {/* 1. Header Verde Superior (conforme image_1b65b0.png) */}
      <div className="bg-[#169B62] text-white pt-12 pb-24 px-6 rounded-b-lg relative shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Botão Menu Lateral */}
          <button className="p-1 hover:opacity-80 transition">
            <Menu size={24} />
          </button>
          
          {/* Saudação Central */}
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-wide">Hello, User!</h1>
            <p className="text-xs text-emerald-200/90 mt-0.5">Ready to deliver today?</p>
          </div>
          
          {/* Ícone de Notificação com Badge */}
          <button className="p-1 relative hover:opacity-80 transition">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#] rounded-full border border-[#169B62]" />
          </button>
        </div>
      </div>

      {/* Container de Conteúdo Flutuante */}
      <div className="max-w-md mx-auto px-5 -mt-16 space-y-6 relative z-10">
        
        {/* 2. Card de Performance (Your Performance) */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="w-1/2 border-r border-gray-100 pr-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Your Performance</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-2xl font-bold text-gray-900">4.8</span>
              <Star size={18} className="fill-amber-400 text-amber-400" />
            </div>
            <p className="text-[11px] text-gray-400 mt-1">Average Rating</p>
          </div>
          
          <div className="w-1/2 pl-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 invisible">Space</p>
            <span className="text-2xl font-bold text-gray-900 mt-2 block">12</span>
            <p className="text-[11px] text-gray-400 mt-1">Completed Deliveries</p>
          </div>
        </div>

        {/* 3. Seção: Active Delivery */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-800 text-base">Active Delivery</h2>
            <span className="bg-emerald-200 text-[#169B62] text-xs font-bold px-3 py-1 rounded-full">
              En Route
            </span>
          </div>
          {/* Card Detalhado da Entrega Ativa */}
          <ActiveDelivery/>
        </div>

        {/* 4. Seção: New Delivery Requests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-800 text-base">New Delivery Requests</h2>
            <span className="bg-[#] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          {/*  Card de Proposta de Nova Entrega */}
        <NewRequests/>
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
          href="/parter/deliveries"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 flex-1 py-1">
            <Truck size={20} />
            <span className="text-[10px] font-medium">Deliveries</span>
          </Link>
          
          <Link 
          href="/parter/profile"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 flex-1 py-1">
            <User size={20} />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
          
        </div>
      </nav>

    </main>
  );
}