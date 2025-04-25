'use client'
import '../app/globals.css'

import { TopNavbar } from '@/components/TopNabbar'
import {
  HeroSection,
  PersonaPicker,
  ContactUs,
  FAQ,
  Footer,
} from './landingPage/lpExports'
import FadeInOnView from '@/components/FadeInOnView'
// import BookingPage from './utilities/Calendly'

export default function HomeClient() {
  return (
    <div className="relative w-full h-screen">
      {/* -----------Overlay of dark color over the bg cloud video ------------ */}
      <span className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-[#00000080]" />

      {/* -------------------------Background Video ---------------------------- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        title="Cloud background video"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)',
        }}
      >
        <source src="/cloud-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-10 w-full">
        <TopNavbar />

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

        {/* <div className="w-full">
          <FadeInOnView delay={0.3}>
            <BookingPage />
          </FadeInOnView>
        </div> */}

        <div id="faq" className="w-full">
          <FadeInOnView delay={0.3}>
            <FAQ />
          </FadeInOnView>
        </div>

        <div className="w-full">
          <FadeInOnView delay={0.4}>
            <Footer />
          </FadeInOnView>
        </div>
      </div>
    </div>
  )
}
