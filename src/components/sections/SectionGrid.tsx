"use client";

import { useState, useEffect, useRef } from "react";
import type { WorkItem, MediaType } from "@/data/portfolio";
import MediaCard from "@/components/cards/MediaCard";

const typeLabels: Record<MediaType, string> = {
  article:   "Artículos",
  video:     "Videos",
  audio:     "Audios",
  instagram: "Instagram",
  youtube:   "YouTube",
  podcast:   "Podcast",
};

interface Props {
  items: WorkItem[];
  accentColor?: string;
  hideDate?: boolean;
}

export default function SectionGrid({ items, accentColor = "#EC4825", hideDate }: Props) {
  const [activeFilter, setActiveFilter] = useState<MediaType | "all">("all");
  const [inView, setInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveFilter("all");
    setInView(false);
    const timeout = setTimeout(() => setInView(true), 50);
    return () => clearTimeout(timeout);
  }, [items]);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const availableTypes = Array.from(new Set(items.map((i) => i.mediaType)));
  const filtered = activeFilter === "all" ? items : items.filter((i) => i.mediaType === activeFilter);

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[320px]">
        <div className="text-center">
          <p className="text-[#141414]/25 mb-2"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "36px", letterSpacing: "0.05em" }}>
            PRÓXIMAMENTE
          </p>
          <p className="font-sans text-xs text-[#141414]/35 max-w-xs leading-relaxed">
            El contenido de esta sección estará disponible pronto.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {availableTypes.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === "all" ? "text-white shadow-sm" : "bg-white text-[#141414]/60 hover:text-[#141414]"
            }`}
            style={activeFilter === "all" ? { backgroundColor: accentColor } : {}}
          >
            Todos ({items.length})
          </button>
          {availableTypes.map((type) => {
            const count = items.filter((i) => i.mediaType === type).length;
            return (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === type ? "text-white shadow-sm" : "bg-white text-[#141414]/60 hover:text-[#141414]"
                }`}
                style={activeFilter === type ? { backgroundColor: accentColor } : {}}
              >
                {typeLabels[type]} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            style={{
              opacity: inView ? 1 : 0,
              animation: inView
                ? `fadeInUp 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms both`
                : "none",
            }}
          >
            <MediaCard item={item} accentColor={accentColor} hideDate={hideDate} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#141414]/40 font-sans text-sm">
          No hay trabajos en esta categoría aún.
        </div>
      )}
    </div>
  );
}
