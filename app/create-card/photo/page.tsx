'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Camera, 
  Images, 
  Plus, 
  Trash2 
} from 'lucide-react';

type Step = 'source' | 'upload';
type PhotoSource = 'camera' | 'gallery';

interface UploadedPhoto {
  id: string;
  url: string;
}

export default function PhotoGreetingCardsFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('source');
  const [selectedSource, setSelectedSource] = useState<PhotoSource>('gallery');

  // Galeria de Fotos (Inicia com fotos mockadas idênticas ao design)
  const [photos, setPhotos] = useState<UploadedPhoto[]>([
    { id: '1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '2', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '3', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60' },
    { id: '4', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60' },
  ]);

  const [activePhotoId, setActivePhotoId] = useState<string>(photos[0]?.id || '');

  // Upload dinâmico de novas imagens
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newPhotoUrl = URL.createObjectURL(file);
      const newPhoto: UploadedPhoto = {
        id: Date.now().toString(),
        url: newPhotoUrl,
      };
      setPhotos((prev) => [...prev, newPhoto]);
      setActivePhotoId(newPhoto.id);
    }
  };

  const activePhoto = photos.find((p) => p.id === activePhotoId) || photos[0];

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
        {/* Step Header */}
              <header className="mb-8 flex w-full sm:px-12 items-center border-b 
              border-[#B08D2A]/30 bg-[#061B10]/95 px-4 py-4 backdrop-blur-md  justify-between">              <button 
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
                Step <span className="text-[#B08D2A] font-bold">1</span> of 6
              </div>
            </header>
      {/* ========================================== */}
      {/* TELA 1: CHOOSE PHOTO SOURCE (Step 1 of 6)  */}
      {/* ========================================== */}
      {currentStep === 'source' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>

            {/* Headline */}
            <div className="mb-6 sm:px-8 px-3">
              <h2 className="font-serif text-2xl font-normal leading-tight text-[#B08D2A] sm:text-3xl">
              Choose Photo Source
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Create Your Greeting Card Using Your Own Photos.
              </p>
            </div>

            {/* Source Options */}
            <div className="space-y-4">
              {/* Option: Camera */}
              <button
                type="button"
                onClick={() => setSelectedSource('camera')}
                className={`w-full flex items-center gap-4 rounded-2xl p-5 border transition-all duration-200 ${
                  selectedSource === 'camera'
                    ? 'border-[#B08D2A] bg-[#0B2C1A] ring-1 ring-[#B08D2A] shadow-md'
                    : 'border-[#B08D2A]/30 bg-[#0B2C1A]/60 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A]'
                }`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  selectedSource === 'camera'
                    ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                    : 'border-[#B08D2A]/40 bg-[#082214]/60 text-[#B08D2A]/80'
                }`}>
                  <Camera className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-stone-100">
                    Camera
                  </h3>
                  <p className="text-[11px] text-stone-300/80 font-normal">
                    Take A New Photo
                  </p>
                </div>
              </button>

              {/* Option: Photo Gallery */}
              <button
                type="button"
                onClick={() => setSelectedSource('gallery')}
                className={`w-full flex items-center gap-4 rounded-2xl p-5 border transition-all duration-200 ${
                  selectedSource === 'gallery'
                    ? 'border-[#B08D2A] bg-[#0B2C1A] ring-1 ring-[#B08D2A] shadow-md'
                    : 'border-[#B08D2A]/30 bg-[#0B2C1A]/60 hover:border-[#B08D2A]/60 hover:bg-[#0B2C1A]'
                }`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  selectedSource === 'gallery'
                    ? 'border-[#B08D2A] bg-[#082214] text-[#B08D2A]'
                    : 'border-[#B08D2A]/40 bg-[#082214]/60 text-[#B08D2A]/80'
                }`}>
                  <Images className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-stone-100">
                    Photo Gallery
                  </h3>
                  <p className="text-[11px] text-stone-300/80 font-normal">
                    Choose Existing Photos
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Footer Controls */}
      {/* Fixed Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-[#B08D2A]/30 bg-[#061B10]/95 px-4 py-4 backdrop-blur-md">
        <div className="w-full max-w-md">
              <button
                type="button"
                onClick={() => setCurrentStep('upload')}
                className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20"
              >
                Continue 
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* ========================================== */}
      {/* TELA 2: UPLOAD PHOTOS (Step 2 of 6)        */}
      {/* ========================================== */}
      {currentStep === 'upload' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentStep('source')}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Photo Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">2</span> of 6
              </div>
            </header>

            {/* Title */}
            <div className="mb-5 text-center sm:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Upload Photos
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-normal">
                Upload One Or More Photos For Your Greeting Card.
              </p>
            </div>

            {/* Main Featured Photo Preview */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl border-2 border-[#B08D2A]/40 overflow-hidden bg-[#0B2C1A] shadow-2xl mb-5">
              {activePhoto ? (
                /* eslint-disable-next-html-element */
                <img
                  src={activePhoto.url}
                  alt="Selected Preview"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-stone-400">
                  <Images className="h-10 w-10 mb-2 opacity-50" />
                  <span className="text-xs">No photos uploaded</span>
                </div>
              )}
            </div>

            {/* Thumbnail Carousel & Add Button */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 px-1 max-w-md mx-auto">
              {photos.map((photo) => {
                const isSelected = photo.id === activePhotoId;
                return (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhotoId(photo.id)}
                    className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden cursor-pointer border-2 transition-all group ${
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

                    {/* Excluir Foto (opcional no hover) */}
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

              {/* Botão de Adicionar Nova Foto (+ Input File) */}
              <label className="flex-shrink-0 w-14 h-14 rounded-xl border-2 border-dashed border-[#B08D2A]/60 bg-[#0B2C1A]/80 hover:bg-[#0B2C1A] hover:border-[#B08D2A] flex items-center justify-center cursor-pointer transition-all">
                <Plus className="h-6 w-6 text-[#B08D2A]" />
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/heic"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <p className="text-[11px] text-stone-400 text-center mt-3">
              Supported formats <br />
              <span className="text-stone-300 font-medium">JPG • PNG • HEIC</span>
            </p>
          </div>

          {/* Footer Controls */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep('source')}
                className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] active:scale-[0.99]"
              >
                Back
              </button>
              <button
                type="button"
                disabled={photos.length === 0}
                onClick={() => router.push('/photo-cards/step-3')}
                className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] transition-all shadow-md shadow-amber-900/20 disabled:opacity-50"
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