'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Move, 
  Plus, 
  Trash2 
} from 'lucide-react';

type Step = 'personal-message' | 'edit-photo-card';

interface PhotoItem {
  id: string;
  url: string;
}

export default function PhotoCardMessageAndEditFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('personal-message');

  // Mensagem pessoal e contador de caracteres
  const [message, setMessage] = useState<string>('Happy Birthday, with love');
  const maxChars = 50;

  // Galeria de Fotos para o Step 6
  const [photos, setPhotos] = useState<PhotoItem[]>([
    { id: '1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '2', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '3', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '4', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60' },
  ]);

  const [activePhotoId, setActivePhotoId] = useState<string>(photos[0]?.id || '');

  const activePhoto = photos.find((p) => p.id === activePhotoId) || photos[0];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newPhotoUrl = URL.createObjectURL(file);
      const newPhoto: PhotoItem = {
        id: Date.now().toString(),
        url: newPhotoUrl,
      };
      setPhotos((prev) => [...prev, newPhoto]);
      setActivePhotoId(newPhoto.id);
    }
  };

  const handleRemovePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = photos.filter((p) => p.id !== id);
    setPhotos(filtered);
    if (activePhotoId === id && filtered.length > 0) {
      setActivePhotoId(filtered[0].id);
    }
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
      {/* TELA 1: PERSONAL MESSAGE (Step 5 of 6)    */}
      {/* ========================================== */}
      {currentStep === 'personal-message' && (
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
                Photo Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">5</span> of 6
              </div>
            </header>

            {/* Título e Subtítulo */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Personal Message
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Add A Personal Message To Your Greeting Card
              </p>
            </div>

            {/* Campo Textarea com Contador */}
            <div className="max-w-xl mx-auto space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-[#B08D2A]">Personal Message</label>
                <span className="text-stone-400 font-mono text-[11px]">
                  {message.length}/{maxChars}
                </span>
              </div>

              <textarea
                value={message}
                maxLength={maxChars}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your custom message here..."
                rows={4}
                className="w-full rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 p-4 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A] resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Rodapé de Navegação */}
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
                onClick={() => setCurrentStep('edit-photo-card')}
                className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
              >
                Continue &rarr;
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* ========================================== */}
      {/* TELA 2: EDIT PHOTO CARD (Step 6 of 6)      */}
      {/* ========================================== */}
      {currentStep === 'edit-photo-card' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentStep('personal-message')}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Photo Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">6</span> of 6
              </div>
            </header>

            {/* Título e Subtítulo */}
            <div className="mb-5 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Edit Photo Card
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Make Changes To Your Greeting Card <br /> Before Continuing
              </p>
            </div>

            {/* Preview da Foto com Botão Central de Reposicionamento */}
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-[4/3] rounded-2xl border-2 border-[#B08D2A]/40 overflow-hidden bg-[#0B2C1A] shadow-2xl mb-4 group">
              {activePhoto && (
                /* eslint-disable-next-html-element */
                <img
                  src={activePhoto.url}
                  alt="Edit Card Preview"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              )}

              {/* Ícone Central de Posicionamento/Arrastar */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-10 w-10 rounded-full bg-stone-900/80 border border-[#B08D2A] text-[#B08D2A] flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Move className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Carrossel de Miniaturas */}
            <div className="flex items-center justify-center gap-2.5 overflow-x-auto py-1 px-1 max-w-sm mx-auto mb-5">
              {photos.map((photo) => {
                const isSelected = photo.id === activePhotoId;
                return (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhotoId(photo.id)}
                    className={`relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden cursor-pointer border-2 transition-all group ${
                      isSelected
                        ? 'border-[#B08D2A] scale-105 shadow-md shadow-amber-950'
                        : 'border-[#B08D2A]/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-html-element */}
                    <img
                      src={photo.url}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />

                    {photos.length > 1 && (
                      <button
                        onClick={(e) => handleRemovePhoto(photo.id, e)}
                        className="absolute top-0.5 right-0.5 p-0.5 bg-black/70 rounded-full text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Remove photo"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}

              {/* Botão para Adicionar Nova Imagem */}
              <label className="flex-shrink-0 w-12 h-12 rounded-xl border-2 border-dashed border-[#B08D2A]/60 bg-[#0B2C1A]/80 hover:bg-[#0B2C1A] hover:border-[#B08D2A] flex items-center justify-center cursor-pointer transition-all">
                <Plus className="h-5 w-5 text-[#B08D2A]" />
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/heic"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Campo Textarea de Edição da Mensagem Pessoal */}
            <div className="max-w-sm mx-auto space-y-1">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-[#B08D2A]">Personal Message</label>
                <span className="text-stone-400 font-mono text-[10px]">
                  {message.length}/{maxChars}
                </span>
              </div>

              <textarea
                value={message}
                maxLength={maxChars}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                className="w-full rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/90 px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:border-[#B08D2A] focus:outline-none focus:ring-1 focus:ring-[#B08D2A] resize-none"
              />
            </div>
          </div>

          {/* Rodapé de Navegação Final */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep('personal-message')}
                className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] active:scale-[0.99]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => router.push('/photo-cards/preview')}
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