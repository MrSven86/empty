import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AppointmentSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="book" className="w-full bg-background relative overflow-hidden py-16 md:py-[100px]">
      <img
        src="/images/circle-gradient.svg"
        alt=""
        className="absolute -top-[122px] right-0 w-[562px] h-[562px] pointer-events-none hidden md:block"
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-[90px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-start relative z-10">
        {/* Left: copy */}
        <div
          ref={leftRef}
          className={`pt-4 md:pt-[90px] transition-all duration-800 ease-out ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="font-gilroy text-[14px] font-bold uppercase tracking-wider text-accent block mb-4">
            Reservar turno
          </span>
          <h2 className="font-gilroy text-[32px] md:text-[46px] font-bold leading-[1.35] text-primary mb-6">
            Escribinos y te respondemos el mismo día.
          </h2>
          <p className="font-gilroy text-[16px] md:text-[20px] font-light leading-[36px] text-muted-foreground mb-8 max-w-[480px]">
            Atendemos con cita previa. La forma más rápida es escribirnos por WhatsApp — en la mayoría de los casos confirmamos turno en menos de una hora.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center">
              <MapPin className="w-3 h-3 text-white" />
            </div>
            <span className="font-gilroy text-[16px] text-primary font-medium">Peña 2108, Recoleta</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center">
              <Phone className="w-3 h-3 text-white" />
            </div>
            <span className="font-gilroy text-[16px] text-primary font-medium">+54 11 4806-8803</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
            <span className="font-gilroy text-[16px] text-primary font-medium">contacto@drcifuentes.com</span>
          </div>
        </div>

        {/* Right: form card */}
        <div
          ref={formRef}
          className={`relative transition-all duration-800 ease-out ${formVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.97]"}`}
          style={{ transitionDelay: formVisible ? "200ms" : "0ms" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-[20px] shadow-[0_5px_50px_10px_rgba(0,0,0,0.07)] p-8 md:p-11 flex flex-col gap-[22px]"
          >
            <div>
              <h3 className="font-gilroy text-[20px] md:text-[24px] font-bold text-primary mb-1">
                Reservar mi turno
              </h3>
              <p className="font-gilroy text-[14px] font-light text-muted-foreground">
                Completá el formulario — te confirmamos turno el mismo día.
              </p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              maxLength={100}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={form.lastName}
              onChange={handleChange}
              maxLength={100}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={form.phone}
              onChange={handleChange}
              maxLength={20}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent"
            />
            <textarea
              name="message"
              placeholder="¿Qué necesitás? Contanos brevemente"
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
              rows={3}
              className="w-full rounded-[5px] border border-border px-6 py-4 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent resize-none"
            />
            <div>
              <button
                type="submit"
                className="w-full h-[55px] rounded-[3px] bg-accent text-white font-gilroy text-[15px] font-bold hover:opacity-90 transition-opacity uppercase tracking-[2px]"
              >
                Enviar — te respondemos hoy
              </button>
              <p className="font-gilroy text-[12px] text-muted-foreground text-center mt-3">
                Sin compromiso. Tu información no se comparte con nadie.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
