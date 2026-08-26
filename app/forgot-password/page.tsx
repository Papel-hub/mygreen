'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  // Abrir o app de e-mail do dispositivo
  const handleOpenEmailApp = () => {
    window.location.href = 'mailto:';
  };

  return (
    <main className="relative flex min-h-dvh w-full flex-col justify-between bg-[#082214] px-4 py-6 sm:px-8 sm:py-8 text-white select-none overflow-hidden font-sans">
      
      {/* Imagem de Fundo Otimizada */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/img1.svg"
          alt="Background Texture"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-25"
        />
      </div>

      {/* Header com Botão Voltar */}
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
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="h-10 w-10" />
      </header>

      {/* ========================================================= */}
      {/* TELA 1: FORGOT PASSWORD                                   */}
      {/* ========================================================= */}
      {!isSubmitted ? (
        <section className="relative z-10 my-auto flex w-full max-w-sm sm:max-w-md flex-col justify-center py-4 mx-auto animate-fade-in">
          
          <div className="mb-6 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
              Forgot Password
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
              Enter Your Email Address To Reset Your Password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3 sm:py-3.5 transition-all focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Mail className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Send Reset Link
            </button>
          </form>

          {/* Divisor Voltar para o Login */}
          <div className="mt-6 flex w-full items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-stone-500/30" />
            <Link 
              href="/login" 
              className="text-xs font-light text-stone-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Back to Login
            </Link>
            <div className="h-[1px] flex-1 bg-stone-500/30" />
          </div>

        </section>
      ) : (
        
        /* ========================================================= */
        /* TELA 2: CHECK YOUR INBOX                                  */
        /* ========================================================= */
        <section className="relative z-10 my-auto flex w-full max-w-sm sm:max-w-md flex-col justify-center py-4 mx-auto animate-fade-in">
          
          {/* Toast Notification */}
          {showToast && (
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/90 p-3.5 shadow-lg transition-all animate-bounce">
              <span className="text-base">✨</span>
              <p className="text-xs text-stone-200 font-normal leading-tight">
                A fresh password reset link has been dispatched to your email.
              </p>
            </div>
          )}

          <div className="mb-6 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
              Check Your Inbox
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed px-2">
              We&apos;ve Sent Password Reset Instructions To <span className="text-white font-medium">{email || 'Your Email'}</span>. Follow The Link To Create A New Password.
            </p>
          </div>

          <div className="w-full space-y-3.5">
            {/* Input E-mail Exibido (Desabilitado/Read-only) */}
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3 sm:py-3.5 opacity-90">
              <Mail className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type="email"
                value={email || 'Email Address'}
                readOnly
                disabled
                className="w-full bg-transparent text-xs sm:text-sm text-stone-200 focus:outline-none cursor-default"
              />
            </div>

            {/* Botão Principal: Open Email App */}
            <button
              onClick={handleOpenEmailApp}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              <span>Open Email App</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          {/* Botão Secundário / Divisor Estilizado para Login */}
          <div className="mt-5 flex w-full items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-stone-500/30" />
            <button
              onClick={() => router.push('/login')}
              className="text-xs font-light text-stone-300 hover:text-white transition-colors whitespace-nowrap focus:outline-none"
            >
              Back to Login
            </button>
            <div className="h-[1px] flex-1 bg-stone-500/30" />
          </div>

          {/* Reenviar Email */}
          <div className="mt-6 text-center">
            <p className="text-xs text-stone-300">
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

      {/* Footer Branding */}
      <footer className="relative z-10 py-1 text-center text-[10px] text-stone-500">
        &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
      </footer>

    </main>
  );
}