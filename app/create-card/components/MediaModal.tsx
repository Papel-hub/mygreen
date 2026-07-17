'use client';

import React, { useRef, useState, useEffect } from 'react';
import { X, Mic, Video, Camera, Square, Upload, LucideIcon } from 'lucide-react';

interface MediaData {
  blob: Blob;
  previewUrl: string;
  fileName: string;
}

interface MediaModalProps {
  activeModal: 'audio' | 'video' | 'photo';
  onClose: () => void;
  onSaveMedia: (data: MediaData) => void;
  savedMedia: MediaData | null;
}

export default function MediaModal({ activeModal, onClose, onSaveMedia, savedMedia }: MediaModalProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [cameraActive, setCameraActive] = useState(false); // Controla se a câmara de foto está aberta
  
  const audioChunksRef = useRef<Blob[]>([]);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const photoPreviewRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRecording]);

  const stopAllTracks = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
    setIsRecording(false);
    setCameraActive(false);
    setRecordingSeconds(0);
  };

  // Inicia gravação de áudio ou vídeo
  const startRecording = async () => {
    try {
      const isVideo = activeModal === 'video';
      const constraints = { 
        audio: true, 
        video: isVideo ? { width: 640, height: 480 } : false 
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setMediaStream(stream);
      audioChunksRef.current = [];

      if (isVideo && videoPreviewRef.current) {
        videoPreviewRef.current.srcObject = stream;
        videoPreviewRef.current.play();
      }

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const type = isVideo ? 'video/webm' : 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type });
        onSaveMedia({
          blob,
          previewUrl: URL.createObjectURL(blob),
          fileName: `${activeModal}-${Date.now()}.webm`,
        });
      };

      setRecordingSeconds(0);
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch {
      alert(`${activeModal} access denied or not supported.`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      stopAllTracks();
    }
  };

  // Ativa a câmara exclusivamente para tirar FOTO
  const startPhotoCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: false });
      setMediaStream(stream);
      setCameraActive(true);

      // Aguarda um ciclo para garantir que o elemento HTML vídeo renderizou
      setTimeout(() => {
        if (photoPreviewRef.current) {
          photoPreviewRef.current.srcObject = stream;
          photoPreviewRef.current.play();
        }
      }, 100);
    } catch {
      alert("Camera access denied or not supported.");
    }
  };

  // Captura o frame atual do vídeo e converte em imagem PNG
  const takePhoto = () => {
    if (photoPreviewRef.current && canvasRef.current) {
      const video = photoPreviewRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Define as proporções reais do vídeo da webcam
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        
        // Desenha o frame no canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Converte o canvas num Blob (PNG)
        canvas.toBlob((blob) => {
          if (blob) {
            onSaveMedia({
              blob,
              previewUrl: URL.createObjectURL(blob),
              fileName: `photo-${Date.now()}.png`,
            });
            stopAllTracks();
            onClose();
          }
        }, 'image/png');
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onSaveMedia({
      blob: file,
      previewUrl: URL.createObjectURL(file),
      fileName: file.name,
    });
    onClose();
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#042414] border border-[#D4AF37]/30 rounded-2xl w-full max-w-md p-6 relative shadow-2xl space-y-6">
        
        <button 
          onClick={() => { stopAllTracks(); onClose(); }} 
          className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full text-white/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h3 className="text-lg font-serif text-[#D4AF37] uppercase tracking-wider">Add {activeModal}</h3>
          <p className="text-xs text-white/60 mt-1">
            {activeModal === 'photo' ? "Capture a new snapshot or upload a file." : "Record live or choose from files."}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#031A0E] rounded-xl p-6 border border-white/5 min-h-[160px] relative overflow-hidden">
          
          {/* Feed de Vídeo (Gravação) */}
          {activeModal === 'video' && (
            <video ref={videoPreviewRef} muted playsInline className="w-full rounded-lg bg-black aspect-video mb-4 object-cover" />
          )}

          {/* Feed da Câmara de Foto */}
          {activeModal === 'photo' && cameraActive && (
            <div className="w-full space-y-4">
              <video ref={photoPreviewRef} muted playsInline className="w-full rounded-lg bg-black aspect-video object-cover" />
              <button 
                type="button" 
                onClick={takePhoto} 
                className="w-full py-3 bg-[#169B62] hover:bg-[#128051] text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" />
                Capture Photo
              </button>
            </div>
          )}

          {/* Canvas Invisível para capturar a foto */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Interface de Controle de Gravação (Áudio / Vídeo) */}
          {isRecording ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xl font-mono tracking-widest">{formatTime(recordingSeconds)}</span>
              <button type="button" onClick={stopRecording} className="p-4 bg-red-500 hover:bg-red-600 rounded-full text-white">
                <Square className="w-6 h-6 fill-white" />
              </button>
            </div>
          ) : (
            // Opções Padrão de Upload / Início de Captura (quando a câmara de foto não está ativa)
            (!cameraActive && (
              <div className="flex flex-col items-center space-y-4 w-full">
                
                {/* Botão de Captura ao vivo para Áudio/Vídeo */}
                {activeModal !== 'photo' && (
                  <button type="button" onClick={startRecording} className="flex items-center justify-center gap-2 w-full py-3 bg-[#D4AF37] hover:bg-[#bfa032] text-[#031A0E] rounded-lg text-xs font-bold uppercase tracking-wider">
                    {activeModal === 'audio' ? <Mic className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    Record Live
                  </button>
                )}

                {/* Botão para Ativar Câmara de Foto */}
                {activeModal === 'photo' && (
                  <button type="button" onClick={startPhotoCamera} className="flex items-center justify-center gap-2 w-full py-3 bg-[#D4AF37] hover:bg-[#bfa032] text-[#031A0E] rounded-lg text-xs font-bold uppercase tracking-wider">
                    <Camera className="w-4 h-4" />
                    Take Photo with Camera
                  </button>
                )}

                {/* Upload de arquivos genérico */}
                <label className="flex items-center justify-center gap-2 w-full py-3 border border-dashed border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-white/5 text-white/80 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Upload File
                  <input 
                    type="file" 
                    accept={activeModal === 'audio' ? 'audio/*' : activeModal === 'video' ? 'video/*' : 'image/*'} 
                    className="hidden" 
                    onChange={handleFileUpload} 
                  />
                </label>
              </div>
            ))
          )}
        </div>

        {savedMedia && !cameraActive && (
          <div className="p-3 bg-[#031A0E]/50 rounded-lg border border-emerald-500/10 text-center text-xs">
            <span className="text-emerald-400 font-semibold uppercase">✓ Selected:</span> {savedMedia.fileName}
          </div>
        )}

        <button 
          type="button"
          onClick={() => { stopAllTracks(); onClose(); }} 
          className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#bfa032] text-[#031A0E] font-bold rounded-lg text-xs uppercase tracking-widest"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}