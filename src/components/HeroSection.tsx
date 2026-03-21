import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.png";
import scissorsWhite from "@/assets/scissors-white.svg";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  const s = (d: number) => ({ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${d}s` });

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      <img src={heroBg} alt="Salon" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center">
        <div style={s(0.2)} className="flex items-center gap-3 mb-4">
          <img src={scissorsWhite} alt="" className="w-8 h-8 opacity-60" />
          <span className="font-accent text-xs tracking-[5px] uppercase text-white/60">Perú 622 · San Telmo · Buenos Aires</span>
        </div>
        <h1 style={s(0.4)} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
          Tu peluquería de confianza<br /><span className="italic font-light">en San Telmo</span>
        </h1>
        <p style={s(0.6)} className="font-body text-base md:text-lg text-white/75 max-w-[540px] leading-relaxed mb-10">
          Karina Ancheta es estilista unisex con años de trayectoria en San Telmo. Cortes, color, tratamientos y manicure — todo con productos Wella Professionals, solo con turno, para que la atención sea tuya.
        </p>
        <div style={s(0.8)} className="flex flex-wrap gap-4 mb-12">
          <a href="https://wa.me/5491161583581" target="_blank" rel="noopener noreferrer" className="px-10 py-3.5 bg-accent text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-accent/90 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">Pedí tu turno</a>
          <a href="#servicios" className="px-10 py-3.5 border border-white/40 text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-white/10 transition-all duration-300">Ver servicios</a>
        </div>
        <p style={s(0.85)} className="font-accent text-xs text-white/50 -mt-8 mb-8">Te respondemos por WhatsApp</p>
        <div style={s(1)} className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img src={google} alt="Google" className="h-6" />
            <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><img key={i} src={star} alt="" className="w-4 h-4" />)}</div>
            <span className="font-accent text-base text-white/85 font-medium">4.7 · 97 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
