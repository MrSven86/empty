import { useState, useEffect } from "react";

const messages = [
  "Peluquería Karina Ancheta — Perú 622, San Telmo | Solo con turno previo",
  "⭐ 4.7 en Google · 97 reseñas verificadas · 100% recomendada en Facebook",
  "Productos Wella Professionals — la marca N°1 en coloración profesional",
  "Lun–Vie 10:30–19:00 hs · +54 9 11 6158-3581 · San Telmo, Buenos Aires",
];

const TopBar = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary py-2.5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center">
        <span
          className="font-accent text-xs tracking-[2px] text-primary-foreground/80 text-center transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {messages[index]}
        </span>
      </div>
    </div>
  );
};
export default TopBar;
