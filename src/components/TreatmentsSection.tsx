import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const treatments = [
  {
    category: "ODONTOLOGÍA GENERAL",
    title: "Odontología General",
    tagline: "Dientes sanos, sin ansiedad, con resultados que duran.",
    description: "Desde una limpieza hasta una restauración completa, el Dr. Cifuentes trabaja con tecnología avanzada y un ritmo que se adapta a vos — sin apuros, sin dolor innecesario.",
    image: "/images/dental-hygiene.jpg",
  },
  {
    category: "CIRUGÍA ORAL",
    title: "Cirugía Oral",
    tagline: "El procedimiento que más temes, con el equipo que más te cuida.",
    description: "Pacientes que llegaron con miedo a muelas del juicio terminaron sorprendidos. Tecnología, experiencia de más de 20 años y un trato que convierte una cirugía en algo manejable.",
    image: "/images/dental-fillings.jpg",
  },
];

const TreatmentsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className="w-full bg-background py-16 md:py-[100px] px-6 md:px-[90px]">
      <div
        ref={headerRef}
        className={`mb-10 md:mb-[60px] transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-gilroy text-[12px] font-bold uppercase tracking-[3px] text-accent mb-4">
          Tratamientos
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <h2 className="text-foreground text-[28px] md:text-[42px] font-extralight font-gilroy leading-[36px] md:leading-[52px] max-w-[560px]">
            Cada tratamiento pensado para que te vayas mejor de como llegaste.
          </h2>
          <a
            href="#treatments"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-5 md:px-[24px] py-3 md:py-[14px] text-[11px] font-bold uppercase tracking-[3px] font-gilroy hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Ver todos los tratamientos
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]">
        {treatments.map((t, i) => (
          <div
            key={t.title}
            className={`group cursor-pointer transition-all duration-700 ease-out ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[1.6/1] overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/35 transition-colors duration-500" />
              <span className="absolute top-[20px] left-[20px] md:top-[24px] md:left-[24px] text-primary-foreground/70 text-[10px] font-light uppercase tracking-[3.5px] font-gilroy">
                {t.category}
              </span>
            </div>

            {/* Copy below image */}
            <div className="pt-5 md:pt-7 pb-2">
              <h3 className="font-gilroy text-[22px] md:text-[26px] font-light text-foreground mb-2 leading-[30px]">
                {t.title}
              </h3>
              <p className="font-gilroy text-[14px] md:text-[15px] font-bold text-accent uppercase tracking-[1px] mb-3">
                {t.tagline}
              </p>
              <p className="font-gilroy text-[15px] md:text-[17px] font-light text-muted-foreground leading-[26px] md:leading-[28px] max-w-[500px]">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreatmentsSection;

