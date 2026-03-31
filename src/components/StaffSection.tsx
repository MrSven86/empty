import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const staffMembers = [
  {
    name: "Dr. Omar Bagáev",
    role: "Odontólogo general, pediatría",
    nextDate: "27 de marzo",
    clinic: "Klaas Gran Vía",
    time: "18:00",
    image: "/images/staff-1.png",
  },
  {
    name: "Dr. Alexei Cherkásov",
    role: "Cirujano dental, implantólogo",
    nextDate: "1 de abril",
    clinic: "Klaas Gran Vía",
    time: "09:00",
    image: "/images/staff-2.jpg",
  },
  {
    name: "Dr. Ramiz Guseínov",
    role: "Odontólogo protesista",
    nextDate: "30 de marzo",
    clinic: "Klaas Oeste",
    time: "17:00",
    image: "/images/staff-3.jpg",
  },
];

const StaffSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-12 md:py-[80px] bg-background">
      <div ref={ref} className="max-w-[1100px] mx-auto px-4 md:px-6">
        <h2
          className={`text-center mb-8 md:mb-[50px] text-[28px] md:text-[42px] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, color: "hsl(var(--foreground))" }}
        >
          Reserva tu cita en el horario más conveniente
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 md:gap-6 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full sm:w-[160px] md:w-[200px] h-[200px] md:h-[220px] object-cover rounded-xl flex-shrink-0"
              />

              <div className="flex-1 py-1 md:py-2 w-full">
                <h3 className="text-primary mb-1" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 800, fontSize: "20px" }}>
                  {member.name}
                </h3>
                <p className="text-foreground mb-3 md:mb-4" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, fontSize: "14px" }}>
                  {member.role}
                </p>
                <p className="text-muted-foreground mb-2 md:mb-3" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, fontSize: "13px" }}>
                  Próxima cita disponible: {member.nextDate}
                </p>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-primary" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 800, fontSize: "13px" }}>
                    {member.clinic}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <span className="px-4 md:px-5 py-2 rounded-full border border-border text-foreground text-[14px]" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300 }}>
                    {member.time}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
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
          ))}
        </div>

        <button
          className={`mt-6 md:mt-8 w-full py-4 rounded-full bg-secondary text-primary hover:opacity-80 transition-opacity uppercase tracking-widest text-[13px] md:text-[14px] ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 300, letterSpacing: "3px", transitionDelay: isVisible ? "750ms" : "0ms", transitionDuration: "600ms" }}
        >
          Mostrar más
        </button>
      </div>
    </section>
  );
};

export default StaffSection;
