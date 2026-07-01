"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { 
  UserIcon, ClipboardListIcon,
  ChevronLeft
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DriverWelcomePage() {
 type Screen = 'menu' | 'login' | 'register' | 'status_result'; // Adicionei 'status_result' aqui para o TypeScript não reclamar no handleRegisterSubmit
const router = useRouter();

// APENAS UMA DECLARAÇÃO: Escolha 'menu' ou 'login' como a tela inicial
const [currentScreen, setCurrentScreen] = useState<Screen>('menu');

// Estado para guardar a busca do motorista
const [searchQuery, setSearchQuery] = useState('');

// Estados simulados de retorno do banco de dados
const [driverName, setDriverName] = useState('John Doe');
const [registrationStatus, setRegistrationStatus] = useState<'pending' | 'approved' | 'review'>('pending');

const handleRegisterSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Aqui você salvaria os dados do formulário no banco
  // Simulando que após o registro ele vai direto checar o status
  setSearchQuery('APP-NEW-DRIVER'); 
  setCurrentScreen('status_result');
};
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-between bg-white relative overflow-hidden px-6 py-12 md:py-16">
      
      {/* 
        Container do Conteúdo Principal 
        Centralizado na tela e com largura máxima para dispositivos móveis
      */}
      <div className="flex-1 flex flex-col items-center justify-start text-center max-w-sm z-10 my-auto w-full">
        
        {/* Seção do Logotipo (referência image_e0a931.png) */}
        {/* Seção do Logotipo */}
        <div className="relative w-48 h-48 mb-10 flex items-center justify-center">
          {/* Substitua pelo caminho real do seu logo exportado */}
          <Image
            src="/images/logo0.svg" 
            alt="Ireland My Green Diamond Logo"
            width={192}
            height={192}
            priority
            className="object-contain"
          />
        </div>

        {/* Título Principal (corrigido para "Partner Driver" conforme imagem) */}
        <h1 className="text-3xl font-bold tracking-tight text-[#169B62] font-sans">
          Partner Driver
        </h1>

        {/* Texto Descritivo (atualizado conforme imagem) */}
        <p className="mt-3 text-gray-600 font-normal leading-relaxed text-base px-2">
          Join us and start delivering with freedom and trust.
        </p>
      </div>

      {currentScreen === 'menu' && (  
      <div 
      className="w-full max-w-xs flex flex-col gap-3.5 mt-auto z-10 pb-8">  
        
        {/* Ilustração Principal da Cidade e Veículos (referência image_e0a931.png) */}
        <div className="w-full h-64 my-8 md:my-10 relative flex items-end justify-center">
          <Image
            src="/images/driver-welcome-illustration.png"
            alt="Illustration of a green car, green scooter, and green bicycle in a city with map pins"
            width={340}
            height={256}
            className="object-contain"
          />
        </div>
        {/* Botão Login (Preenchido) */}
        <button 
        onClick={() => setCurrentScreen('login')}
        className="w-full bg-[#169B62] text-white py-3.5 rounded-lg font-semibold text-center text-lg hover:bg-[#095632] transition">
          Login
        </button>
        
        {/* Botão Register (Contorno) */}
        <button
        onClick={() => setCurrentScreen('register')}
        className="w-full bg-white text-[#169B62] border border-[#169B62] py-3 rounded-lg font-medium text-center text-lg border-2 border-[#169B62] hover:bg-gray-50 transition">
          Register
        </button>
      </div>
      )}
        {/* login */}

