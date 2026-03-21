import { Instagram, Linkedin, Mail } from "lucide-react";
import { CONTENT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span
            className="text-white/50 tracking-wide"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "20px",
              letterSpacing: "0.05em",
            }}
          >
            JULIETA ESTÉVEZ
          </span>

          <div className="flex items-center gap-5">
            <a
              href={CONTENT.contact.instagram}
              className="text-white/30 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href={CONTENT.contact.linkedin}
              className="text-white/30 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${CONTENT.contact.email}`}
              className="text-white/30 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <p className="font-sans text-[11px] text-white/25 uppercase tracking-widest">
            © {new Date().getFullYear()} · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
