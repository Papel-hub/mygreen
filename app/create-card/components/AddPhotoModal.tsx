'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { ArrowLeft, RefreshCw, Trash2 } from 'lucide-react';

interface AddPhotoModalProps {
  isOpen: boolean;
  initialPhotoUrl?: string | null;
  onClose: () => void;
  onSavePhoto: (photoUrl: string) => void;
}

export default function AddPhotoModal({
  isOpen,
  initialPhotoUrl,
  onClose,
  onSavePhoto,
}: AddPhotoModalProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(
    initialPhotoUrl || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500'
  );

  // Estados simples para simular o drag/reposition da foto
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startCoords = useRef({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleReplaceFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleRemove = () => {
    setPhotoUrl(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startCoords.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startCoords.current.x,
      y: e.clientY - startCoords.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAddToCard = () => {
    if (photoUrl) {
      onSavePhoto(photoUrl);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#082214] text-white font-sans animate-in fade-in select-none">
      {/* Background Texture Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 bg-center bg-cover"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(15, 61, 46, 0.4) 0%, rgba(8, 34, 20, 1) 100%), url('/images/shamrock-pattern.png')`
        }}
      />

      <div className="relative z-10 flex flex-col justify-between min-h-screen max-w-md mx-auto w-full px-5 py-6">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B08D2A]/50 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#123824] active:scale-95"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-sm font-semibold text-stone-100">
            Add Photo
          </h1>
          <div className="w-10" />
        </header>

        {/* Central Content */}
        <div className="my-auto text-center flex flex-col items-center py-4">
          
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A038]">
            Add a personal photo
          </h2>
          <p className="mt-1.5 text-xs text-stone-300 font-light">
            It'll Appear Inside Your Greeting Card.
          </p>

          {/* Área de Crop / Reposicionamento */}
          <div className="relative mt-6 w-full aspect-square max-w-[320px] rounded-3xl border border-emerald-800/80 bg-[#0B2C1A] p-3 shadow-2xl">
            <div 
              className="relative w-full h-full overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing border-2 border-dashed border-stone-400/50"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Personal Photo"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(1.15)`,
                  }}
                  className="w-full h-full object-cover transition-transform duration-75 pointer-events-none"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-stone-400">
                  No image selected
                </div>
              )}

              {/* Overlay Label "Drag to reposition" */}
              {photoUrl && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium text-white shadow-lg border border-white/10">
                  Drag to reposition
                </div>
              )}
            </div>
          </div>

          {/* Botões Replace / Remove */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] mt-5">
            <label className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] py-3 text-xs font-semibold text-stone-200 cursor-pointer hover:bg-[#123824] transition-all">
              <RefreshCw className="h-3.5 w-3.5 text-[#D4A038]" />
              <span>Replace</span>
              <input type="file" accept="image/*" onChange={handleReplaceFile} className="hidden" />
            </label>

            <button
              type="button"
              onClick={handleRemove}
              className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] py-3 text-xs font-semibold text-stone-200 hover:bg-[#123824] transition-all"
            >
              <Trash2 className="h-3.5 w-3.5 text-stone-400" />
              <span>Remove</span>
            </button>
          </div>

        </div>

        {/* Action Button: Add To Card */}
        <div className="pt-2 pb-4">
          <button
            onClick={handleAddToCard}
            disabled={!photoUrl}
            className="w-full rounded-2xl bg-[#B88E2C] py-4 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add To Card
          </button>
        </div>

      </div>
    </div>
  );
}