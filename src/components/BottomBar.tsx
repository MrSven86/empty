import { ArrowRight } from "lucide-react";

const bottomLinks = ["Odontología", "Tratamientos", "Nosotros", "Equipo"];

const BottomBar = () => {
  return (
    <div className="w-full h-auto md:h-[140px] border-t border-white/[0.17] backdrop-blur-[6.5px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[173px] py-6 md:py-0 gap-6 md:gap-0">
      <div className="flex items-center gap-6 md:gap-[140px] flex-wrap justify-center">
        {bottomLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-cream/90 text-[10px] md:text-[11.2px] font-light uppercase tracking-[2px] md:tracking-[4.48px] text-center font-gilroy"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#book"
        className="flex items-center gap-4 bg-book-btn border border-white/20 px-6 md:px-[29px] py-4 md:py-[20px] h-auto md:h-[58px]"
      >
        <span className="text-primary-foreground text-[11px] md:text-[12.6px] font-bold uppercase tracking-[3.5px] font-gilroy">
          Reservar cita
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
      </a>
    </div>
  );
};

export default BottomBar;
