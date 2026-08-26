'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, Check, X, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Requisitos de validação
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password !== '' && password === confirmPassword;

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
    if (!passwordsMatch) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password updated successfully!');
    router.push('/reset-password/success');
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

      {/* Conteúdo do Formulário */}
      <section className="relative z-10 my-auto flex w-full max-w-sm sm:max-w-md flex-col justify-center py-4 mx-auto animate-fade-in">
        
        {/* Título & Subtítulo Centralizados */}
        <div className="mb-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100">
            Create a New Password
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
            Choose A Strong Password To Keep Your Account Secure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* Input New Password */}
          <div>
            <label className="block text-xs font-medium text-[#B08D2A] mb-1.5">
              New Password
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3 sm:py-3.5 transition-all focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Lock className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-stone-400 hover:text-white transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Input Confirm New Password */}
          <div>
            <label className="block text-xs font-medium text-[#B08D2A] mb-1.5">
              Confirm New Password
            </label>
            <div className="relative flex items-center rounded-2xl border border-[#B08D2A]/60 bg-[#0B2C1A]/80 px-4 py-3 sm:py-3.5 transition-all focus-within:border-[#B08D2A] focus-within:ring-1 focus-within:ring-[#B08D2A]">
              <Lock className="h-5 w-5 text-[#B08D2A] mr-3 shrink-0" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-stone-400 hover:text-white transition-colors focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Botão Update Password */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#B08D2A] py-3.5 sm:py-4 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a27c24] active:scale-[0.99]"
            >
              Update Password
            </button>
          </div>

        </form>

        {/* Card de Força da Senha */}
        <div className="mt-5 rounded-2xl border border-[#B08D2A]/40 bg-[#0B2C1A]/80 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-medium text-stone-200 mb-2">
            <span>Password Strength</span>
            <span className="text-[#B08D2A] font-light">{getStrengthLabel()}</span>
          </div>

          {/* Barra Visual de Força (4 Segmentos) */}
          <div className="grid grid-cols-4 gap-2 mb-3.5">
            <div className={`h-1.5 rounded-full transition-colors ${score >= 1 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/20'}`} />
            <div className={`h-1.5 rounded-full transition-colors ${score >= 2 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/20'}`} />
            <div className={`h-1.5 rounded-full transition-colors ${score >= 3 ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/20'}`} />
            <div className={`h-1.5 rounded-full transition-colors ${score === 3 && passwordsMatch ? 'bg-[#B08D2A]' : 'bg-[#B08D2A]/20'}`} />
          </div>

          {/* Checklist de Requisitos */}
          <div className="grid grid-cols-2 gap-y-2 text-[11px]">
            {/* Requisito 1: 8+ Characters */}
            <div className={`flex items-center gap-1.5 transition-colors ${hasMinLength ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasMinLength ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>8+ Characters</span>
            </div>

            {/* Requisito 2: Passwords Match */}
            <div className={`flex items-center gap-1.5 transition-colors ${passwordsMatch ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {passwordsMatch ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>Passwords Match</span>
            </div>

            {/* Requisito 3: One Number */}
            <div className={`flex items-center gap-1.5 transition-colors ${hasNumber ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasNumber ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>One Number</span>
            </div>

            {/* Requisito 4: Special Character */}
            <div className={`flex items-center gap-1.5 transition-colors ${hasSpecialChar ? 'text-[#B08D2A]' : 'text-stone-400'}`}>
              {hasSpecialChar ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <X className="h-3.5 w-3.5" />}
              <span>Special Character</span>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Branding */}
      <footer className="relative z-10 py-1 text-center text-[10px] text-stone-500">
        &copy; {new Date().getFullYear()} Ireland, My Green Diamond.
      </footer>

    </main>
  );
}