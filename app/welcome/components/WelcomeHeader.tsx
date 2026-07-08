import Image from "next/image";

export default function WelcomeHeader() {
  return (
    <header className="flex flex-col items-center text-center pt-8">

      {/* Logo */}
      <div className="logo-breathing relative h-44 w-44 md:h-52 md:w-52">

        <Image
          src="/main-logo-badge.png"
          alt="Ireland My Green Diamond"
          fill
          priority
          sizes="208px"
          className="
            object-contain
            drop-shadow-[0_0_35px_rgba(212,175,55,.35)]
            select-none
          "
        />

      </div>

      {/* Nome */}
      <h1
        className="
          mt-6
          font-serif
          text-5xl
          leading-tight
          text-white
          drop-shadow-[0_0_20px_rgba(255,255,255,.25)]
          md:text-6xl
        "
      >
        My Green
        <br />
        Diamond
      </h1>

      {/* Subtítulo */}
      <p
        className="
          mt-4
          text-lg
          italic
          text-white/90
          md:text-xl
        "
      >
        Ireland&apos;s Premium Gift Experience
      </p>

      {/* Slogan */}
      <p
        className="
          mt-5
          text-xs
          font-semibold
          uppercase
          tracking-[0.45em]
          text-[#D4AF37]
        "
      >
        For All Occasions
      </p>

    </header>
  );
}