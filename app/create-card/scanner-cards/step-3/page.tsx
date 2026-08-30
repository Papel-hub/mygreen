'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Receipt, 
  FileText, 
  ShoppingBag, 
  Upload, 
  Camera, 
  Check, 
  Loader2 
} from 'lucide-react';

type ProofType = 'receipt' | 'invoice' | 'store';

interface ProofOption {
  id: ProofType;
  label: string;
  icon: React.ElementType;
}

const proofOptions: ProofOption[] = [
  { id: 'receipt', label: 'Receipt', icon: Receipt },
  { id: 'invoice', label: 'Invoice', icon: FileText },
  { id: 'store', label: 'Store Purchase Confirmation', icon: ShoppingBag },
];

export default function ProofAndValidationFlow() {
  const router = useRouter();

  // Gerenciamento do fluxo de telas: 'upload' (Step 6) -> 'validation'
  const [currentStep, setCurrentStep] = useState<'upload' | 'validation'>('upload');

  // Estados da Tela 1 (Upload Proof of Purchase)
  const [selectedProofType, setSelectedProofType] = useState<ProofType>('receipt');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Estados da Tela 2 (AI Validation Progress)
  const [validationSteps, setValidationSteps] = useState({
    imageQuality: false,
    cardAuthenticity: false,
    proofOfPurchase: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  // Simulação sequencial da validação de IA ao entrar na tela de Validação
  useEffect(() => {
    if (currentStep === 'validation') {
      const timer1 = setTimeout(() => {
        setValidationSteps((prev) => ({ ...prev, imageQuality: true }));
      }, 1200);

      const timer2 = setTimeout(() => {
        setValidationSteps((prev) => ({ ...prev, cardAuthenticity: true }));
      }, 2600);

      const timer3 = setTimeout(() => {
        setValidationSteps((prev) => ({ ...prev, proofOfPurchase: true }));
      }, 4000);

      // Redireciona para o próximo passo (Step 7) após a conclusão total
      const timerComplete = setTimeout(() => {
        router.push('/scanner-cards/step-7');
      }, 5200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timerComplete);
      };
    }
  }, [currentStep, router]);

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Texture Background */}
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

      {/* ========================================== */}
      {/* TELA 1: UPLOAD PROOF OF PURCHASE (Step 6)  */}
      {/* ========================================== */}
      {currentStep === 'upload' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
              <button 
                onClick={() => router.back()}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Scanner Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">6</span> of 9
              </div>
            </header>

            {/* Title & Description */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Upload Proof of Purchase
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Upload One Of The Following
              </p>
            </div>

            {/* Selector Radio List */}
            <div className="space-y-3 mb-6">
              {proofOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedProofType === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setSelectedProofType(option.id);
                      setUploadedFile(null); // Reseta o arquivo ao trocar o tipo
                    }}
                    className={`w-full flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 border ${
                      isSelected
                        ? 'border-[#B08D2A] bg-[#0B2C1A] ring-1 ring-[#B08D2A]'
                        : 'border-[#B08D2A]/30 bg-[#0B2C1A]/50 hover:border-[#B08D2A]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${isSelected ? 'text-[#B08D2A]' : 'text-stone-400'}`} />
                      <span className="text-xs sm:text-sm font-medium text-stone-200">
                        {option.label}
                      </span>
                    </div>

                    {/* Radio Indicator */}
                    <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-[#B08D2A] bg-[#082214]' : 'border-stone-500'
                    }`}>
                      {isSelected && <div className="h-2 w-2 rounded-full bg-[#B08D2A]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Upload Area */}
            <div className="rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/70 p-4 sm:p-5 backdrop-blur-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {React.createElement(
                    proofOptions.find((p) => p.id === selectedProofType)?.icon || Receipt,
                    { className: 'h-4 w-4 text-[#B08D2A]' }
                  )}
                  <span className="text-xs font-semibold text-stone-200 capitalized">
                    {proofOptions.find((p) => p.id === selectedProofType)?.label}
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase bg-[#B08D2A]/20 text-[#B08D2A] px-2 py-0.5 rounded border border-[#B08D2A]/40">
                  Selected
                </span>
              </div>

              {/* Drag and Drop Zone */}
              <label className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-[#B08D2A]/50 rounded-xl cursor-pointer bg-[#082214]/60 hover:bg-[#082214] hover:border-[#B08D2A] transition-all">
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <Upload className="h-6 w-6 text-[#B08D2A] mb-2" />
                  <span className="text-xs text-stone-300 font-medium">
                    {uploadedFile ? uploadedFile.name : 'Upload File'}
                  </span>
                  {uploadedFile && (
                    <span className="text-[10px] text-[#B08D2A] mt-1">Click to change file</span>
                  )}
                </div>
                <input 
                  type="file" 
                  accept="image/*,application/pdf" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>

            {/* Separator */}
            <div className="flex items-center justify-center space-x-3 text-[11px] text-stone-400 my-4">
              <span className="h-px bg-[#B08D2A]/20 flex-1"></span>
              <span>or</span>
              <span className="h-px bg-[#B08D2A]/20 flex-1"></span>
            </div>

            {/* Camera Option Button */}
            <button
              type="button"
              onClick={() => {
                // Simula foto rápida selecionando um arquivo dummy
                setUploadedFile(new File([''], 'receipt_photo.jpg', { type: 'image/jpeg' }));
              }}
              className="w-full rounded-xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3 text-center text-xs font-bold uppercase tracking-wider text-stone-200 hover:bg-[#0E351F] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Camera className="h-4 w-4 text-[#B08D2A]" /> Take Photo
            </button>
          </div>

          {/* Footer Controls */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] active:scale-[0.99]"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!uploadedFile}
                onClick={() => setCurrentStep('validation')}
                className={`w-2/3 rounded-2xl border py-3.5 text-center text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md ${
                  uploadedFile
                    ? 'bg-[#B08D2A] border-[#B08D2A] text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] cursor-pointer shadow-amber-900/20'
                    : 'bg-[#0B2C1A]/50 border-[#B08D2A]/30 text-stone-500 cursor-not-allowed opacity-60'
                }`}
              >
                Continue &rarr;
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* ========================================== */}
      {/* TELA 2: AI VALIDATION SCREEN               */}
      {/* ========================================== */}
      {currentStep === 'validation' && (
        <div className="relative z-10 flex-1 w-full max-w-md mx-auto px-6 flex flex-col items-center justify-center text-center min-h-dvh">
          
          {/* Circular Diamond/AI Loader Visual */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Progress Ring */}
            <div className="w-28 h-28 rounded-full border-2 border-emerald-900/60 border-t-[#B08D2A] animate-spin" />
            
            {/* Inner Glowing Badge Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-[#0B2C1A] border border-[#B08D2A]/80 flex items-center justify-center shadow-lg shadow-emerald-950">
                <svg className="w-8 h-8 text-[#B08D2A]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.8L17.6 9 12 16.2 6.4 9 12 5.8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-100 mb-8 leading-snug max-w-xs">
            Artificial Intelligence Is Validating
          </h2>

          {/* Checklist Box */}
          <div className="w-full rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-5 space-y-4 text-left shadow-2xl backdrop-blur-md mb-8">
            {/* Check 1: Image Quality */}
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-stone-200">
                Image Quality
              </span>
              <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                validationSteps.imageQuality 
                  ? 'bg-[#B08D2A] text-[#082214]' 
                  : 'border border-stone-600 bg-transparent'
              }`}>
                {validationSteps.imageQuality ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : (
                  <Loader2 className="h-3.5 w-3.5 text-stone-500 animate-spin" />
                )}
              </div>
            </div>

            {/* Check 2: Card Authenticity */}
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-stone-200">
                Card Authenticity
              </span>
              <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                validationSteps.cardAuthenticity 
                  ? 'bg-[#B08D2A] text-[#082214]' 
                  : 'border border-stone-600 bg-transparent'
              }`}>
                {validationSteps.cardAuthenticity ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : validationSteps.imageQuality ? (
                  <Loader2 className="h-3.5 w-3.5 text-stone-500 animate-spin" />
                ) : null}
              </div>
            </div>

            {/* Check 3: Proof of Purchase */}
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-stone-200">
                Proof of Purchase
              </span>
              <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                validationSteps.proofOfPurchase 
                  ? 'bg-[#B08D2A] text-[#082214]' 
                  : 'border border-stone-600 bg-transparent'
              }`}>
                {validationSteps.proofOfPurchase ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : validationSteps.cardAuthenticity ? (
                  <Loader2 className="h-3.5 w-3.5 text-stone-500 animate-spin" />
                ) : null}
              </div>
            </div>
          </div>

          {/* Processing Footer Text */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-stone-300 flex items-center justify-center gap-1.5">
              Processing <span className="text-[#B08D2A] animate-pulse">•••</span>
            </p>
            <p className="text-[10px] text-stone-400">
              This may take a few moments
            </p>
          </div>
        </div>
      )}

    </main>
  );
}