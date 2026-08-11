'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Gift, Car, Flower, Check } from 'lucide-react';
import Image from 'next/image';

export default function WelcomeOnboarding() {
const router = useRouter();
  
  // Controle de estado do fluxo de telas (1, 2 ou 3)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  
  // Opção selecionada na Etapa 2
  const [selectedRole, setSelectedRole] = useState<'customer' | 'driver' | 'partner'>('customer');

  // Navegação para a frente
  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  // Navegação para trás
  const handleBackStep = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else router.back();
  };

  // Ao selecionar uma opção na Etapa 2, define o papel e avança para a Etapa 3
  const handleSelectRole = (role: 'customer' | 'driver' | 'partner') => {
    setSelectedRole(role);
    setStep(3);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-[#082214] px-6 py-8 text-white select-none overflow-hidden font-sans">
        {/* Imagem de Fundo Otimizada do Next.js */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <Image
            src="/images/img1.svg" // public/images/
            alt="Background"
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-30" // Ajuste a opacidade como preferir
            />
        </div>

      {/* Header */}
      <header className="relative z-10 flex w-full items-start justify-between">
        {/* O botão de voltar AGORA SÓ APARECE no STEP 2 */}
        {step === 2 ? (
            <button 
            onClick={handleBackStep}
            className="flex h-10 w-10 items-center justify-center
            border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]
             rounded-lg bg-[#143B27] text-emerald-100
              transition-all hover:bg-[#1B4D33] active:scale-95 border"
            aria-label="Voltar"
            >
            <ArrowLeft className="h-5 w-5" />
            </button>
        ) : (
            /* Espaçador para manter o alinhamento central da logo na Etapa 1 */
            <div className="w-10 h-10" />
        )}

        {/* Branding (Apenas na ETAPA 1) */}
        {step === 1 && (
          <div className="flex flex-col items-center text-center pr-10">
            <h2 className="font-sans text-lg sm:text-xl font-normal tracking-wide text-stone-200">
              My Green Diamond
            </h2>
            <div className="mt-1 flex items-center justify-center gap-2 w-full">
              <div className="h-[1px] w-6 bg-stone-400/40" />
              <span className="text-[10px] sm:text-xs text-stone-300 font-light tracking-wider">
                For All Occasions
              </span>
              <div className="h-[1px] w-6 bg-stone-400/40" />
            </div>
          </div>
        )}

        <div className="w-0" />
      </header>

      {/* ========================================================= */}
      {/* ETAPA 1: TELA DE BOAS-VINDAS */}
      {/* ========================================================= */}
      {step === 1 && (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col justify-end pt-12 pb-6 mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight">
            Welcome To <br />
            Ireland, <span className="text-[#B08D2A]">My</span> <br />
            <span className="text-[#B08D2A]">Green</span> <br />
            Diamond
          </h1>

          <p className="mt-6 text-sm sm:text-base font-normal text-stone-200 leading-relaxed max-w-xs">
            Premium Greeting Cards, Gift Cards &amp; Bouquet Delivery
          </p>

          <div className="mt-10 w-full">
            <button
              onClick={handleNextStep}
              className="w-full rounded-2xl bg-[#B08D2A] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* ETAPA 2: SELEÇÃO DE PERFIL */}
      {/* ========================================================= */}
      {step === 2 && (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center pt-4 pb-6 mx-auto animate-fade-in">
          
          {/* Título da Opção */}
          <div className="text-center mb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100">
              Welcome
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-normal">
              How Would You Like To Continue?
            </p>
          </div>

          {/* Lista de Opções */}
          <div className="w-full space-y-4">
            
            {/* Opção 1: Customer */}
            <div 
              onClick={() => handleSelectRole('customer')}
              className={`group relative flex items-center
                 justify-between p-4 rounded-2xl border  transition-all cursor-pointer ${
                selectedRole === 'customer'
                  ? 'border-2 border-[#B08D2A] bg-[#B08D2A]/10 ring-4 ring-red-900/5 shadow-md'
                  : 'border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]'
              }`}
            >

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D2A]/30 text-[#B08D2A]">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm sm:text-base">
                    Continue As Customer
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Send Cards, Gifts &amp; Bouquets
                  </p>
                </div>
              </div>

              {selectedRole === 'customer' && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B08D2A] text-black">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              )}
            </div>

            {/* Opção 2: Partner Driver */}
            <div 
              onClick={() => handleSelectRole('driver')}
              className={`group relative flex items-center
                 justify-between p-4 rounded-2xl border  transition-all cursor-pointer ${
                  selectedRole === 'driver'
                  ? 'border-2 border-[#B08D2A] bg-[#B08D2A]/10 ring-4 ring-red-900/5 shadow-md'
                  : 'border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D2A]/30 text-[#B08D2A]">
                  <Car className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm sm:text-base">
                    Partner Driver
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Deliver Orders &amp; Earn
                  </p>
                </div>
              </div>

              {selectedRole === 'driver' && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B08D2A] text-black">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              )}
            </div>

            {/* Opção 3: Flower Shop Partner */}
            <div 
              onClick={() => handleSelectRole('partner')}
              className={`group relative flex items-center
                 justify-between p-4 rounded-2xl border  transition-all cursor-pointer ${
                    selectedRole === 'partner'
                  ? 'border-2 border-[#B08D2A] bg-[#B08D2A]/10 ring-4 ring-red-900/5 shadow-md'
                  : 'border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D2A]/30 text-[#B08D2A]">
                  <Flower className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm sm:text-base">
                    Flower Shop Partner
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Sell Bouquets On The Platform
                  </p>
                </div>
              </div>

              {selectedRole === 'partner' && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B08D2A] text-black">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              )}
            </div>

          </div>

          {/* Rodapé do Form - Continue as Guest */}
          <div className="mt-8 w-full text-center">

            <p className="mt-6 text-[11px] text-stone-400 leading-tight">
              By continuing, you agree to our{' '}
              <a href="/terms" className="text-[#B08D2A] hover:underline">
                Terms of Service
              </a>{' '}
              &amp;{' '}
              <a href="/privacy" className="text-[#B08D2A] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

        </section>
      )}

{step === 3 && (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center text-center pt-4 pb-6 mx-auto animate-fade-in">
          
          {/* Ilustração do Diamante */}
          <div className="relative mb-8 h-32 w-32 sm:h-36 sm:w-36 flex items-center justify-center">
            <Image
              src="/images/logo2.svg" 
              alt="Gold Shamrock Diamond"
              fill
              priority
              className="object-contain"
            />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-stone-100">
            Let&apos;s Get Started
          </h1>
          
          <p className="mt-3 text-sm sm:text-base font-normal text-stone-300 leading-relaxed max-w-xs">
            Access Your Account Or Create A New One.
          </p>

          <div className="mt-10 w-full space-y-4">
            <button
              onClick={() => router.push(`/login?role=${selectedRole}`)}
              className="w-full rounded-2xl bg-[#B08D2A] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Login
            </button>

            <button
              onClick={() => router.push(`/register?role=${selectedRole}`)}
              className="w-full rounded-2xl bg-[#143B27] border 
              border-emerald-800/80 py-4 text-center text-sm sm:text-base
               font-semibold text-white shadow-lg transition-all hover:bg-[#1B4D33] active:scale-[0.99]"
            >
              Create Account
            </button>
          </div>

          <div className="mt-10 w-full">
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="h-[1px] flex-1 bg-stone-500/30" />
              <button 
                onClick={() => router.push('/home')}
                className="text-xs sm:text-sm text-stone-200 hover:text-white font-medium transition-colors"
              >
                Continue as Guest
              </button>
              <div className="h-[1px] flex-1 bg-stone-500/30" />
            </div>
          </div>

        </section>
      )}

    </main>
  );
}