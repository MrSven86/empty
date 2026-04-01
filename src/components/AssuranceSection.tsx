import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AssuranceSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation({ threshold: 0.08 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full bg-background">
      {/* Header */}
      <div
        ref={headRef}
        className={`mx-auto max-w-[1440px] px-6 md:px-[90px] pt-16 md:pt-[100px] pb-10 md:pb-[60px] transition-all duration-700 ease-out ${headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-gilroy text-[12px] font-bold uppercase tracking-[3px] text-accent mb-5">
          ¿Por qué el Dr. Cifuentes?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[80px] items-start">
          <h2 className="font-gilroy text-[34px] md:text-[52px] font-extralight leading-[42px] md:leading-[62px] text-primary">
            Cada persona que entra al consultorio, sale queriendo volver.
          </h2>
          <div className="md:pt-[8px]">
            <p className="font-gilroy text-[18px] md:text-[22px] font-light leading-[32px] md:leading-[38px] text-muted-foreground">
              No porque tenga que volver — sino porque quiere. En más de 20 años atendiendo en Recoleta, el Dr. Cifuentes construyó algo que muy pocos consultorios pueden decir que tienen: pacientes que recomiendan ir al dentista como si fuera un placer.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className={`mx-auto max-w-[1440px] px-6 md:px-[90px] pb-10 md:pb-[60px] transition-all duration-700 delay-100 ease-out ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 border-t border-b border-border py-8 md:py-[40px]">
          {[
            { number: "12/12", label: "reseñas de 5 estrellas en Google" },
            { number: "+20", label: "años de trayectoria en Recoleta" },
            { number: "0", label: "reseñas negativas en toda su historia" },
            { number: "100%", label: "de pacientes recomendarían el consultorio" },
          ].map((stat, i) => (
            <div
              key={stat.number}
              className={`flex flex-col gap-1 md:px-8 md:border-r border-border last:border-0 transition-all duration-700 ease-out ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: statsVisible ? `${i * 100}ms` : "0ms" }}
            >
              <span className="font-gilroy text-[36px] md:text-[44px] font-extralight text-primary leading-none">
                {stat.number}
              </span>
              <span className="font-gilroy text-[13px] md:text-[14px] font-light text-muted-foreground leading-[20px] max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Body: copy + image */}
      <div className="bg-secondary">
        <div
          ref={bodyRef}
          className={`mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 px-6 md:grid-cols-[minmax(0,620px)_minmax(0,620px)] md:gap-[60px] md:px-[90px] md:pb-[80px] transition-all duration-700 ease-out ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="pt-10 md:pt-[50px] pb-8 md:pb-0">
            <p className="font-gilroy text-[19px] md:text-[24px] leading-[32px] md:leading-[40px] text-muted-foreground mb-6">
              Imaginá llegar ansioso a una cirugía de muela del juicio — y terminar riéndote. Eso le pasó a Trinidad Rillo Rama. No es un caso aislado. Es el estándar que el Dr. Cifuentes mantiene consulta a consulta, con cada paciente, desde hace más de dos décadas.
            </p>
            <p className="font-gilroy text-[19px] md:text-[24px] leading-[32px] md:leading-[40px] text-muted-foreground mb-8">
              Tecnología avanzada, trato humano, y la tranquilidad de saber que estás en manos de alguien que sus propios pacientes describen como único en Buenos Aires.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-gilroy text-[12px] font-bold uppercase tracking-[3px] hover:opacity-90 transition-opacity"
            >
              Reservar mi turno →
            </a>
          </div>

          <div className="relative z-[2] w-full md:-mt-[80px]">
            <img
              src="/images/assurance.jpg"
              alt="Dr. Cifuentes con paciente"
              className="h-[320px] w-full object-cover md:h-[540px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;

