// app/create-card/components/CreateCardHeader.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;       // O título que vai mudar por página
  backTo?: string;     // Para onde o botão de voltar deve ir (ex: "/home", "/dashboard")
}

export default function CreateCardHeader({ title, backTo = '/home' }: HeaderProps) {
  return (
    <header className="relative w-full h-20 text-white sticky top-0 z-40 overflow-hidden shadow-md">
      {/* Imagem de Fundo */}
      <Image
        src="https://tse1.mm.bing.net/th/id/OIP.vffDfFub2iP_s3K6MnvkRQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Header Background Landscape"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#042414]/90" />

      {/* Conteúdo do Header */}
      <div className="absolute inset-0 px-6 flex items-center z-10">
        <div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
          <Link 
            href={backTo} 
            className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-white flex items-center justify-center"
            aria-label="Voltar"
          >
            <ArrowLeft size={22} />
          </Link>
          <h1 className="text-xl font-semibold tracking-wide">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}