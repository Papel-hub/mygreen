'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { Loader2, ChevronRight, User, LogIn, Sparkles, Truck, Store } from 'lucide-react';

// Strict interface for Firebase errors
interface FirebaseError extends Error {
  code?: string;
}

export default function WelcomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [error, setError] = useState('');

  // Redirect to /home if user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/home');
      } else {
        setAuthChecking(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Handle Guest Sign In (Firebase Anonymous Authentication)
  const handleGuestLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signInAnonymously(auth);
      router.push('/home');
    } catch (err) {
      console.error(err);
      const firebaseError = err as FirebaseError;
      setError(
        firebaseError.code === 'auth/admin-restricted-operation'
          ? 'Anonymous sign-in is disabled in your Firebase Console.'
          : 'Failed to enter as a guest. Please try again.'
      );
      setLoading(false);
    }
  };

  // Safe Loading screen before showing welcome options
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#031A0E] flex flex-col items-center justify-center text-white select-none">
        <Loader2 className="animate-spin text-[#D4AF37] mb-4" size={40} />
        <p className="text-sm font-light tracking-widest text-white/70 uppercase">
          Initializing experience...
        </p>
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031A0E] text-white select-none px-4 py-12">
      
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031A0E]/60 via-[#031A0E]/80 to-[#031A0E] z-0" />

      {/* Main Container */}
      <section className="relative z-10 flex w-full max-w-md flex-col items-center bg-[#031A0E]/40 border border-[#169B62]/20 p-8 rounded-2xl backdrop-blur-md shadow-2xl animate-fade-in text-center">
        
        {/* Emerald Ambient Glow */}
        <div className="absolute -z-10 h-80 w-80 rounded-full bg-[#169B62]/15 blur-[110px] pointer-events-none" />

        {/* Branding & Logo */}
        <div className="relative mb-6 h-28 w-28 transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/logo00.svg"
            alt="Ireland My Green Diamond Logo"
            fill
            priority
            className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          />
        </div>

        {/* Title & Slogan */}
        <h1 className="font-serif text-3xl leading-tight text-white">
          My Green <span className="text-[#D4AF37]">Diamond</span>
        </h1>
        <p className="mt-2 text-xs italic tracking-[0.2em] text-[#169B62] uppercase font-medium">
          For All Occasions
        </p>

        {error && (
          <div className="mt-4 w-full p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-xs text-left">
            {error}
          </div>
        )}

        {/* Primary User Options */}
        <div className="mt-8 w-full space-y-3">
          {/* CREATE ACCOUNT */}
          <Link
            href="/register"
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#06331C]/90 to-[#042414]/95 shadow-xl active:scale-[0.98] hover:border-[#D4AF37]/70 transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#D4AF37] bg-[#D4AF37]/10 p-2 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                <User size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wider uppercase">Create Account</span>
                <span className="text-[10px] text-white/50 font-light mt-0.5">Join us to unlock premium features</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#D4AF37]" />
          </Link>

          {/* LOGIN */}
          <Link
            href="/login"
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 shadow-lg active:scale-[0.98] transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="text-white/80 bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                <LogIn size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wider uppercase">Sign In</span>
                <span className="text-[10px] text-white/50 font-light mt-0.5">Access your scheduled cards & orders</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
          </Link>

          {/* GUEST */}
          <button
            onClick={handleGuestLogin}
            disabled={loading}
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-dashed border-[#169B62]/30 bg-transparent hover:bg-[#169B62]/10 active:scale-[0.98] transition-all duration-200 group text-left disabled:opacity-50 disabled:pointer-events-none"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#169B62] bg-[#169B62]/10 p-2 rounded-lg group-hover:bg-[#169B62]/20 transition-colors">
                {loading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Sparkles size={20} strokeWidth={1.5} />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wider uppercase">Continue as Guest</span>
                <span className="text-[10px] text-white/50 font-light mt-0.5">Browse and design without an account</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#169B62]" />
          </button>
        </div>

        {/* Divider for Partners */}
        <div className="relative w-full my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-2xs uppercase tracking-[0.25em]">
            <span className="bg-[#031A0E] px-3 text-white/40">Partners portal</span>
          </div>
        </div>

        {/* Partner Options */}
        <div className="w-full grid grid-cols-2 gap-3">
          {/* PARTNERS DRIVER */}
          <Link
            href="/partner/driver"
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-[#031A0E]/30 hover:bg-[#169B62]/5 hover:border-[#169B62]/30 active:scale-[0.97] transition-all group"
          >
            <div className="text-[#D4AF37] mb-2 p-1.5 rounded-lg bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/15 transition-colors">
              <Truck size={20} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90 group-hover:text-white">
              Driver
            </span>
            <span className="text-[8px] text-white/40 font-light mt-1 text-center leading-normal">
              Deliver with us
            </span>
          </Link>

          {/* FLOWER SHOP PARTNER REGISTRATION */}
          <Link
            href="/partner/flower-shop"
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-[#031A0E]/30 hover:bg-[#169B62]/5 hover:border-[#169B62]/30 active:scale-[0.97] transition-all group"
          >
            <div className="text-[#169B62] mb-2 p-1.5 rounded-lg bg-[#169B62]/5 group-hover:bg-[#169B62]/15 transition-colors">
              <Store size={20} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90 group-hover:text-white">
              Flower Shop
            </span>
            <span className="text-[8px] text-white/40 font-light mt-1 text-center leading-normal">
              Register store
            </span>
          </Link>
        </div>

      </section>
    </main>
  );
}