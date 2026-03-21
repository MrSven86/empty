import socialCollage from "@/assets/social_collage.jpg";
import iconPin from "@/assets/icon-pin.svg";
import iconPhoneCall from "@/assets/icon-phone-call.svg";
import iconClock from "@/assets/icon-clock.svg";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const BookingSection = () => {
  return (
    <section id="contacto" className="relative w-full">
      <div className="absolute inset-0">
        <img src={socialCollage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto px-6 py-20 md:py-28 text-center">
        <RevealSection direction="up">
          <span className="font-accent text-xs tracking-[4px] uppercase text-white/50">Solo con turno previo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] mt-4 mb-6">
            Pedí tu turno <span className="italic font-light">hoy</span>
          </h2>
          <p className="font-body text-base text-white/75 leading-[1.8] mb-10 max-w-[550px] mx-auto">
            Karina atiende de lunes a viernes de 10:30 a 19 hs, solo con turno previo. Escribinos por WhatsApp y coordinamos.
          </p>
          <a href="https://wa.me/5491161583581" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 bg-accent text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-accent/90 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 mb-3">
            Escribir por WhatsApp
          </a>
          <p className="font-accent text-xs text-white/45 mb-10">Sin compromiso — te respondemos y coordinamos el día y horario que mejor te quede.</p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/75">
            <div className="flex items-center gap-2.5">
              <img src={iconPin} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} />
              <span className="font-accent text-sm">Perú 622, San Telmo</span>
            </div>
            <div className="flex items-center gap-2.5">
              <img src={iconClock} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} />
              <span className="font-accent text-sm">Lun–Vie 10:30–19hs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <img src={google} alt="" className="h-5" />
              <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><img key={i} src={star} alt="" className="w-3.5 h-3.5" />)}</div>
              <span className="font-accent text-sm">4.7 · 97 reseñas</span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
export default BookingSection;
