"use client";

import Image from "next/image";
import { CONTENT } from "@/data/content";


export default function Hero() {
  const handleTabCta = (tab: string) => {
    setTimeout(() => {
      const section = document.getElementById("trabajos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.dispatchEvent(new CustomEvent("activateTab", { detail: tab }));
      }
    }, 50);
  };

  return (
    <section
      id="inicio"
      className="relative pt-16 min-h-[88vh]"
      style={{ background: "#EC4825" }}
    >
      {/* ── Decorative layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

        {/* Waveform — bottom, full width */}
        <svg className="absolute bottom-0 left-0 w-full" height="72" viewBox="0 0 1200 72" preserveAspectRatio="none">
          {[14,28,46,62,54,38,70,58,34,20,42,66,50,26,16,44,68,36,22,12,40,60,52,30,18,48,64,32,24,10,38,56,48,28,16,46,62,36,22,14,50,66,40,24,12,42,58,30,20,8,34,52,44,26,14,48,60,28,18,10].map((h, i) => (
            <rect
              key={i}
              x={i * 20 + 2}
              y={(72 - h) / 2}
              width="7" height={h} rx="3.5"
              fill="rgba(242,184,75,0.45)"
              style={{ animation: `heroPulse 2s ease-in-out infinite`, animationDelay: `${i * 0.055}s` }}
            />
          ))}
        </svg>

        {/* Flecha curva grande — sale desde abajo del contenido, rodea la esquina inf-izq de la foto */}
        <svg
          className="absolute hidden lg:block"
          style={{ right: "44%", bottom: "12%" }}
          width="140" height="180"
          viewBox="0 0 140 180"
          fill="none"
        >
          <path
            d="M 10 170 Q 10 60 120 20"
            stroke="#F2B84B" strokeWidth="6" strokeLinecap="round" fill="none"
          />
          <polyline
            points="104,10 122,22 108,36"
            stroke="#F2B84B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"
          />
        </svg>

        {/* Flecha curva blanca — lado izquierdo, señala hacia el nombre */}
        <svg
          className="absolute hidden min-[390px]:block w-[90px] h-[83px] lg:w-[130px] lg:h-[120px]"
          style={{ left: "1%", top: "28%" }}
          viewBox="0 0 130 120"
          fill="none"
        >
          <path
            d="M 12 10 Q 12 100 118 80"
            stroke="rgba(255,255,255,0.65)" strokeWidth="5" strokeLinecap="round" fill="none"
          />
          <polyline
            points="100,68 120,82 102,94"
            stroke="rgba(255,255,255,0.65)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          />
        </svg>

        {/* Bloques de color — márgenes de la página */}
        <div className="absolute top-0      right-0 w-3 h-40 bg-[#F2B84B]" />
        <div className="absolute top-[38%]  right-0 w-3 h-24 bg-[#F49FB2]" />
        <div className="absolute bottom-[15%] left-0 w-3 h-20 bg-[#97B2D0]" />
        <div className="absolute top-[20%]  left-0 w-3 h-14 bg-[#F77C52]" />

        {/* Asterisco giratorio — esquina sup-izq */}
        <svg
          className="absolute top-14 left-7 opacity-35"
          width="52" height="52" viewBox="0 0 52 52" fill="none"
          style={{ animation: "heroSpin 20s linear infinite" }}
        >
          {[0,30,60,90,120,150].map((deg) => (
            <line key={deg} x1="26" y1="4" x2="26" y2="48"
              stroke="white" strokeWidth="3" strokeLinecap="round"
              transform={`rotate(${deg} 26 26)`}
            />
          ))}
        </svg>

      </div>

      {/* Photo — absolute, full height, right side */}
      {CONTENT.hero.photo && (
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%]"
          style={{ zIndex: 10 }}
        >
          <Image
            src={CONTENT.hero.photo}
            alt="Julieta Estévez"
            fill
            className="object-cover"
            style={{ objectPosition: "center top" }}
            priority
          />
        </div>
      )}

      {/* ── Stickers flotantes ── */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 5 }}>

        {/* Auriculares */}
        <div style={{ position: "absolute", left: "67%", top: "6%", transform: "rotate(-6deg)", mixBlendMode: "screen" }}>
          <div style={{ animation: "heroFloat 6s ease-in-out infinite" }}>
            <Image src="/images/hero/auriculares.png" alt="" width={130} height={130} style={{ display: "block" }} />
          </div>
        </div>

        {/* Computadora */}
        <div style={{ position: "absolute", right: "6%", top: "10%", transform: "rotate(10deg)", mixBlendMode: "screen" }}>
          <div style={{ animation: "heroFloat 7s ease-in-out infinite", animationDelay: "1s" }}>
            <Image src="/images/hero/computadora.png" alt="" width={130} height={130} style={{ display: "block" }} />
          </div>
        </div>

        {/* Megafono */}
        <div style={{ position: "absolute", left: "58%", top: "24%", transform: "scaleX(-1) rotate(-12deg)", mixBlendMode: "screen" }}>
          <div style={{ animation: "heroFloat 5.5s ease-in-out infinite", animationDelay: "0.5s" }}>
            <Image src="/images/hero/megafono.png" alt="" width={148} height={148} style={{ display: "block" }} />
          </div>
        </div>

        {/* Microfono */}
        <div style={{ position: "absolute", right: "2%", top: "38%", transform: "rotate(-50deg)", mixBlendMode: "screen" }}>
          <div style={{ animation: "heroFloat 6.5s ease-in-out infinite", animationDelay: "0.8s" }}>
            <Image src="/images/hero/microfono.png" alt="" width={130} height={130} style={{ display: "block" }} />
          </div>
        </div>

        {/* ON AIR */}
        <div style={{ position: "absolute", left: "54%", top: "46%", transform: "rotate(-8deg)", mixBlendMode: "screen" }}>
          <div style={{ animation: "heroFloat 5s ease-in-out infinite", animationDelay: "0.3s" }}>
            <Image src="/images/hero/on-air.png" alt="" width={130} height={130} style={{ display: "block" }} />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full min-h-[calc(88vh-4rem)] flex items-center">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 py-10 relative z-10 flex flex-col items-center text-center">
          {/* Name */}
          <div className="mb-3">
            <h1
              className="leading-[0.88]"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(80px, 13vw, 175px)",
                letterSpacing: "0.01em",
                color: "#F2B84B",
              }}
            >
              JULIETA
            </h1>
            <h1
              className="leading-[0.88]"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(80px, 13vw, 175px)",
                letterSpacing: "0.01em",
                color: "#F2B84B",
              }}
            >
              ESTÉVEZ
            </h1>
          </div>

          {/* Roles */}
          <p className="text-[11px] font-sans font-black tracking-[0.28em] uppercase text-white mb-7">
            {CONTENT.rolesString}
          </p>

          {/* Tagline */}
          <div className="mb-10">
            <p
              className="text-white font-bold leading-snug"
              style={{
                fontFamily: "var(--font-caveat)",
                fontSize: "clamp(18px, 2.2vw, 26px)",
              }}
            >
              Comunicación con pulso propio
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CONTENT.hero.ctas.map((cta, i) => (
              <button
                key={cta.tab}
                onClick={() => handleTabCta(cta.tab)}
                className={`text-[10px] font-sans font-black uppercase tracking-[0.18em] px-6 py-3 rounded-full transition-all duration-200 ${
                  i === 1
                    ? "bg-accent text-dark hover:bg-white hover:text-dark"
                    : "bg-white text-dark hover:bg-accent hover:text-dark"
                }`}
              >
                {cta.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark/10" />
    </section>
  );
}
