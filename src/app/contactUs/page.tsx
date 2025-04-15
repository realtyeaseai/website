'use client'
import { TopNavbar } from "@/components/TopNabbar";
import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import { Footer, FAQ } from "@/components/landingPage/lpExports";

export default function contactUs() {

  return (
    <div className=" bg-black min-h-[100dvh] pt-20 w-full flex items-center justify-evenly flex-col ">

        <TopNavbar />

        {/* -------------- Static Box --------------  */}
        <TopBox/>
        
        {/* ------------------ Grid to Conatct --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 w-full md:w-[98%] p-4">
            <div className="bg-[#ffffff09] border border-[#ffffff50] h-[800px] w-full md:w-auto rounded-lg">
                <ContactInfo/>
            </div>
            <div className="bg-[#ffffff09] border border-[#ffffff50] min-h-[800px] w-full md:w-auto rounded-lg">
                <ContactForm/>
            </div>
        </div>

        {/* ------------------ FAQ --------------- */}
        <FAQ/>

        {/* ------------------ Footer --------------- */}
        <Footer/>
    </div>
  )
}

// Static Box
function TopBox(){
  return(
    <div className="md:h-[380px] h-[600px] w-[96%] rounded-2xl border border-[#ffffff20] mt-4 hover:border-[#ffffff50] flex gap-4 items-center justify-center flex-col bg-[radial-gradient(circle_at_center,_#0072feb5,_#4883cc53,_#4883cc29,_#000)]">
      <span className="h-[50px] w-[50px] rounded-[4px] flex items-center justify-center">
          <Image src="/contactUsItems/Mail.svg" alt="icon" className="w-[75%] h-auto"/>
      </span>
      <h1 className="md:text-5xl text-2xl text-center"><b>We&apos;d love to hear from you.</b></h1>
      <p className="text-center text-[14px] text-[#ffffff8a]">Here&apos;s what some of our satisfied <span className="">user&apos;s</span> have said about us.</p>

      <div className="flex items-center justify-center flex-col md:flex-row gap-8 h-[220px] md:h-[20%] w-[80%] md:mt-0">
          <div className=" flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
              <span>
                  <Image src="/contactUsItems/Clock.svg" alt="Clock" />
              </span>
              24/7 Assistance
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
              <span>
                  <Image src="/contactUsItems/star.svg" alt="Star" />
              </span>
              Quick Ai Solutions
          </div>
          <div className="flex items-center justify-center gap-2 min-h-[50px] w-full md:w-[20%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15]">
              <span>
                  <Image src="/contactUsItems/moneyBag.svg" alt="bag" />
              </span>
              Great Costing
          </div>
      </div> 
    </div>
  )
}

