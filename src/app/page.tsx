import {
    HeroSection,
    PersonaPicker,
    ContactUs,
    FAQ,
  } from '../components/landingPage/lpExports'
  import FadeInOnView from '@/components/FadeInOnView'


export default function HomePage() {
  return (
  <div>
  <div id="hero" className="w-full overflow-hidden">
    <FadeInOnView delay={0}>
      <HeroSection />
    </FadeInOnView>
  </div>

  <div id="clients" className="w-full">
    <FadeInOnView delay={0.1}>
      <PersonaPicker />
    </FadeInOnView>
  </div>

  <div className="w-full">
    <FadeInOnView delay={0.2}>
      <ContactUs />
    </FadeInOnView>
  </div>


  <div id="faq" className="w-full">
    <FadeInOnView delay={0.3}>
      <FAQ />
    </FadeInOnView>
  </div>
  </div>
);
}
