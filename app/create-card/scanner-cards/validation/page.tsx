'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Check, X, RefreshCw, Plus } from 'lucide-react';

interface ValidationResultProps {
  initialStatus?: 'success' | 'failed';
}

export default function ValidationResultPage({ initialStatus = 'success' }: ValidationResultProps) {
  const router = useRouter();
  const [status, setStatus] = useState<'success' | 'failed'>(initialStatus);

  // Exemplo de motivos para o cenário de erro
  const failureReasons = [
    'Unreadable images',
    'Invalid proof of purchase',
  ];

  const handleContinue = () => {
    router.push('/scanner-cards/step-7');
  };

  const handleRetry = () => {
    router.push('/scanner-cards/step-3'); // Volta para a câmera/scanner
  };

  const handleUploadNew = () => {
    router.push('/scanner-cards/step-6'); // Volta para o upload de comprovante
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/img1.svg"
          alt="Background Texture"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Container Centralizado */}
      <div className="relative z-10 flex-1 w-full max-w-md mx-auto px-6 flex flex-col items-center justify-center text-center min-h-dvh py-12">
        
        {/* ========================================== */}
        {/* TELA DE SUCESSO: VALIDATION SUCCESSFUL      */}
        {/* ========================================== */}
        {status === 'success' && (
          <div className="w-full flex flex-col items-center animate-in fade-in duration-300">
            {/* Ícone de Sucesso */}
            <div className="mb-6 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-[#0B2C1A] border-2 border-[#B08D2A] flex items-center justify-center shadow-lg shadow-emerald-950/80 relative">
                <div className="absolute inset-1 rounded-full border border-[#B08D2A]/40 border-dashed" />
                <Check className="h-8 w-8 text-[#B08D2A] stroke-[2.5]" />
              </div>
            </div>

            {/* Título e Subtítulo */}
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100 mb-2">
              Validation Successful
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 font-normal mb-8 max-w-xs leading-relaxed">
              Your Card And Proof Of Purchase Were Verified.
            </p>

            {/* Botão Principal */}
            <button
              type="button"
              onClick={handleContinue}
              className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
            >
              Continue &rarr;
            </button>
          </div>
        )}

        {/* ========================================== */}
        {/* TELA DE ERRO: VALIDATION FAILED            */}
        {/* ========================================== */}
        {status === 'failed' && (
          <div className="w-full flex flex-col items-center animate-in fade-in duration-300">
            {/* Ícone de Erro */}
            <div className="mb-6 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-[#0B2C1A] border-2 border-stone-600 flex items-center justify-center shadow-lg shadow-emerald-950/80 relative">
                <div className="absolute inset-1 rounded-full border border-stone-600/50 border-dashed" />
                <X className="h-8 w-8 text-stone-300 stroke-[2.5]" />
              </div>
            </div>

            {/* Título e Subtítulo */}
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100 mb-2">
              Validation Failed
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 font-normal mb-6 max-w-xs leading-relaxed">
              Your Card And Proof Of Purchase Could Not Be Verified.
            </p>

            {/* Box com os Motivos do Erro */}
            <div className="w-full rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-5 mb-6 text-left shadow-xl backdrop-blur-md">
              <h3 className="text-xs font-semibold text-stone-200 mb-4">
                Reason
              </h3>
              
              <div className="space-y-3">
                {failureReasons.map((reason, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-xs text-stone-300 font-normal">
                      {reason}
                    </span>
                    <div className="h-5 w-5 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
                      <X className="h-3 w-3 text-rose-500 stroke-[3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ações de Recuperação */}
            <div className="w-full space-y-3">
              <button
                type="button"
                onClick={handleRetry}
                className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20 flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-4 w-4" /> Retry
              </button>

              <button
                type="button"
                onClick={handleUploadNew}
                className="w-full rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-200 hover:bg-[#0E351F] hover:border-[#B08D2A]/70 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4 text-[#B08D2A]" /> Upload New Files
              </button>
            </div>
          </div>
        )}

        {/* Toggle Auxiliar para Testes em Desenvolvimento (Pode ser removido em Produção) */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setStatus(status === 'success' ? 'failed' : 'success')}
            className="text-[10px] bg-black/40 text-stone-400 border border-stone-700 px-2 py-1 rounded hover:text-white"
          >
            Toggle Preview ({status})
          </button>
        </div>

      </div>
    </main>
  );
}