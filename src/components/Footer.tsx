import iconScissorComb from "@/assets/icon-scissor-comb.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={iconScissorComb} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
              <span className="font-display text-lg font-bold text-white">Karina Ancheta</span>
            </div>
            <p className="font-body text-sm text-white/40">Salon Unisex · San Telmo · Buenos Aires</p>
          </div>
          <div className="font-body text-sm text-white/45 space-y-1">
            <p>Perú 622, San Telmo</p>
            <p>Buenos Aires, Argentina</p>
            <p><a href="tel:+5491161583581" className="hover:text-white/70 transition-colors">+54 9 11 6158-3581</a></p>
            <p>Lun–Vie 10:30–19:00 hs</p>
            <p>Solo con turno previo</p>
          </div>
          <div className="font-body text-sm text-white/45 space-y-1">
            {["Servicios","Sobre Karina","Reseñas","Contacto"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="block hover:text-white/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="font-accent text-xs text-white/25 text-center">© 2026 Peluquería Karina Ancheta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
