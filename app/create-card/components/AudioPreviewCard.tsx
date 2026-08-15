'use client';

import { useState } from 'react';
import { Play, Pause, Mic } from 'lucide-react';

interface AudioPreviewCardProps {
  duration?: string;
}

export default function AudioPreviewCard({ duration = '0:01' }: AudioPreviewCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full rounded-2xl border border-emerald-900/40 bg-[#082214] p-3 text-white shadow-xl">
      {/* Cabeçalho do Card Interno */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Mic className="h-3.5 w-3.5 text-[#D4A038]" />
          <span className="text-[10px] font-semibold text-stone-100">Audio Message</span>
        </div>
        <span className="rounded bg-[#123824] px-1.5 py-0.5 text-[9px] font-mono text-[#D4A038]">
          {duration}
        </span>
      </div>

      {/* Controles e Waveform */}
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B88E2C] text-stone-900 shadow-md active:scale-95 transition-transform"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
          )}
        </button>

        <div className="flex flex-1 items-center gap-0.5 h-4">
          {[25, 45, 80, 100, 65, 40, 75, 90, 60, 35, 70, 50, 30, 80, 60, 40].map((height, i) => (
            <span
              key={i}
              style={{ height: `${height}%` }}
              className={`w-1 rounded-full transition-all ${
                i < 6 ? 'bg-[#D4A038]' : 'bg-emerald-800/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}