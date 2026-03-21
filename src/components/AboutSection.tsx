import storefront from "@/assets/storefront.jpg";
import owner from "@/assets/owner.jpg";
import iconScissorComb from "@/assets/icon-scissor-comb.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre-karina" className="w-full bg-background py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <RevealSection direction="left" className="relative flex-shrink-0 w-full lg:w-[480px]">
            <img src={storefront} alt="Peluquería Karina Ancheta - Wella Professionals" className="w-[380px] h-[480px] object-cover object-center" />
            <img src={owner} alt="Karina Ancheta" className="absolute -bottom-8 -right-8 w-[220px] h-[280px] object-cover object-top border-4 border-background shadow-xl hover:scale-105 transition-transform duration-500" />
          </RevealSection>
          <RevealSection direction="right" delay={0.2} className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={iconScissorComb} alt="" className="w-8 h-8 opacity-50" />
              <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Sobre Karina</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Una peluquería donde<br /><span className="italic font-light">te escuchan</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-[1.8] mb-5">
              En Peluquería Karina Ancheta, cada turno es atendido por Karina en persona. No hay sorpresas de quién te va a atender. Esa es una de las cosas que sus clientas más valoran: sabés exactamente con quién contás.
            </p>
            <p className="font-body text-base text-muted-foreground leading-[1.8] mb-8">
              El salón trabaja con productos Wella Professionals — la marca de coloración profesional más reconocida del mundo — para asegurarse de que el resultado no solo quede bien el día del turno, sino que cuide la salud de tu cabello.
            </p>
            <div className="flex flex-wrap gap-8">
              <div><p className="font-display text-4xl font-bold text-accent">4.7</p><p className="font-accent text-xs tracking-[2px] uppercase text-muted-foreground mt-1">Estrellas Google</p></div>
              <div><p className="font-display text-4xl font-bold text-accent">97</p><p className="font-accent text-xs tracking-[2px] uppercase text-muted-foreground mt-1">Reseñas</p></div>
              <div><p className="font-display text-4xl font-bold text-accent">100%</p><p className="font-accent text-xs tracking-[2px] uppercase text-muted-foreground mt-1">Recomendada FB</p></div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
