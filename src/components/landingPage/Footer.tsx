import React from 'react'

export default function Footer() {
  return (

    <div className='flex flex-col md:justify-end justify-center items-center min-h-[80dvh] w-full bg-black pt-48'>

      <div className="w-full h-auto flex flex-col md:flex-row items-start justify-between">
        {/* ---------------------------- Left Section (Logo + Links) ---------------------------- */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between p-4 ">

          {/* LOGO */}
          <div className="p-4 flex justify-center items-center  md:w-[180px] w-full">
            <span className="h-[40px] w-auto">
              <img src="/Logo.png" alt="Logo" className="h-full w-full" />
            </span>
            <p className="ml-4 text-sm font-medium">Realty Ease</p>
          </div>

          {/* Services */}
          <div className="p-4  md:w-[140px] w-full md:text-start text-center">
            <h2 className="text-[14px] font-semibold mb-4">Services</h2>
            <ul className="space-y-2 text-[11px] list-none">
              <li>Virtual Assistant</li>
              <li>Remote Services</li>
              <li>Credit Score</li>
              <li>Real Estate</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="p-4  md:w-[140px] w-full md:text-start text-center">
            <h2 className="text-[14px] font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-[11px] list-none">
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Company */}
          <div className="p-4  md:w-[140px] w-full md:text-start text-center">
            <h2 className="text-[14px] font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-[11px] list-none">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        {/* ---------------------------- Right Section (Social Logos) ---------------------------- */}
        <div className="w-full flex justify-center md:justify-end items-start p-4">
          <div className="flex justify-between w-[130px] ">
            <button className="w-[60px] h-auto mr-4">
              <img src="/Logo.png" alt="Social 1" className="h-full w-full" />
            </button>
            <button className="w-[60px] h-auto">
              <img src="/Logo.png" alt="Social 2" className="h-full w-full" />
            </button>
          </div>
        </div>

      </div>

        {/* ------------------------------------------------- BOTTOM REALTY EASE DESIGN TEXT -------------------------------------------- */}
        <div className='w-full h-auto mt-20'>
            <h1>HELLO</h1>
        </div>
    </div>
  )
}
