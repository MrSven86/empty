import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const StaffSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-12 md:py-[80px] bg-background">
      <div ref={ref} className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-gilroy text-[12px] font-bold uppercase tracking-[3px] text-accent mb-3">
            Elegí tu turno
          </p>
          <h2
            className="mb-2 text-[26px] md:text-[38px]"
            style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, color: "hsl(var(--foreground))", lineHeight: "1.3" }}
          >
            La primera consulta con el Dr. Cifuentes suele ser la última que tenés con cualquier otro dentista.
          </h2>
          <p className="font-gilroy text-[15px] md:text-[17px] font-light text-muted-foreground mt-3 max-w-[560px] mx-auto">
            Elegí una fecha y hora — te confirmamos en el día.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-[40px]">
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
              <p className="text-muted-foreground mb-1" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, fontSize: "14px" }}>
                Odontólogo · Más de 20 años de trayectoria
              </p>
              <p className="text-muted-foreground mb-3 md:mb-4" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, fontSize: "13px" }}>
                12 de 12 reseñas en Google · 5 estrellas
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
                  Ver otras fechas
                </button>
                <button
                  className="px-6 md:px-10 py-3 rounded-full bg-secondary text-primary hover:opacity-80 transition-opacity uppercase tracking-widest text-[12px] md:text-[13px]"
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 700, letterSpacing: "3px" }}
                >
                  Reservar este turno
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
          O escribinos por WhatsApp — respondemos el mismo día →
        </a>
      </div>
    </section>
  );
};

export default StaffSection;

