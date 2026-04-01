"use client";

import type { WorkItem } from "@/data/portfolio";

const ACCENT = "#F2B84B";

function ytId(url?: string) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return m ? m[1] : null;
}

function VideoThumbLink({ url, label }: { url: string; label: string }) {
  const id = ytId(url);
  const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-1 min-w-0 rounded-xl overflow-hidden block"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}
    >
      {thumb ? (
        <img src={thumb} alt={label} className="w-full object-cover block" style={{ aspectRatio: "16/9" }} />
      ) : (
        <div className="w-full" style={{ aspectRatio: "16/9", backgroundColor: "#1a1a1a" }} />
      )}
      {/* overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: "rgba(0,0,0,0.42)" }}
      >
        {/* play */}
        <div
          className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
          style={{ width: 48, height: 48, backgroundColor: ACCENT }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#141414">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
      {/* label */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2"
        style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.78))" }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          {label}
        </p>
      </div>
    </a>
  );
}

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

function PhotoPair({ src1, src2, alt, pos1, pos2 }: { src1?: string; src2?: string; alt: string; pos1?: string; pos2?: string }) {
  if (!src1) {
    return (
      <div
        className="w-full rounded-xl overflow-hidden flex flex-col items-center justify-center gap-2"
        style={{ aspectRatio: "4/3", backgroundColor: `${ACCENT}12`, color: `${ACCENT}50` }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Foto próximamente
        </span>
      </div>
    );
  }

  if (!src2) {
    return (
      <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <img src={src1} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start">
      {/* Polaroid 1 — recto */}
      <div
        style={{
          flex: "1",
          backgroundColor: "white",
          padding: "10px 10px 28px 10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          transform: "rotate(-1.5deg)",
        }}
      >
        <img src={src1} alt={alt} className="w-full object-cover block" style={{ aspectRatio: "1/1", objectPosition: pos1 ?? "center top" }} />
      </div>
      {/* Polaroid 2 — levemente inclinado */}
      <div
        style={{
          flex: "1",
          backgroundColor: "white",
          padding: "10px 10px 28px 10px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          transform: "rotate(1.8deg)",
          marginTop: "16px",
        }}
      >
        <img src={src2} alt={alt} className="w-full object-cover block" style={{ aspectRatio: "1/1", objectPosition: pos2 ?? "center top" }} />
      </div>
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

      <div className="flex flex-col gap-14 md:gap-16">
        {items.map((item, i) => (
          <div key={item.id} className="relative">
            <div
              className="flex gap-6 md:gap-12"
              style={item.id === "pro-eter" ? {
                background: `linear-gradient(135deg, ${ACCENT}10 0%, transparent 60%)`,
                border: `1.5px solid ${ACCENT}30`,
                borderRadius: "20px",
                padding: "24px",
                marginLeft: "-24px",
                marginRight: "-4px",
              } : undefined}
            >

              {/* Número — desktop */}
              <div className="hidden md:flex flex-col items-center" style={{ width: "56px", flexShrink: 0 }}>
                <div
                  className="flex items-center justify-center rounded-full font-black z-10 relative"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: item.id === "pro-eter" ? ACCENT : "#141414",
                    border: `2px solid ${ACCENT}`,
                    fontFamily: "var(--font-bebas)",
                    fontSize: "22px",
                    letterSpacing: "0.05em",
                    color: item.id === "pro-eter" ? "#141414" : ACCENT,
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
                    backgroundColor: item.id === "pro-eter" ? ACCENT : "#141414",
                    border: `2px solid ${ACCENT}`,
                    fontFamily: "var(--font-bebas)",
                    fontSize: "17px",
                    letterSpacing: "0.05em",
                    color: item.id === "pro-eter" ? "#141414" : ACCENT,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Source + badge tesis */}
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <p
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
                  {item.id === "pro-eter" && (
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 800,
                        fontSize: "9px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#141414",
                        backgroundColor: ACCENT,
                        padding: "3px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      Tesis de carrera
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3
                  className="mb-5"
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

                {/* Layout interior: texto izq + fotos der */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div className="flex flex-col gap-5">
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
                  </div>

                  {/* Fotos */}
                  <div className="md:pt-2">
                    <PhotoPair
                      src1={item.thumbnailUrl}
                      src2={item.thumbnailUrl2}
                      alt={item.title}
                      pos1={item.thumbnailPosition}
                      pos2={item.thumbnailUrl2Position}
                    />
                  </div>
                </div>

                {/* Videos tesis — debajo del grid */}
                {item.id === "pro-eter" && (item.url && item.url !== "#" || item.secondaryUrl && item.secondaryUrl !== "#") && (
                  <div className="flex gap-3 mt-6">
                    {item.url && item.url !== "#" && (
                      <VideoThumbLink url={item.url} label="De ponchos y banderas" />
                    )}
                    {item.secondaryUrl && item.secondaryUrl !== "#" && (
                      <VideoThumbLink url={item.secondaryUrl} label={item.secondaryUrlLabel ?? "La bella y la bestia"} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
