import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, FileText, Mail, ShieldCheck } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";

const includes = [
  {
    icon: FileText,
    title: "Auditoría de tu CRM actual",
    desc: "Revisamos limpieza, duplicados, pipelines, automatizaciones existentes y configuración.",
  },
  {
    icon: ShieldCheck,
    title: "Mapa de procesos críticos",
    desc: "Identificamos dónde se rompe el flujo entre Marketing, Sales y CS hoy.",
  },
  {
    icon: Clock,
    title: "Estimación de fugas",
    desc: "Cuánto revenue y horas se están perdiendo por semana en tareas manuales y leads sin atender.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuestionario corto",
    desc: "8 preguntas sobre tu stack, equipo, volumen y dolor principal. 5 minutos.",
  },
  {
    number: "02",
    title: "Revisión técnica",
    desc: "Te pedimos acceso de lectura a tu CRM. Lo escaneamos con un equipo + asistentes IA.",
  },
  {
    number: "03",
    title: "Reporte ejecutivo en 48h",
    desc: "Te enviamos un PDF de 6-8 páginas con hallazgos, prioridades y plan inicial.",
  },
  {
    number: "04",
    title: "Llamada opcional",
    desc: "Si quieres profundizar, 30 minutos. Sin venta. Sin presión.",
  },
];

