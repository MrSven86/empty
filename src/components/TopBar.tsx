import { Mail, Phone, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full h-auto md:h-[56px] bg-top-bar/90 border-b border-white/20 flex items-center justify-center relative z-20 py-2 md:py-0 px-4">
      <div className="flex items-center gap-4 md:gap-10 flex-wrap justify-center">
        <a href="mailto:contacto@drcifuentes.com" className="flex items-center gap-2 group">
          <Mail className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            contacto@drcifuentes.com
          </span>
        </a>
        <a href="tel:+541148068803" className="flex items-center gap-2 group">
          <Phone className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            +54 11 4806-8803
          </span>
        </a>
        <a href="#clinics" className="flex items-center gap-2 group">
          <MapPin className="w-4 h-4 text-tan" />
          <span className="text-cream text-[10px] md:text-[11.2px] font-light uppercase tracking-[1.68px] font-gilroy">
            Peña 2108, Recoleta
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
