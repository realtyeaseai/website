import Link from "next/link";
// import { Meteors } from "../ui/meteors";
import Image from "next/image";
import RenderCards from "../ui/RenderCards";

// edit this for top servicer 5 grid images 
const items = [{
    tag:"/personaSlectorItems/home-icon-silhouette-svgrepo-com.svg",
    title:"Construction/ Renovation",
    // bgColor:"bg-red-300",
    link: "/services/#services"
},{
    tag:"/personaSlectorItems/airconditioning-sf-svgrepo-com.svg",
    title:"HVAC",
    // bgColor:"bg-indigo-300",
    link: "/services/#services"
},{
    tag:"/personaSlectorItems/plumber-svgrepo-com.svg",
    title:"Plumber",
    // bgColor:"bg-cyan-300",
    link: "/services/#services"
},{
    tag:"/personaSlectorItems/lightbulb-flash-fill-svgrepo-com.svg",
    title:"Electrician",
    // bgColor:"bg-yellow-300",
    link: "/services/#services"
},{
    tag:"/personaSlectorItems/cockroach-svgrepo-com.svg",
    title:"Pest Control",
    // bgColor:"bg-orange-300",
    link: "/services/#services"
}]


export default function PersonaPicker(){
    return(
        <div className="bg-white text-black dark:text-white dark:bg-black h-fit w-full min-h-[120dvh] flex justify-center flex-col items-center py-10 md:py-20">
            <div className="md:w-[80%] w-full flex justify-center items-center flex-col mt-0">
                <h1 className="text-4xl text-black dark:text-white">Who are you?</h1>
                <p className="text-black dark:text-[#ffffff99] text-[14px]">Help us identify you needs</p>
            </div>

            <RenderPref/>
            
            <div className="md:w-[80%] w-full flex justify-center items-center flex-col mt-8">
                 
                <h1 className="w-[70%] m-2 py-4 px-2 text-4xl rounded-[8px] dark:text-white text-center "><Link href="/services" className="h-fit w-full">Service Provider</Link></h1>
                {/* border border-[#ffffff80] bg-[#ffffff10]  */}
                
            </div>

                {/* ------------------------ Cards ------------------------ */} 
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 place-items-center m-2 md:m-0">

                    <RenderCards items={items}/>
                    <LastCard/>

                </div>
            {/* </section> */}
        </div>
    );
}

function RenderPref(){
    return(
       <div className="md:w-[50%] w-full h-[320px] flex justify-center items-center flex-col md:mt-0">
           <div className="relative flex h-full w-full p-4 flex-row gap-4 md:gap-8 items-center justify-center">
                
                <div className="relative h-[80%] md:h-full w-full flex-[.45] rounded-[8px] dark:text-white text-center overflow-hidden border border-[#00000040] dark:border-[#ffffff30] dark:bg-[radial-gradient(circle_at_top_left,_#1ca2dc_20%,_black)] bg-[radial-gradient(circle_at_top_left,_#1ca2dc_1%,_white)] dark:bg-[#ffffff10] cursor-pointer transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)]">
                    <Link href="/services/#RealEstateAgent">
                    <div className="w-full h-full flex flex-col items-center justify-between"> 
                        <div className="flex items-center justify-center flex-[.75] h-auto w-[100%]">
                           <span className="h-[70%] w-[50%] flex items-center justify-center rounded-2xl">
                            {/* add image here  */}
                               <Image src="/personaSlectorItems/boy-front-color.svg" width={100} height={100} className="h-auto w-[80%]" alt="img"/>
                           </span>
                        </div>
                        <div className="flex items-center justify-center flex-col flex-[.35] h-auto w-[100%]">
                           <h1 className="text-center text-3xl mb-1 text-black dark:text-white">Agent</h1>
                           {/* <p className="text-center text-[12px] text-[#ffffff8a]"><i>i&apos;m an agent looking for clients</i></p> */}
                       </div>
                    </div>
                   
                   {/* <Meteors/> */}
                   </Link>
                </div>
                
                
                <div className="relative h-[80%] md:h-full w-full flex-[.45] rounded-[8px] dark:text-white text-center overflow-hidden border border-[#00000040] dark:border-[#ffffff30] dark:bg-[radial-gradient(circle_at_top_left,_#3d3994_20%,_black)] bg-[radial-gradient(circle_at_top_left,_#3d3994_1%,_white)] dark:bg-[#ffffff10] cursor-pointer transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)]">
                    <Link href="/services/#vas">
                    <div className="w-full h-full flex flex-col items-center justify-between"> 
                        <div className="flex items-center justify-center flex-[.75] h-auto w-[100%]">
                           <span className="h-[70%] w-[50%] flex items-center justify-center rounded-2xl">
                                {/* add image here  */}
                               <Image src="/personaSlectorItems/house_5033186 1.svg" width={100} height={100} className="h-auto w-[50%]" alt="img"/>
                           </span>
                       </div>
                       <div className="flex items-center justify-center flex-col flex-[.35] h-auto w-[100%]">
                           <h1 className="text-center text-3xl mb-1 text-black dark:text-white">Owner</h1>
                           {/* <p className="text-center text-[12px] text-[#ffffff8a]"><i>i&apos;m an owner looking for services</i></p> */}
                       </div>
                    </div> 
                   {/* <Meteors/> */}
                   </Link>
                </div>
                
           </div>
       </div>
    )
   }

