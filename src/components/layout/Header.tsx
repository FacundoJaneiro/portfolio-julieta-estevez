"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "COBERTURAS", tab: "coberturas" },
  { label: "RADIO", tab: "radio" },
  { label: "LOCUCIÓN", tab: "locucion" },
  { label: "PRODUCCIÓN", tab: "produccion" },
  { label: "REDACCIÓN", tab: "redaccion" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (tab: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById("trabajos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.dispatchEvent(new CustomEvent("activateTab", { detail: tab }));
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="#inicio"
          className="text-dark shrink-0 tracking-wide uppercase"
          style={{ fontFamily: "var(--font-inter)", fontSize: "17px", letterSpacing: "0.06em" }}
        >
          <span style={{ fontWeight: 900 }}>JULIETA</span>
          {" "}
          <span style={{ fontWeight: 300 }}>ESTÉVEZ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.tab}
              onClick={() => handleNavClick(link.tab)}
              className="text-[11px] font-sans font-semibold tracking-[0.18em] text-dark/70 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center bg-accent text-dark px-5 py-2 text-[11px] font-sans font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-colors shrink-0"
        >
          CONTACTO
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-dark/10 px-6 py-5">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className="text-left text-xs font-sans font-semibold tracking-[0.18em] text-dark/70 hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center bg-accent text-dark px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-colors mt-2"
            >
              CONTACTO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
