import React from 'react'

export default function Footer() {
  return (

    <div className='flex flex-col md:justify-end justify-center items-center min-h-[80dvh] w-full bg-black pt-48'>

        <div className='w-full h-auto flex md:flex-row gap-20 flex-col items-center justify-between '>

            <div className='border w-full flex items-start justify-between md:flex-row flex-col p-4'>

              {/* <div className='flex items-start flex-row md:gap-20 md:justify-start justify-between gap-4 border md:w-auto w-full'> */}
                {/* ---------------------- LOGO --------------------- */}
                <div className=' p-4 flex justify-center items-center border md:w-[180px] w-full'>
                  <span className='h-[40px] w-auto'>
                    <img src="/Logo.png" alt="" className='h-full w-full'/>
                  </span>
                  <p className='ml-4'>Realty Ease</p>
                </div>
                {/* ------------------------------------------------ */}

                {/* ------------------- Services ------------------- */}
                <div className='p-4 border md:w-[140px] w-full'>
                <h2 className="text-[14px] font-semibold mb-4">Services</h2>
                  <ul className="space-y-[8px] list-none text-[11px]">
                    <li>Virtual Assistant</li>
                    <li>Remote Services</li>
                    <li>Credit Score</li>
                    <li>Real Estate</li>
                  </ul>
                </div>
                {/* ------------------------------------------------ */}
              {/* </div> */}


              {/* <div className='flex items-start flex-row md:gap-20 md:justify-start justify-between gap-4 border w-full'> */}
                {/* ------------------- Resources ------------------- */}
                <div className='border md:w-[140px] w-full p-4'>
                <h2 className="text-[14px] font-semibold mb-4">Resources</h2>
                  <ul className="space-y-[8px] list-none text-[11px]">
                    <li>Developers</li>
                    <li>Support</li>
                  </ul>
                </div>
                {/* ------------------------------------------------ */}

                {/* ------------------- Company ------------------- */}
                <div className='border md:w-[140px] w-full p-4'>
                <h2 className="text-[14px] font-semibold mb-4">Company</h2>
                  <ul className="space-y-[8px] list-none text-[11px]">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                    <li>Teams</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                {/* ------------------------------------------------ */}
              {/* </div> */}
            </div>


            {/* ------------------------------- Footer Right Social Logo ------------------------------------ */}
            <div className='border md:w-[600px] w-full flex gap-10 p-10 justify-center md:justify-end'>

              <button className='h-[80px] w-auto'>
                <span className=''>
                  <img src="/Logo.png" alt="button" className='h-full w-full'/>
                </span>
              </button>

              <button className='h-[80px] w-auto'>
                <span className=''>
                  <img src="Logo.png" alt="button" className='h-full w-full'/>
                </span>
              </button>
            </div>

        </div>




        {/* ------------------------------------------------- BOTTOM REALTY EASE DESIGN TEXT -------------------------------------------- */}
        <div className='w-full h-auto mt-20'>
            <h1>HELLO</h1>
        </div>
    </div>
  )
}
