'use client'
import { Meteors } from "../ui/meteors";

export default function PersonaPicker(){

    const items = [{
        tag:"/personaSlectorItems/home.svg",
        title:"I'm a Home Buyer",
        description:"“Browse listings, get matched with agents, and let AI find your dream home.”"
    },{
        tag:"/personaSlectorItems/tag.svg",
        title:"I'm Selling My Property",
        description:"“List your property, schedule visits, and get AI tips to sell faster.”"
    },{
        tag:"/personaSlectorItems/yen.svg",
        title:" I'm a Property Owner",
        description:"“Manage leases, track maintenance, and automate service requests.”"
    },{
        tag:"/personaSlectorItems/box.svg",
        title:"I'm a Service Provider",
        description:"“Connect with property owners to offer plumbing, repair, or other services.”"
    },{
        tag:"/personaSlectorItems/item.svg",
        title:"I'm Looking for Work",
        description:"“Take on one-time jobs in cleaning, moving, maintenance, and more.”"
    },
    ];


    return(
        <div className="bg-black h-auto w-full min-h-[120dvh] flex justify-center flex-col items-center">
            <div className="md:w-[80%] w-full flex justify-center items-center flex-col mt-12">
                <h1 className="text-4xl text-white">Who are you?</h1>
                <p className="text-[#ffffff99] text-[14px]">Select What You need based on who you are</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 place-items-center">
                {items.map((item, i) => (
               
                    <div key={i} className="md:max-w-[300px] md:w-[260px] md:min-w-[220px] h-[250px] w-[70%] max-w-xl m-0 rounded-2xl cursor-pointer transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)]">
                        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#ffffff30] bg-[#ffffff10] px-4 py-8 shadow-xl">
                            <div className="flex items-center justify-center h-[100%] w-[100%]">
                                <span className="h-[80%] w-[40%] flex items-center justify-center rounded-2xl">
                                    <img src={item.tag} className="h-auto w-[50%]" alt="img"/>
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-center mb-1">{item.title}</h1>
                                <p className="text-center text-[11px] text-[#ffffff8a]"><i>{item.description}</i></p>
                            </div>
                            <Meteors/>
                        </div>
                    </div>
                
                ))}
                
                
                <div className="md:max-w-[300px] md:w-[260px] md:min-w-[220px] h-[250px] w-[70%] max-w-xl cursor-pointer">
                    <div className="relative w-full max-w-xl h-full">
                            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#ffffff30] bg-[#ffffff10] transition-shadow duration-300 hover:shadow-[-4px_0_10px_2px_rgba(33,150,243,0.6),4px_0_10px_2px_rgba(0,150,136,0.6)] px-4 py-8 shadow-xl">
                            <div className="relative flex h-full w-[100%] flex-col items-center justify-center">
                                <h1 className="text-[24px] mb-1">Explore More</h1>
                                <p className="text-center text-[11px] text-[#ffffff8a] mb-4">See what our Website can do For You, </p>
                                {/*---------------- Set button output--------------*/}
                                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                      Comming Soon
                                    </span>
                                </button>
                            </div>
                            <Meteors />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}