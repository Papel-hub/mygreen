'use client';

import React from 'react';
import { Mic, Video, Camera, PlusSquare, Check, LucideIcon } from 'lucide-react';

interface MediaData {
  blob: Blob;
  previewUrl: string;
  fileName: string;
}

interface MediaSectionProps {
  audioMedia: MediaData | null;
  setAudioMedia: (data: MediaData | null) => void;
  videoMedia: MediaData | null;
  setVideoMedia: (data: MediaData | null) => void;
  photoMedia: MediaData | null;
  setPhotoMedia: (data: MediaData | null) => void;
  onOpenModal: (type: 'audio' | 'video' | 'photo') => void; 
}

export default function MediaSection({
  audioMedia,
  setAudioMedia,
  videoMedia,
  setVideoMedia,
  photoMedia,
  setPhotoMedia,
  onOpenModal,
}: MediaSectionProps) {
  return (
    <div className="space-y-3">
      <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
        ADD MEDIA <span className="lowercase font-light text-white/50">(Optional - Tap to add/record)</span>
      </p>
      
      {/* Grid ajustado para 4 colunas para caberem todos os blocos na mesma linha se necessário */}
      <div className="grid grid-cols-4 gap-2">
        
        {/* Audio Tile */}
        <MediaTile 
          icon={Mic} 
          label="Audio" 
          hasValue={!!audioMedia} 
          onClick={() => onOpenModal('audio')} 
          onClear={() => setAudioMedia(null)}
        />

        {/* Video Tile */}
        <MediaTile 
          icon={Video} 
          label="Video" 
          hasValue={!!videoMedia} 
          onClick={() => onOpenModal('video')} 
          onClear={() => setVideoMedia(null)}
        />

        {/* Photo Tile */}
        <MediaTile 
          icon={Camera} 
          label="Photo" 
          hasValue={!!photoMedia} 
          onClick={() => onOpenModal('photo')} 
          onClear={() => setPhotoMedia(null)}
        />

        {/* Audio + Video Combo Tile */}
        <MediaTile 
          icon={PlusSquare} 
          label="Audio + Video" 
          hasValue={!!audioMedia && !!videoMedia} 
          onClick={() => onOpenModal('video')} // Abre o modal de vídeo que já captura áudio nativamente
          onClear={() => {
            setAudioMedia(null);
            setVideoMedia(null);
          }}
        />

      </div>
    </div>
  );
}

// Sub-componente com tipagem estrita da biblioteca Lucide
interface MediaTileProps {
  icon: LucideIcon; 
  label: string;
  hasValue: boolean;
  onClick: () => void;
  onClear: () => void;
}

function MediaTile({ icon: Icon, label, hasValue, onClick, onClear }: MediaTileProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 group relative">
      <button
        type="button"
        onClick={onClick}
        className={`w-full aspect-square bg-[#042414]/80 border rounded-xl flex flex-col items-center justify-center shadow-xl transition-all duration-300 relative ${
          hasValue 
            ? 'border-[#169B62] ring-2 ring-[#169B62]/30 scale-[1.02]' 
            : 'border-[#D4AF37]/25 hover:border-[#D4AF37] hover:bg-[#042414]'
        }`}
      >
        <Icon className={`w-5 h-5 stroke-[1.5] ${hasValue ? 'text-[#169B62]' : 'text-[#D4AF37]'}`} />
        
        {hasValue && (
          <div className="absolute -top-1 -right-1 bg-[#169B62] text-white rounded-full p-0.5 border border-[#031A0E]">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
        )}
      </button>
      
      <span className="text-[9px] font-bold text-white/70 tracking-tight uppercase text-center leading-tight whitespace-nowrap">
        {label}
      </span>

      {hasValue && (
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="text-[8px] text-red-400 hover:text-red-300 font-bold uppercase tracking-wider"
        >
          Remove
        </button>
      )}
    </div>
  );
}