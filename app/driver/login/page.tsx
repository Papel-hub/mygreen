'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

// Interface para tipar os erros retornados pelo Firebase Auth
interface FirebaseError extends Error {
  code?: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  // Redirect to /home if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/home');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Email/Password Sign In
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResetMessage('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (err) {
      console.error(err);
      const firebaseError = err as FirebaseError;
      
      switch (firebaseError.code) {
        case 'auth/invalid-credential':
          setError('Invalid email or password.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        default:
          setError('An error occurred during sign in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleLogin = async () => {
    setError('');
    setResetMessage('');
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push('/home');
    } catch (err) {
      console.error(err);
      const firebaseError = err as FirebaseError;
      
      if (firebaseError.code !== 'auth/popup-closed-by-user') {
        setError('Failed to authenticate with Google.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }
    setError('');
    setResetMessage('');
    
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage('Password reset email sent successfully!');
    } catch (err) {
      console.error(err);
      const firebaseError = err as FirebaseError;
      
      if (firebaseError.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else {
        setError('Error sending password reset email.');
      }
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031A0E] text-white select-none px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031A0E]/60 via-[#031A0E]/80 to-[#031A0E] z-0" />

      {/* Form Container */}
      <section className="relative z-10 flex w-full max-w-md flex-col items-center bg-[#031A0E]/40 border border-[#169B62]/20 p-8 rounded-2xl backdrop-blur-md shadow-2xl animate-fade-in text-center">
        
        {/* Emerald Glow */}
        <div className="absolute -z-10 h-72 w-72 rounded-full bg-[#169B62]/15 blur-[100px] pointer-events-none" />

        {/* Brand Logo */}
        <div className="relative mb-6 h-24 w-24 transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/logo00.svg"
            alt="Ireland My Green Diamond"
            fill
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl leading-tight text-white">
          My Green <span className="text-[#D4AF37]">Diamond</span>
        </h2>
        <p className="mt-1 text-sm tracking-wider text-[#169B62] uppercase font-medium">
          Sign in to your account
        </p>

        {/* Notifications */}
        {error && (
          <div className="mt-4 w-full p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-xs text-left">
            {error}
          </div>
        )}
        {resetMessage && (
          <div className="mt-4 w-full p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs text-left">
            {resetMessage}
          </div>
        )}

        {/* Login Form */}
        <form className="mt-6 w-full space-y-4 text-left" onSubmit={handleEmailLogin}>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 border border-white/10 bg-[#031A0E]/80 placeholder-white/20 text-white rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={loading}
                className="text-xs text-[#D4AF37] hover:text-[#f3cd57] transition-colors bg-transparent border-none cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              type="password"
              required
              disabled={loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-white/10 bg-[#031A0E]/80 placeholder-white/20 text-white rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-2 font-serif text-sm font-semibold rounded-lg text-[#031A0E] bg-gradient-to-r from-[#D4AF37] to-[#bfa032] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? 'Please wait...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative w-full my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-2xs uppercase tracking-[0.2em]">
            <span className="bg-[#031A0E] px-3 text-white/50">Or continue with</span>
          </div>
        </div>

        {/* Google Authentication Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-white/10 rounded-lg bg-[#031A0E]/30 hover:bg-white/5 text-white/90 hover:text-white transition-all text-sm disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="mt-8 text-xs text-white/60">
          Don&apos;t have an account?{' '}
          <Link href="resister" className="text-[#D4AF37] hover:underline">
            Create one here
          </Link>
        </p>

      </section>
    </main>
  );
}