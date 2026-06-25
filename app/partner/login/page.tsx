"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft
} from "lucide-react";

type Screen = 'menu' | 'login' | 'register' | 'status_search' | 'status_result';

export default function IrelandDriverRegistration() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  
  // Estado para guardar a busca do motorista
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estados simulados de retorno do banco de dados
  const [driverName, setDriverName] = useState('John Doe');
  const [registrationStatus, setRegistrationStatus] = useState<'pending' | 'approved' | 'review'>('pending');

  const handleSearchStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    // Futura integração: fetch(`/api/drivers/status?search=${searchQuery}`)
    setCurrentScreen('status_result');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você salvaria os dados do formulário no banco
    // Simulando que após o registro ele vai direto checar o status
    setSearchQuery('APP-NEW-DRIVER'); 
    setCurrentScreen('status_result');
  };

  return (
    <div className="min-h-screen bg-white  text-white flex flex-col items-center justify-center p-4 antialiased">
      <div className="w-full max-w-md bg-white border border-[#169B62]/30 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
        
        {/* HEADER */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-12 h-12 rounded-full bg-white  border border-[#169B62] flex items-center justify-center text-xl mb-3 shadow-lg shadow-[#169B62]/10">
        <Image src="/logo1.svg" alt="Mimo Meu e Seu" width={100} height={60} priority />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-[#169B62]">PARTNER DRIVER</h1>
          <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">Join us and start delivering with freedom and trust</p>
        </div>

        {/* 1. MAIN MENU */}
          {currentScreen === 'menu' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('login')}
              className="w-full py-3.5 bg-[#169B62] hover:bg-[#0E6F46] text-white font-bold rounded-lg transition duration-200 uppercase tracking-wider text-sm shadow-lg shadow-[#169B62]/20"
            >
              Sign In to Drive
            </button>
            
            <button 
              onClick={() => setCurrentScreen('register')}
              className="w-full py-3.5 bg-white/60 hover:bg-neutral-300 border border-[#169B62] text-[#169B62] font-bold rounded-lg transition duration-200 uppercase tracking-wider text-sm"
            >
              Register as a Driver
            </button>

            <button 
              onClick={() => setCurrentScreen('status_search')}
              className="w-full  text-neutral-500 hover:text-neutral-300 mt-3 text-xs transition duration-200 underline underline-offset-4"
            >
              Check Application Status
            </button>
          </div>
          )}
        {/* login */}

{currentScreen === 'login' && (
  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
    <h2 className="text-lg font-semibold text-neutral-200 mb-2">Welcome Back</h2>
    
    <div>
      <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1.5">
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
      <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1.5">
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
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" required />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">PPS Number (Optional)</label>
                  <input type="text" placeholder="1234567FA" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" />
                </div>
              </div>
            </div>

            {/* Address & Eircode */}
            <div className="border-b border-neutral-900 pb-3">
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">2. Irish Address</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Street Address</label>
                  <input type="text" placeholder="O'Connell Street" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62]" required />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Eircode</label>
                  <input type="text" placeholder="D01 F5P2" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] uppercase placeholder-neutral-700" required />
                </div>
              </div>
              <div className="mt-2">
                <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">County</label>
                <select className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] text-neutral-300">
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
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Vehicle Type</label>
                  <select className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] text-neutral-300">
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorbike / Scooter</option>
                    <option value="bicycle">Bicycle / E-Bike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Registration Plate</label>
                  <input type="text" placeholder="151-D-12345" className="w-full bg-white/50 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#169B62] uppercase" required />
                </div>
              </div>
            </div>

            {/* Photo Uploads */}
            <div>
              <h3 className="text-xs font-bold text-[#169B62] uppercase tracking-wider mb-2">4. Photo Uploads</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-dashed border-neutral-800 rounded-lg p-3 text-center cursor-pointer hover:border-[#169B62]/50 bg-white/20">
                  <span className="block text-lg mb-1">👤</span>
                  <span className="text-[10px] text-neutral-400 block font-medium">Profile Photo</span>
                  <span className="text-[8px] text-neutral-600 block">(Clear face shot)</span>
                </div>
                <div className="border border-dashed border-neutral-800 rounded-lg p-3 text-center cursor-pointer hover:border-[#169B62]/50 bg-white/20">
                  <span className="block text-lg mb-1">📄</span>
                  <span className="text-[10px] text-neutral-400 block font-medium">Proof of Address</span>
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

        {/* 3. INPUT DE CONSULTA DE STATUS */}
        {currentScreen === 'status_search' && (
          <form onSubmit={handleSearchStatus} className="space-y-4">
            <div className="text-center mb-2">
              <h2 className="text-base font-semibold text-neutral-200">Track Application</h2>
              <p className="text-xs text-neutral-400 mt-1">Enter your details below to check your onboarding progress.</p>
            </div>

            <div>
              <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5">
                Application ID, Email or Phone
              </label>
              <input 
                type="text" 
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., APP-12345 or john@email.com" 
                className="w-full bg-white/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#169B62] text-white transition placeholder-neutral-600" 
              />
            </div>

            <button type="submit" className="w-full py-3 bg-[#169B62] hover:bg-[#0E6F46] text-white font-bold rounded-lg text-xs uppercase tracking-wider transition shadow-lg shadow-[#169B62]/10">
              Track Application 
            </button>

            <button type="button" onClick={() => setCurrentScreen('menu')} 
              className="w-full flex items-center justify-center space-x-1 text-center text-xs text-neutral-500 hover:text-neutral-300 mt-3 transition">
              <ChevronLeft size={16} />
              <span>Cancel and Back</span>
            </button>          
            </form>
        )}

        {/* 4. RESULTADO DA CONSULTA (TIMELINE) */}
        {currentScreen === 'status_result' && (
          <div className="space-y-6">
            <div className="text-center border-b border-neutral-900 pb-4">
              <span className="text-2xl">⏳</span>
              <h2 className="text-base font-semibold text-neutral-200 mt-1">Application Found</h2>
              <p className="text-xs text-neutral-400">Driver: <span className="text-white font-medium">{driverName}</span></p>
              <p className="text-[10px] text-neutral-500 mt-0.5">Query: {searchQuery}</p>
            </div>

            {/* Timeline - Yango Style */}
            <div className="space-y-5 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
              
              {/* Step 1 */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-xs text-green-500 z-10 font-bold">✓</div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-200">Application Submitted</h4>
                  <p className="text-xs text-neutral-400">Irish Address, Eircode, and Vehicle details captured.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 relative">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs z-10 font-bold ${
                  registrationStatus === 'pending' ? 'bg-[#169B62]/20 border border-[#169B62] text-[#169B62] animate-pulse' : 'bg-green-500/20 border border-green-500 text-green-500'
                }`}>
                  {registrationStatus === 'pending' ? '2' : '✓'}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-200">Document Verification</h4>
                  <p className="text-xs text-neutral-400">We are currently validating your Vehicle Registration & Proof of Address.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-600 z-10 font-bold">3</div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-600">Final Activation</h4>
                  <p className="text-xs text-neutral-600">Account approval and setup for the delivery shifts.</p>
                </div>
              </div>

            </div>

            {/* Footer de ações */}
            <div className="pt-4 border-t border-neutral-900 flex space-x-2">
              <button onClick={() => setCurrentScreen('status_search')} className="flex-1 py-2.5 bg-white/60 hover:bg-white/80 border border-neutral-800 text-neutral-300 font-medium rounded-lg text-xs transition">
                Search Again
              </button>
              <button onClick={() => alert('Checking updates...')} className="py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs transition">
               Refresh
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}