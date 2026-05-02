'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



export default function HomePage() {
  const router = useRouter();


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 sm:px-8 lg:px-16 pt-24 pb-12 sm:pt-32">
        <div className="max-w-6xl mx-auto">
          

      
        </div>
      </main>

      <Footer />
    </div>
  );
}