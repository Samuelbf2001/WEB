import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";

const LOGOS = [
  "MasterViajes",
  "Student Travel Center",
  "Sourxe",
  "Sportix",
  "Anato",
  "Ekomercio",
];

export const LogoCloudV2 = () => {
  return (
    <Section surface="default" size="compact" className="py-12 md:py-16">
      <Container size="default">
        <div className="flex flex-col items-center text-center">
          <Eyebrow variant="navy">
            Equipos de growth ya operando con Sixteam
          </Eyebrow>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 opacity-80">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="font-lato font-semibold uppercase tracking-[0.1em] text-[15px] text-v2-ink-muted hover:text-v2-ink-body transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LogoCloudV2;
