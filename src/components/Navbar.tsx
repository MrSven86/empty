import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-karina.png";

const navLinks = ["Servicios", "Sobre Karina", "Reseñas", "Contacto"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Karina Ancheta" className="h-14 w-auto object-contain" />
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g,'-')}`} className="font-body text-sm font-medium tracking-[2px] uppercase text-foreground/70 hover:text-foreground transition-colors relative group">
              {link}<span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="https://wa.me/5491161583581" target="_blank" rel="noopener noreferrer" className="ml-4 px-7 py-2.5 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-[2px] uppercase hover:bg-primary/90 transition-all">
            Reservá tu turno
          </a>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border py-6 flex flex-col items-center gap-5">
          {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase().replace(/ /g,'-')}`} className="font-body text-sm font-medium tracking-[2px] uppercase text-foreground" onClick={() => setOpen(false)}>{link}</a>)}
          <a href="https://wa.me/5491161583581" className="px-7 py-2.5 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-[2px] uppercase">Reservá tu turno</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
