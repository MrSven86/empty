import { Mail, Phone, Sparkles } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full h-auto md:h-[56px] bg-top-bar/90 border-b border-white/20 flex items-center justify-center relative z-20 py-2 md:py-0 px-4">
      <div className="flex items-center gap-4 md:gap-10 flex-wrap justify-center">
        <a href="mailto:hello@klaas.com" className="flex items-center gap-2 group">
          <Mail className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            hola@klaas.com
          </span>
        </a>
        <a href="tel:" className="flex items-center gap-2 group">
          <Phone className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            Llámanos
          </span>
        </a>
        <a href="#book" className="flex items-center gap-2 group">
          <Sparkles className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            Reservar cita
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