// function RenderCards(){
//     return(
//         <>
//             {items.map((item, i) => (
//                <Link href={item.link} className="w-full h-auto" key={i}>
//                 <div className={`md:max-w-[300px] md:w-[300px] h-[270px] w-[100%] max-w-xl m-0 rounded-2xl cursor-pointer transition-shadow duration-300 border border-[#00000035] hover:border-black hover:shadow-[6px_6px_2px_2px_#333333] dark:hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)] `}>
//                     <div className={`relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl shadow-xl dark:bg-[#ffffff10]`}>
//                         <div className="flex-[.7] grid place-items-center h-[100%] w-[100%]">
//                         <span className="h-[80%] w-[40%] flex items-center justify-center rounded-2xl dark:bg-transparent">
//                             <Image
//                               src={item.tag}
//                               width={100}
//                               height={100}
//                               className="h-auto md:w-[50%] w-[100%] border filter dark:invert-[100%]"
//                               alt="img"
//                             />
//                         </span>

//                        </div>
//                        <div className="flex-[.3] h-full w-full grid place-items-center">
//                            <p className="text-center text-xl h-full w-full dark:text-white">{item.title}</p>
//                            {/* <p className="text-center text-[11px] text-[#ffffff8a]"><i>{item.description}</i></p> */}
//                        </div>
//                        {/* <Meteors/> */}
//                    </div>
//                </div>
//                 </Link>
//            ))}
//         </>
//     );
// }



function LastCard(){
    return(
        <Link href="/services/#specialisedServices">
        <div className="md:max-w-[300px] md:w-[300px] h-[270px] w-[100%] max-w-xl cursor-pointer">
            <div className="relative w-full max-w-xl h-full">
                <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#00000035] bg-[#ffffff10] transition-shadow duration-300 hover:border-black hover:shadow-[6px_6px_2px_2px_#333333] dark:hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)] px-4 py-8 shadow-xl">
                    <div className="relative flex h-full w-[100%] flex-col items-center justify-center">
                    <Image src="/personaSlectorItems/question-mark-svgrepo-com.svg" width={40} height={20} className="h-auto md:w-[30%] border mt-10 dark:invert-[100%]" alt="img"/>
                        <h1 className="md:text-[16px] text-[15px] mb-1 mt-10 text-[#000000dc] dark:text-white">Got something else ?</h1>
                        <p className="text-center text-[12px] dark:text-[#ffffff8a] text-[#00000075] mb-4">“Tell us what you need — we&apos;ll find the best pro and handle the rest.”</p>
                        {/*---------------- Set button output--------------*/}
                        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              Comming Soon
                            </span>
                        </button> */}
                    </div>
                    {/* <Meteors /> */}
                </div>
            </div>
        </div>
        </Link>
    );
}