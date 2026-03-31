import { Star } from "lucide-react";

const stats = [
  "⭐ 5.0 en Google",
  "12 reseñas",
  "Todas de 5 estrellas",
  "+20 años de trayectoria",
];

const BottomBar = () => {
  return (
    <div className="w-full h-auto md:h-[140px] border-t border-white/[0.17] backdrop-blur-[6.5px] flex flex-col md:flex-row items-center justify-center px-6 md:px-[173px] py-6 md:py-0 gap-6 md:gap-0">
      <div className="flex items-center gap-6 md:gap-[140px] flex-wrap justify-center">
        {stats.map((stat) => (
          <span
            key={stat}
            className="text-cream/90 text-[10px] md:text-[11.2px] font-light uppercase tracking-[2px] md:tracking-[4.48px] text-center font-gilroy"
          >
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
