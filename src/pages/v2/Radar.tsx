import { useState } from "react";
import { ArrowRight, Check, ChevronDown, FileText, Mail, Map, TrendingDown, Wrench } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";

/* ── deliverables ── */
const includes = [
  {
    icon: Map,
    title: "Mapeo agéntico de tu operación",
    desc: "Cómo funciona el flujo comercial real — no el organigrama teórico. Sam y Alex acceden a tu stack y mapean cada punto de contacto, fricción y decisión.",
  },
  {
    icon: TrendingDown,
    title: "Cuantificación de fugas de revenue",
    desc: "Dónde se pierde el dinero, con números. No estimaciones vagas: leads sin seguimiento, ciclos inflados, automatizaciones rotas.",
  },
  {
    icon: FileText,
    title: "Roadmap priorizado",
    desc: "Qué hacer, en qué orden y con qué impacto estimado. Un plan ejecutable, no una lista de deseos.",
  },
  {
    icon: Wrench,
    title: "Plataforma montada al final",
    desc: "No te quedas con un PDF. Sales con el sistema base ya en producción — listo para operar desde el día 15.",
  },
];

/* ── process phases ── */
const steps = [
  {
    number: "01",
    title: "Días 1–3: Onboarding",
    desc: "Acceso a tu stack (CRM, herramientas, dashboards). Contexto de negocio y definición de KPIs de referencia.",
  },
  {
    number: "02",
    title: "Días 4–10: Mapeo agéntico",
    desc: "Sam + Alex hacen el diagnóstico técnico y estratégico. Identificamos fugas, cuellos de botella y oportunidades de automatización.",
  },
  {
    number: "03",
    title: "Días 11–14: Entrega + Setup",
    desc: "Presentación de hallazgos, roadmap priorizado y setup de la plataforma base. Sales con el sistema montado.",
  },
];

/* ── faq ── */
const faqs = [
  {
    q: "¿Es reembolsable si no continúo con Ops?",
    a: "El Diagnóstico no es reembolsable porque te quedas con el mapa de tu operación y la plataforma montada — entregables tangibles. Pero si decides no continuar con Ops, no hay penalidad: te quedas con lo que entregamos y lo operas tú.",
  },
  {
    q: "¿Qué accesos necesitan de mi lado?",
    a: "Acceso de lectura a tu CRM, integraciones activas y dashboards de operación. No necesitamos credenciales de producción con permisos de escritura para el diagnóstico inicial.",
  },
  {
    q: "¿Qué pasa después del Diagnóstico?",
    a: "Presentamos los hallazgos y te damos dos opciones: continúas con un plan Ops mensual en promo desde $200/mes donde operamos el sistema por ti, o te quedas con el mapa y la plataforma montada y la operas internamente. Sin presión.",
  },
  {
    q: "¿Cuánto tiempo me toma a mí?",
    a: "El onboarding inicial es de 1–2 horas en los primeros 3 días. De ahí en adelante somos nosotros los que trabajamos. La presentación final toma 90 minutos.",
  },
];

const Radar = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [size, setSize] = useState("");
  const [pain, setPain] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, quiero solicitar el Diagnóstico Sixteam ($2,500 USD).\n\nNombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTamaño: ${size}\nDolor principal: ${pain}`;
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
          <Eyebrow variant="teal">Sixteam Diagnóstico</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            Diagnóstico Sixteam.{" "}
            <br className="hidden sm:block" />
            <em className="font-serif italic font-normal">
              Te entregamos el sistema montado.
            </em>
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7">
            Dos semanas. $2,500 USD único. No es un PDF — es el mapa de cómo opera tu negocio, dónde
            pierdes dinero y la plataforma base ya implementada para arrancar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contacto">
              <ButtonV2 variant="primary" size="lg">
                Solicitar Diagnóstico — $2,500
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </a>
            <a href="/contacto">
              <ButtonV2 variant="outline" size="lg">
                Hablar con Samuel antes
              </ButtonV2>
            </a>
          </div>
          <p className="mt-5 font-lato text-[11px] font-medium uppercase tracking-widest text-v2-accent-teal-deep">
            Pago único · 2 semanas · ~50% de los clientes continúan en Ops mensual.
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
                Cuatro entregables.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Cero pelusa</em>.
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-5">
                El Diagnóstico es lo que un equipo RevOps senior te entregaría en su primer mes — más
                la plataforma ya montada para que no arranques de cero.
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
                      <Eyebrow variant="teal">Solicitar Diagnóstico</Eyebrow>
                      <h3
                        className="font-poppins font-bold text-v2-ink-heading mt-2"
                        style={{ fontSize: "22px" }}
                      >
                        Llena el formulario en 90 segundos.
                      </h3>
                      <p className="font-lato text-[14px] text-v2-ink-body mt-2">
                        Un asesor te contacta el mismo día para confirmar agenda e inicio. $2,500 USD · 2 semanas.
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
                      Solicitar Diagnóstico — $2,500
                      <ArrowRight className="h-4 w-4" />
                    </ButtonV2>

                    <p className="font-lato text-[12px] text-v2-ink-muted text-center mt-1">
                      Al enviar aceptas que un asesor te contacte para confirmar inicio. No spam, no listas, no llamadas en frío.
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
              Tres fases.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">Dos semanas</em>.
              {" "}Sistema montado.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
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

      {/* ── faq ── */}
      <Section surface="alt" size="default">
        <Container size="narrow">
          <div className="text-center mb-10">
            <Eyebrow variant="navy">Preguntas frecuentes</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.2" }}
            >
              Lo que siempre preguntan.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-v2-border-subtle rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-poppins font-bold text-[16px] text-v2-ink-heading pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-v2-accent-teal-deep flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── final cta ── */}
      <Section surface="navy-dark" size="default">
        <Container size="narrow" className="text-center">
          <Eyebrow variant="teal" className="text-v2-accent-teal">
            El momento de saberlo
          </Eyebrow>
          <h2
            className="font-poppins font-bold text-white mt-5"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
          >
            Listo para ver dónde está la fuga.{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">Dos semanas y lo sabes.</em>
          </h2>
          <p className="font-lato text-[16px] text-white/65 leading-[1.65] mt-7 max-w-[480px] mx-auto">
            $2,500 USD pago único. Mapa de operación, cuantificación de fugas, roadmap priorizado y plataforma base montada. Todo en 14 días.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contacto">
              <ButtonV2 variant="primary" size="lg">
                Solicitar Diagnóstico — $2,500
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
          <p className="font-lato text-[13px] italic text-white/45 mt-8">
            "Si después de las dos semanas te quedas con el mapa y nos dices que no, nos quedamos amigos."
          </p>
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
