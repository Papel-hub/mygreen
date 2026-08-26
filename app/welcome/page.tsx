'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Gift, Car, Flower, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeOnboarding() {
  const router = useRouter();

  // Controle do estado do fluxo (1, 2 ou 3)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRole, setSelectedRole] = useState<'customer' | 'driver' | 'partner' | null>(null);

  // Navegação para a frente
  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && selectedRole) setStep(3);
  };

  // Navegação para trás (Agora habilitado nos Steps 2 e 3)
  const handleBackStep = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else router.back();
  };

  // Seleciona o perfil e avança direto para a Etapa 3
  const handleSelectRole = (role: 'customer' | 'driver' | 'partner') => {
    setSelectedRole(role);
    setStep(3);
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col justify-between bg-[#082214] px-4 py-6 sm:px-8 sm:py-8 text-white select-none overflow-hidden font-sans">
      
      {/* Imagem de Fundo Otimizada */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/img1.svg"
          alt="Background Texture"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-25"
        />
      </div>

      {/* Header Fixo */}
      <header className="relative z-10 flex w-full items-center justify-between min-h-[40px]">
        {/* Botão de Voltar Visível no Step 2 e 3 */}
        {step > 1 ? (
          <button 
            onClick={handleBackStep}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-emerald-100 transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5 text-[#B08D2A]" />
          </button>
        ) : (
          <div className="h-10 w-10" />
        )}

        {/* Branding (Apenas na ETAPA 1) */}
        {step === 1 ? (
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-base sm:text-lg font-normal tracking-wide text-stone-200">
              Ireland, my green diamond
            </h2>
            <div className="mt-0.5 flex items-center justify-center gap-2 w-full">
              <div className="h-[1px] w-6 bg-stone-400/40" />
              <span className="text-[10px] sm:text-xs text-stone-300 font-light tracking-wider whitespace-nowrap">
                For All Occasions
              </span>
              <div className="h-[1px] w-6 bg-stone-400/40" />
            </div>
          </div>
        ) : (
          <div className="h-10 w-10" />
        )}

        <div className="h-10 w-10" />
      </header>

      {/* ========================================================= */}
      {/* ETAPA 1: TELA DE BOAS-VINDAS */}
      {/* ========================================================= */}
      {step === 1 && (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col justify-center text-center items-center py-6 mx-auto animate-fade-in">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight text-stone-100">
            Welcome To <br />
            Ireland, <span className="text-[#B08D2A]">My</span> <br />
            <span className="text-[#B08D2A]">Green</span> Diamond
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-normal text-stone-300 leading-relaxed max-w-xs">
            Premium Greeting Cards, Gift Cards &amp; Bouquet Delivery
          </p>

          <div className="mt-8 w-full max-w-xs">
            <button
              onClick={handleNextStep}
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm sm:text-base font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
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
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center py-4 mx-auto animate-fade-in">
          
          <div className="text-center mb-6">
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100">
              Welcome
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
              How Would You Like To Continue?
            </p>
          </div>

          {/* Cards de Perfil */}
          <div className="w-full space-y-3">
            
            {/* Customer */}
            <div 
              onClick={() => handleSelectRole('customer')}
              className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedRole === 'customer'
                  ? 'border-2 border-[#B08D2A] bg-[#0B2C1A]/90 ring-2 ring-[#B08D2A]/30 shadow-lg'
                  : 'border-[#B08D2A]/40 bg-[#0B2C1A]/60 hover:border-[#B08D2A] hover:bg-[#0E351F]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#B08D2A]/20 text-[#B08D2A]">
                  <Gift className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-white text-xs sm:text-sm">
                    Continue As Customer
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">
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

            {/* Driver */}
            <div 
              onClick={() => handleSelectRole('driver')}
              className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedRole === 'driver'
                  ? 'border-2 border-[#B08D2A] bg-[#0B2C1A]/90 ring-2 ring-[#B08D2A]/30 shadow-lg'
                  : 'border-[#B08D2A]/40 bg-[#0B2C1A]/60 hover:border-[#B08D2A] hover:bg-[#0E351F]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#B08D2A]/20 text-[#B08D2A]">
                  <Car className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-white text-xs sm:text-sm">
                    Partner Driver
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">
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

            {/* Flower Partner */}
            <div 
              onClick={() => handleSelectRole('partner')}
              className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedRole === 'partner'
                  ? 'border-2 border-[#B08D2A] bg-[#0B2C1A]/90 ring-2 ring-[#B08D2A]/30 shadow-lg'
                  : 'border-[#B08D2A]/40 bg-[#0B2C1A]/60 hover:border-[#B08D2A] hover:bg-[#0E351F]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#B08D2A]/20 text-[#B08D2A]">
                  <Flower className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-white text-xs sm:text-sm">
                    Flower Shop Partner
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">
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

          {/* Divisor com Link "Continue as Guest" conforme a imagem */}
          <div className="mt-6 flex w-full items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-stone-500/30" />
            <Link 
              href="/home"
              className="text-xs font-light text-stone-300 hover:text-white transition-colors"
            >
              Continue as Guest
            </Link>
            <div className="h-[1px] flex-1 bg-stone-500/30" />
          </div>

          {/* Termos de Uso */}
          <p className="mt-4 text-[10px] sm:text-[11px] text-center text-stone-400 leading-tight">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-[#B08D2A] hover:underline">
              Terms of Service
            </Link>{' '}
            &amp;{' '}
            <Link href="/privacy" className="text-[#B08D2A] hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </section>
      )}

      {/* ========================================================= */}
      {/* ETAPA 3: AUTENTICAÇÃO */}
      {/* ========================================================= */}
      {step === 3 && (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center text-center py-4 mx-auto animate-fade-in">
          
          <div className="relative mb-6 h-28 w-28 sm:h-36 sm:w-36 flex items-center justify-center">
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
          
          <p className="mt-2 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed max-w-xs">
            Access Your Account Or Create A New One.
          </p>

          <div className="mt-8 w-full space-y-3">
            <button
              onClick={() => router.push(`/login?role=${selectedRole ?? 'customer'}`)}
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Login
            </button>

            <button
              onClick={() => router.push(`/register?role=${selectedRole ?? 'customer'}`)}
              className="w-full rounded-2xl bg-[#0B2C1A] border border-[#B08D2A]/50 py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0E351F] active:scale-[0.99]"
            >
              Create Account
            </button>
          </div>

        </section>
      )}

      {/* Espaçador de Rodapé */}
      <footer className="relative z-10 py-1 text-center text-[10px] text-stone-500">
        &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
      </footer>

    </main>
  );
}