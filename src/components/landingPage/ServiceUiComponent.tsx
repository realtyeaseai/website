"use client";
import Image from 'next/image';
import { Send } from 'lucide-react'; // or use any SVG icon if not using lucide

export default function ServicesShowcase() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black text-white font-sans">
      {/* Background Grid Effect */}
      {/* <div className="absolute inset-0 bg-[url('/grid-bg.png')] opacity-30 z-0 "></div> */}

      {/* Center Component */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">

        {/* 3D Cards Section */}
        <div className="relative h-fit w-[80%] flex items-center justify-center gap-4 mb-8">
          {/* Bg Image */}
          <Image 
            src="/suc/bgCards.svg"
            alt="3D Card"
            width={400}
            height={400}
            className="h-full w-full z-[-1] rounded-xl hidden dark:block"
          />

          {/* lightBgCard.svg */}
          <Image
            src="/suc/lightBgCard.svg"
            alt="3D Card"
            width={400}
            height={300}
            className="h-full w-full z-[-1] rounded-xl dark:hidden block"
          />
          {/* Black mask at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t dark:from-black to-transparent"/>

        </div>
        {/* Left Flooting Items */}
        <LeftItems/>

        {/* Right flooting Card */}
        <RightItems/>

      </div>
    </div>
  );
}



export function LeftItems() {
  return (
    <div className="absolute w-[320px] h-[480px] top-[12%] gap-4 left-[5%] p-2 flex flex-col items-center justify-center">

      {/* 3D Card */}
      <div className='cursor-crosshair w-[95%] flex-[.77] dark:bg-black/80 bg-white/90 text-black dark:text-white rounded-xl p-4 shadow-xl border border-[#00000020] dark:border-[#ffffff30]'>
        <div className="text-xs bg-blue-500 text-white px-3 py-1 rounded-md inline-block mb-6">
          Help & Coordination for you
        </div>
        <p className="text-md font-semibold mb-2">Get help ?</p>

        <p className="text-[12px] w-full h-[40px] flex items-center justify-start pl-2 text-gray-400 mb-4 border border-[#00000028] dark:border-[#ffffff40] rounded cursor-crosshair">
          Help me with Web development services. . .
        </p>
            
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Social Media Management", "Marketing", "Sales", "Budget", "Lead Generation", "Business Development"].map(tag => (
            <span key={tag} className="border border-[#00000028] dark:border-[#ffffff40] text-xs text-gray-700 dark:text-white px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex-[.10] flex items-center justify-between px-4 py-3 bg-[#ffffff0f] dark:bg-[#1d1d1d80] dark:hover:bg-[#2c2c2c80]  border border-[#ffffff0f] rounded-2xl shadow-md backdrop-blur-md cursor-pointer">
        <div className="flex items-center space-x-3">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden transform transition-transform hover:scale-105">
            <Image
              src="/suc/jhonathan.svg" // Put the image in public folder and use this path
              alt="Jhonathan Read"
              width={48}
              height={48}
              className="w-full h-full bg-purple-700"
            />
          </div>

          {/* Name and Email */}
          <div className="flex flex-col leading-tight">
            <span className="dark:text-white text-black font-semibold text-lg">Jhonathan Read</span>
            <span className="text-gray-400 text-sm">Jhon55simp@gmail.com</span>
          </div>
        </div>

        {/* Send Icon */}
        <div className="ml-4 p-2 transition-colors">
          <Send className="dark:text-white text-black w-5 h-5" />
        </div>
    </div>

    </div>
  );
}


export function RightItems(){
  return(
    <div className="absolute top-[20%] right-[5%] bg-white/90 dark:bg-black/80 rounded-xl p-4 shadow-xl border border-[#00000020] dark:border-[#ffffff30] w-[250px] cursor-crosshair">
      <Image
        src="/suc/house.svg"
        alt="Highlight"
        width={220}
        height={120}
        className="rounded mb-2"
      />
      <h1 className="font-bold text-md mb-1 text-black dark:text-white">Your Website, Built by Pros</h1>
      <p className="text-xs text-gray-400">
        Skip the hassle. Connect with skilled developers and launch a professional website without lifting a finger.
      </p>
    </div>
  )
}
