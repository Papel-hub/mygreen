'use client';

import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import Image from 'next/image';


export default function PasswordSuccessPage() {
  const router = useRouter();

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

      {/* Header Vazio para manter o alinhamento e proporção da tela */}
      <header className="relative z-10 flex w-full items-center justify-between min-h-[40px]">
        <div className="w-10 h-10" />
      </header>

      {/* Conteúdo Central de Sucesso */}
      <section className="relative z-10 my-auto flex w-full max-w-md flex-col items-center text-center pt-2 pb-6 mx-auto animate-fade-in">
        
        {/* Ícone de Sucesso Circulado */}
        <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-800/80 bg-[#0B2C1A] text-emerald-400 shadow-inner">
          {/* Tracinhos decorativos laterais */}
          <div className="absolute -left-2 top-1/2 h-[1px] w-1.5 -translate-y-1/2 bg-emerald-800/60" />
          <div className="absolute -right-2 top-1/2 h-[1px] w-1.5 -translate-y-1/2 bg-emerald-800/60" />
          
          <Check className="h-7 w-7 stroke-[2.5]" />
        </div>

        {/* Título & Subtítulo */}
        <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-stone-100 max-w-xs">
          Password Updated Successfully
        </h1>
        
        <p className="mt-3 text-xs sm:text-sm font-normal text-stone-300 leading-relaxed max-w-xs">
          Your Password Has Been Changed. You Can Now Sign In Using Your New Credentials.
        </p>

        {/* Botão Continue To Login */}
        <div className="mt-8 w-full">
          <button
            onClick={() => router.push('/login')}
            className="w-full rounded-2xl bg-[#B08D2A] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
          >
            Continue To Login
          </button>
        </div>

      </section>
    </main>
  );
}