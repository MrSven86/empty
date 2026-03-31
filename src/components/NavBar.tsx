import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItemsLeft = [
  { label: "Inicio", hasDropdown: false },
  { label: "Tratamientos", hasDropdown: true },
  { label: "Categorías", hasDropdown: true },
  { label: "Nosotros", hasDropdown: true },
  { label: "Plantilla", hasDropdown: true },
];

const navItemsRight = [
  { label: "Tarifas", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Contacto", hasDropdown: false },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-primary/20 backdrop-blur-[7px] relative z-20">
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between px-[173px] h-[70px]">
        <div className="flex items-center">
          <span className="text-primary-foreground text-[18px] font-bold uppercase tracking-[3px] font-gilroy mr-8">
            Klaas
          </span>
          {navItemsLeft.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1.5 px-[15px] h-[70px] border-t-[3px] border-transparent"
            >
              <span className="text-primary-foreground text-[12.6px] font-light uppercase tracking-[1.26px] font-gilroy">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-primary-foreground" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-0">
          {navItemsRight.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center px-[15px] h-[70px] border-t-[3px] border-transparent"
            >
              <span className="text-primary-foreground text-[12.6px] font-light uppercase tracking-[1.26px] font-gilroy">
                {item.label}
              </span>
            </a>
          ))}
          <div className="ml-2">
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 rounded-[20px] bg-white/[0.08] border border-white/30"
            >
              <span className="text-primary-foreground text-[12.6px] font-light uppercase tracking-[1.26px] font-gilroy">
                Resumen
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center justify-between px-6 h-[56px]">
        <span className="text-primary-foreground text-[14px] font-bold uppercase tracking-[2px] font-gilroy">
          Klaas
        </span>
        <button onClick={() => setOpen(!open)} className="text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-1">
          {[...navItemsLeft, ...navItemsRight].map((item) => (
            <a
              key={item.label}
              href="#"
              className="py-3 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              <span className="text-primary-foreground text-[13px] font-light uppercase tracking-[1.26px] font-gilroy">
                {item.label}
              </span>
            </a>
          ))}
          <a
            href="#"
            className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-[20px] bg-white/[0.08] border border-white/30"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary-foreground text-[12.6px] font-light uppercase tracking-[1.26px] font-gilroy">
              Resumen
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
