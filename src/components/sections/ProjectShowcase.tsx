import type { WorkItem } from "@/data/portfolio";

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  items: WorkItem[];
};

const backgrounds = [
  "linear-gradient(145deg, #EC4825 0 33%, #141414 34% 58%, #F2B84B 59%)",
  "radial-gradient(circle at 72% 22%, #F2B84B 0 8%, transparent 9%), linear-gradient(145deg, #141414, #EC4825 56%, #F49FB2 57%)",
  "linear-gradient(145deg, #F49FB2, #EC4825 48%, #141414 49%)",
  "linear-gradient(145deg, #97B2D0, #141414 58%, #F2B84B 59%)",
];

function formatFor(item: WorkItem) {
  return item.url?.includes("/reel/") ? "Reel · Instagram" : "Carrusel · Instagram";
}

function ProjectPiece({ item, index, accentColor }: { item: WorkItem; index: number; accentColor: string }) {
  const imageFocus = item.id === "cm-acida-cronograma" ? "center 12%" : "center";
  const isIdentityPiece = item.id === "cm-acida-quienes-somos";
  const titleLines = item.title
    .replace(" — Revista Ácida", "")
    .replace(" — ETER", "")
    .split(" — ");

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block min-w-0 text-left"
      aria-label={`Abrir ${item.title} en Instagram`}
    >
      <div
        className="relative aspect-square overflow-hidden p-4 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1"
        style={{ background: backgrounds[index % backgrounds.length] }}
      >
        {item.thumbnailUrl && (
          <img
            src={item.thumbnailUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: imageFocus }}
          />
        )}
        {item.thumbnailUrl && !isIdentityPiece && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/35" />
        )}
        {!isIdentityPiece && (
          <div className="flex items-center justify-between gap-3 text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]">{formatFor(item)}</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">
              {item.url?.includes("/reel/") ? "▶" : "↗"}
            </span>
          </div>
        )}
        {!isIdentityPiece && (
          <div>
            {titleLines.map((line) => (
              <p
                key={line}
                className="font-display text-white text-[clamp(1.35rem,2.4vw,2.15rem)] leading-[0.86] uppercase"
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="pt-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: accentColor }}>
          {item.tags?.slice(0, 2).join(" · ")}
        </p>
        {isIdentityPiece && <p className="mt-1 text-sm font-bold text-[#141414]">{item.title} <span className="text-[#141414]/45">↗</span></p>}
        <p className="mt-1 text-xs leading-relaxed text-[#141414]/65">{item.description}</p>
      </div>
    </a>
  );
}

export default function ProjectShowcase({ projects, accentColor }: { projects: Project[]; accentColor: string }) {
  return (
    <div>
      {projects.map((project) => (
        <section
          key={project.title}
          className="grid grid-cols-1 lg:grid-cols-[190px_minmax(0,1fr)] gap-8 lg:gap-10 border-t border-[#141414]/15 py-8 first:border-t-0 first:pt-0 last:pb-0"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: accentColor }}>
              {project.eyebrow}
            </p>
            <h3 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none uppercase text-[#141414]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#141414]/60">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-7">
            {project.items.map((item, index) => (
              <ProjectPiece key={item.id} item={item} index={index} accentColor={accentColor} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
