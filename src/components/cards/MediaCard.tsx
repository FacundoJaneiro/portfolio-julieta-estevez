"use client";

import { useState, useRef } from "react";
import type { MediaType, WorkItem } from "@/data/portfolio";

const mediaTypeConfig: Record<MediaType, { label: string; bgColor: string; icon: string }> = {
  article:    { label: "Artículo",   bgColor: "#97B2D0", icon: "✍"  },
  video:      { label: "Video",      bgColor: "#F77C52", icon: "🎬" },
  audio:      { label: "Audio",      bgColor: "#EC4825", icon: "🎙" },
  instagram:  { label: "Instagram",  bgColor: "#F49FB2", icon: "📸" },
  youtube:    { label: "YouTube",    bgColor: "#141414", icon: "▶"  },
  podcast:    { label: "Podcast",    bgColor: "#F2B84B", icon: "🎧" },
  soundcloud: { label: "SoundCloud", bgColor: "#FF5500", icon: "☁" },
  image:      { label: "Producción", bgColor: "#F2B84B", icon: "🎞" },
};

function Waveform({ color }: { color: string }) {
  const bars = [3, 5, 8, 4, 7, 9, 5, 3, 6, 8, 4, 7, 5, 9, 6, 3, 8, 5];
  return (
    <div className="flex items-end gap-[3px] h-10">
      {bars.map((h, i) => (
        <div key={i} className="w-1 rounded-full"
          style={{ height: `${h * 4}px`, backgroundColor: color, opacity: 0.65 }} />
      ))}
    </div>
  );
}

function TagList({ tags, color }: { tags?: string[]; color: string }) {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1">
      {tags.slice(0, 3).map((tag) => (
        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ backgroundColor: `${color}20`, color }}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-AR", {
    day: "numeric", month: "short", year: "numeric",
  });
}

