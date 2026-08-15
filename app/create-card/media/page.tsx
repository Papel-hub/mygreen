'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Type, 
  Music, 
  Image as ImageIcon, 
  Video, 
  Eye, 
  ArrowRight,
  Play,
  Pause,
  Trash2,
  Mic,
  Upload,
  Film
} from 'lucide-react';
import RealTimePreviewModal, { MediaItem } from './../components/RealTimePreviewModal';
import AddAudioModal from './../components/AddAudioModal';
import Image from 'next/image';
import type { LucideIcon } from "lucide-react";

type MediaType = {
  id: 'text' | 'audio' | 'photo' | 'video';
  label: string;
  icon: LucideIcon;
};

const mediaOptions: MediaType[] = [
  { id: 'text', label: 'Text Only', icon: Type },
  { id: 'audio', label: 'Audio', icon: Music },
  { id: 'photo', label: 'Photo', icon: ImageIcon },
  { id: 'video', label: 'Video', icon: Video },
];

export default function AddPersonalMediaPage() {
  const router = useRouter();

  // Estado da aba selecionada no topo
  const [selectedMediaType, setSelectedMediaType] = useState<'text' | 'audio' | 'photo' | 'video'>('photo');

  // Estados individuais dos conteúdos
  const [textMessage, setTextMessage] = useState(
    'You Are My Today And All Of My Tomorrows. This Emerald Shines With Only A Fraction Of Your Brilliant Light.'
  );
  const [audioData, setAudioData] = useState<{ duration: string; url: string } | null>({
    duration: '0:01',
    url: 'sample-audio-url',
  });
  const [photoUrl, setPhotoUrl] = useState<string | null>(
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500'
  );
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Modais e Player
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Simular upload de foto
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  // Monta a lista dinâmica de mídias ativas para o banner do Preview
  const getActiveMediaItems = (): MediaItem[] => {
    const items: MediaItem[] = [];

    if (textMessage.trim()) {
      items.push({ type: 'text', content: textMessage });
    }
    if (audioData) {
      items.push({ type: 'audio', content: audioData.duration });
    }
    if (photoUrl) {
      items.push({ type: 'photo', content: photoUrl });
    }
    if (videoUrl) {
      items.push({ type: 'video', content: videoUrl });
    }

    return items;
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-[#082214] text-white select-none overflow-x-hidden font-sans">
      
        <div className="absolute inset-0 pointer-events-none z-0">
            <Image
            src="/images/img1.svg" // public/images/
            alt="Background"
            fill
            priority
            quality={85}
            className="object-cover object-center opacity-30" // Ajuste a opacidade como preferir
            />
        </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-5 pt-6 pb-28">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center
            border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]
             rounded-lg text-emerald-100
              transition-all  active:scale-95 border"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1 className="text-sm font-semibold text-stone-100">
            Create Your Greeting Card
          </h1>

          <div className="text-xs font-medium text-stone-300">
            Step <span className="text-[#D4A038] font-bold">1</span> of 3
          </div>
        </header>

        {/* Title */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A038] leading-tight">
            Add Personal Media
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Add Photos, Audio, Or Video To Personalize Your Greeting Card
          </p>
        </div>

        {/* Media Selector Tabs */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-[#D4A038] mb-3">
            Personal Media
          </label>

          <div className="grid grid-cols-4 gap-2.5 rounded-2xl border border-emerald-800/80 bg-[#0B2C1A]/60 p-2">
            {mediaOptions.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedMediaType === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedMediaType(item.id)}
                  className={`flex flex-col items-center justify-center rounded-xl py-3 px-1 transition-all ${
                    isSelected
                      ? 'bg-[#B88E2C] text-stone-900 shadow-md'
                      : 'text-stone-300 hover:bg-[#123824] hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 mb-1.5" />
                  <span className="text-[10px] font-semibold tracking-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== ABA 1: TEXT ONLY ==================== */}
        {selectedMediaType === 'text' && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-[#D4A038]">
                Message
              </label>
              <span className="text-[10px] text-stone-400 font-light">
                {textMessage.length} / 500
              </span>
            </div>

            <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4 focus-within:border-[#D4A038]">
              <textarea
                rows={5}
                maxLength={500}
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* ==================== ABA 2: AUDIO ==================== */}
        {selectedMediaType === 'audio' && (
          <div className="space-y-4 mb-6">
            {!audioData ? (
              <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-[#D4A038]" />
                    <span className="text-xs font-semibold text-white">Audio Message</span>
                  </div>
                  <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
                    Max 90s
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAudioModalOpen(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700/60 bg-[#0E3A24] py-3 text-xs font-semibold text-white transition-all hover:bg-[#144d31] active:scale-[0.99]"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Record Audio Message</span>
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-[#D4A038]" />
                    <span className="text-xs font-semibold text-white">Audio Message</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {audioData.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-emerald-800/60 bg-[#082214] p-3">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B88E2C] text-stone-900 transition-transform active:scale-90"
                  >
                    {isPlayingAudio ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
                  </button>

                  <div className="flex flex-1 items-center gap-1 h-6">
                    {[30, 50, 80, 100, 60, 40, 70, 90, 100, 60, 40, 80, 50, 30, 60, 40].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`w-1 rounded-full ${i < 6 ? 'bg-[#D4A038]' : 'bg-emerald-900'}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setAudioData(null)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-900/40 bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== ABA 3: PHOTO ==================== */}
        {selectedMediaType === 'photo' && (
          <div className="space-y-4 mb-6">
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

                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-emerald-700/60 rounded-xl cursor-pointer bg-[#082214]/60 hover:bg-[#082214] transition-all">
                  <Upload className="h-6 w-6 text-[#D4A038] mb-2" />
                  <span className="text-xs font-semibold text-white">Upload Photo</span>
                  <span className="text-[10px] text-stone-400 mt-0.5">Choose an image from your device</span>
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>
            ) : (
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

                <div className="relative overflow-hidden rounded-xl border border-emerald-800/80 aspect-video w-full">
                  <img src={photoUrl} alt="Uploaded preview" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPhotoUrl(null)}
                    className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/90 text-white shadow-md hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== ABA 4: VIDEO ==================== */}
        {selectedMediaType === 'video' && (
          <div className="space-y-4 mb-6">
            {!videoUrl ? (
              <div className="rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-[#D4A038]" />
                    <span className="text-xs font-semibold text-white">Video Message</span>
                  </div>
                  <span className="rounded-md bg-[#123824] px-2 py-0.5 text-[10px] font-medium text-[#D4A038]">
                    Max 30s
                  </span>
                </div>

                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-emerald-700/60 rounded-xl cursor-pointer bg-[#082214]/60 hover:bg-[#082214] transition-all">
                  <Film className="h-6 w-6 text-[#D4A038] mb-2" />
                  <span className="text-xs font-semibold text-white">Upload Video</span>
                  <span className="text-[10px] text-stone-400 mt-0.5">MP4, MOV up to 30s</span>
                  <input type="file" accept="video/*" className="hidden" />
                </label>
              </div>
            ) : null}
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={() => router.push('/create-card/review')}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B88E2C] py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

      {/* RODAPÉ FIXO - Preview */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-800/60 bg-[#082214]/95 px-5 py-4 backdrop-blur-md">
        <div className="w-full max-w-md mx-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex w-full items-center justify-between rounded-2xl border border-emerald-800/80 bg-[#0B2C1A] px-5 py-3.5 text-xs font-semibold text-stone-200 hover:bg-[#103822] transition-all"
          >
            <span>Preview</span>
            <Eye className="h-4 w-4 text-stone-300" />
          </button>
        </div>
      </div>

      {/* Modal Gravador de Áudio */}
      <AddAudioModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        onSaveAudio={(data) => setAudioData(data)}
      />

      {/* Modal de Prévia com Banner Integrado */}
      <RealTimePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        mediaItems={getActiveMediaItems()}
      />

    </main>
  );
}