'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

interface AddAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveAudio: (audioData: { duration: string; url: string }) => void;
}

export default function AddAudioModal({
  isOpen,
  onClose,
  onSaveAudio,
}: AddAudioModalProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Timer de gravação
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= 90) {
            setIsRecording(false);
            return 90;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  if (!isOpen) return null;

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setSeconds(0);
      setIsRecording(true);
    }
  };

  const handleAdd = () => {
    onSaveAudio({
      duration: formatTime(seconds > 0 ? seconds : 1),
      url: 'sample-audio-url',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#082214] text-white font-sans animate-in fade-in">
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
            Add Audio Message
          </h1>
          <div className="w-10" /> {/* Spacer para centralizar o título */}
        </header>

        {/* Central Content */}
        <div className="my-auto text-center flex flex-col items-center py-6">
          
          {/* Title */}
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A038]">
            Record or upload audio
          </h2>
          <p className="mt-1 text-xs text-stone-300 font-light">
            Up To 90 Seconds.
          </p>

          {/* Waveform Visualizer */}
          <div className="my-10 flex items-center justify-center gap-1.5 h-12 w-full px-8">
            {[20, 35, 50, 65, 40, 80, 100, 60, 45, 90, 70, 85, 60, 40, 75, 50, 30, 20].map((height, i) => (
              <span
                key={i}
                style={{ height: isRecording ? `${Math.min(100, height + (i % 3) * 10)}%` : `${height}%` }}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isRecording ? 'bg-[#D4A038]' : 'bg-[#D4A038]/60'
                }`}
              />
            ))}
          </div>

          {/* Recording Button */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring Glow */}
            <div className={`absolute -inset-3 rounded-full border border-red-500/30 transition-all ${isRecording ? 'animate-ping opacity-75' : ''}`} />
            
            <button
              type="button"
              onClick={handleToggleRecord}
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#123824] bg-[#0B2C1A] shadow-xl active:scale-95 transition-all"
            >
              <span className={`rounded-full bg-red-500 transition-all ${isRecording ? 'h-8 w-8 rounded-md' : 'h-12 w-12'}`} />
            </button>
          </div>

          {/* Timer Display */}
          <div className="mt-8">
            <div className="text-2xl font-bold tracking-wider text-white">
              {formatTime(seconds)} <span className="text-stone-400 font-normal text-base">/ 01:30</span>
            </div>
            <p className="mt-1 text-xs text-stone-400 font-light">
              {isRecording ? 'Recording... Tap to stop' : 'Tap to start recording'}
            </p>
          </div>

          {/* Divider "Or" */}
          <div className="mt-8 flex items-center justify-center gap-4 w-full">
            <div className="h-[1px] flex-1 bg-emerald-800/60" />
            <span className="text-xs text-stone-400">Or</span>
            <div className="h-[1px] flex-1 bg-emerald-800/60" />
          </div>

          {/* Upload Button */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] py-3.5 text-xs font-semibold text-stone-200 hover:bg-[#123824] transition-all"
          >
            <Upload className="h-4 w-4 text-[#D4A038]" />
            <span>Upload From Device</span>
          </button>
        </div>

        {/* Action Button: Add To Card */}
        <div className="pt-2 pb-4">
          <button
            onClick={handleAdd}
            className="w-full rounded-2xl bg-[#B88E2C] py-4 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
          >
            Add To Card
          </button>
        </div>

      </div>
    </div>
  );
}