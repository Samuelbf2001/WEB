import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";

const defaultLogos = [
  { src: '/Llogo Milote.png', alt: 'Milote' },
  { src: '/Logo bioquimica.png', alt: 'Bioquímica' },
  { src: '/Logo cebra.png', alt: 'Cebra' },
  { src: '/Logo dance.png', alt: 'Dance' },
  { src: '/Logo genosur.png', alt: 'Genosur' },
  { src: '/Logo magnetica.png', alt: 'Magnética' },
  { src: '/Logo Mizar.png', alt: 'Mizar' },
  { src: '/Logo nibec.png', alt: 'Nibec' },
  { src: '/Logo RAD.png', alt: 'RAD' },
  { src: '/Logo roofing.png', alt: 'Roofing' },
  { src: '/Logo siar.png', alt: 'SIAR' },
  { src: '/Logo STC.png', alt: 'Student Travel Center' },
  { src: '/Logo stunet.png', alt: 'Stunet' },
  { src: '/LOGO-CALAS.png', alt: 'Calas' },
  { src: '/logo-dreams.png', alt: 'Dreams' },
  { src: '/logo-evolucione.png', alt: 'Evolucione' },
  { src: '/logo-glish.png', alt: 'Glish' },
  { src: '/logo-web-anato-1-1.png', alt: 'Anato' },
];

const sliderLogos = [...defaultLogos, ...defaultLogos];

export const LogoSliderV2 = () => {
  return (
    <Section surface="default" size="compact" className="py-14 md:py-16">
      <Container size="default">
        <div className="flex flex-col items-center text-center">
          <Eyebrow variant="navy">Equipos ya operando con Sixteam</Eyebrow>
          <div className="logo-slider-wrapper py-2 mt-8 w-full">
            <div className="logo-slider-track">
              {sliderLogos.map((logo, i) => (
                <div key={i} className="logo-slider-item flex-shrink-0">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LogoSliderV2;
