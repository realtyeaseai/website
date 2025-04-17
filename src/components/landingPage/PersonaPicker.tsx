'use client'
import { Meteors } from "../ui/meteors";
import Image from "next/image";

// edit this for top servicer 5 grid images 
const items = [{
    tag:"/personaSlectorItems/heroicons_paint-brush-20-solid.svg",
    title:"Painting Service",
    // description:'“Schedule painters, compare quotes, and refresh your space — stress-free.”'
},{
    tag:"/personaSlectorItems/healthicons_electricity.svg",
    title:"Electrician Service",
    // description:'“Let us book certified electricians for installations, fixes, and safety checks.”'
},{
    tag:"/personaSlectorItems/ic_baseline-pest-control.svg",
    title:"Pest removal Service",
    // description:'“Don&apos;t bug out — we&apos;ll arrange quick, professional pest control near you.”'
},{
    tag:"/personaSlectorItems/map_plumber.svg",
    title:"Plumbing Service",
    // description:'“Leaky tap or blocked pipe? We&aposll get the right plumber to your door.”'
},{
    tag:"/personaSlectorItems/home.svg",
    title:"Construction Service",
    // description:'“Manage your renovation or repair crew — with timelines and updates.”'
},
];

export default function PersonaPicker(){
    return(
        <div className="bg-black h-fit w-full min-h-[120dvh] flex justify-center flex-col items-center py-10 md:py-20">
            <div className="md:w-[80%] w-full flex justify-center items-center flex-col mt-0">
                <h1 className="text-4xl text-white">Who are you?</h1>
                <p className="text-[#ffffff99] text-[14px]">Help us identify you needs</p>
            </div>

            <RenderPref/>
            
            <div className="md:w-[80%] w-full flex justify-center items-center flex-col mt-8">
                <h1 className="w-[70%] m-2 py-4 px-2 text-4xl rounded-[8px] text-white text-center ">Services</h1>
                {/* border border-[#ffffff80] bg-[#ffffff10]  */}
            </div>

            {/* ------------------------ Cards ------------------------ */} 
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 place-items-center m-2 md:m-0">
                
                <RenderCards/>
                <LastCard/>
                
            </div>
        </div>
    );
}

function RenderPref(){
    return(
       <div className="md:w-[50%] w-full h-[320px] flex justify-center items-center flex-col md:mt-0">
           <div className="relative flex h-full w-full p-4 flex-row gap-4 md:gap-8 items-center justify-center">
               
               <div className="relative h-[80%] md:h-full w-full flex-[.45] rounded-[8px] text-white text-center overflow-hidden border border-[#ffffff30] bg-[#ffffff10] ">
                   
                    <div className="w-full h-full flex flex-col items-center justify-between"> 
                        <div className="flex items-center justify-center flex-[.75] h-auto w-[100%]">
                           <span className="h-[70%] w-[50%] flex items-center justify-center rounded-2xl">
                            {/* add image here  */}
                               <Image src="/personaSlectorItems/boy-front-color.svg" width={100} height={100} className="h-auto w-[80%]" alt="img"/>
                           </span>
                        </div>
                        <div className="flex items-center justify-center flex-col flex-[.35] h-auto w-[100%]">
                           <h1 className="text-center text-3xl mb-1">Agent</h1>
                           {/* <p className="text-center text-[12px] text-[#ffffff8a]"><i>i&apos;m an agent looking for clients</i></p> */}
                       </div>
                    </div>
                   
                   <Meteors/>
               </div>
   
               <div className="relative h-[80%] md:h-full w-full flex-[.45] rounded-[8px] text-white text-center overflow-hidden border border-[#ffffff30] bg-[#ffffff10]">
                    <div className="w-full h-full flex flex-col items-center justify-between"> 
                        <div className="flex items-center justify-center flex-[.75] h-auto w-[100%]">
                           <span className="h-[70%] w-[50%] flex items-center justify-center rounded-2xl">
                                {/* add image here  */}
                               <Image src="/personaSlectorItems/house_5033186 1.svg" width={100} height={100} className="h-auto w-[50%]" alt="img"/>
                           </span>
                       </div>
                       <div className="flex items-center justify-center flex-col flex-[.35] h-auto w-[100%]">
                           <h1 className="text-center text-3xl mb-1">Owner</h1>
                           {/* <p className="text-center text-[12px] text-[#ffffff8a]"><i>i&apos;m an owner looking for services</i></p> */}
                       </div>
                    </div> 
                   <Meteors/>
               </div>
   
           </div>
       </div>
    )
   }

function RenderCards(){
    return(
        <>
            {items.map((item, i) => (
               
               <div key={i} className="md:max-w-[300px] md:w-[260px] md:min-w-[220px] h-[250px] w-[100%] max-w-xl m-0 rounded-2xl cursor-pointer transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)]">
                   <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#ffffff30] bg-[#ffffff10] px-4 py-8 shadow-xl">
                       <div className="flex items-center justify-center h-[100%] w-[100%]">
                           <span className="h-[80%] w-[40%] flex items-center justify-center rounded-2xl">
                               <Image src={item.tag} width={100} height={100} className="h-auto md:w-[50%] w-[100%] border" alt="img"/>
                           </span>
                       </div>
                       <div className="">
                           <h1 className="text-center mb-1 text-2xl text-white">{item.title}</h1>
                           {/* <p className="text-center text-[11px] text-[#ffffff8a]"><i>{item.description}</i></p> */}
                       </div>
                       <Meteors/>
                   </div>
               </div>
           
           ))}
        </>
    );
}


function LastCard(){
    return(
        <div className="md:max-w-[300px] md:w-[260px] md:min-w-[220px] h-[250px] w-[100%] max-w-xl cursor-pointer">
            <div className="relative w-full max-w-xl h-full">
                <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#ffffff30] bg-[#ffffff10] transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)] px-4 py-8 shadow-xl">
                    <div className="relative flex h-full w-[100%] flex-col items-center justify-center">
                    <Image src="/personaSlectorItems/healthicons_question.svg" width={10} height={20} className="h-auto md:w-[30%] border mt-10" alt="img"/>
                        <h1 className="md:text-[16px] text-[15px] mb-1 mt-10">Got something else ?</h1>
                        <p className="text-center text-[12px] text-[#ffffff8a] mb-4">“Tell us what you need — we&apos;ll find the best pro and handle the rest.”</p>
                        {/*---------------- Set button output--------------*/}
                        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              Comming Soon
                            </span>
                        </button> */}
                    </div>
                    <Meteors />
                </div>
            </div>
        </div>
    );
}