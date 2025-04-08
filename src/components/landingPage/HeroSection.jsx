import { Tooltip } from "../Tooltip";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col min-h-[72dvh] md:h-[100dvh] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
    
          {/* ------------------------ Spotlight ------------------------- */}
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />
    
          {/* ----------------------Center Items ---------------------- */}
          <div className="mt-12 md:mt-4 relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 bg-transparent flex place-items-center flex-col ">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
              <span className="inline-flex items-center justify-center w-full text-center">Your Personal 
                {/* --------------Tooltip containing the profile pics ---------- */}
                <Tooltip/> 
              </span> 
              Real-Estate AI Helper
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-neutral-300">
              Ask about Property value, Investment potential, or city our <span className="text-blue-400">AI&apos;s</span> got your back
            </p>
          
    
              {/* ------------------ Input Box -------------------- */}
              <div className="m-2 md:w-[60%] w-full flex justify-between flex-col md:flex-row mt-12">
                <input type="text" placeholder="Real Estate with Ease" className="border border-[#FFFFFF40] mt-4 md:mr-2 mb-4 h-12 md:w-[84%] w-full rounded-4xl p-[20px] focus:outline-none focus:ring-0 focus:border-[#FFFFFF60]"/>
                <button className="relative inline-flex md:mt-4  h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
                  </span>
                </button>
              </div>
              
    
              
    
          </div>
          {/* ---------------------------------------------------------------- */}
    
          {/* <video
              controls
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-[-2] [mask-image:linear-gradient(to_bottom,white,white,transparent)]"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          
        </div>
  )
}