{currentScreen === 'login' && (
  <form 
  onSubmit={(e) => {
      e.preventDefault();
      // LOGIN FALSO: Redireciona o usuário diretamente para a Home '/'
      router.push("/partner/home");
    }}
      className="w-full max-w-xs flex flex-col gap-3.5 mt-auto z-10 pb-8">  
    <h2 className="text-lg font-semibold text-neutral-200 mb-2">Welcome Back</h2>
    
    <div>
      <label className="block text-[11px] text-black uppercase tracking-wider mb-1.5">
        Phone Number or Email
      </label>
      {/* Ajustado placeholder para o padrão da Irlanda (+353) */}
      <input 
        type="text" 
        placeholder="+353 87 123 4567" 
        className="w-full bg-white/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#169B62] text-white transition" 
      />
    </div>
    
    <div>
      <label className="block text-[11px] text-black uppercase tracking-wider mb-1.5">
        Password
      </label>
      <input 
        type="password" 
        placeholder="••••••••" 
        className="w-full bg-white/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#169B62] text-white transition" 
      />
    </div>
    
    <button 
      type="submit" 
      className="w-full py-3 bg-[#169B62] hover:bg-[#0E6F46] text-white font-bold rounded-lg text-sm uppercase tracking-wider transition mt-2 shadow-lg shadow-[#169B62]/10"
    >
      Go Online
    </button>
    
    {/* Botão de voltar corrigido e alinhado com o ícone */}
    <button 
      type="button" 
      onClick={() => setCurrentScreen('menu')} 
      className="w-full flex items-center justify-center space-x-1 text-center text-xs text-neutral-500 hover:text-neutral-300 mt-3 transition"
    >
      <ChevronLeft size={16} />
      <span>Back to main menu</span>
    </button>
  </form>
)}
        {/* 2. REGISTRATION FORM (IRELAND COMPLIANT) */}
        {currentScreen === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            
            {/* Personal Details */}
            <div className="border-b border-neutral-900 pb-3">
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">1. Personal Details</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" required />
                </div>
                <div>
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">PPS Number (Optional)</label>
                  <input type="text" placeholder="1234567FA" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" />
                </div>
              </div>
            </div>

            {/* Address & Eircode */}
            <div className="border-b border-neutral-900 pb-3">
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">2. Irish Address</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">Street Address</label>
                  <input type="text" placeholder="O'Connell Street" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" required />
                </div>
                <div>
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">Eircode</label>
                  <input type="text" placeholder="D01 F5P2" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] uppercase placeholder-neutral-700" required />
                </div>
              </div>
              <div className="mt-2">
                <label className="block text-[10px] text-black uppercase tracking-wider mb-1">County</label>
                <select className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] ">
                  <option value="dublin">Dublin</option>
                  <option value="cork">Cork</option>
                  <option value="galway">Galway</option>
                  <option value="limerick">Limerick</option>
                </select>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="border-b border-neutral-900 pb-3">
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">3. Vehicle Info</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">Vehicle Type</label>
                  <select className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]">
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorbike / Scooter</option>
                    <option value="bicycle">Bicycle / E-Bike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-black uppercase tracking-wider mb-1">Registration Plate</label>
                  <input type="text" placeholder="151-D-12345" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] uppercase" required />
                </div>
              </div>
            </div>

            {/* Photo Uploads */}
            <div>
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">4. Photo Uploads</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-dashed border-neutral-800 rounded-lg p-3 text-center cursor-pointer hover:border-[#169B62]/50 bg-white/20">
                  <span className="block text-lg mb-1"><UserIcon className="w-5 h-5"/></span>
                  <span className="text-[10px] text-black block font-medium">Profile Photo</span>
                  <span className="text-[8px] text-neutral-600 block">(Clear face shot)</span>
                </div>
                <div className="border border-dashed border-neutral-800 rounded-lg p-3 items-center justify-center text-center cursor-pointer hover:border-[#169B62]/50 bg-white/20">
                  <span className="block text-lg mb-1"><ClipboardListIcon className="w-5 h-5"/></span>
                  <span className="text-[10px] text-black block font-medium">Proof of Address</span>
                  <span className="text-[8px] text-neutral-600 block">(Utility Bill / Statement)</span>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-3 bg-[#169B62] hover:bg-[#0E6F46] text-white font-bold rounded-lg text-xs uppercase tracking-wider transition mt-4">
              Submit Application
            </button>
            <button type="button" onClick={() => setCurrentScreen('menu')} 
               className="w-full flex items-center justify-center space-x-1 text-center text-xs text-neutral-500 hover:text-neutral-300 mt-3 transition">
              <ChevronLeft size={16} />
              <span>Back to Menu</span>
            </button>
          </form>
        )}
    </main>
  );
}