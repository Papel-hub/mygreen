import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from 'lucide-react'; // Instale lucide-react ou use SVGs

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between py-12 px-6 overflow-hidden">
      
      {/* Imagem de Fundo (Paisagem da Irlanda) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://tse1.mm.bing.net/th/id/OIP.vffDfFub2iP_s3K6MnvkRQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" // Substitua pela sua imagem de paisagem
          alt="Ireland Landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Escuro para dar contraste aos botões */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Seção Superior: Logo e Título */}
{/* Seção Superior: Logo e Título */}
      <header className="relative z-10 flex flex-col items-center text-center mt-8 space-y-2">
        
        <div className="mt-4">
          <h1 className="text-5xl font-serif text-white tracking-wide leading-tight">
            Ireland
          </h1>
          <p className="text-xl text-white/90 font-light italic">
            My Green Diamond
          </p>
          <p className="text-[#D4AF37] text-xs mt-3 tracking-[0.3em] uppercase font-semibold">
            For All Occasions
          </p>
        </div>
      </header>

      {/* Seção Central: Botões Principais */}
      <main className="relative z-10 w-full max-w-xs space-y-4">
        <button className="w-full bg-[#0B4627] text-white font-bold py-4 rounded-lg shadow-lg border border-[#D4AF37]/30 active:scale-95 transition-transform">
          LOGIN
        </button>

        <button className="w-full bg-white text-[#0B4627] font-bold py-4 rounded-lg shadow-lg active:scale-95 transition-transform">
          CREATE ACCOUNT
        </button>

          <Link 
            href='/home'
            className="w-full flex items-center justify-center space-x-3 bg-black/40 border border-[#D4AF37] py-3 rounded-lg hover:bg-black/60">
            <span className="text-white text-sm font-semibold tracking-wider">CONTINUE AS GUEST</span>
              </Link>

        {/* Divisor "OR" */}
        <div className="flex items-center justify-center py-4">
          <div className="h-[1px] w-full bg-[#D4AF37]/50"></div>
          <span className="px-4 text-[#D4AF37] text-sm font-bold">OR</span>
          <div className="h-[1px] w-full bg-[#D4AF37]/50"></div>
        </div>

        {/* Botões de Parceiro */}
        <button className="w-full flex items-center justify-center space-x-3 bg-black/40 border border-[#D4AF37] py-3 rounded-lg hover:bg-black/60">
          <UserIcon className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-white text-sm font-semibold tracking-wider">PARTNER LOGIN</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-3 bg-black/40 border border-[#D4AF37] py-3 rounded-lg hover:bg-black/60">
          <div className="w-5 h-5 text-[#D4AF37]">☘️</div> {/* Ícone de trevo */}
          <div className="flex flex-col items-center">
             <span className="text-white text-[10px] leading-tight">FLOWER SHOP</span>
             <span className="text-white text-[10px] font-bold leading-tight">PARTNER REGISTRATION</span>
          </div>
        </button>
      </main>

      {/* Rodapé Opcional */}
      <footer className="relative z-10 text-white/50 text-[10px]">
        © 2026 My Green Diamond
      </footer>
    </div>
  );
}