import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import BottomBar from "./BottomBar";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[1200px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-dental.jpg"
          alt="Dental services"
          className={`w-full h-full object-cover transition-transform duration-[1800ms] ease-out ${loaded ? "scale-100" : "scale-110"}`}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] mix-blend-multiply"
        style={{
          background: "linear-gradient(30deg, hsl(207, 87%, 9%) 0%, hsla(67, 14%, 67%, 0.20) 100%)",
        }}
      />

      {/* Top bar + Navigation */}
      <div className={`absolute top-0 left-0 right-0 z-30 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <TopBar />
        <div className="border-b border-white/20">
          <NavBar />
        </div>
      </div>

      {/* Left vertical accent bar */}
      <div className={`hidden md:block absolute left-[172px] top-[532px] z-10 w-[7px] h-[405px] transition-all duration-1000 delay-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <img src="/images/overlay-left.svg" alt="" className="w-full h-full" />
      </div>

      {/* Right vertical accent bar */}
      <div className={`hidden md:block absolute right-[64px] top-[483px] z-10 w-[1px] h-[154px] transition-all duration-1000 delay-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <img src="/images/overlay-right.svg" alt="" className="w-full h-full" />
      </div>

      {/* Hero text content */}
      <div className="absolute left-6 md:left-[242px] top-[50%] md:top-[519px] -translate-y-1/2 md:translate-y-0 z-10 max-w-[90%] md:max-w-[538px] px-4 md:px-0">
        <h1
          className={`text-primary-foreground text-[32px] md:text-[63px] font-normal leading-[40px] md:leading-[75.6px] font-gilroy transition-all duration-1000 delay-300 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Ofrecemos servicios{"\n"}dentales de alto{"\n"}nivel innovador
        </h1>
        <p
          className={`mt-4 md:mt-[29px] text-cream/80 text-[16px] md:text-[21px] font-light leading-[26px] md:leading-[33.6px] font-gilroy transition-all duration-1000 delay-[600ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Cuidamos tu sonrisa con la tecnología más avanzada,
          <br className="hidden md:block" />
          con garantía en todos nuestros tratamientos.
        </p>
      </div>

      {/* Bottom bar */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-700 delay-[900ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <BottomBar />
      </div>
    </section>
  );
};

export default HeroSection;
