import { useState, useEffect, useRef } from "react";
import iconScissors from "@/assets/icon-scissors.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const importAll = (r: Record<string, { default: string }>) =>
  Object.values(r).map((m) => m.default);

const allImages = importAll(
  import.meta.glob("@/assets/gallery-client-*.jpg", { eager: true }) as Record<string, { default: string }>
);

const VISIBLE = 8;

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allImages.length / VISIBLE);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [totalPages]);

  const currentImages = allImages.slice(page * VISIBLE, page * VISIBLE + VISIBLE);
  // Pad if last page has fewer
  while (currentImages.length < VISIBLE && currentImages.length > 0) {
    currentImages.push(allImages[currentImages.length % allImages.length]);
  }

  return (
    <section className="w-full bg-card py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealSection direction="up" className="text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <img src={iconScissors} alt="" className="w-7 h-7 opacity-40" />
            <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Galería</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Trabajos <span className="italic font-light">de Karina</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3">{allImages.length} fotos de trabajos reales</p>
        </RevealSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {currentImages.map((src, i) => (
            <div
              key={`${page}-${i}`}
              className="aspect-square overflow-hidden cursor-pointer group"
              style={{
                animation: "fadeScale 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
              }}
              onClick={() => setSelected(page * VISIBLE + i)}
            >
              <img
                src={src}
                alt={`Trabajo ${page * VISIBLE + i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Page dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); clearInterval(timerRef.current); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === page ? "bg-accent" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {selected !== null && selected < allImages.length && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelected(null)}>
          <img src={allImages[selected]} alt="" className="max-w-3xl max-h-[85vh] object-contain animate-scaleIn" />
          <button className="absolute top-6 right-8 text-white text-4xl font-light hover:opacity-60 transition-opacity" onClick={() => setSelected(null)}>×</button>
          {selected > 0 && <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:opacity-60" onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}>‹</button>}
          {selected < allImages.length - 1 && <button className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-4xl hover:opacity-60" onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}>›</button>}
        </div>
      )}
    </section>
  );
};
export default GallerySection;
