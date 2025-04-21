'use client'
import Image from "next/image";
import ContactForm from "../ContactForm";


export default function ContactUs() {

  return (
    <div className=" bg-black min-h-[100dvh] pt-20 w-full flex items-center justify-evenly flex-col ">
      {/* -------------- Static Box --------------  */}
      <div className="md:h-[380px] h-[600px] w-[96%] rounded-2xl border border-[#ffffff20] mt-4 hover:border-[#ffffff50] flex gap-4 items-center justify-center flex-col bg-[radial-gradient(circle_at_center,_#0072feb5,_#4883cc53,_#4883cc29,_#000)]">

        <span className="h-[50px] w-[50px] rounded-[4px] flex items-center justify-center">
          <Image src="/contactUsItems/mail.svg"
            width={30}
            height={30}
            alt="icon"
            className="w-[75%] h-auto" />
        </span>
        <h1 className="md:text-4xl text-2xl text-center"><b>Here&apos;s what some of our <span className="text-green-400"> satisfied user&apos;s</span> have <br /> said about us.</b></h1>
        {/* <p className="text-center text-[14px] text-[#ffffff8a]">Here&apos;s what some of our satisfied <span className="">user&apos;s</span> have said about us.</p> */}

        <div className="flex items-center justify-center flex-col md:flex-row gap-8 h-[220px] md:h-[20%] w-[80%] md:mt-0">
          <div className=" flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/Clock.svg" width={30}
                height={30} alt="Clock" />
            </span>
              Efficient
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/star.svg" width={30}
                height={30} alt="Star" />
            </span>
            Supportive
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/moneyBag.svg" width={30}
                height={30} alt="bag" />
            </span>
              Reliable 
          </div>
          {/* <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/moneyBag.svg" width={30}
                height={30} alt="bag" />
            </span>
            efficient
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/moneyBag.svg" width={30}
                height={30} alt="bag" />
            </span>
            Supportive
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] hover:bg-gray-900">
            <span>
              <Image src="/contactUsItems/moneyBag.svg" width={30}
                height={30} alt="bag" />
            </span>
            Reliable
          </div> */}
          
        </div>

      </div>

      {/* ------------------ Grid to Conatct --------------- */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 w-full md:w-[98%] p-4">
        <div className="h-fit w-full md:w-auto flex justify-center md:justify-start py-28 md:pt-52 md:pl-14 items-center">
          {/* <ContactInfo /> */}
          <p className="text-4xl md:text-5xl text-white text-center md:text-start"><span className="text-green-400 font-semibold italic">Have a Question ?</span> <br/> You&apos;re just a <br/> Message Away!</p>
        </div>
        {/* <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg"> */}
        <ContactForm />
        {/* </div> */}
      </div>
    </div>
  )
}



// function ContactInfo() {
//   return (
//     <div className="bg-gradient-to-tr from-gray-700 via-gray--500 to-black border border-[#ffffff50] h-[750px] w-full md:w-auto rounded-lg p-5 md:p-10">
//       <h3 className="text-white text-left  font-bold font-sans text-xl">Contact Information</h3>
//       <p className="text-sm text-gray-500">Reach out to us at your own convinience</p>

//       <div className="box mt-20 pl-9 w-full md:w-[500px] h-[100px] border rounded-2xl float-left cursor-pointer hover:bg-gray-700 inline-flex md:justify-center items-center">
//         <Image src="/contactUsItems/mail.svg" alt="Mail Icon 2" width={24} height={24} className="mr-5 text-gray-200" />

//         info@realtyeaseai.com
//       </div>

      
      
//       <div className="box mt-20 pl-9 w-full md:w-[500px] h-[100px] border rounded-2xl float-left cursor-pointer hover:bg-gray-700 inline-flex md:justify-center items-center">
//         <Image src="/contactUsItems/mail.svg" alt="Mail Icon 2" width={24} height={24} className="mr-5 text-gray-200" />

//         info@realtyeaseai.com
//       </div>

//       <div className="social-icons relative">
//         <div className="flex justify-between w-[130px]">

//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-[60px] h-[40px] mt-10 md:mt-40 flex items-center justify-center mr-4 bg-white rounded-md hover:bg-[#ffffffc5] transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-white"
//               fill="#000"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5V24h-4.5V8zm7.4 0h4.3v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.8V24h-4.5v-8.2c0-2 0-4.5-2.8-4.5s-3.2 2.2-3.2 4.3V24h-4.5V8z" />
//             </svg>
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-[60px] h-[40px] mt-10 md:mt-40 flex items-center justify-center bg-white rounded-md hover:bg-[#ffffffc5] transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-white"
//               fill="black"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.7.8c-.9.4-1.7 1-2.4 1.7C.4 3.2 0 4.1 0 5c-.2.9-.3 2.1-.4 3.3C-.1 9.7 0 10.1 0 12s0 2.3.1 3.6c.1 1.2.2 2.4.4 3.3.2.9.6 1.8 1.3 2.5.7.7 1.6 1.3 2.5 1.7.9.4 2.1.6 3.3.7 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 2.4-.2 3.3-.7.9-.4 1.8-1 2.5-1.7.7-.7 1.3-1.6 1.7-2.5.4-.9.6-2.1.7-3.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.2-2.4-.7-3.3-.4-.9-1-1.8-1.7-2.5C20.8.4 19.9 0 19 .6c-.9-.2-2.1-.3-3.3-.4C15.6-.1 15.2 0 12 0zM12 5.8A6.2 6.2 0 0 0 5.8 12 6.2 6.2 0 0 0 12 18.2 6.2 6.2 0 0 0 18.2 12 6.2 6.2 0 0 0 12 5.8m0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4.2zM18.4 4.6a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44z" />
//             </svg>
//           </a>

//         </div>
//       </div>
//     </div>
//   )
// }