function ContactInfo(){

  const info = [
    {
      text: "info@realtyeaseai.com",
      logo: "/contactUsItems/mail2.svg",
      alt: "Mail"
    },
    {
      text: "info@realtyeaseai.com",
      logo: "/contactUsItems/mail2.svg",
      alt: "Mail"
    },
    {
      text: "Studio 448 Event Planners LLC DBA RealtyEase",
      logo: "/contactUsItems/Location.svg",
      alt: "Location"
    }
  ];


    return(
      <section className="flex items-center justify-between flex-col h-full w-full p-4">
        {/* Text  */}
        <div className="flex items-center justify-start flex-col gap-4 w-full h-[80%]">
          <span className="w-[100%] h-fit rounded-[4px] flex flex-col items-start justify-start ">
            <h1 className="text-4xl text-center font-bold text-white p-3">Contact Information</h1>
            <p className="text-neutral-400 text-lg text-center px-4">
              Reach out to us at your own convinience 
            </p>
          </span>

          <span className="w-[100%] h-fit rounded-[4px] flex flex-col items-start justify-start gap-4 mt-10 p-3">

            {
              info.map((item, idx) => (
                <div key={idx} className="flex items-center justify-start gap-2 min-h-[50px] w-full md:w-[100%] min-w-[200px] rounded-[8px] border border-[#ffffff80] bg-[#ffffff15] p-2">
                  <span className="w-[50px] h-[50px] rounded-[4px] flex items-center justify-center">
                      <Image src={item.logo} alt={item.alt} className="w-[50%] h-auto"/>
                  </span>
                  <p className="text-neutral-400 text-lg">{item.text}</p>
                </div>
              ))
            }

          </span>

        </div>
        {/* Logo  */}
        <div className="flex items-start justify-end flex-col gap-4 w-full h-[20%]">
          <span className="flex justify-between w-auto gap-1 pl-2 pb-2">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[60px] h-[50px] flex items-center justify-center mr-4 bg-white rounded-md hover:bg-[#ffffffc5] transition"
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
              className="w-[60px] h-[50px] flex items-center justify-center bg-white rounded-md hover:bg-[#ffffffc5] transition"
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

          </span>
        </div>
      </section>
    )
}


// function ContactForm(){

//     const [form, setForm] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//         reason: '',
//       })

//       const reasons = ['General Inquiry', 'Services', 'Credit Score', 'Others']
      
//     return(
//         <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg flex items-center justify-center flex-col">
//             <form className="max-w-2xl w-full space-y-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="input p-3 border rounded-2xl"
//             value={form.firstName}
//             onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="input p-3 border rounded-2xl"
//             value={form.lastName}
//             onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//           <input
//             type="email"
//             placeholder="Ex. jhon doe@gmail.com"
//             className="input p-3 border rounded-2xl"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           <div className="flex items-center gap-2">
//             <input
//               type="number"
//               placeholder="Phone Number"
//               className="input w-full p-3 border rounded-2xl"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             />
//           </div>
//         </div>

//         <div>
//           <label className="text-sm text-white mb-2 block">
//             Why are you contacting us?
//           </label>
//           <div className="flex gap-4 flex-wrap">
//             {reasons.map((item) => (
//               <button
//                 key={item}
//                 type="button"
//                 className={`border px-4 py-2 rounded-md text-white ${
//                   form.reason === item
//                     ? 'border-white bg-neutral-700'
//                     : 'border-neutral-700'
//                 }`}
//                 onClick={() => setForm({ ...form, reason: item })}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         <textarea
//           placeholder="Type your message here.."
//           className="input h-32 w-full border rounded-2xl p-2"
//           value={form.message}
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//         />

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-white text-neutral-900 px-6 py-3 rounded-md font-medium"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//         </div>
//     )
// }

function ContactForm(){

  // const [form, setForm] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  //   reason: '',
  // })
  
  // const reasons = ['General Inquiry', 'Services', 'Credit Score', 'Others']
      
  function handelSubmit(){
    console.log("Submitted")
  }

  return(
    <div className="w-full h-full flex items-center justify-center p-4 pt-10">
      <form onSubmit={(e)=>{
        e.preventDefault();
        handelSubmit();
      }} className="h-full w-full md:w-[80%] p-2 md:p-0 text-[19px]">

        {/* Name  */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 h-fit w-full mb-4 md:mb-8">
          <label htmlFor="fn" className="flex-[.5] md:flex-[1] w-full"> 
            <span className="w-full "> First Name </span>
            <input type="text" id="fn" placeholder="Jane" required className="w-full h-[50px] border border-[#bababa] rounded-[8px] p-2"/>
          </label>

          <label htmlFor="ln" className="flex-[.5] md:flex-[1] w-full"> 
            <span className="w-full"> Last Name </span>
            <input type="text" id="ln" placeholder="Doe" required className="w-full h-[50px] border border-[#bababa] rounded-[8px] p-2"/>
          </label>
        </div>

        {/* Contact  */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 h-fit w-full mb-16">
          <label htmlFor="mail" className="flex-[.5] md:flex-[1] w-full"> 
            <span className="w-full"> Mail </span>
            <input type="email" placeholder="example@mail.com" id="mail" required className="w-full h-[50px] border border-[#bababa] rounded-[8px] p-2"/>
          </label>

          <label htmlFor="phone" className="flex-[.5] md:flex-[1] w-full"> 
            <span className="w-full"> Phone Number </span>
            <input type="tel" id="phone" placeholder="+1 20X 5X5 X4X2" required className="w-full h-[50px] border border-[#bababa] rounded-[8px] p-2"/>
          </label>
        </div>

        {/* Message */}
        <div className="flex items-center justify-center gap-4 h-fit w-full mt-8 mb-8">
          <label htmlFor="fn" className="flex-[1] w-full"> 
            {/* <span className="w-full mb-[15px]"> Enter your message </span> */}
            <textarea placeholder="Type your message here ..." id="fn" className="w-full min-h-[150px] border border-[#bababa] rounded-[8px] p-2"/>
          </label>
        </div>

        {/* Submit btn */}
        <span className="w-full flex items-center justify-center md:justify-end md:pr-10 mb-10">
          <input type="submit" value="Send Message" className="bg-[#ffffff] text-black px-6 py-3 md:w-[200px] w-[80%] rounded-md font-medium hover:bg-[#ffffffcc] transition-all cursor-pointer"/>
        </span>
      </form>
    </div>
  )
}