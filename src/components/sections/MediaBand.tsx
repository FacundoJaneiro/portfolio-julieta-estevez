import Image from "next/image";

const MARCAS = [
  { name: "Noticias", file: "/images/marcas/Noticias.png" },
  { name: "Crónica TV", file: "/images/marcas/Cronica TV.png" },
  { name: "Radio Monte Castro", file: "/images/marcas/Radio Monte Castro.png" },
  { name: "ETER", file: "/images/marcas/ETER.png" },
  { name: "Punto.AR", file: "/images/marcas/Punto.AR.png" },
  { name: "APUBA", file: "/images/marcas/APUBA.png" },
  { name: "SICONARA", file: "/images/marcas/SICONARA.png" },
  { name: "Ácida Revista", file: "/images/marcas/Ácida revista.png" },
  { name: "Algo Más Que Pogo", file: "/images/marcas/Algo más que pogo.png" },
];

// Ancho fijo por item para que el loop sea exacto
const ITEM_W = 200; // px
const SETS = 4;
const logos = Array.from({ length: SETS }, () => MARCAS).flat();

export default function MediaBand() {
  const totalWidth = MARCAS.length * ITEM_W * SETS;

  return (
    <section className="bg-cream border-b border-dark/8 py-6 overflow-hidden">
      <style>{`
        @keyframes marquee-loop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${MARCAS.length * ITEM_W * (SETS / 2)}px); }
        }
        .marquee-inner {
          display: flex;
          width: ${totalWidth}px;
          will-change: transform;
          animation: marquee-loop 36s linear infinite;
        }
      `}</style>

      <div className="marquee-inner">
        {logos.map((marca, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0"
            style={{ width: `${ITEM_W}px` }}
          >
            <Image
              src={marca.file}
              alt={marca.name}
              width={180}
              height={70}
              className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ maxHeight: "70px", maxWidth: "160px", width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
