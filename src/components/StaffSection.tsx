import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const StaffSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-12 md:py-[80px] bg-background">
      <div ref={ref} className="max-w-[1100px] mx-auto px-4 md:px-6">
        <h2
          className={`text-center mb-8 md:mb-[50px] text-[28px] md:text-[42px] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, color: "hsl(var(--foreground))" }}
        >
          Reservá tu turno con el Dr. Cifuentes
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 md:gap-6 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <img
              src="/images/staff-1.jpg"
              alt="Dr. Fernando Cifuentes"
              className="w-full sm:w-[160px] md:w-[200px] h-[200px] md:h-[220px] object-cover rounded-xl flex-shrink-0"
            />

            <div className="flex-1 py-1 md:py-2 w-full">
              <h3 className="text-primary mb-1" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 800, fontSize: "20px" }}>
                Dr. Fernando Cifuentes
              </h3>
              <p className="text-foreground mb-3 md:mb-4" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, fontSize: "14px" }}>
                Odontólogo
              </p>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 800, fontSize: "13px" }}>
                  Peña 2108, Recoleta
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-4">
                <button
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full border border-border text-foreground hover:bg-muted transition-colors text-[13px] md:text-[15px]"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300 }}
                >
                  <Calendar className="w-4 h-4" />
                  Elegir otra fecha
                </button>
                <button
                  className="px-6 md:px-10 py-3 rounded-full bg-secondary text-primary hover:opacity-80 transition-opacity uppercase tracking-widest text-[12px] md:text-[13px]"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, letterSpacing: "3px" }}
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#whatsapp"
          className={`mt-6 md:mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-full bg-secondary text-primary hover:opacity-80 transition-opacity text-[13px] md:text-[14px] ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, letterSpacing: "3px", transitionDelay: isVisible ? "750ms" : "0ms", transitionDuration: "600ms" }}
        >
          Contactar por WhatsApp →
        </a>
      </div>
    </section>
  );
};

export default StaffSection;
