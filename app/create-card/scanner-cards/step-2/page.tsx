'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, RefreshCw, AlertCircle, Check } from 'lucide-react';

export default function ScannerFlowPage() {
  const router = useRouter();

  // Estado do fluxo: 'terms' (Step 2) -> 'camera' (Step 3)
  const [step, setStep] = useState<'terms' | 'camera'>('terms');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Estados da Câmera
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // Iniciar Câmera ao entrar no Step 3
  const startCamera = async () => {
    setCameraError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, // Dá preferência para a câmera traseira do celular
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error('Erro ao acessar a câmera:', err);
      setCameraError('Unable to access camera. Please check your browser permissions.');
    }
  };

  // Parar a câmera ao desmontar ou mudar de tela
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (step === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [step]);

  // Capturar foto
  const handleCapture = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedImage(imageDataUrl);
        stopCamera();
      }
    }
  };

  // Confirmar imagem e avançar para o Passo 4
  const handleProceedWithScan = () => {
    // Redireciona para a próxima etapa enviando o estado ou salvando no banco/contexto
    router.push('/scanner-cards/step-4');
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col bg-[#082214] text-white select-none font-sans overflow-x-hidden">
      
      {/* Background Texture */}
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

      {/* TELA 1: COPYRIGHT & TERMS (Step 2 of 9) */}
      {step === 'terms' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
              <button 
                onClick={() => router.back()}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Scanner Greeting Cards
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">2</span> of 9
              </div>
            </header>

            {/* Content Title */}
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#B08D2A] leading-tight">
                Copyright & Terms
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
                Confirm That You Understand And Accept The Copyright Requirements.
              </p>
            </div>

            {/* Terms Box */}
            <div className="rounded-2xl border border-[#B08D2A]/30 bg-[#0B2C1A]/80 p-5 sm:p-6 shadow-xl mb-6 backdrop-blur-sm">
              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300 leading-relaxed list-disc list-inside">
                <li>The physical greeting card must belong to you.</li>
                <li>Proof of purchase is required.</li>
                <li>Digitisation is intended exclusively for your personal use.</li>
                <li>
                  This does not transfer copyright ownership or grant permission to reproduce or redistribute protected content.
                </li>
              </ul>
            </div>

            {/* Checkbox */}
            <label 
              onClick={() => setAcceptedTerms(!acceptedTerms)}
              className="flex items-center gap-3 rounded-xl border border-[#B08D2A]/40 bg-[#0B2C1A]/60 p-4 cursor-pointer transition-all hover:bg-[#0B2C1A]"
            >
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                acceptedTerms 
                  ? 'bg-[#B08D2A] border-[#B08D2A] text-[#082214]' 
                  : 'border-[#B08D2A]/60 bg-transparent'
              }`}>
                {acceptedTerms && <Check className="h-4 w-4 stroke-[3]" />}
              </div>
              <span className="text-xs sm:text-sm text-stone-200">
                I have read and accept the Terms.
              </span>
            </label>
          </div>

          {/* Rodapé Fixo */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 transition-all hover:bg-[#0E351F] active:scale-[0.99]"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!acceptedTerms}
                onClick={() => setStep('camera')}
                className={`w-2/3 rounded-2xl border py-3.5 text-center text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md ${
                  acceptedTerms
                    ? 'bg-[#B08D2A] border-[#B08D2A] text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] cursor-pointer shadow-amber-900/20'
                    : 'bg-[#0B2C1A]/50 border-[#B08D2A]/30 text-stone-500 cursor-not-allowed opacity-60'
                }`}
              >
                Continue &rarr;
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* TELA 2: CAMERA SCANNER (Step 3 of 9) */}
      {step === 'camera' && (
        <div className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-4 sm:px-8 pt-6 pb-28 flex flex-col justify-between">
          <div>
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setStep('terms')}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-sm sm:text-base font-medium text-stone-100">
                Scan Greeting Card
              </h1>

              <div className="text-xs font-medium text-stone-300">
                Step <span className="text-[#B08D2A] font-bold">3</span> of 9
              </div>
            </header>

            <div className="mb-4">
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#B08D2A]">
                Position Your Card
              </h2>
              <p className="text-xs text-stone-300">
                Align the front of your card within the box below and take a clear photo.
              </p>
            </div>

            {/* Dynamic Viewfinder / Camera Screen */}
            <div className="relative w-full aspect-[3/4] max-h-[460px] rounded-2xl border-2 border-[#B08D2A]/60 overflow-hidden bg-black flex items-center justify-center shadow-2xl">
              
              {/* Caso 1: Foto Capturada */}
              {capturedImage ? (
                <div className="relative w-full h-full">
                  {/* eslint-disable-next-html-element */}
                  <img 
                    src={capturedImage} 
                    alt="Captured Card" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-[#082214]/80 text-[#B08D2A] border border-[#B08D2A] px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md">
                      Image Captured Successfully
                    </span>
                  </div>
                </div>
              ) : cameraError ? (
                /* Caso 2: Erro de Câmera */
                <div className="flex flex-col items-center text-center p-6 text-stone-300">
                  <AlertCircle className="w-10 h-10 text-rose-500 mb-3" />
                  <p className="text-xs sm:text-sm font-medium">{cameraError}</p>
                  <button 
                    onClick={startCamera}
                    className="mt-4 px-4 py-2 bg-[#0B2C1A] border border-[#B08D2A]/60 text-[#B08D2A] text-xs font-semibold rounded-xl hover:bg-[#0E351F]"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                /* Caso 3: Video Stream da Câmera Vivo */
                <>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className="w-full h-full object-cover"
                  />

                  {/* UI Overlay de Enquadramento */}
                  <div className="absolute inset-0 border-[24px] border-black/50 pointer-events-none">
                    <div className="w-full h-full border-2 border-dashed border-[#B08D2A]/80 rounded-lg relative">
                      {/* Cantoneiras Estilizadas */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B08D2A]" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B08D2A]" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B08D2A]" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B08D2A]" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Rodapé da Câmera */}
          <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-[#061B10]/95 px-4 py-4 border-t border-[#B08D2A]/30 backdrop-blur-md">
            <div className="w-full max-w-md flex items-center gap-3">
              {capturedImage ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setCapturedImage(null);
                      startCamera();
                    }}
                    className="w-1/3 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A] py-3.5 text-center text-xs sm:text-sm font-semibold text-stone-300 hover:bg-[#0E351F] flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-4 h-4" /> Retake
                  </button>
                  <button
                    type="button"
                    onClick={handleProceedWithScan}
                    className="w-2/3 rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] shadow-md shadow-amber-900/20"
                  >
                    Use This Photo &rarr;
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleCapture}
                  disabled={!!cameraError}
                  className="w-full rounded-2xl bg-[#B08D2A] border border-[#B08D2A] py-3.5 text-center text-xs sm:text-sm font-semibold text-[#082214] hover:bg-[#c6a032] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 shadow-md shadow-amber-900/20"
                >
                  <Camera className="w-4 h-4" /> Capture Card
                </button>
              )}
            </div>
          </footer>
        </div>
      )}

    </main>
  );
}