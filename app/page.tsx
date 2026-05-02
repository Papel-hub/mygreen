'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';



export default function WelcomePageRedirect() {
  const router = useRouter();
  


  useEffect(() => {

    
    // Redirecionamos usando o router do cliente
    router.replace('home');
  }, [ router]);

  // Enquanto redireciona, você pode exibir um loading simples
  return (
    <div className="min-h-screen bg-[#0F5A2A] flex items-center justify-center">
                  <Image
      
                    src="/logo0.svg"
                    alt="MY GRERN"
                    width={120}
                    height={50}
                    priority
                    style={{ height: 'auto', width: 'auto' }}
                  />

      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border[#3FAF5C]"></div>
    </div>
  );
}