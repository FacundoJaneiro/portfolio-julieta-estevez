"use client";

import { useState, useRef, useEffect } from "react";
import {
  coberturasItems,
  radioItems,
  locucionItems,
  produccionItems,
  redaccionItems,
  redesItems,
} from "@/data/portfolio";
import SectionGrid from "@/components/sections/SectionGrid";

const tabs = [
  {
    id: "coberturas",
    label: "Coberturas y Salidas al Aire",
    shortLabel: "Coberturas",
    description: "Coberturas en vivo, salidas al aire en TV y radio, móviles y transmisiones especiales desde el lugar de los hechos.",
    items: coberturasItems,
    accent: "#EC4825",
    fg: "white",
  },
  {
    id: "radio",
    label: "Radio y Streaming",
    shortLabel: "Radio",
    description: "Columnas, coberturas, entrevistas radiales y producciones propias emitidas en distintas emisoras.",
    items: radioItems,
    accent: "#F77C52",
    fg: "white",
  },
  {
    id: "locucion",
    label: "Locución Comercial",
    shortLabel: "Locución",
    description: "Demos, spots publicitarios, narraciones documentales, audiolibros y materiales de e-learning.",
    items: locucionItems,
    accent: "#F49FB2",
    fg: "white",
  },
  {
    id: "produccion",
    label: "Producción Periodística",
    shortLabel: "Producción",
    description: "Dirección editorial, producción de programas, investigación de largo aliento y coordinación de equipos periodísticos.",
    items: produccionItems,
    accent: "#F2B84B",
    fg: "white",
  },
  {
    id: "redaccion",
    label: "Redacción",
    shortLabel: "Redacción",
    description: "Crónicas, entrevistas, investigaciones y notas publicadas en medios gráficos y digitales de alcance nacional.",
    items: redaccionItems,
    accent: "#97B2D0",
    fg: "white",
  },
  {
    id: "redes",
    label: "Redes y Contenidos Digitales",
    shortLabel: "Redes",
    description: "Contenido para redes sociales, gestión de comunidades, UGC para marcas y estrategia digital.",
    items: redesItems,
    accent: "#9ACBB5",
    fg: "white",
  },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const touchStartX = useRef<number | null>(null);

  const activeIndex = tabs.findIndex((t) => t.id === activeTab);
  const activeTabData = tabs[activeIndex];

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setUnderlineStyle({
        left: elRect.left - navRect.left + nav.scrollLeft,
        width: elRect.width,
      });
      if (!isFirstRender.current) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
      isFirstRender.current = false;
    }
  }, [activeIndex]);

  const handleSwipe = (deltaX: number) => {
    if (Math.abs(deltaX) < 50) return;
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    if (deltaX < 0 && currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].id);
    if (deltaX > 0 && currentIndex > 0) setActiveTab(tabs[currentIndex - 1].id);
  };

  // Escucha activación desde el header
  useEffect(() => {
    const handler = (e: Event) => {
      const tabId = (e as CustomEvent<string>).detail;
      setActiveTab(tabId);
      setTimeout(() => {
        document.getElementById("trabajos")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    };
    window.addEventListener("activateTab", handler);
    return () => window.removeEventListener("activateTab", handler);
  }, []);

  return (
    <section
      id="trabajos"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        handleSwipe(touchStartX.current - e.changedTouches[0].clientX);
        touchStartX.current = null;
      }}
    >

      {/* ── Tab bar ── */}
      <div className="sticky top-0 z-40 shadow-md" style={{ backgroundColor: "#141414" }}>
        <div className="px-4 md:px-8" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            ref={navRef}
            className="relative flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {tabs.map((tab, i) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "14px 14px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "opacity 0.2s",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: isActive ? tab.accent : "transparent",
                      border: isActive ? "none" : `1.5px solid ${tab.accent}60`,
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: isActive ? tab.accent : "rgba(255,255,255,0.35)",
                      transition: "color 0.2s",
                    }}
                  >
                    {tab.shortLabel}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "2px 7px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      backgroundColor: isActive ? tab.accent : "transparent",
                      color: isActive
                        ? tab.fg === "white" ? "white" : "#141414"
                        : "rgba(255,255,255,0.25)",
                      border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.2s",
                    }}
                  >
                    {tab.items.length}
                  </span>
                </button>
              );
            })}

            {/* Underline animado */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                height: "3px",
                borderRadius: "2px 2px 0 0",
                backgroundColor: activeTabData.accent,
                left: underlineStyle.left,
                width: underlineStyle.width,
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Section header con color dinámico ── */}
      <div
        style={{
          backgroundColor: activeTabData.accent,
          position: "relative",
          overflow: "hidden",
          transition: "background-color 0.35s",
        }}
      >
        <div
          className="px-4 md:px-8 py-8 md:py-12"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: activeTabData.fg,
                opacity: 0.5,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              REPOSITORIO ✦ {activeTabData.items.length} TRABAJOS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                color: activeTabData.fg,
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              {activeTabData.label}
            </h2>
          </div>
          <p
            style={{
              color: activeTabData.fg,
              opacity: 0.65,
              fontSize: "13px",
              lineHeight: 1.65,
              maxWidth: "320px",
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
            }}
          >
            {activeTabData.description}
          </p>
        </div>
      </div>

      {/* ── Content grid ── */}
      <div className="pattern-dots" style={{ backgroundColor: "#F4EFEB", minHeight: "60vh" }}>
        <div className="px-4 md:px-8 py-8 md:py-12" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div key={activeTab} className="animate-fade-in">
            <SectionGrid
              items={activeTabData.items}
              accentColor={activeTabData.accent}
              hideDate={activeTab === "coberturas"}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
