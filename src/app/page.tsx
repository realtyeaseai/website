import { TopNavbar } from "@/components/TopNabbar";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";


export default function Home() {
  return (
    <div>
       <div className="relative w-full">
        <TopNavbar />
        <Page1/>
        <Page1/>
        <Page1/>
      </div>
    </div>
  );
}


function Page1(){
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div className={cn("pointer-events-none absolute inset-0 [background-size:40px_40px] select-none","[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",)}/>
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 bg-transparent">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
              Your Personal <br/> Real-Estate AI Helper
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            Ask about Property value, Investment potential, or city our AI&apos;s got your back
            </p>
        </div>
    </div>
  )
}


function Page2(){
  return(
    <div>
      
    </div>
  )
}