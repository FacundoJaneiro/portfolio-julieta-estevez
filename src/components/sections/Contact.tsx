import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { CONTENT } from "@/data/content";

export default function Contact() {
  const { contact } = CONTENT;

  return (
    <section id="contacto" className="bg-dark py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Title */}
          <div>
            <h2
              className="text-white leading-[0.88] mb-6"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(70px, 11vw, 140px)",
                letterSpacing: "0.01em",
              }}
            >
              CONTACTO
            </h2>
            <p className="font-sans text-white/50 text-base lg:text-lg max-w-sm leading-relaxed">
              {contact.subtitle}
            </p>
          </div>

          {/* Right: Contact Links */}
          <div className="flex flex-col gap-3">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-5 p-5 border border-white/8 hover:border-accent group transition-all duration-200"
            >
              <div className="w-11 h-11 bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                <Mail size={18} className="text-white/50 group-hover:text-dark transition-colors" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 mb-0.5">Email</p>
                <p className="font-sans font-medium text-white/75 group-hover:text-accent transition-colors text-sm">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* WhatsApp — only shown if set */}
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 border border-white/8 hover:border-secondary group transition-all duration-200"
              >
                <div className="w-11 h-11 bg-white/5 flex items-center justify-center group-hover:bg-secondary transition-colors shrink-0">
                  <MessageCircle size={18} className="text-white/50 group-hover:text-dark transition-colors" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 mb-0.5">WhatsApp</p>
                  <p className="font-sans font-medium text-white/75 group-hover:text-secondary transition-colors text-sm">
                    {contact.whatsapp}
                  </p>
                </div>
              </a>
            )}

            {/* Instagram */}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 border border-white/8 hover:border-pink group transition-all duration-200"
            >
              <div className="w-11 h-11 bg-white/5 flex items-center justify-center group-hover:bg-pink transition-colors shrink-0">
                <Instagram size={18} className="text-white/50 group-hover:text-dark transition-colors" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 mb-0.5">Instagram</p>
                <p className="font-sans font-medium text-white/75 group-hover:text-pink transition-colors text-sm">
                  @julietaestevez
                </p>
              </div>
            </a>

            {/* Spotify */}
            {contact.spotify && (
              <a
                href={contact.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 border border-white/8 hover:border-[#1DB954] group transition-all duration-200"
              >
                <div className="w-11 h-11 bg-white/5 flex items-center justify-center group-hover:bg-[#1DB954] transition-colors shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/50 group-hover:text-dark transition-colors">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.622.622 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.793c3.521-1.068 9.372-.861 13.066 1.349a.937.937 0 01-.906 1.6z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 mb-0.5">Spotify</p>
                  <p className="font-sans font-medium text-white/75 group-hover:text-[#1DB954] transition-colors text-sm">
                    Julieta Estévez
                  </p>
                </div>
              </a>
            )}

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 border border-white/8 hover:border-blue group transition-all duration-200"
            >
              <div className="w-11 h-11 bg-white/5 flex items-center justify-center group-hover:bg-blue transition-colors shrink-0">
                <Linkedin size={18} className="text-white/50 group-hover:text-dark transition-colors" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 mb-0.5">LinkedIn</p>
                <p className="font-sans font-medium text-white/75 group-hover:text-blue transition-colors text-sm">
                  Julieta Estévez
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
