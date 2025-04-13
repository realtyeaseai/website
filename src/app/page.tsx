import { TopNavbar } from "@/components/TopNabbar";
import { 
  HeroSection, 
  ServicesGrid,
  PersonaPicker,
  ContactUs,
  FAQ,
  Footer,
  About

} from "../components/landingPage/lpExports"
import Pricing from "@/components/utilities/Pricing";


export default function Home() {
  return (
    <div>
       <div className="relative w-full h-screen">

        {/* -----------Overlay of dark color over the bg cloud video ------------ */}
        <span className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-[#00000080]"></span>

        {/* -------------------------Background Video ----------------------------*/}
        
        <video
          autoPlay
          loop
          muted
          playsInline
          title="Cloud background video" aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          
          <source src="/cloud-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* [mask-image:linear-gradient(to_bottom,white_60%,rgba(0,0,0,0)_100%)] */}
        
        {/* ----------------------------------------------------------------------- */}



       <div className="z-10">
          <TopNavbar />
          <div id="hero">
            <HeroSection />
          </div>
          <div id="services" className="bg-black pt-24">
            <ServicesGrid />
          </div>
          <div id="persona">
            <PersonaPicker />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <ContactUs />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          {/* <div id="footer"> */}
            <Footer />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper",
  description: "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your backs. Available 24 X 7",
};