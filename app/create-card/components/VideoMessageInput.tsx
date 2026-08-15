'use client';

import { ChangeEvent } from 'react';
import { Upload, Trash2, Video } from 'lucide-react';

interface VideoMessageInputProps {
  videoUrl: string | null;
  duration?: string;
  onUpload: (url: string) => void;
  onRemove: () => void;
}

export default function VideoMessageInput({
  videoUrl,
  duration = '00:30 Seconds',
  onUpload,
  onRemove,
}: VideoMessageInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className="space-y-4">
      {/* ESTADO 1: Sem vídeo carregado */}
      {!videoUrl ? (
        <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-[#D4A038]" />
              <span className="text-xs font-semibold text-white">Video Message</span>
            </div>
            <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
              Max 90s
            </span>
          </div>

          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-emerald-700/60 rounded-xl cursor-pointer bg-[#082214]/60 hover:bg-[#082214] transition-all group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123824] mb-2 group-hover:scale-110 transition-transform">
              <Upload className="h-5 w-5 text-[#D4A038]" />
            </div>
            <span className="text-xs font-semibold text-white">Upload Video Message</span>
            <span className="text-[10px] text-stone-400 mt-0.5">
              Tap to select (MP4, MOV up to 100MB)
            </span>
            <input
              type="file"
              accept="video/mp4,video/quicktime,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        /* ESTADO 2: Com vídeo carregado */
        <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4 animate-in fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-[#D4A038]" />
              <span className="text-xs font-semibold text-white">Video Message</span>
            </div>
            <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
              {duration}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-emerald-800/80 aspect-[16/9] w-full bg-black">
            <video
              src={videoUrl}
              className="h-full w-full object-cover"
              controls={false}
            />
            
            {/* Botão de Excluir Flutuante */}
            <button
              type="button"
              onClick={onRemove}
              className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/90 text-white shadow-lg hover:bg-red-700 active:scale-90 transition-all z-10"
              aria-label="Remove video"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}