function ArticleCard({ item, accent, hideDate }: { item: WorkItem; accent: string; hideDate?: boolean }) {
  const Wrapper = item.url && item.url !== "#" ? "a" : "div";
  const wrapperProps = item.url && item.url !== "#"
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper {...wrapperProps} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5 cursor-pointer">
      <div className="h-1.5" style={{ backgroundColor: accent }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          {item.source && (
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
              {item.source}
            </span>
          )}
          {!hideDate && <span className="text-xs text-[#141414]/40 ml-auto">{formatDate(item.date)}</span>}
        </div>
        <h3 className="text-[#141414] text-base leading-snug mb-3 font-bold group-hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-inter)" }}>
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed flex-1">{item.description}</p>
        <div className="mt-4 pt-4 border-t border-black/[0.07] flex items-center justify-between gap-2">
          <TagList tags={item.tags} color={accent} />
          {item.url && item.url !== "#" && (
            <span className="text-xs font-bold shrink-0" style={{ color: accent }}>
              Leer →
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function AudioCard({ item, accent }: { item: WorkItem; accent: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
      <div className="p-6 pb-5" style={{ backgroundColor: `${accent}12` }}>
        <div className="flex items-center justify-between mb-4">
          {item.source && (
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
              {item.source}
            </span>
          )}
          {item.duration && (
            <span className="text-xs font-mono" style={{ color: `${accent}90` }}>
              {item.duration}
            </span>
          )}
        </div>
        <Waveform color={accent} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#141414] text-sm leading-snug mb-2 font-bold"
          style={{ fontFamily: "var(--font-inter)" }}>
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed flex-1">{item.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <button onClick={() => setPlaying(!playing)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold transition-all hover:scale-105"
            style={{ backgroundColor: accent }}>
            {playing ? "⏸ Pausar" : "▶ Escuchar"}
          </button>
          <TagList tags={item.tags} color={accent} />
        </div>
      </div>
    </div>
  );
}

function VideoCard({ item, accent, hideDate }: { item: WorkItem; accent: string; hideDate?: boolean }) {
  const [showEmbed, setShowEmbed] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
      {item.embedId && showEmbed ? (
        <div className="aspect-video">
          <iframe src={`https://www.youtube.com/embed/${item.embedId}?autoplay=1`}
            className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
        </div>
      ) : (
        <div className="aspect-video flex items-center justify-center cursor-pointer relative overflow-hidden"
          style={{ backgroundColor: "#111" }}
          onClick={() => item.embedId && setShowEmbed(true)}>
          {item.embedId && (
            <img
              src={`https://img.youtube.com/vi/${item.embedId}/hqdefault.jpg`}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ backgroundColor: accent }}>
              <span className="text-white text-lg ml-1">▶</span>
            </div>
            {item.duration && (
              <span className="text-xs text-white/70 font-mono">{item.duration}</span>
            )}
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          {item.source && (
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
              {item.source}
            </span>
          )}
          {!hideDate && <span className="text-xs text-[#141414]/40 ml-auto">{formatDate(item.date)}</span>}
        </div>
        <h3 className="text-[#141414] text-sm leading-snug mb-2 font-bold"
          style={{ fontFamily: "var(--font-inter)" }}>
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed flex-1">{item.description}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <TagList tags={item.tags} color={accent} />
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold shrink-0 transition-opacity hover:opacity-60"
              style={{ color: accent }}>
              Ver en YouTube →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SoundcloudCard({ item, accent }: { item: WorkItem; accent: string }) {
  const accentHex = accent.replace("#", "%23");
  const embedUrl = item.url
    ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(item.url)}&color=${accentHex}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`
    : null;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
      <div className="h-1.5" style={{ backgroundColor: accent }} />
      {embedUrl && (
        <iframe
          width="100%"
          height="120"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrl}
          className="block"
          sandbox="allow-scripts allow-same-origin"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        {item.source && (
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: accent }}>
            {item.source}
          </span>
        )}
        <h3 className="text-[#141414] text-sm leading-snug mb-2 font-bold"
          style={{ fontFamily: "var(--font-inter)" }}>
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed flex-1">{item.description}</p>
        <div className="mt-3"><TagList tags={item.tags} color={accent} /></div>
      </div>
    </div>
  );
}

const sourceLogoMap: Record<string, string> = {
  "APUBA":              "/images/marcas/APUBA.png",
  "Siconara":           "/images/marcas/SICONARA.png",
  "ETER":               "/images/marcas/ETER.png",
  "Crónica TV":         "/images/marcas/Cronica TV.png",
  "Radio Monte Castro": "/images/marcas/Radio Monte Castro.png",
  "Algo más que pogo":  "/images/marcas/Algo más que pogo.png",
};

function extractReelId(url: string): string | null {
  const match = url.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

function SocialCard({ item, accent, embed }: { item: WorkItem; accent: string; embed?: boolean }) {
  const logo = item.source ? sourceLogoMap[item.source] : null;
  const reelId = item.url ? extractReelId(item.url) : null;
  const embedUrl = reelId ? `https://www.instagram.com/reel/${reelId}/embed/` : null;

  if (embed && embedUrl) {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: "177%" }}>
          <iframe
            src={embedUrl}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            scrolling="no"
            allowFullScreen
          />
        </div>
        <div className="p-4 flex items-center gap-3" style={{ backgroundColor: accent }}>
          {logo ? (
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden shrink-0">
              <img src={logo} alt={item.source} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "white" }}>
              {item.source?.[0] ?? "?"}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-bold truncate">{item.title}</p>
            <p className="text-white/60 text-[10px]">{item.source}</p>
          </div>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="text-white/80 text-xs font-bold shrink-0 hover:text-white transition-colors">
              Ver →
            </a>
          )}
        </div>
      </div>
    );
  }

  // Card sin embed (Locución y otras secciones)
  const inner = (
    <>
      <div className="p-5" style={{ backgroundColor: accent }}>
        <div className="flex items-center gap-2 mb-3">
          {logo ? (
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden shrink-0">
              <img src={logo} alt={item.source} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "white" }}>
              {item.source?.[0] ?? "?"}
            </div>
          )}
          <div>
            <p className="text-white text-xs font-bold">{item.source}</p>
            <p className="text-white/50 text-[10px]">{formatDate(item.date)}</p>
          </div>
          <span className="ml-auto text-white/70 text-base">📸</span>
        </div>
        <p className="text-white/90 text-sm leading-snug line-clamp-2">{item.description}</p>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#141414] text-sm leading-snug mb-2 font-bold"
          style={{ fontFamily: "var(--font-inter)" }}>
          {item.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <TagList tags={item.tags} color={accent} />
          {item.url && (
            <span className="text-xs font-bold shrink-0" style={{ color: accent }}>Ver →</span>
          )}
        </div>
      </div>
    </>
  );

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer"
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5 cursor-pointer">
        {inner}
      </a>
    );
  }
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
      {inner}
    </div>
  );
}

