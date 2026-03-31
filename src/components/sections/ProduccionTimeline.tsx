"use client";

import type { WorkItem } from "@/data/portfolio";

const ACCENT = "#F2B84B";

function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider"
          style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ImagePlaceholder({ src, alt }: { src?: string; alt: string }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: "16/9", backgroundColor: `${ACCENT}12` }}
    >
      {src && src !== "/images/produccion/monte-castro.jpg" && src !== "/images/produccion/cronica-tv.jpg" && src !== "/images/produccion/ip-noticias.jpg" && src !== "/images/produccion/eter-proyectos.jpg" ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2"
          style={{ color: `${ACCENT}50` }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Foto próximamente
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProduccionTimeline({ items }: { items: WorkItem[] }) {
  return (
    <div className="relative">
      {/* Línea vertical de conexión — solo desktop */}
      <div
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          left: "28px",
          width: "1px",
          background: `linear-gradient(to bottom, transparent, ${ACCENT}40 8%, ${ACCENT}40 92%, transparent)`,
        }}
      />

      <div className="flex flex-col gap-16 md:gap-20">
        {items.map((item, i) => (
          <div key={item.id} className="relative">
            {/* Layout: número + contenido */}
            <div className="flex gap-6 md:gap-12">

              {/* Número — desktop */}
              <div className="hidden md:flex flex-col items-center" style={{ width: "56px", flexShrink: 0 }}>
                <div
                  className="flex items-center justify-center rounded-full font-black z-10 relative"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#141414",
                    border: `2px solid ${ACCENT}`,
                    fontFamily: "var(--font-bebas)",
                    fontSize: "22px",
                    letterSpacing: "0.05em",
                    color: ACCENT,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                {/* Número mobile */}
                <div
                  className="md:hidden inline-flex items-center justify-center rounded-full font-black mb-4"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#141414",
                    border: `2px solid ${ACCENT}`,
                    fontFamily: "var(--font-bebas)",
                    fontSize: "17px",
                    letterSpacing: "0.05em",
                    color: ACCENT,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Source / Medio */}
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    opacity: 0.7,
                  }}
                >
                  {item.source}
                </p>

                {/* Título */}
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "0.03em",
                    lineHeight: 0.95,
                    color: "#141414",
                  }}
                >
                  {item.title}
                </h3>

                {/* Layout interior: texto + imagen en 2 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div className="flex flex-col gap-5">
                    {/* Cuerpo narrativo */}
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "#141414",
                        opacity: 0.7,
                      }}
                    >
                      {item.body}
                    </p>

                    <TagList tags={item.tags} />

                    {/* Links para el último item */}
                    {(item.url && item.url !== "#") || (item.secondaryUrl && item.secondaryUrl !== "#") ? (
                      <div className="flex flex-wrap gap-3">
                        {item.url && item.url !== "#" && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:opacity-80"
                            style={{ backgroundColor: "#141414", color: ACCENT }}
                          >
                            De ponchos y banderas →
                          </a>
                        )}
                        {item.secondaryUrl && item.secondaryUrl !== "#" && (
                          <a
                            href={item.secondaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:opacity-80"
                            style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT }}
                          >
                            {item.secondaryUrlLabel} →
                          </a>
                        )}
                      </div>
                    ) : item.id === "pro-eter" ? (
                      /* Placeholder cuando los links aún no están */
                      <div
                        className="flex flex-wrap gap-3"
                      >
                        <span
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-40"
                          style={{ border: `1.5px dashed ${ACCENT}`, color: ACCENT }}
                        >
                          De ponchos y banderas — link próximamente
                        </span>
                        <span
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider opacity-40"
                          style={{ border: `1.5px dashed ${ACCENT}`, color: ACCENT }}
                        >
                          La bella y la bestia — link próximamente
                        </span>
                      </div>
                    ) : null}
                  </div>

                  {/* Imagen */}
                  <ImagePlaceholder src={item.thumbnailUrl} alt={item.title} />
                </div>

                {/* Separador */}
                {i < items.length - 1 && (
                  <div
                    className="mt-16 md:mt-20 md:hidden"
                    style={{ height: "1px", backgroundColor: `${ACCENT}25` }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
