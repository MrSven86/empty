const footerLinksLeft = [
  "Inicio",
  "Tratamientos",
  "El Consultorio",
  "Nosotros",
  "Contacto",
];

const footerLinksRight = [
  "Odontología General",
  "Cirugía Oral",
  "Estética Dental",
  "Rehabilitación Oral",
];

const subLinksCol1 = ["Turno", "Teléfono", "Ubicación"];

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

      {/* Main footer */}
      <div className="relative w-full bg-primary border-b border-white/10 overflow-hidden">
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
          {/* Brand card */}
          <div className="flex-shrink-0 w-[220px] md:w-[294px] h-[145px] md:h-[185px] bg-accent flex flex-col items-center justify-center gap-3">
            <span className="text-primary text-[14px] md:text-[16.8px] font-bold uppercase tracking-[8.4px] font-gilroy">
              Dr. Cifuentes
            </span>
            <span className="text-primary text-[14px]">✱</span>
            <div className="text-center opacity-80">
              <p className="text-primary/80 text-[10px] md:text-[11.2px] font-semibold uppercase tracking-[2.8px] leading-tight">
                Odontología
              </p>
            </div>
          </div>

          {/* Nav links */}
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

          {/* Sub-links */}
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
          </div>

          {/* Social icons */}
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

      {/* Bottom bar */}
      <div className="w-full border-t border-white/10" style={{ backgroundColor: "hsl(207, 100%, 6%)" }}>
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-8">
          <div className="flex flex-wrap gap-6 md:gap-8">
            <span className="text-tan font-light text-[11px] md:text-[12.6px]">Dr. Fernando Cifuentes · Odontología</span>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8 mt-4 md:mt-0">
            <span className="text-tan font-light text-[11px] md:text-[12.6px]">Powered by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