const Radar = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [size, setSize] = useState("");
  const [pain, setPain] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, quiero el Radar gratis.\n\nNombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTamaño: ${size}\nDolor principal: ${pain}`;
    const url = `https://wa.me/573004188522?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <LayoutV2>
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,191,165,0.07),transparent_60%)]"
        />
        <Container size="narrow" className="text-center pt-8">
          <Eyebrow variant="teal">El Radar Sixteam</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            Te decimos dónde está la{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">fuga</em>
            </Underlined>{" "}
            en menos de 48 horas.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7">
            Un diagnóstico ejecutivo de tu sistema de Revenue Operations. Sin costo. Sin venta. Sin
            propuesta de 30 páginas. Te queda el reporte, decidas trabajar con nosotros o no.
          </p>
          <p className="mt-5 font-lato text-[11px] font-medium uppercase tracking-widest text-v2-accent-teal-deep">
            48h · 6-8 páginas · 100% gratis
          </p>
        </Container>
      </Section>

      <Section surface="alt" size="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Eyebrow variant="navy">Qué incluye</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 38px)", lineHeight: "1.15" }}
              >
                Tres entregables.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Cero pelusa</em>.
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-5">
                El Radar es lo que un consultor de RevOps senior te entregaría en su primera semana —
                pero gratis y en 48 horas.
              </p>
              <div className="mt-8 flex flex-col gap-5">
                {includes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading">
                          {item.title}
                        </h3>
                        <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-v2-border-subtle rounded-3xl p-8 md:p-10 shadow-[0_16px_48px_rgba(10,35,66,0.06)]">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-v2-surface-teal-mist mx-auto flex items-center justify-center">
                      <Check className="h-7 w-7 text-v2-accent-teal-deep" />
                    </div>
                    <h3
                      className="font-poppins font-bold text-v2-ink-heading mt-5"
                      style={{ fontSize: "24px" }}
                    >
                      Listo. Abrimos WhatsApp.
                    </h3>
                    <p className="font-lato text-[15px] text-v2-ink-body mt-3 max-w-[380px] mx-auto">
                      Si no se abrió tu WhatsApp, escríbenos directo a hola@sixteam.pro y te
                      respondemos el mismo día.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 font-lato text-[13px] uppercase tracking-widest text-v2-accent-teal-deep hover:text-v2-ink-heading"
                    >
                      Enviar otro
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <Eyebrow variant="teal">Pídelo aquí</Eyebrow>
                      <h3
                        className="font-poppins font-bold text-v2-ink-heading mt-2"
                        style={{ fontSize: "22px" }}
                      >
                        Llena el formulario en 90 segundos.
                      </h3>
                      <p className="font-lato text-[14px] text-v2-ink-body mt-2">
                        Te lo devolvemos en menos de 48 horas a tu correo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      <FormField
                        label="Tu nombre"
                        value={name}
                        onChange={setName}
                        placeholder="Juan Pérez"
                        required
                      />
                      <FormField
                        label="Email de trabajo"
                        value={email}
                        onChange={setEmail}
                        placeholder="juan@empresa.com"
                        type="email"
                        required
                      />
                      <FormField
                        label="Empresa"
                        value={company}
                        onChange={setCompany}
                        placeholder="Acme Inc."
                        required
                      />
                      <SelectField
                        label="Tamaño del equipo"
                        value={size}
                        onChange={setSize}
                        options={[
                          { value: "", label: "Selecciona…" },
                          { value: "1-10", label: "1–10 personas" },
                          { value: "10-50", label: "10–50 personas" },
                          { value: "50-200", label: "50–200 personas" },
                          { value: "200+", label: "200+ personas" },
                        ]}
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-ink-muted mb-1.5">
                        ¿Cuál es tu dolor #1 hoy?
                      </label>
                      <textarea
                        value={pain}
                        onChange={(e) => setPain(e.target.value)}
                        placeholder="Ej. los leads de marketing se pierden en WhatsApp y no sé cuántos se cerraron…"
                        rows={3}
                        required
                        className="w-full rounded-xl border border-v2-border-subtle bg-v2-surface-cream px-4 py-3 font-lato text-[14px] text-v2-ink-heading placeholder:text-v2-ink-muted focus:outline-none focus:ring-2 focus:ring-v2-accent-teal focus:border-transparent transition-shadow resize-none"
                      />
                    </div>

                    <ButtonV2 type="submit" variant="primary" size="lg" className="w-full mt-2">
                      Enviar y abrir WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </ButtonV2>

                    <p className="font-lato text-[12px] text-v2-ink-muted text-center mt-1">
                      Al enviar aceptas que un experto te contacte. No spam, no listas, no llamadas
                      en frío.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="default" size="default">
        <Container>
          <div className="text-center max-w-[640px] mx-auto">
            <Eyebrow variant="navy">Cómo funciona</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
            >
              Cuatro pasos. <em className="font-serif italic font-normal text-v2-accent-teal-deep">48 horas</em>. Cero fricción.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {steps.map((s) => (
              <div
                key={s.number}
                className="bg-white border border-v2-border-subtle rounded-2xl p-6"
              >
                <span className="font-serif italic text-[42px] leading-none text-v2-accent-sand">
                  {s.number}
                </span>
                <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-3">
                  {s.title}
                </h3>
                <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="navy-dark" size="default">
        <Container size="narrow" className="text-center">
          <Eyebrow variant="teal" className="text-v2-accent-teal">
            Garantía simple
          </Eyebrow>
          <h2
            className="font-poppins font-bold text-white mt-5"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
          >
            "Si después de 48h te queda{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">solo el diagnóstico</em>{" "}
            y nos dices que no, nos quedamos amigos."
          </h2>
          <p className="font-lato text-[16px] text-white/65 leading-[1.65] mt-7 max-w-[480px] mx-auto">
            No nos sentimos mal. El reporte ya te ayudó. Y si algún día vuelves, está la puerta
            abierta.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <ButtonV2 variant="primary" size="lg">
                Pedir mi Radar gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </a>
            <a href="mailto:hola@sixteam.pro">
              <ButtonV2
                variant="outline"
                size="lg"
                className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
              >
                <Mail className="h-4 w-4" />
                hola@sixteam.pro
              </ButtonV2>
            </a>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}
const FormField = ({ label, value, onChange, placeholder, required, type = "text" }: FormFieldProps) => (
  <div>
    <label className="block font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-ink-muted mb-1.5">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-v2-border-subtle bg-v2-surface-cream px-4 py-3 font-lato text-[14px] text-v2-ink-heading placeholder:text-v2-ink-muted focus:outline-none focus:ring-2 focus:ring-v2-accent-teal focus:border-transparent transition-shadow"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}
const SelectField = ({ label, value, onChange, options, required }: SelectFieldProps) => (
  <div>
    <label className="block font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-ink-muted mb-1.5">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full rounded-xl border border-v2-border-subtle bg-v2-surface-cream px-4 py-3 font-lato text-[14px] text-v2-ink-heading focus:outline-none focus:ring-2 focus:ring-v2-accent-teal focus:border-transparent transition-shadow"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

export default Radar;
