import { useRef } from "react";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";
import iconScissors from "@/assets/icon-scissors.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Gloria C.", text: "Mi pelo estaba quemado por una tintura mal hecha. Karina pudo arreglarlo y ahora mi cabello está super lindo.", date: "2026", rating: 5 },
  { name: "Noelia F.", text: "Siempre voy a la peluquería de Karina. Jamás tuve un problema en el pelo. Todo limpio y ella es divina.", date: "2023", rating: 5 },
  { name: "Marisol S.", text: "Karina Ancheta es una súper profesional. Hace 8 años soy su clienta y amiga.", date: "2021", rating: 5 },
  { name: "Marina B.", text: "No solo es excelente como profesional, sino que el ambiente siempre es alegre. Kari una maravillosa persona llena de luz!", date: "2023", rating: 5 },
  { name: "Jose V.", text: "Profesional, se nota su experiencia. Diálogo agradable, excelente atención. Volveré.", date: "2026", rating: 5 },
  { name: "Rocio E.", text: "KARINA ES LA MEJOR DE BUENOS AIRES, FUI POR CORTE Y NUTRICIÓN, QUEDO SOÑADO!", date: "2026", rating: 5 },
  { name: "Ethel F.", text: "La mejor en San Telmo, muy buenos productos, la atención es excelente y ella muy profesional.", date: "2023", rating: 5 },
  { name: "Joseline B.", text: "Excelente corte de cabello. Entendió a la perfección el estilo que buscaba.", date: "2019", rating: 5 },
  { name: "andrea eme", text: "Excelentes profesionales, calidez y calidad. El pelo me lo dejaron impecable. Super recomendable.", date: "2021", rating: 5 },
  { name: "Rita R.", text: "Mes a mes la sigo eligiendo!!!", date: "2020", rating: 5 },
  { name: "Marcela C.", text: "Amabilidad, y mucho profesionalismo!! Felicitaciones.", date: "2022", rating: 5 },
  { name: "Graciela S.", text: "Excelente, cumple 100% el protocolo, sólo atiende con turno y muy organizada. Muy buena Profesional!!", date: "2020", rating: 5 },
  { name: "Alejandra O.", text: "Un lugar cálido y acogedor y una estilista como Karina para hacerte una renovación y pasar un momento agradable.", date: "2018", rating: 5 },
  { name: "Mariela C.", text: "Lugar lleno de amor!! Ella cuida mis rulos...", date: "2018", rating: 5 },
  { name: "Alicia", text: "Karina me dejó el pelo precioso. Me hice tintura y brushing. Los precios son accesibles.", date: "2022", rating: 4 },
  { name: "Nory", text: "Excelente atención.. muy profesional!!! Realmente recomendable", date: "2023", rating: 5 },
  { name: "Silvia R.", text: "Excelente trato y calidad", date: "2020", rating: 5 },
  { name: "Sandra R.", text: "5 estrellas, llegué por maps, excelente atención, volveré", date: "2023", rating: 5 },
  { name: "Mariela R.", text: "Muy buena atención! Me encanta cómo quedó el trabajo! Muy recomendable", date: "2022", rating: 5 },
  { name: "fernanda i.", text: "EXCELENTES PROFESIONALES, ATENCIÓN PERSONALIZADA Y BUENOS PRECIOS!!", date: "2018", rating: 5 },
];

const colors = ["bg-teal-600","bg-rose-500","bg-amber-600","bg-indigo-500","bg-pink-500","bg-emerald-600","bg-violet-500","bg-orange-500"];

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left"|"right") => { scrollRef.current?.scrollBy({ left: dir==="left" ? -340 : 340, behavior: "smooth" }); };

  return (
    <section id="reseñas" className="w-full bg-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealSection direction="up" className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <img src={iconScissors} alt="" className="w-7 h-7" style={{ filter: "brightness(0) invert(1) opacity(0.5)" }} />
            <span className="font-accent text-xs tracking-[4px] uppercase text-primary-foreground/50">Lo que dicen las que ya fueron</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1]">
            97 reseñas <span className="italic font-light">en Google</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <img src={google} alt="" className="h-5" />
            <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><img key={i} src={star} alt="" className="w-4 h-4" />)}</div>
            <span className="font-accent text-sm text-primary-foreground/70">4.7 sobre 5 · 100% recomendada en Facebook</span>
          </div>
        </RevealSection>

        <RevealSection direction="up" delay={0.2} className="mb-10 max-w-[700px]">
          <p className="font-display text-2xl md:text-3xl italic text-primary-foreground/90 leading-relaxed">
            "Hace 8 años soy su clienta y amiga."
          </p>
          <p className="font-body text-sm text-primary-foreground/50 mt-3">— Marisol Sanz, clienta de Karina</p>
        </RevealSection>

        <div className="relative">
          <button onClick={()=>scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/10 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors text-lg">‹</button>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {reviews.map((r,i) => (
              <div key={r.name+i} className="flex-shrink-0 w-[300px] bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full ${colors[i%colors.length]} flex items-center justify-center text-white font-body text-sm font-bold`}>{r.name[0]}</div>
                  <div>
                    <p className="font-body text-sm font-semibold text-primary-foreground leading-tight">{r.name}</p>
                    <p className="font-accent text-[11px] text-primary-foreground/40">{r.date}</p>
                  </div>
                  <img src={google} alt="" className="w-4 h-4 ml-auto opacity-50" />
                </div>
                <div className="flex gap-0.5 mb-2">{[...Array(r.rating)].map((_,j)=><img key={j} src={star} alt="" className="w-3 h-3" />)}</div>
                <p className="font-body text-[13px] text-primary-foreground/70 leading-relaxed line-clamp-4">{r.text}</p>
              </div>
            ))}
          </div>
          <button onClick={()=>scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/10 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors text-lg">›</button>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
