'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, Check, X } from 'lucide-react';
import Image from 'next/image';


export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Requisitos de validação
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Cálculo de força da senha
  const score = [hasMinLength, hasNumber, hasSpecialChar].filter(Boolean).length;
  
  const getStrengthLabel = () => {
    if (password.length === 0) return 'Empty';
    if (score === 1) return 'Weak';
    if (score === 2) return 'Medium';
    if (score === 3) return 'Strong';
    return 'Weak';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Lógica para atualizar a senha no backend
    console.log('Password updated successfully!');
    router.push('/reset-password/success');
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

      {/* Header */}
      <header className="relative z-10 flex w-full items-center justify-between min-h-[40px]">
        <button 
          onClick={() => router.back()}
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

      {/* Conteúdo Formulario */}
      <section className="relative z-10 my-auto flex w-full max-w-md flex-col justify-center pt-2 pb-6 mx-auto">
        
        {/* Título & Subtítulo */}
        <div className="mb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
            Create a New Password
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
            Choose A Strong Password To Keep Your Account Secure. New Password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          
          {/* Input New Password */}
          <div>
            <label className="block text-xs font-medium text-[#B08D2A] mb-1.5">
              New Password
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] px-4 py-3.5 focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Lock className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent text-sm text-white placeholder-stone-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Input Confirm New Password */}
          <div>
            <label className="block text-xs font-medium text-[#B08D2A] mb-1.5">
              Confirm New Password
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/70 bg-[#0B2C1A] px-4 py-3.5 focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Lock className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-transparent text-sm text-white placeholder-stone-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Botão Update Password */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B88E2C] py-4 text-center text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Update Password
            </button>
          </div>

        </form>

        {/* Card de Força da Senha (Password Strength) */}
        <div className="mt-6 rounded-2xl border border-emerald-800/60 bg-[#0B2C1A] p-4">
          <div className="flex items-center justify-between text-xs font-medium text-stone-200 mb-2">
            <span>Password Strength</span>
            <span className="text-stone-300 font-light">{getStrengthLabel()}</span>
          </div>

          {/* Barra Visual de Força (4 Segmentos) */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className={`h-1.5 rounded-full ${score >= 1 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/30'}`} />
            <div className={`h-1.5 rounded-full ${score >= 2 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/30'}`} />
            <div className={`h-1.5 rounded-full ${score >= 3 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/30'}`} />
            <div className={`h-1.5 rounded-full ${score === 3 && password === confirmPassword && password !== '' ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/30'}`} />
          </div>

          {/* Checklist de Requisitos */}
          <div className="grid grid-cols-2 gap-y-2 text-[11px]">
            {/* Requisito 1: 8+ Characters */}
            <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasMinLength ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>8+ Characters</span>
            </div>

            {/* Requisito 2: 8+ Characters (Confirm/Match) */}
            <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasMinLength ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>8+ Characters</span>
            </div>

            {/* Requisito 3: One Number */}
            <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasNumber ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>One Number</span>
            </div>

            {/* Requisito 4: Special Character */}
            <div className={`flex items-center gap-1.5 ${hasSpecialChar ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasSpecialChar ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>Special Character</span>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}