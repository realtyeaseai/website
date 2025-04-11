import { Tooltip } from "../Tooltip";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col min-h-[75dvh] md:min-h-[200dvh] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center bg-black">
          {/* ------------------------ Spotlight ------------------------- */}
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white"/>
    
          {/* ---------------------- Items ---------------------- */}
          <div className="mt-12 md:mt-16 relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 bg-transparent flex place-items-center flex-col ">
            
            <TextWithTooltip/>
            <InputTab/>
            <ImageText/>

          </div>
        </div>
  )
}

function TextWithTooltip(){
  return(
    <div>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
        <span className="inline-flex items-center justify-center w-full text-center">Your Trusted 
          {/* --------------Tooltip containing the profile pics ---------- */}
          <Tooltip/> 
        </span> 
        Virtual Assistants
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-neutral-300">
        We provide expert virtual assistant services that  <span className="text-blue-400">streamline operations, save time, and let you focus</span>  on growing your business.
      </p>
    </div>
  )
}

function InputTab(){
  return (
    <div className="m-2 mb-10 md:w-[60%] w-full flex justify-between flex-col md:flex-row mt-12">
    <input type="text" placeholder="Subscribe to our News Letter (john@gmail.com)" className="border border-[#FFFFFF40] mt-4 md:mr-2 mb-4 h-12 md:w-[84%] w-full rounded-4xl p-[20px] focus:outline-none focus:ring-0 focus:border-[#FFFFFF60]"/>
    <button className="relative inline-flex md:mt-4  h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Subscribe
      </span>
    </button>
  </div>
  )
}

function ImageText(){
  return(
    <div className="relative flex items-center justify-center w-full h-[540px] md:h-[40%] mt-4 md:mt-12 ">
      <span className="w-full h-full md:block hidden">
        <img
          src="/heroItems/HeroImage.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Black mask at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"/>
      </span>
      <div className="absolute w-full h-[50%] text-center flex items-center justify-center flex-col">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl md:text-4xl font-bold text-transparent">
          Maximize Your Productivity with Professional Virtual Assistants
        </h1>
        <p className="text-neutral-400 text-base font-normal w-[80%] mx-auto mt-4">
          Running a successful business is demanding—let us help lighten your load! Whether you're in real estate, construction industry, or multiservice, our experienced virtual assistants handle your day-to-day administrative tasks, allowing you to focus on what matters most.
        </p>
      </div>
    </div>
  )
}
