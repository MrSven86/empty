import serviceCut from "@/assets/service-cut.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import { RevealSection, StaggerChildren } from "@/hooks/useScrollReveal";

const services = [
  { image: serviceCut, title: "Corte y Color", desc: "Cortes para hombres y mujeres, coloración, mechas, babylights y balayage. Karina entiende lo que querés y trabaja para que el resultado sea exactamente ese." },
  { image: serviceTreatment, title: "Tratamientos Capilares", desc: "Botox capilar, shock de keratina, alisado progresivo y nutrición. Para el pelo que necesita cuidado, recuperación o un cambio duradero." },
  { image: serviceNails, title: "Manicure y Pedicure", desc: "Manos y pies con el detalle que se merecen. Manicure, pedicure con parafina y esmaltado semipermanente disponibles con turno." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="w-full bg-card py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealSection direction="up" className="text-center mb-16">
          <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Nuestros Servicios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mt-3">
            Lo que podés hacer <span className="italic font-light">con Karina</span>
          </h2>
        </RevealSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((s) => (
            <div key={s.title} className="group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
export default ServicesSection;
