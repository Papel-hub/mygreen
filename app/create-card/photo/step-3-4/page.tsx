'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, ChevronDown, Gem } from 'lucide-react';

type Step = 'processing' | 'theme-style';

interface ProcessingTask {
  id: string;
  label: string;
}

const tasksList: ProcessingTask[] = [
  { id: '1', label: 'Background Removal' },
  { id: '2', label: 'Colour Correction' },
  { id: '3', label: 'Brightness Adjustment' },
  { id: '4', label: 'Contrast Enhancement' },
  { id: '5', label: 'Smart Cropping' },
  { id: '6', label: 'Image Enhancement' },
  { id: '7', label: 'Composition Optimisation' },
];

export default function PhotoCardProcessingAndThemeFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('processing');

  // Estados do Step 3 (AI Processing)
  const [progress, setProgress] = useState<number>(0);
  const [completedTaskIndex, setCompletedTaskIndex] = useState<number>(-1);

  // Estados do Step 4 (Theme & Style Selects)
  const [formData, setFormData] = useState({
    theme: 'Birthday',
    border: 'Elegant',
    style: 'Premium',
    colorPalette: 'Emerald Green',
    typography: 'Classic',
  });

  // Simulação da Barra de Progresso e Checklist da IA
  useEffect(() => {
    if (currentStep !== 'processing') return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCurrentStep('theme-style'), 600); // Avança após concluir
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [currentStep]);

  // Atualiza as tarefas concluídas baseando-se no progresso %
  useEffect(() => {
    if (currentStep !== 'processing') return;
    const taskStep = 100 / tasksList.length;
    const currentCompleted = Math.floor(progress / taskStep);
    setCompletedTaskIndex(currentCompleted);
  }, [progress, currentStep]);

  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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

      {/* ========================================== */}
      {/* TELA 1: AI PHOTO PROCESSING (Step 3 of 6)  */}
      {/* ========================================== */}
      {currentStep === 'processing' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-12 flex flex-col justify-between min-h-dvh">
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
                AI Photo Processing
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">3</span> of 6
              </div>
            </header>

            {/* Diamante Central com Spinner Circular */}
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center h-24 w-24">
                {/* Anel de Progresso SVG */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-emerald-950/60 stroke-current"
                    strokeWidth="2.5"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#B08D2A] stroke-current transition-all duration-300 ease-out"
                    strokeDasharray={`${progress}, 100`}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Ícone Interior */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-[#0B2C1A] border border-[#B08D2A]/40 flex items-center justify-center shadow-inner">
                    <Gem className="h-7 w-7 text-[#B08D2A] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Label de Progresso e Percentual */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-[#B08D2A] font-semibold tracking-wide">
                  Generating Artwork
                </span>
                <span className="text-stone-300 font-medium">
                  {progress}%
                </span>
              </div>
              {/* Barra de Progresso Linear */}
              <div className="w-full h-2 rounded-full bg-[#0B2C1A] border border-[#B08D2A]/30 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#947422] to-[#B08D2A] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Box com o List de Etapas da IA */}
            <div className="max-w-md mx-auto rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-5 space-y-3 shadow-xl backdrop-blur-md">
              {tasksList.map((task, idx) => {
                const isDone = idx < completedTaskIndex;
                return (
                  <div key={task.id} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`transition-colors ${isDone ? 'text-stone-200 font-medium' : 'text-stone-400/80'}`}>
                      {task.label}
                    </span>

                    <div className={`h-5 w-5 rounded-full flex items-center justify-center border transition-all ${
                      isDone 
                        ? 'bg-[#B08D2A] border-[#B08D2A] text-[#082214]' 
                        : 'border-stone-600 bg-transparent'
                    }`}>
                      {isDone && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Text */}
            <div className="text-center mt-6 space-y-1">
              <p className="text-xs font-semibold text-stone-200 tracking-wider">
                Please wait <span className="text-[#B08D2A] tracking-widest animate-pulse">•••</span>
              </p>
              <p className="text-[11px] text-stone-400 italic">
                Artificial intelligence is enhancing your photos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* TELA 2: THEME & STYLE (Step 4 of 6)       */}
      {/* ========================================== */}
      {currentStep === 'theme-style' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
              <button 
                onClick={() => setCurrentStep('processing')}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Create Your Greeting Card
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">4</span> of 6
              </div>
            </header>

            {/* Subtítulo */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Theme & Style
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Select The Creative Preferences For Your AI-Generated Greeting Card.
              </p>
            </div>

            {/* Formulário com Seletores Customizados */}
            <div className="space-y-4 max-w-xl mx-auto">
              
              {/* Select: Theme */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Theme</label>
                <div className="relative">
                  <select
                    value={formData.theme}
                    onChange={(e) => handleSelectChange('theme', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-4 py-3.5 text-xs sm:text-sm text-stone-100 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Christmas">Christmas</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B08D2A] pointer-events-none" />
                </div>
              </div>

              {/* Select: Border */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Border</label>
                <div className="relative">
                  <select
                    value={formData.border}
                    onChange={(e) => handleSelectChange('border', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-4 py-3.5 text-xs sm:text-sm text-stone-100 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
                  >
                    <option value="Elegant">Elegant</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Vintage Gold">Vintage Gold</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B08D2A] pointer-events-none" />
                </div>
              </div>

              {/* Select: Style */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Style</label>
                <div className="relative">
                  <select
                    value={formData.style}
                    onChange={(e) => handleSelectChange('style', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-4 py-3.5 text-xs sm:text-sm text-stone-100 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
                  >
                    <option value="Premium">Premium</option>
                    <option value="Modern">Modern</option>
                    <option value="Artistic">Artistic</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B08D2A] pointer-events-none" />
                </div>
              </div>

              {/* Select: Colour Palette */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Colour Palette</label>
                <div className="relative">
                  <select
                    value={formData.colorPalette}
                    onChange={(e) => handleSelectChange('colorPalette', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-4 py-3.5 text-xs sm:text-sm text-stone-100 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
                  >
                    <option value="Emerald Green">Emerald Green</option>
                    <option value="Royal Gold">Royal Gold</option>
                    <option value="Classic Ivory">Classic Ivory</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B08D2A] pointer-events-none" />
                </div>
              </div>

              {/* Select: Typography */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">Typography</label>
                <div className="relative">
                  <select
                    value={formData.typography}
                    onChange={(e) => handleSelectChange('typography', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-4 py-3.5 text-xs sm:text-sm text-stone-100 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A]"
                  >
                    <option value="Classic">Classic</option>
                    <option value="Serif Elegant">Serif Elegant</option>
                    <option value="Handwritten Script">Handwritten Script</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B08D2A] pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Rodapé com Botões Back e Continue */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep('processing')}
                className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] active:scale-[0.99]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => router.push('/photo-cards/step-5')}
                className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
              >
                Continue &rarr;
              </button>
            </div>
          </footer>
        </div>
      )}

    </main>
  );
}