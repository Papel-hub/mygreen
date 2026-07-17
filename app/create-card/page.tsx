'use client';

import React, { useState } from 'react';
import { 
 Gift, PlusSquare, Loader2, Check } from "lucide-react";

import ToFromSection from './components/ToFromSection';
import MediaSection from './components/MediaSection';
import MediaModal from './components/MediaModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


interface MediaData {
  blob: Blob;
  previewUrl: string;
  fileName: string;
}

export default function CustomizeCardScreen() {
  const [fromUser, setFromUser] = useState("Emma");
  const [toUser, setToUser] = useState("Daniel");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Estados de Mídia
  const [audioMedia, setAudioMedia] = useState<MediaData | null>(null);
  const [videoMedia, setVideoMedia] = useState<MediaData | null>(null);
  const [photoMedia, setPhotoMedia] = useState<MediaData | null>(null);

  // Controle de Interface
  const [activeModal, setActiveModal] = useState<'audio' | 'video' | 'photo' | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Define qual mídia será passada para o modal dinamicamente
  const getSavedMediaForModal = () => {
    if (activeModal === 'audio') return audioMedia;
    if (activeModal === 'video') return videoMedia;
    if (activeModal === 'photo') return photoMedia;
    return null;
  };

  const handleSaveMedia = (data: MediaData) => {
    if (activeModal === 'audio') setAudioMedia(data);
    if (activeModal === 'video') setVideoMedia(data);
    if (activeModal === 'photo') setPhotoMedia(data);
  };

  const handleFinalSubmit = async () => {
    setIsUploading(true);
    const formData = new FormData();

    formData.append('from', fromUser);
    formData.append('to', toUser);
    formData.append('message', message);
    formData.append('isAnonymous', String(isAnonymous));

    if (audioMedia) formData.append('audio', audioMedia.blob, audioMedia.fileName);
    if (videoMedia) formData.append('video', videoMedia.blob, videoMedia.fileName);
    if (photoMedia) formData.append('photo', photoMedia.blob, photoMedia.fileName);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        alert("Card successfully customized and uploaded!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch {
      alert("Failed to submit data.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen text-white relative flex flex-col bg-[#031A0E] select-none">
      
      {/* HEADER */}
      <Header title="Create Your Greeting Card" />

      {/* PROGRESS BAR */}
      <div className="bg-[#042414]/40 border-b border-[#D4AF37]/10 px-4 py-3 flex justify-between items-center z-10">
        <Step number={1} label="Occasion" status="completed" />
        <div className="h-px bg-[#D4AF37]/30 flex-1 mx-2 mt-[-12px]" />
        <Step number={2} label="Customize" status="active" />
        <div className="h-px bg-white/10 flex-1 mx-2 mt-[-12px]" />
        <Step number={3} label="Delivery" status="pending" />
        <div className="h-px bg-white/10 flex-1 mx-2 mt-[-12px]" />
        <Step number={4} label="Review" status="pending" />
      </div>

      {/* FORM CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 pb-28 z-10 max-w-xl w-full mx-auto">
        
        {/* Seção To & From (COMPONENTE INTEGRADO) */}
        <ToFromSection 
          fromUser={fromUser} 
          setFromUser={setFromUser}
          toUser={toUser} 
          setToUser={setToUser}
          isAnonymous={isAnonymous}
          setIsAnonymous={setIsAnonymous}
        />

        {/* Message Input */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
            Your Message <span className="lowercase font-light text-white/50">(Max 500 characters)</span>
          </p>
          <div className="bg-[#042414]/80 rounded-2xl p-5 border border-[#D4AF37]/20 shadow-xl">
            <textarea 
              className="w-full h-32 bg-transparent outline-none text-sm leading-relaxed text-white/90 resize-none italic placeholder-white/30"
              value={message}
              maxLength={500}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="You are a special person in my life. Thank you for being there and for all the beautiful moments we share together."
            />
            <div className="text-right text-[10px] text-[#D4AF37]/70 font-medium mt-2">
              {message.length}/500
            </div>
          </div>
        </div>

        {/* Seção de Mídias (COMPONENTE INTEGRADO) */}
        <MediaSection 
          audioMedia={audioMedia} setAudioMedia={setAudioMedia}
          videoMedia={videoMedia} setVideoMedia={setVideoMedia}
          photoMedia={photoMedia} setPhotoMedia={setPhotoMedia}
          onOpenModal={(type) => setActiveModal(type)}
        />

        {/* Gift Card Card */}
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">ADD GIFT CARD</p>
          <div className="bg-[#042414]/80 rounded-2xl p-4 border border-[#D4AF37]/20
           shadow-xl flex items-center justify-between group cursor-pointer hover:border-[#D4AF37]/60 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-[#D4AF37]/10 rounded-md flex items-center justify-center text-[#D4AF37]">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Add a gift card</span>
            </div>
            <PlusSquare className="w-5 h-5 text-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* BOTÃO SUBMIT FIXO NO MEIO/FUNDO DO ECRÃ */}
      <div className=" p-5 bg-gradient-to-t
       from-[#031A0E] via-[#031A0E]/95 to-transparent flex justify-center">
        <button 
          onClick={handleFinalSubmit}
          disabled={isUploading}
          className="w-full max-w-xl py-4 bg-[#D4AF37] hover:bg-[#bfa032] disabled:bg-[#D4AF37]/40
           text-[#031A0E] font-bold rounded-xl shadow-xl 
           tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          {isUploading ? <Loader2 className="animate-spin w-4 h-4" /> : "Preview Card"}
        </button>
      </div>

      {/* FOOTER (Adiciona um espaçamento no fundo do footer para o botão não tapar o seu conteúdo) */}
      <div className="pb-16"> 
        <Footer />
      </div>

      {/* Modal Dinâmico de Mídia (COMPONENTE INTEGRADO) */}
      {activeModal && (
        <MediaModal 
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
          onSaveMedia={handleSaveMedia}
          savedMedia={getSavedMediaForModal()}
        />
      )}
    </div>
  );
}

// Subcomponente de Estágios
function Step({ number, label, status }: { number: number; label: string; status: 'completed' | 'active' | 'pending' }) {
  const styles = {
    completed: "bg-[#169B62] text-white border-[#169B62]",
    active: "bg-[#D4AF37] text-[#031A0E] border-[#D4AF37] ring-4 ring-[#D4AF37]/15",
    pending: "bg-[#042414] text-white/30 border-white/10"
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all ${styles[status]}`}>
        {status === 'completed' ? <Check className="w-3 h-3 stroke-[3]" /> : number}
      </div>
      <span className={`text-[9px] font-bold uppercase tracking-widest ${status === 'pending' ? 'text-white/30' : 'text-[#D4AF37]'}`}>
        {label}
      </span>
    </div>
  );
}