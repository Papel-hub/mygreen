'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Captura o papel enviado na URL (customer | driver | partner)
  const role = searchParams.get('role') || 'customer';

  // Estados dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in as:', role, { email, password });
    router.push('/home');
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
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B08D2A]/60 bg-[#0B2C1A] text-[#B08D2A] transition-all hover:bg-[#0E351F] active:scale-95 shadow-sm"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="h-10 w-10" />
      </header>

      {/* Form Section */}
      <section className="relative z-10 my-auto flex w-full max-w-sm sm:max-w-md flex-col justify-center py-4 mx-auto animate-fade-in">
        
        {/* Título & Subtítulo Alinhados ao Centro */}
        <div className="mb-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
            Welcome back
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal">
            Sign In To Continue Your Story.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="w-full space-y-3.5">
          
          {/* Input Email */}
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

          {/* Input Password */}
          <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3 sm:py-3.5 transition-all focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
            <Lock className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
            />
          </div>

          {/* Link Esqueceu a Senha */}
          <div className="flex justify-end pt-0.5">
            <Link 
              href="/forgot-password"
              className="text-xs font-normal text-[#B08D2A] hover:underline"
            >
              Forgot Password ?
            </Link>
          </div>

          {/* Botão Sign In */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divisor "Continue as Guest" */}
        <div className="my-5 flex w-full items-center justify-center gap-2">
          <div className="h-[1px] flex-1 bg-stone-500/30" />
          <Link 
            href="/home" 
            className="text-xs font-light text-stone-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Continue as Guest
          </Link>
          <div className="h-[1px] flex-1 bg-stone-500/30" />
        </div>

        {/* Botões de Login Social */}
        <div className="w-full space-y-2.5">
          
          <div className="grid grid-cols-2 gap-2.5">
            {/* Apple */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 py-3 px-3 text-xs font-medium text-white transition-all hover:bg-[#0E351F] active:scale-95"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.36-.58.67-1.09 1.75-.95 2.78 1.01.08 2.06-.54 2.68-1.29z"/>
              </svg>
              <span>Apple</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 py-3 px-3 text-xs font-medium text-white transition-all hover:bg-[#0E351F] active:scale-95"
            >
              <svg className="h-4 w-4 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 py-3 px-4 text-xs font-medium text-white transition-all hover:bg-[#0E351F] active:scale-95"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
              <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"/>
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
            </svg>
            <span>Google</span>
          </button>
        </div>

        {/* Rodapé - Link Criar Conta Corrigido */}
        <div className="mt-6 text-center">
          <p className="text-xs text-stone-300">
            New Here ?{' '}
            <Link 
              href={`/register?role=${role}`}
              className="font-semibold text-[#B08D2A] hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </div>

      </section>

      {/* Espaçador do Rodapé */}
      <footer className="relative z-10 py-1 text-center text-[10px] text-stone-500">
        &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
      </footer>

    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}