import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { CONTENT } from "@/data/content";

export default function About() {
  const { about } = CONTENT;

  return (
    <section id="sobre-mi" className="bg-dark overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-2">
            <h2
              className="leading-[0.88] mb-8"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(70px, 11vw, 140px)",
                letterSpacing: "0.01em",
              }}
            >
              <span className="text-white">SOBRE </span>
              <span style={{ color: "#EC4825" }}>MÍ</span>
            </h2>

            <div
              className="text-white/80 mb-10 leading-relaxed font-light flex flex-col gap-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(15px, 1.4vw, 17px)",
                maxWidth: "480px",
              }}
            >
              <p>Soy Julieta Estévez. Locutora nacional, comunicadora, y alguien que se toma muy en serio lo de no aburrirte.</p>
              <p>Pasé por móviles en vivo, producción, radio. Y me quedé con una convicción: el mejor relato es el que te hace ver lo que estás escuchando.</p>
              <p>Me muevo entre la música, la ciencia, la tecnología y la actualidad porque siempre quise saber un poco de todo. Lo que me obsesiona es tomar algo complejo y encontrar el lenguaje que le entre a cualquiera: sin simplificarlo, sin dejar a nadie afuera.</p>
            </div>

            <p
              className="text-white/50 mb-8 font-light italic"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(14px, 1.2vw, 16px)",
              }}
            >
              ¿Tenés algo para contar? Hablemos.
            </p>

            {/* CTA */}
            <a
              href={about.cta.href}
              className="inline-block border-2 border-accent text-accent text-[11px] font-sans font-bold uppercase tracking-[0.2em] px-8 py-3 hover:bg-accent hover:text-dark transition-all duration-200 mb-10"
            >
              {about.cta.label}
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-7">
              <a
                href={about.social[0].href}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
              >
                <Instagram
                  size={17}
                  className="group-hover:text-pink transition-colors"
                />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.18em]">
                  IG
                </span>
              </a>
              <a
                href={about.social[1].href}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
              >
                <Linkedin
                  size={17}
                  className="group-hover:text-blue transition-colors"
                />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.18em]">
                  LINKEDIN
                </span>
              </a>
              <a
                href={about.social[2].href}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Right: Photo with geometric decoration */}
          <div className="order-1 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-[360px]">
              {/* Geometric background shapes */}
              <div className="absolute -top-5 -right-5 w-28 h-36 bg-primary opacity-75 z-0" />
              <div className="absolute top-16 -right-10 w-20 h-24 bg-accent opacity-60 z-0" />
              <div className="absolute -bottom-5 right-10 w-24 h-16 bg-pink opacity-55 z-0" />
              <div className="absolute bottom-16 -left-5 w-14 h-28 bg-blue opacity-50 z-0" />
              <div className="absolute top-1/2 -left-8 w-10 h-16 bg-secondary opacity-50 z-0" />

              {/* Photo */}
              <div
                className="relative z-10 w-full bg-[#2a2a2a] border border-white/10 flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {about.photo ? (
                  <Image
                    src={about.photo}
                    alt="Julieta Estévez"
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="text-center px-4">
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-white/20 text-xl">👤</span>
                    </div>
                    <p className="font-sans text-xs text-white/25 uppercase tracking-wider">
                      Foto
                    </p>
                    <p className="font-sans text-[10px] text-white/20 mt-1">
                      /public/images/about-photo.jpg
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