function ImageCard({ item, accent, hideDate }: { item: WorkItem; accent: string; hideDate?: boolean }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-black/[0.04] hover:-translate-y-0.5">
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: `${accent}20` }}>
        {item.thumbnailUrl ? (
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
            <span style={{ fontSize: "48px", opacity: 0.3 }}>🎞</span>
          </div>
        )}
        {/* Gradiente inferior */}
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{ background: `linear-gradient(to top, ${accent}60, transparent)` }}
        />
        {!hideDate && (
          <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/80">
            {new Date(item.date).toLocaleDateString("es-AR", { month: "short", year: "numeric" })}
          </span>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        {item.source && (
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: accent }}>
            {item.source}
          </span>
        )}
        <h3
          className="text-[#141414] text-sm leading-snug mb-2 font-bold"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed flex-1">{item.description}</p>
        <div className="mt-4 pt-3 border-t border-black/[0.06]">
          <TagList tags={item.tags} color={accent} />
        </div>
      </div>
    </div>
  );
}

function FeaturedAudioCard({ item, accent }: { item: WorkItem; accent: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bigBars = [3,5,8,4,7,9,5,3,6,8,4,7,5,9,6,3,8,5,6,4,7,9,3,5,8,4,6,9,5,7,3,8,4,6,9,5];

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/[0.04] flex flex-col md:flex-row">
      {/* Left: visual */}
      <div
        className="md:w-[42%] p-8 flex flex-col justify-between min-h-[200px]"
        style={{ backgroundColor: `${accent}15` }}
      >
        <div>
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: accent, color: "white" }}
          >
            ✦ Demo
          </span>
          {/* Big waveform */}
          <div className="flex items-end gap-[3px] h-16">
            {bigBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full"
                style={{
                  height: `${h * 6}px`,
                  backgroundColor: accent,
                  opacity: playing ? 0.9 : 0.5,
                  transition: "opacity 0.3s",
                  animation: playing ? `heroPulse 1.2s ease-in-out infinite` : "none",
                  animationDelay: `${i * 0.04}s`,
                }}
              />
            ))}
          </div>
        </div>
        {item.url && (
          <audio ref={audioRef} src={item.url} onEnded={() => setPlaying(false)} />
        )}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-black uppercase tracking-wide transition-all hover:scale-105 shadow-sm"
            style={{ backgroundColor: accent }}
          >
            {playing ? "⏸ Pausar" : "▶ Escuchar demo"}
          </button>
          {item.duration && (
            <span className="text-sm font-mono" style={{ color: `${accent}90` }}>
              {item.duration}
            </span>
          )}
        </div>
      </div>

      {/* Right: info */}
      <div className="md:w-[58%] p-8 flex flex-col justify-center">
        {item.source && (
          <p
            className="text-xs font-black uppercase tracking-[0.2em] mb-3"
            style={{ color: accent }}
          >
            {item.source}
          </p>
        )}
        <h3
          className="text-[#141414] leading-tight mb-3 font-black"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.02em" }}
        >
          {item.title}
        </h3>
        <p className="text-sm text-[#141414]/65 leading-relaxed mb-6">{item.description}</p>
        <TagList tags={item.tags} color={accent} />
      </div>
    </div>
  );
}

export default function MediaCard({ item, accentColor = "#EC4825", hideDate, featured, embedReels }: { item: WorkItem; accentColor?: string; hideDate?: boolean; featured?: boolean; embedReels?: boolean }) {
  if (featured) {
    return <FeaturedAudioCard item={item} accent={accentColor} />;
  }

  const config = mediaTypeConfig[item.mediaType];
  return (
    <div className="relative h-full">
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: accentColor }}>
          {config.icon} {config.label}
        </span>
      </div>
      {item.mediaType === "article"   && <ArticleCard    item={item} accent={accentColor} hideDate={hideDate} />}
      {(item.mediaType === "audio" || item.mediaType === "podcast") && <AudioCard item={item} accent={accentColor} />}
      {(item.mediaType === "video" || item.mediaType === "youtube") && <VideoCard item={item} accent={accentColor} hideDate={hideDate} />}
      {item.mediaType === "instagram"   && <SocialCard     item={item} accent={accentColor} embed={embedReels} />}
      {item.mediaType === "soundcloud"  && <SoundcloudCard item={item} accent={accentColor} />}
      {item.mediaType === "image"       && <ImageCard      item={item} accent={accentColor} hideDate={hideDate} />}
    </div>
  );
}
