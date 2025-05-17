// import ImageText from '@/components/HireVa'

import ServicesShowcase from '@/components/landingPage/ServiceUiComponent';
import {
    HeroSection,
    PersonaPicker,
    FAQ,
    // PricingSection,
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
  <div id="hero" className="w-full overflow-hidden lg:block hidden">
    <FadeInOnView delay={0}>
     <ServicesShowcase />
    </FadeInOnView>
  </div>

  <div id="clients" className="w-full scroll-mt-24">
    <FadeInOnView delay={0.1}>
      <PersonaPicker />
    </FadeInOnView>
  </div>

    {/* <PricingSection/> */}
    
  <div id="faq" className="w-full">
    <FadeInOnView delay={0.3}>
      <FAQ />
    </FadeInOnView>
  </div>
  </div>
);
}
