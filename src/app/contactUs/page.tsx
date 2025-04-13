'use client'
import { TopNavbar } from "@/components/TopNabbar";
import Image from "next/image";
import { useState } from "react";

export default function contactUs() {

  return (
    <div className=" bg-black min-h-[100dvh] pt-20 w-full flex items-center justify-evenly flex-col ">

        <TopNavbar />

        {/* -------------- Static Box --------------  */}
        <TopBox/>
        
        {/* ------------------ Grid to Conatct --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 w-full md:w-[98%] p-4">
            <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg">
                <ContactInfo/>
            </div>
            {/* <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg"> */}
                <ContactForm/>
            {/* </div> */}
        </div>
    </div>
  )
}

// Static Box
function TopBox(){
  return(
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
  )
}

function ContactInfo(){
    return(
      <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg p-10">
        <h3 className="text-white text-left  font-bold font-sans text-xl">Contact Information</h3>
        <p className="text-sm text-gray-500">Reach out to us at your own convinience</p>
        <div className="box mt-20 pl-9 w-[300px] md:w-[500px] h-[100px] border rounded-2xl float-left">
            <Image src="/personaSlectorItems/tag.svg" alt="Mail Icon" width={24} height={24} className="mt-10 mr-7 md:mr-8 float-left text-gray-200" />
            <span className="mt-9 flex float-left text-gray-400">info@realtyeaseai.com</span>
        </div>
        <div className="box mt-6 pl-9 w-[300px] md:w-[500px] h-[100px] border rounded-2xl float-left">
            <Image src="/personaSlectorItems/tag.svg" alt="Mail Icon" width={24} height={24} className="mt-10 mr-7 md:mr-8 float-left text-gray-200" />
            <span className="mt-9 flex float-left text-gray-400">info@realtyeaseai.com</span>
        </div>
        <div className="box mt-6 pl-9 w-[300px] md:w-[500px] h-[100px] border rounded-2xl float-left">
          <Image src="/personaSlectorItems/tag.svg" alt="Mail Icon" width={16} height={20} className="mt-10 mr-7 md:mr-8 float-left text-gray-200" />
          <span className="mt-9 flex float-left text-gray-400 text-xs">
            Studio 448 Event Planners LLC <br/> DBA Realty Ease 
          </span>
        </div>
        <div className="social-icons">
            <div className="box w-[20px] bg-gray-900 flex gap-2 mt-[440px]">
                <Image src="/personaSlectorItems/tag.svg" alt="Mail Icon" width={16} height={20} className="" />
            </div>
            <div className="box">
                <Image src="/personaSlectorItems/tag.svg" alt="Mail Icon" width={16} height={20} className="" />
            </div>
        </div>
      </div>
    )
}


function ContactForm(){

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        reason: '',
      })

      const reasons = ['General Inquiry', 'Services', 'Credit Score', 'Others']
      
    return(
        <div className="bg-black border border-[#ffffff50] h-[600px] w-full md:w-auto rounded-lg flex items-center justify-center flex-col">
            <form className="max-w-2xl w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <input
            type="text"
            placeholder="First Name"
            className="input p-3 border rounded-2xl"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input p-3 border rounded-2xl"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <input
            type="email"
            placeholder="Ex. jhon doe@gmail.com"
            className="input p-3 border rounded-2xl"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Phone Number"
              className="input w-full p-3 border rounded-2xl"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-white mb-2 block">
            Why are you contacting us?
          </label>
          <div className="flex gap-4 flex-wrap">
            {reasons.map((item) => (
              <button
                key={item}
                type="button"
                className={`border px-4 py-2 rounded-md text-white ${
                  form.reason === item
                    ? 'border-white bg-neutral-700'
                    : 'border-neutral-700'
                }`}
                onClick={() => setForm({ ...form, reason: item })}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Type your message here.."
          className="input h-32 w-full border rounded-2xl p-2"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white text-neutral-900 px-6 py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
        </div>
    )
}