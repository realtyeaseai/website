'use client'

export default function ContactUs() {

  return (
    <div className="bg-black min-h-[100dvh] w-full flex-col flex items-center justify-center ">
      <p className="text-[#ffffff99] text-[16px] mb-4 mt-20 text-center">Any question or remarks? Just write us a message!</p>
      <div className="w-full md:w-[80%] border bg-[rgba(255,255,255,1)] border-white md:rounded-[12px] rounded-[0px] flex md:flex-row flex-col gap-4 justify-between">
        <div className="h-[600px] w-[460px] bg-black rounded-[10px] ml-[4px] mt-[4px] mb-[4px] md:block hidden">

        </div>
        <div className="h-[600px] w-full md:w-[800px] border border-black rounded-[10px] mr-[4px] mt-[4px] mb-[4px] text-black">
            <form action="" className="w-full">
                <div className="flex items-center justify-center flex-col">
                    <span className="flex gap-20 border border-black p-4">
                        <label htmlFor="" className="h-20 w-[40%]"> <b>First Name </b>
                            <input type="text" placeholder="Jane" className="w-full focus:outline-none border-b border-[#00000080] focus:ring-0 focus:border-b-2 focus:border-black"/>
                        </label>
                        <label htmlFor="" className="h-20 w-[40%]">  <b>Last Name</b>
                            <input type="text" placeholder="Doe" className="w-full focus:outline-none border-b border-[#00000080] focus:ring-0 focus:border-b-2 focus:border-black"/>
                        </label>
                    </span>
                    <span className="flex gap-20 border border-black p-4">
                        <label htmlFor="h-20 w-[40%]">  <b>Email</b>
                            <input type="email" className="w-full focus:outline-none border-b border-[#00000080] focus:ring-0 focus:border-b-2 focus:border-black"/>
                        </label>
                        <label htmlFor="h-20 w-[40%]"><b>Phone Number</b>
                            <input type="tel" className="w-full focus:outline-none border-b border-[#00000080] focus:ring-0 focus:border-b-2 focus:border-black"/>
                        </label>
                    </span>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
