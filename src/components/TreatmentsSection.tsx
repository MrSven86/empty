import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const treatments = [
  {
    category: "ODONTOLOGÍA GENERAL",
    title: "Higiene dental",
    image: "/images/dental-hygiene.jpg",
  },
  {
    category: "ODONTOLOGÍA GENERAL",
    title: "Empastes dentales",
    image: "/images/dental-fillings.jpg",
  },
];

const TreatmentsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full bg-background py-12 md:py-[80px] px-6 md:px-[90px]">
      <div
        ref={headerRef}
        className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-[40px] gap-4 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-foreground text-[24px] md:text-[32px] font-light font-gilroy">
          Tratamientos
        </h2>
        <a
          href="#treatments"
          className="flex items-center gap-3 bg-primary text-primary-foreground px-5 md:px-[24px] py-3 md:py-[14px] text-[11px] font-bold uppercase tracking-[3px] font-gilroy hover:opacity-90 transition-opacity"
        >
          Todos los tratamientos
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[30px]">
        {treatments.map((t, i) => (
          <div
            key={t.title}
            className={`relative w-full aspect-[1.5/1] overflow-hidden group cursor-pointer transition-all duration-700 ease-out ${
              cardsVisible
                ? "opacity-100 translate-x-0"
                : i === 0
                  ? "opacity-0 -translate-x-16"
                  : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: cardsVisible ? `${i * 200}ms` : "0ms" }}
          >
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-500" />
            <span className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[30px] text-primary-foreground/70 text-[10px] font-light uppercase tracking-[3.5px] font-gilroy">
              {t.category}
            </span>
            <h3 className="absolute bottom-[20px] left-[20px] md:bottom-[30px] md:left-[30px] text-primary-foreground text-[18px] md:text-[22px] font-light font-gilroy">
              {t.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreatmentsSection;
