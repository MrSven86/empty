const ClinicsSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-[80px] px-6 md:px-[90px]">
      <h2 className="text-foreground text-[24px] md:text-[32px] font-light font-gilroy mb-6 md:mb-[30px]">
        Nuestras clínicas
      </h2>

      <div className="relative w-full overflow-hidden" style={{ minHeight: 400 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sen!2sru!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", inset: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de la clínica"
        />

        {/* Info card - below map on mobile, floating on desktop */}
        <div className="relative md:absolute md:top-[20px] md:right-[20px] w-full md:w-[300px] bg-primary text-primary-foreground p-6 md:p-[30px] font-gilroy z-10 mt-[400px] md:mt-0">
          <h3 className="text-[18px] font-bold mb-[4px]">Clínica Dental Klaas</h3>
          <p className="text-[13px] font-light text-primary-foreground/60 mb-[16px]">
            Calle Gran Vía, 42
          </p>

          <a href="tel:+34911234567" className="text-[14px] font-bold text-cream underline block mb-[24px]">
            +34 911 234 567
          </a>

          <p className="text-[16px] font-bold mb-[6px]">Metro</p>
          <p className="text-[13px] font-light text-primary-foreground/60 mb-[24px]">
            Estación Gran Vía
          </p>

          <p className="text-[16px] font-bold mb-[6px]">En coche</p>
          <p className="text-[13px] font-light text-primary-foreground/60 mb-[8px]">
            Acceso por Calle Gran Vía, pasar la primera barrera de seguridad, girar a la derecha en la segunda entrada
          </p>
          <p className="text-[13px] font-light text-cream underline mb-[24px] cursor-pointer">
            Pase de aparcamiento
          </p>

          <p className="text-[16px] font-bold mb-[6px]">Horario</p>
          <p className="text-[13px] font-light text-primary-foreground/60">
            Lun-Vie: 08:00 – 21:00
          </p>
          <p className="text-[13px] font-light text-primary-foreground/60">
            Fines de semana: 09:00 – 19:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
