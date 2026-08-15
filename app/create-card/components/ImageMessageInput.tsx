'use client';

import { ChangeEvent } from 'react';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';

interface ImageMessageInputProps {
  photoUrl: string | null;
  onUpload: (url: string) => void;
  onRemove: () => void;
}

export default function ImageMessageInput({
  photoUrl,
  onUpload,
  onRemove,
}: ImageMessageInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className="space-y-4">
      {/* ESTADO 1: Sem foto carregada */}
      {!photoUrl ? (
        <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-[#D4A038]" />
              <span className="text-xs font-semibold text-white">Image Message</span>
            </div>
            <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
              Max 1
            </span>
          </div>

          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-emerald-700/60 rounded-xl cursor-pointer bg-[#082214]/60 hover:bg-[#082214] transition-all group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123824] mb-2 group-hover:scale-110 transition-transform">
              <Upload className="h-5 w-5 text-[#D4A038]" />
            </div>
            <span className="text-xs font-semibold text-white">Upload Photo</span>
            <span className="text-[10px] text-stone-400 mt-0.5">
              Choose an image from your device
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        /* ESTADO 2: Com foto carregada */
        <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4 animate-in fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-[#D4A038]" />
              <span className="text-xs font-semibold text-white">Image Message</span>
            </div>
            <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
              Max 1
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-emerald-800/80 aspect-[16/9] w-full">
            <img
              src={photoUrl}
              alt="Uploaded personal message"
              className="h-full w-full object-cover"
            />
            
            {/* Botão de Excluir Flutuante (Lixeira Vermelha) */}
            <button
              type="button"
              onClick={onRemove}
              className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/90 text-white shadow-lg hover:bg-red-700 active:scale-90 transition-all"
              aria-label="Remove image"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}