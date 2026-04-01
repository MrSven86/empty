import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "Marta Fastuca",
    years: "Paciente hace más de 20 años",
    text: "Llevo más de 20 años siendo paciente del Dr. Cifuentes. No volvería a otro dentista. Nunca.",
  },
  {
    name: "Juan Manuel Salgado",
    years: "Paciente desde hace años",
    text: "No volvería a otro dentista jamás.",
  },
  {
    name: "Trinidad Rillo Rama",
    years: "Cirugía de muela del juicio",
    text: "Llegué muy ansiosa. Terminé riéndome. No lo podía creer.",
  },
  {
    name: "Marisa Pertierra",
    years: "Vive en Estados Unidos",
    text: "Lo recomiendo sin reservas a quien necesite atención dental en Buenos Aires. Sin dudarlo.",
  },
];

const AboutSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation();
  const { ref: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation({ threshold: 0.06 });
  const { ref: imgsRef, isVisible: imgsVisible } = useScrollAnimation({ threshold: 0.06 });

  return (
    <section className="w-full bg-[#C9B4A7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[116px] py-16 md:py-[100px] border-b border-[rgba(18,4,44,0.15)]">

        {/* Header */}
        <div
          ref={headRef}
          className={`transition-all duration-700 ease-out ${headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-[40px]">
            <div className="w-[40px] md:w-[70px] h-[1px] bg-[rgba(3,25,44,0.49)]" />
            <span className="text-[#382E27] text-[14px] md:text-[15px] font-gilroy font-normal leading-[23px]">
              Lo que dicen sus pacientes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] mb-12 md:mb-[70px]">
            <h2 className="text-[#382E27] text-[32px] md:text-[56px] font-gilroy font-extralight leading-[40px] md:leading-[66px]">
              No lo decimos nosotros. Lo dicen ellos.
            </h2>
            <p className="text-[#382E27] text-[17px] md:text-[20px] font-gilroy font-light leading-[28px] md:leading-[34px] max-w-[462px] md:mt-[30px]">
              Cuando el 100% de quienes visitan un consultorio dejan 5 estrellas en Google, hay algo que va más allá de la técnica. Sus pacientes hablan de calidez, puntualidad y una tecnología que afirman no haber visto en ningún otro consultorio de la ciudad.
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div
          ref={reviewsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px] mb-12 md:mb-[70px]"
        >
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-[rgba(255,255,255,0.18)] border border-[rgba(56,46,39,0.12)] p-6 md:p-8 transition-all duration-700 ease-out ${reviewsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: reviewsVisible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#382E27] text-[14px]">★</span>
                ))}
              </div>
              <p className="font-gilroy text-[17px] md:text-[19px] font-light leading-[28px] md:leading-[32px] text-[#382E27] mb-5 italic">
                "{r.text}"
              </p>
              <div>
                <p className="font-gilroy text-[14px] font-bold text-[#382E27]">{r.name}</p>
                <p className="font-gilroy text-[13px] font-light text-[rgba(56,46,39,0.65)]">{r.years}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Images */}
        <div ref={imgsRef} className="flex flex-col md:flex-row gap-4 md:gap-[16px]">
          <div className={`flex-1 transition-all duration-700 ease-out ${imgsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="w-full h-[220px] md:h-[380px] overflow-hidden">
              <img src="/images/about-1.jpg" alt="Consultorio" className="w-full h-full object-cover" />
            </div>
          </div>
          <div
            className={`w-full md:w-[480px] h-[260px] md:h-[520px] overflow-hidden transition-all duration-700 delay-200 ease-out ${imgsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <img src="/images/about-2.jpg" alt="Atención dental" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

