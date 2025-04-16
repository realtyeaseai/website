import { TopNavbar } from "@/components/TopNabbar";
import { 
  HeroSection, 
  ServicesGrid,
  PersonaPicker,
  // Pricing,
  FAQ,
  Footer,

} from "../components/landingPage/lpExports"


export default function Home() {
  return (
    <div className="relative w-full h-screen">
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
         {/* <div id="pricing">
           <Pricing />
         </div> */}
         <div id="faq">
           <FAQ />
         </div>
         {/* <div id="footer"> */}
           <Footer />
         {/* </div> */}
      </div>
    </div>
  );
}

export const metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper",
  description: "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your back.",
};