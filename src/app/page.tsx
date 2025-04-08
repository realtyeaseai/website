import { TopNavbar } from "@/components/TopNabbar";
import { 
  HeroSection, 
  ServicesGrid,
} from "../components/landingPage/lpExports"


export default function Home() {
  return (
    <div>
       <div className="relative w-full h-screen bg-transparent">

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
          {/* [mask-image:linear-gradient(to_bottom,white_60%,rgba(0,0,0,0)_100%)] */}
          <source src="/cloud-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        

        
        {/* ----------------------------------------------------------------------- */}



       <div className="z-10">
          <TopNavbar />
          <HeroSection/>
          <ServicesGrid/>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper",
  description: "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your back.",
};