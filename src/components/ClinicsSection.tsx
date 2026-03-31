const ClinicsSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-[80px] px-6 md:px-[90px]">
      <h2 className="text-foreground text-[24px] md:text-[32px] font-light font-gilroy mb-6 md:mb-[30px]">
        Nuestras clínicas
      </h2>

      <div className="relative w-full overflow-hidden" style={{ minHeight: 400 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0!2d-58.3935!3d-34.5935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzM2LjYiUyA1OMKwMjMnMzYuNiJX!5e0!3m2!1ses!2sar!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", inset: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del consultorio"
        />

        {/* Info card */}
        <div className="relative md:absolute md:top-[20px] md:right-[20px] w-full md:w-[300px] bg-primary text-primary-foreground p-6 md:p-[30px] font-gilroy z-10 mt-[400px] md:mt-0">
          <h3 className="text-[18px] font-bold mb-[4px]">Consultorio Dr. Cifuentes</h3>
          <p className="text-[13px] font-light text-primary-foreground/60 mb-[16px]">
            Peña 2108, Recoleta, Buenos Aires
          </p>

          <a href="tel:+541148068803" className="text-[14px] font-bold text-cream underline block mb-[24px]">
            +54 11 4806-8803
          </a>

          <p className="text-[16px] font-bold mb-[6px]">En turno / Con cita previa</p>
          <p className="text-[13px] font-light text-primary-foreground/60 mb-[24px]">
            Peña 2108, Recoleta, Buenos Aires
          </p>

          <p className="text-[16px] font-bold mb-[6px]">Horario</p>
          <p className="text-[13px] font-light text-primary-foreground/60">
            Lunes a viernes · Horario a confirmar
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
