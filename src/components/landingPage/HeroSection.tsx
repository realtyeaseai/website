"use client"
import { Tooltip } from "../Tooltip";
// import { Spotlight } from "@/components/ui/Spotlight";
// import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col h-fit min-h-[600px] md:min-h-[850px] w-full overflow-hidden rounded-md antialiased items-center justify-center">
  {/* Spotlight */}
  {/* <Spotlight className="absolute -top-32 left-0 md:-top-20 md:left-60" fill="white" /> */}

  {/* Overlay (dark layer over video) */}
  <span className="absolute top-0 left-0 w-full h-full dark:bg-black/30 z-[1]" />

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    title="Cloud background video"
    aria-hidden="true"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    style={{
      WebkitMaskImage: 'linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)',
      maskImage: 'linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)',
    }}
  >
    <source src="/cloud-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content Layer */}
  <div className="relative z-10 w-full max-w-[1920px] px-4 sm:px-6 lg:px-12 pt-24 md:pt-32 flex flex-col items-center text-center">
    <TextWithTooltip />
    <InputTab />
    {/* <ImageText /> */}
  </div>
</div>
  );
} 

function TextWithTooltip(){
  return(
    <div className="md:pt-0 pt-12 flex flex-col items-center justify-center w-full">
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
        <span className="inline-flex items-center justify-center w-full text-center"> Your Trusted Partner 
          {/* --------------Tooltip containing the profile pics ---------- */}
          <Tooltip/> 
        </span> 
        in Real Estate Excellence
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-white dark:text-neutral-300">
      Tailored Virtual Assistance for Real Estate Professionals  <span className="text-amber-100 dark:text-blue-400">so you can focus on closing deals, building relationships, and growing your portfolio. Reclaim Your Time</span>  Scale Your Business.
      </p>
    </div>
  )
}

function InputTab(){
  return (
    <div className="m-2 mb-10 md:w-[15%] w-full flex justify-between flex-col md:flex-row mt-12 sm:w-[25%]">
    {/* <input type="text" placeholder="Lorem ipsum" className="border border-[#FFFFFF40] mt-4 md:mr-2 mb-4 h-12 md:w-[84%] w-full rounded-4xl p-[20px] focus:outline-none focus:ring-0 focus:border-[#FFFFFF60]"/> */}
    <Link href="/#contact" className="relative inline-flex md:mt-4  h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-full">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-indigo-700 dark:bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-indigo-900">
        Get Started
      </span>
    </Link>
  </div>
  )
}

