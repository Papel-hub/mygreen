'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';


export default function ForgotPasswordPage() {
  const router = useRouter();

  const [showToast, setShowToast] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  // Envio inicial do formulário (Tela 1)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Sending reset link to:', email);
      setIsSubmitted(true);
    }
  };

  // Reenvio do e-mail com ativação do Toast (Tela 2)
  const handleResendEmail = () => {
    console.log('Resending reset link to:', email);
    setShowToast(true);

    // Oculta o Toast automaticamente após 4 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  // Abrir o app de e-mail do dispositivo
  const handleOpenEmailApp = () => {
    window.location.href = 'mailto:';
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between bg-[#082214] px-6 py-8 text-white select-none overflow-hidden font-sans">
      
       {/* Imagem de Fundo Otimizada do Next.js */}
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


      {/* Header com botão de voltar */}
      <header className="relative z-10 flex w-full items-center justify-between min-h-[40px]">
        <button 
          onClick={() => {
            if (isSubmitted) {
              setIsSubmitted(false);
              setShowToast(false);
            } else {
              router.back();
            }
          }}
                      className="flex h-10 w-10 items-center justify-center
                        border-[#B08D2A] bg-[#0B2C1A] hover:bg-[#0E351F]
                         rounded-lg bg-[#143B27] text-emerald-100
                        transition-all hover:bg-[#1B4D33] active:scale-95 border"
                        aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>


        <div className="w-10 h-10" />
      </header>

      {/* ========================================================= */}
      {/* TELA 1: FORGOT PASSWORD */}
      {/* ========================================================= */}
      {!isSubmitted ? (
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col justify-center pt-2 pb-6 mx-auto animate-fade-in">
          
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
              Forgot Password
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
              Enter Your Email Address To Reset Your Password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] px-4 py-3.5 focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Mail className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-sm text-white placeholder-stone-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B08D2A] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 w-full">
            <button
              onClick={() => router.push('/login')}
              className="w-full rounded-2xl bg-[#0F3D2E] border border-emerald-800/80 py-3.5 text-center transition-all hover:bg-[#144d3b] active:scale-[0.99]"
            >
              <div className="flex items-center justify-center gap-3 w-full px-4">
                <span className="text-xs sm:text-sm text-stone-200 font-medium">
                  Back to Login
                </span>
              </div>
            </button>
          </div>

        </section>
      ) : (
        
        /* ========================================================= */
        /* TELA 2: CHECK YOUR INBOX */
        /* ========================================================= */
        <section className="relative z-10 my-auto flex w-full max-w-md flex-col justify-center pt-2 pb-6 mx-auto animate-fade-in">
          
          {/* Toast Notification (Exibido ao clicar em Resend Email) */}
          {showToast && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/90 p-4 shadow-lg transition-all">
              <span className="text-lg">✨</span>
              <p className="text-xs text-stone-200 font-normal leading-tight">
                A Fresh password reset link has been dispatched to your email
              </p>
            </div>
          )}

          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
              Check Your Inbox
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
              We&apos;ve Sent Password Reset Instructions To <span className="text-white font-medium">{email || 'Your Email'}</span>. Follow The Link To Create A New Password.
            </p>
          </div>

          <div className="w-full space-y-4">
            <button
              onClick={handleOpenEmailApp}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B88E2C] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              <span>Open Email App</span>
              <ExternalLink className="h-4 w-4" />
            </button>

            <button
              onClick={() => router.push('/login')}
              className="w-full rounded-2xl bg-[#0F3D2E] border border-emerald-800/80 py-3.5 text-center transition-all hover:bg-[#144d3b] active:scale-[0.99]"
            >
              <div className="flex items-center justify-center gap-3 w-full px-4">
                <span className="text-xs sm:text-sm text-stone-200 font-medium">
                  Back to Login
                </span>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-stone-300">
              Didn&apos;t Receive The Mail?{' '}
              <button 
                type="button"
                onClick={handleResendEmail}
                className="font-semibold text-[#B08D2A] hover:underline focus:outline-none"
              >
                Resend Email
              </button>
            </p>
          </div>

        </section>
      )}

    </main>
  );
}