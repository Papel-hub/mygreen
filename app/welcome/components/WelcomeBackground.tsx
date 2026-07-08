import Image from "next/image";

export default function WelcomeBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0">

        <Image
          src="/images/welcome-bg.webp"
          alt="Ireland Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Gradiente */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-green-950/20
            via-black/40
            to-black
          "
        />

      </div>

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-24
          -translate-x-1/2
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D4AF37]/20
          blur-[130px]
        "
      />

      {/* Vinheta */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          shadow-[inset_0_0_220px_rgba(0,0,0,.75)]
        "
      />

      {/* Partículas */}

      <span className="particle absolute left-[10%] top-[18%]" />
      <span className="particle absolute left-[85%] top-[15%]" />
      <span className="particle absolute left-[75%] top-[70%]" />
      <span className="particle absolute left-[18%] top-[82%]" />
      <span className="particle absolute left-[52%] top-[26%]" />
      <span className="particle absolute left-[38%] top-[72%]" />
    </>
  );
}