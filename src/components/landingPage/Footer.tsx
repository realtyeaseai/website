"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme();
  return (

    <div className='flex flex-col md:justify-end justify-center items-center min-h-[40dvh] w-full text-black bg-gray-200 dark:bg-neutral-900 pt-12 dark:text-gray-100'>

      <div className="w-full h-auto flex flex-col md:flex-row items-start justify-between">
        {/* ---------------------------- Left Section (Logo + Links) ---------------------------- */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between p-4 ">

          {/* LOGO */}
          <div className="p-4 md:p-6 md:py-10 flex justify-center items-center  md:w-[280px] w-full">
            <span className="h-[170px] w-auto">
              <Image src={theme === 'dark' ? "/RealtyEaseAI-08.png" : "/RealtyEaseAI-07.png"} alt="Logo" className="h-full w-full" width={70}
          height={70} />
            </span>
            {/* <p className="ml-4 text-sm md:text-xl font-bold py-4"></p> */}
          </div>

          {/* Services */}
          <div className="p-6  md:w-[220px] w-full md:text-start text-center md:mr-10">
            <h2 className="text-[14px] md:text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-4 text-[11px] md:text-[16px] list-none dark:text-gray-300">
              <li><Link href="#">Virtual Assistants</Link></li>
              <li><Link href="#">Service Providers</Link></li>
              <li><Link href="#">Specialized Services</Link></li>
              <li><Link href="#">Real Estate Agents</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="p-6  md:w-[140px] w-full md:text-start text-center md:mr-10">
            <h2 className="text-[14px] font-semibold md:text-2xl mb-4">Resources</h2>
            <ul className="space-y-4 text-[11px] md:text-[16px] list-none dark:text-gray-300">
              <li><Link href="#">Developers</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="p-6  md:w-[140px] w-full md:text-start text-center md:mr-10">
            <h2 className="text-[14px] font-semibold md:text-2xl mb-4">Company</h2>
            <ul className="space-y-4 text-[11px] md:text-[16px] list-none dark:text-gray-300">
              <li><Link href="./AboutUs">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#faq">FAQs</Link></li>
              <li><Link href="#">Teams</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* ---------------------------- Right Section (Social Logos) ---------------------------- */}
        <div className="w-full md:overflow-hidden flex justify-center md:justify-end md:mr-5">
          <div className="flex justify-between w-[130px] ">

            {/* <button className="w-[60px] h-auto mr-4">
              <Image src="/Logo.png" alt="Social 1" className="h-full w-full" />
            </button>
            <button className="w-[60px] h-auto">
              <Image src="/Logo.png" alt="Social 2" className="h-full w-full" />
            </button> */}

             {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[60px] h-[40px] flex items-center justify-center mr-4 bg-white rounded-md hover:bg-gray-400 dark:hover:bg-[#ffffffc5] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="#000"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5V24h-4.5V8zm7.4 0h4.3v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.8V24h-4.5v-8.2c0-2 0-4.5-2.8-4.5s-3.2 2.2-3.2 4.3V24h-4.5V8z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[60px] h-[40px] flex items-center justify-center bg-white rounded-md hover:bg-gray-400 dark:hover:bg-[#ffffffc5] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="black"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.7.8c-.9.4-1.7 1-2.4 1.7C.4 3.2 0 4.1 0 5c-.2.9-.3 2.1-.4 3.3C-.1 9.7 0 10.1 0 12s0 2.3.1 3.6c.1 1.2.2 2.4.4 3.3.2.9.6 1.8 1.3 2.5.7.7 1.6 1.3 2.5 1.7.9.4 2.1.6 3.3.7 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 2.4-.2 3.3-.7.9-.4 1.8-1 2.5-1.7.7-.7 1.3-1.6 1.7-2.5.4-.9.6-2.1.7-3.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.2-2.4-.7-3.3-.4-.9-1-1.8-1.7-2.5C20.8.4 19.9 0 19 .6c-.9-.2-2.1-.3-3.3-.4C15.6-.1 15.2 0 12 0zM12 5.8A6.2 6.2 0 0 0 5.8 12 6.2 6.2 0 0 0 12 18.2 6.2 6.2 0 0 0 18.2 12 6.2 6.2 0 0 0 12 5.8m0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4.2zM18.4 4.6a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44z"/>
              </svg>
            </Link>

          </div>
        </div>

      </div>

        {/* ------------------------------------------------- BOTTOM REALTY EASE DESIGN TEXT -------------------------------------------- */}
        {/* <div className='w-full h-auto mt-20 mb-18 md:text-start text-center'>
            <h1 className='w-[90%] md:text-[65px] text-4xl m-4'>RealtyEaseAI</h1>
        </div> */}
    </div>
  )
}
