import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AssuranceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full" ref={ref}>
      <div className={`mx-auto max-w-[1440px] px-6 md:px-[90px] pt-8 md:pt-[34px] pb-0 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-gilroy text-[26px] md:text-[37px] leading-[1.1] text-primary mb-6 md:mb-[26px]">
          ¿Por qué el Dr. Cifuentes?
        </h2>
      </div>

      <div className="bg-secondary">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 px-6 md:grid-cols-[minmax(0,620px)_minmax(0,620px)] md:gap-[30px] md:px-[90px] md:pb-[70px]">
          <div className={`pt-2 md:pt-[26px] pb-10 md:pb-0 transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="max-w-[620px]">
              <div className="flex flex-wrap items-baseline text-primary leading-none">
                <span className="font-gilroy text-[54px] md:text-[60px]">12/12</span>
                <span className="ml-2 font-gilroy text-[22px] md:text-[27px] leading-[1.5] text-[hsl(var(--muted-foreground))]">
                  — reseñas de 5 estrellas en Google
                </span>
              </div>
              <p className="mt-4 md:mt-[18px] font-gilroy text-[20px] md:text-[27px] leading-[1.55] text-[hsl(var(--muted-foreground))]">
                Cada paciente que visitó el consultorio del Dr. Cifuentes dejó una reseña de 5 estrellas. No es casualidad. Es el resultado de más de 20 años de trabajo cuidadoso, tecnología avanzada y un trato que pacientes con décadas de experiencia en otros consultorios describen como único en Buenos Aires.
              </p>
              <p className="mt-4 md:mt-[18px] font-gilroy text-[20px] md:text-[27px] leading-[1.55] text-[hsl(var(--muted-foreground))]">
                Para quienes sienten nervios antes de una consulta: Trinidad Rillo Rama llegó muy ansiosa a una cirugía de muela del juicio y terminó riéndose. Ese es el estándar de atención del Dr. Cifuentes y su equipo.
              </p>
            </div>
          </div>

          <div className={`relative z-[2] w-full md:-mt-[80px] transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <img
              src="/images/assurance.jpg"
              alt="Dr. Cifuentes con paciente"
              className="h-[320px] w-full object-cover md:h-[507px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
