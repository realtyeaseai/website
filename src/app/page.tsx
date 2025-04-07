import { TopNavbar } from "@/components/TopNabbar";
import { cn } from "@/lib/utils";
import { Tooltip } from "../components/Tooltip"
import { Spotlight } from "@/components/ui/Spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2] [mask-image:linear-gradient(to_bottom,white_60%,rgba(0,0,0,0)_100%)]"
        >
          <source src="/cloud-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        {/* ----------------------------------------------------------------------- */}



       <div className="z-10">
          <TopNavbar />
          <Page/>
          {/* <Page/> */}
          <Bento/>
          
        </div>
      </div>
    </div>
  );
}






function Page(){
  return (
    <div className="relative flex flex-col h-[100dvh] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">

      {/* ------------------------ Spotlight ------------------------- */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="cyan"
      />

      {/* ----------------------Center Items ---------------------- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 bg-transparent flex place-items-center flex-col ">
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
          <div className="m-2 w-[60%] flex justify-between flex-row mt-12">
            <input type="text" placeholder="Real Estate with Ease" className="border border-[#FFFFFF40] h-12 w-[84%] rounded-4xl p-[20px] focus:outline-none focus:ring-0 focus:border-[#FFFFFF60]"/>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
          </div>
          

          

      </div>
      {/* ---------------------------------------------------------------- */}

      {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2] [mask-image:linear-gradient(to_bottom,white,white,transparent)]"
        >
          <source src="/cloud-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      
    </div>
  )
}

function Bento(){

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black place-items-center">HELLO</div>
  );
  const items = [
    {
      title: "Find Me a Real Estate Agent",
      description: "Get Connected with verified Agents quickly and shortly",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Help me Buy a Home",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Schedule a Visit",
      description: "Tell our AI when you're free, and we'll set up a property tour with the agent.",
      header: <Skeleton />,
      className: "md:col-span-3",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];


  return(
    <div className="w-full bg-black text-white py-12">

    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>

    </div>
  )

  
}


function Footer(){
    <div>
      Footer  --- FAQs and mailing option
    </div>
}