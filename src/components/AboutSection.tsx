import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation();
  const { ref: imgsRef, isVisible: imgsVisible } = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className="w-full bg-[#C9B4A7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[116px] py-12 md:py-[100px] border-b border-[rgba(18,4,44,0.15)]">
        {/* Label */}
        <div
          ref={headRef}
          className={`transition-all duration-700 ease-out ${headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-[40px]">
            <div className="w-[40px] md:w-[70px] h-[1px] bg-[rgba(3,25,44,0.49)]" />
            <span className="text-[#382E27] text-[14px] md:text-[15px] font-gilroy font-normal leading-[23px]">
              Nosotros
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] mb-8 md:mb-[60px]">
            <h2 className="text-[#382E27] text-[32px] md:text-[62px] font-gilroy font-extralight leading-[40px] md:leading-[74px]">
              Somos excelentes en el cuidado dental y
              <br className="hidden md:block" />
              tratamientos
            </h2>
            <p className="text-[#382E27] text-[16px] md:text-[20px] font-gilroy font-light leading-[28px] md:leading-[35px] max-w-[462px] md:mt-[40px]">
              Nos apasiona ayudar a las personas a sonreír.
              Contamos con formación médica especializada,
              por lo que comprendemos profundamente la salud
              bucal y los retos de cada paciente.
            </p>
          </div>
        </div>

        {/* Images + Text row */}
        <div ref={imgsRef} className="flex flex-col md:flex-row gap-4 md:gap-[16px]">
          <div className={`flex flex-col transition-all duration-700 ease-out ${imgsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="w-full md:w-[714px] h-[220px] md:h-[350px] overflow-hidden">
              <img src="/images/about-1.jpg" alt="Cuidado dental" className="w-full h-full object-cover" />
            </div>
            <p className="text-[#382E27] text-[16px] md:text-[18px] font-gilroy font-normal leading-[28px] md:leading-[33px] max-w-[370px] mt-8 md:mt-[67px]">
              Somos excelentes en el cuidado dental y tratamientos para todos los pacientes. Cuidamos de ti y de tu familia.
            </p>
            <p className="text-[#382E27] text-[16px] md:text-[18px] font-gilroy font-normal leading-[28px] md:leading-[33px] max-w-[370px] mt-6 md:mt-[68px]">
              Una clínica dental moderna es más que un lugar con la última tecnología. Es una celebración de tu sonrisa.
            </p>
          </div>

          <div
            className={`w-full md:w-[602px] h-[400px] md:h-[770px] overflow-hidden transition-all duration-700 delay-200 ease-out ${imgsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <img <img src="/images/about-2.jpg" alt="Tratamiento dental" className="w-full h-full object-cover" /> alt="Tratamiento dental" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
