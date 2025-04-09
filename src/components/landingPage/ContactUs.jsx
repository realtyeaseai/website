'use client'

export default function ContactUs() {

  return (
    <div className=" bg-black min-h-[100dvh] pt-20 w-full flex items-center justify-evenly flex-col ">
        {/* -------------- Static Box --------------  */}
        <div className="md:h-[380px] h-[600px] w-[96%] rounded-2xl border border-[#ffffff20] mt-4 hover:border-[#ffffff50] flex gap-4 items-center justify-center flex-col bg-[radial-gradient(circle_at_center,_#4883ccb5,_#4883cc53,_#4883cc29,_#000)]">
    
            <span className="h-[50px] w-[50px] rounded-[4px] flex items-center justify-center">
                <img src="/contactUsItems/Subtract.svg" alt="icon" className="w-[75%] h-auto"/>
            </span>
            <h1 className="md:text-5xl text-2xl text-center"><b>We&apos;d love to hear from you.</b></h1>
            <p className="text-center text-[14px] text-[#ffffff8a]">Here&apos;s what some of our satisfied <span className="">user&apos;s</span> have said about us.</p>

            <div className="flex items-center justify-center flex-col md:flex-row gap-8 h-[220px] md:h-[20%] w-[80%] md:mt-0">
                <div className=" flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
                    <span>
                        <img src="/contactUsItems/Clock.svg" alt="Clock" />
                    </span>
                    24/7 Assistance
                </div>
                <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
                    <span>
                        <img src="/contactUsItems/star.svg" alt="Star" />
                    </span>
                    Quick Ai Solutions
                </div>
                <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
                    <span>
                        <img src="/contactUsItems/moneyBag.svg" alt="bag" />
                    </span>
                    Great Costing
                </div>
            </div>
        
        </div>
        
        {/* ------------------ Grid to Conatct --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 w-full md:w-[98%] p-4">
            <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg">
              <p className="text-white text-center p-4">Child 1</p>
            </div>

            <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg">
              <p className="text-white text-center p-4">Child 2</p>
            </div>
        </div>
    </div>
  )
}
