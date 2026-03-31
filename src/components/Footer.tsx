const footerLinksLeft = [
  "Inicio",
  "Categorías",
  "El Equipo",
  "Pacientes",
  "Blog",
  "Clínicas",
  "Reservar online",
];

const footerLinksRight = [
  "Tratamientos",
  "Nosotros",
  "Tarifas",
  "Galería",
  "Temas",
  "Contacto",
];

const subLinksCol1 = ["Inicio 2", "Tratamientos 2", "Categorías 2", "Nosotros 2"];
const subLinksCol2 = ["Inicio 3", "Tratamientos 3", "Categorías 3", "Nosotros 3"];

const bottomLinks = ["Changelog", "Instrucciones", "Licencia", "Página de ejemplo"];

const Footer = () => {
  return (
    <footer className="w-full font-gilroy">
      {/* Top bar – tan/accent with social icons */}
      <div className="w-full bg-tan border-t border-b border-white/15">
        <div className="max-w-[1920px] mx-auto flex items-center justify-center gap-10 py-12 px-6">
          <a href="#" aria-label="Twitter">
            <img src="/images/twitter.svg" alt="Twitter" className="w-[17px] h-[17px]" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/images/facebook.svg" alt="Facebook" className="w-[17px] h-[17px]" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-[17px] h-[17px]" />
          </a>
        </div>
      </div>

      {/* Main footer – dark with background image */}
      <div className="relative w-full bg-primary border-b border-white/10 overflow-hidden">
        {/* Background image with gradient overlay */}
        <img
          src="/images/footer-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsla(207, 87%, 9%, 0.80) 0%, hsl(207, 100%, 6%) 80%)",
          }}
        />

        <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0 px-8 md:px-14 py-16 md:py-28">
          {/* Klaas brand card */}
          <div className="flex-shrink-0 w-[220px] md:w-[294px] h-[145px] md:h-[185px] bg-accent flex flex-col items-center justify-center gap-3">
            <span className="text-primary text-[14px] md:text-[16.8px] font-bold uppercase tracking-[8.4px] font-gilroy">
              Klaas
            </span>
            <span className="text-primary text-[14px]">✱</span>
            <div className="text-center opacity-80">
              <p className="text-primary/80 text-[10px] md:text-[11.2px] font-semibold uppercase tracking-[2.8px] leading-tight">
                Dentist Webflow
              </p>
              <p className="text-primary/80 text-[10px] md:text-[11.2px] font-semibold uppercase tracking-[2.8px] leading-tight">
                cms template
              </p>
            </div>
          </div>

          {/* Main nav links – two columns */}
          <div className="flex-1 flex gap-0 md:ml-24">
            <div className="flex flex-col gap-1 min-w-[160px] md:min-w-[200px]">
              {footerLinksLeft.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-cream font-light text-[17px] md:text-[21px] leading-[2.1] hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1 min-w-[160px] md:min-w-[200px]">
              {footerLinksRight.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-cream font-light text-[17px] md:text-[21px] leading-[2.1] hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Sub-links – two columns, smaller text */}
          <div className="flex gap-0 md:gap-0">
            <div className="flex flex-col gap-1 min-w-[130px] md:min-w-[180px]">
              {subLinksCol1.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-cream/80 font-light text-[12px] md:text-[14px] leading-[2.1] hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1 min-w-[130px] md:min-w-[180px]">
              {subLinksCol2.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-cream/80 font-light text-[12px] md:text-[14px] leading-[2.1] hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social icons – right side, vertical */}
          <div className="hidden md:flex flex-col items-center gap-16 ml-auto">
            <a href="#" aria-label="Twitter">
              <img src="/images/twitter.svg" alt="Twitter" className="w-[17px] h-[17px] invert" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/images/facebook.svg" alt="Facebook" className="w-[17px] h-[17px] invert" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/images/linkedin.svg" alt="LinkedIn" className="w-[17px] h-[17px] invert" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar – solid dark */}
      <div className="w-full border-t border-white/10" style={{ backgroundColor: "hsl(207, 100%, 6%)" }}>
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-8">
          <div className="flex flex-wrap gap-6 md:gap-10">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-tan font-light text-[11px] md:text-[12.6px] leading-[16.8px] hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8 mt-4 md:mt-0">
            <span className="text-tan font-light text-[11px] md:text-[12.6px]">Powered by Lovable</span>
            <span className="text-tan font-light text-[11px] md:text-[12.6px]">Made by Metrik</span>
            <span className="text-tan font-light text-[11px] md:text-[12.6px]">Klaas Template</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
