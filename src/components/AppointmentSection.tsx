import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AppointmentSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-background relative overflow-hidden py-16 md:py-[100px]">
      {/* Decorative circle */}
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
            Cita
          </span>
          <h2 className="font-gilroy text-[32px] md:text-[46px] font-bold leading-[1.35] text-primary mb-6">
            Contacta con nosotros
            <br />
            para reservar tu cita
          </h2>
          <p className="font-gilroy text-[16px] md:text-[20px] font-light leading-[36px] text-muted-foreground mb-8 max-w-[480px]">
            Nuestro equipo está listo para ayudarte a encontrar el mejor horario y tratamiento para ti.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center">
              <Phone className="w-3 h-3 text-white" />
            </div>
            <span className="font-gilroy text-[16px] text-primary font-medium">+34 911 234 567</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
            <span className="font-gilroy text-[16px] text-primary font-medium">hola@klaas.com</span>
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
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
              maxLength={20}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              maxLength={255}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent"
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full h-[52px] rounded-[5px] border border-border px-6 font-gilroy text-[15px] text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent appearance-none"
            >
              <option value="">Tipo de cita</option>
              <option value="limpieza">Limpieza dental</option>
              <option value="revision">Revisión general</option>
              <option value="implantes">Implantes</option>
              <option value="ortodoncia">Ortodoncia</option>
              <option value="otro">Otro</option>
            </select>
            <textarea
              name="message"
              placeholder="Mensaje"
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
              rows={4}
              className="w-full rounded-[5px] border border-border px-6 py-4 font-gilroy text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent bg-transparent resize-none"
            />
            <button
              type="submit"
              className="w-full h-[55px] rounded-[3px] bg-accent text-white font-gilroy text-[17px] font-bold hover:opacity-90 transition-opacity"
            >
              Enviar ahora
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
