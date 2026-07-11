import Image from "next/image";

export default function WelcomeHeader() {
  return (
    <header className="flex flex-col items-center text-center pt-4 select-none">

      {/* Logo Container com Efeito de Sombra Luxuoso */}
      <div className="logo-breathing relative h-40 w-40 md:h-48 md:w-48 transition-transform duration-700 hover:scale-105">
        <Image
          src="/images/logo00.svg"
          alt="Ireland My Green Diamond"
          fill
          priority
          sizes="(max-width: 768px) 160px, 192px"
          className="object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]"
        />
      </div>

      {/* Título Principal */}
      <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] md:text-5xl">
        My Green
        <br />
        <span className="text-[#D4AF37]">Diamond</span>
      </h1>

      {/* Subtítulo */}
      <p className="mt-3 text-sm font-light text-white/80 max-w-xs md:text-base tracking-wide">
        Ireland&apos;s Premium Gift Experience
      </p>

      {/* Slogan com Espaçamento de Letras Nobre */}
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#D4AF37]/90">
        For All Occasions
      </p>

    </header>
  );
}