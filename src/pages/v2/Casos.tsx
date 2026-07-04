import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";

const cases = [
  {
    industry: "Agencia de viajes corporativos",
    name: "MasterViajes",
    description:
      "De WhatsApp disperso a un CRM unificado. El comercial dejó de pelearse por leads.",
    stats: [
      { value: "3.2x", label: "Leads a cliente" },
      { value: "−40%", label: "CAC" },
      { value: "8h/sem", label: "Ahorro por rep" },
    ],
    href: "/casos/master-viajes",
  },
  {
    industry: "Educación internacional",
    name: "Student Travel Center",
    description:
      "Construimos su sistema operativo de revenue desde cero. 6x más aplicaciones con el mismo equipo.",
    stats: [
      { value: "6x", label: "Aplicaciones procesadas" },
      { value: "85%", label: "Reducción admin" },
      { value: "0", label: "Leads perdidos" },
    ],
    href: "/casos/student-travel-center",
  },
];

const Casos = () => (
  <LayoutV2>
    <Section surface="default" size="spacious">
      <Container size="narrow" className="text-center pt-8">
        <Eyebrow variant="teal">Casos en operación</Eyebrow>
        <h1
          className="font-poppins font-bold text-v2-ink-heading mt-4"
          style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
        >
          Empresas reales,{" "}
          <em className="font-serif italic font-normal">números reales</em>
          .
        </h1>
        <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7">
          Esto es lo que pasó cuando estos equipos cambiaron su CRM de cementerio a motor.
        </p>
      </Container>
    </Section>

    <Section surface="alt" size="default">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <Link
              key={c.name}
              to={c.href}
              className="group bg-white border border-v2-border-subtle rounded-3xl p-8 md:p-10 hover:border-v2-accent-teal/40 hover:shadow-[0_16px_48px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <span className="font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted">
                {c.industry}
              </span>
              <h3 className="font-poppins font-bold text-[26px] text-v2-ink-heading mt-3">
                {c.name}
              </h3>
              <p className="font-lato text-[15px] text-v2-ink-body leading-[1.6] mt-2">
                {c.description}
              </p>
              <div className="mt-7 border-t border-v2-border-subtle pt-6 grid grid-cols-3 gap-4">
                {c.stats.map((s, i) => (
                  <div key={i}>
                    <div className="font-poppins font-bold text-[26px] md:text-[28px] text-v2-ink-heading leading-none">
                      {s.value}
                    </div>
                    <div className="font-lato text-[10px] uppercase tracking-widest text-v2-ink-muted mt-2 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <span className="mt-auto pt-8 inline-flex items-center gap-2 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep">
                Leer caso completo
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>

    <Section surface="navy-dark" size="default">
      <Container size="narrow" className="text-center">
        <h2
          className="font-poppins font-bold text-white"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
        >
          ¿Quieres ser el{" "}
          <em className="font-serif italic font-normal text-v2-accent-teal">próximo caso</em>?
        </h2>
        <p className="font-lato text-[17px] text-white/70 mt-5 max-w-[520px] mx-auto">
          Empieza con el Radar gratis. En 48h sabremos si tu sistema tiene cura.
        </p>
        <div className="mt-9">
          <Link to="/radar">
            <ButtonV2 variant="primary" size="lg">
              Pedir Radar gratis
              <ArrowRight className="h-4 w-4" />
            </ButtonV2>
          </Link>
        </div>
      </Container>
    </Section>
  </LayoutV2>
);

export default Casos;
