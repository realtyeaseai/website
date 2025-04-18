import Image from "next/image";
import { TopNavbar } from "@/components/TopNabbar";
import DropdownCompo from "@/components/ui/DropdownCompo";
import Footer from "@/components/landingPage/Footer";
import Link from "next/link";

export default function Services() {

  // Page Load delay for 3 seconds -- to use this make the function async
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="relative w-full h-fit pb-8 flex flex-col justify-start items-center min-h-[100dvh] bg-[#010101] pt-28 md:pt-40">
      <TopNavbar />
      <TopHeading />
      <RenderedServices />
      <BottomBox />
      <Footer />
    </div>
  )
}
// SR no. accordingly -->
// (1.) real estate agent,(2.) real estate/property owners,(3.) ResalEstate services, (4.) specialised services

const faqs = [
  [
    {
      question: "Property Management Support",
      answer:
        `
              <p>
                Manage listings, schedules, tenant communications, and paperwork—without the overhead.
              </p>
            `,
    }, {
      question: "Lead Generation & Marketing",
      answer:
        `
              <p>
                Optimize your marketing strategy, manage ads, and capture high-quality leads.
              </p>
            `,
    },
    {
      question: "Client Relations",
      answer:
        `
              <p>
                Keep your clients engaged with timely follow-ups, meeting scheduling, and communication.
              </p>
            `,
    },
  ],
  [
    {
      question: "Project Coordination",
      answer:
        `
          <p>
            Assist with scheduling, client communication, and documentation to ensure your projects stay on track.
          </p>
        `,
    }, {
      question: "Vendor & Subcontractor Management",
      answer:
        `
          <p>
            Handle communication and logistics for subcontractors and vendors.
          </p>
        `,
    }, {
      question: "Time & Budget Tracking",
      answer:
        `
          <p>
            Maintain project timelines, update budgets, and monitor expenses
          </p>
        `,
    },
  ],
  [
    {
      question: "Construction/Rennovation Services",
      answer:
        `
          <p>
            Organize emails, schedule appointments, and manage documentation.
          </p>
        `,
    }, {
      question: "HVAC & Plumbing Services",
      answer:
        `
          <p>
            Offer 24/7 customer support via phone, email, or chat.
          </p>
        `,
    }, {
      question: "Plumbery & Electrical Services",
      answer:
        `
          <p>
            Manage social media, create marketing content, and assist with business development.
          </p>
        `,
    },
    {
      question: "Pest control Services",
      answer:
        `
          <p>
            Manage social media, create marketing content, and assist with business development.
          </p>
        `,
    },
  ],
  [
    {
      question: "Web Development Services",
      answer:
        `
          <p>
            Build and maintain websites, including e-commerce platforms and landing pages.
          </p>
        `,
    }, {
      question: "Social Media Management Services",
      answer:
        `
          <p>
            Create, schedule, and manage social media posts across various platforms.
          </p>
        `,
    }, {
      question: "Manage Listings",
      answer:
        `
          <p>
            Create and manage property listings on various platforms, including MLS and social media.
          </p>
        `,
    }
  ]

]

function TopHeading() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-fit bg-[#010101]">
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
        Our Services
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-neutral-300">
        From managing and client communications to coordinating and administrative workflows, our virtual assistants adapt to your priorities.

        <br />No two businesses are alike—that&apos;s why every service we deliver is tailored to your unique goals, processes, and growth ambitions.
      </p>
    </div>
  );
}

function RenderedServices() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-fit bg-[#010101]">
      <div className="rounded-xl min-h-[400px] w-[80%] flex flex-col gap-20 p-8 mt-12">
        <div className="h-fit w-full" id="RealEstateAgent">
          <FirstBox />
        </div>
        <div className="h-fit w-full" id="RealEstateOwners">
          <SecondBox />
        </div>
        <div className="h-fit w-full" id="services">
          <ThirdBox />
        </div>
        <div className="h-fit w-full" id="specialisedServices">
                <FourthBox/>
            </div>
      </div>
    </div>
  );
}

function FirstBox() {
  return (
    <>
      <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
        {/*-------------- text + FAQ -----------*/}
        <span className="w-full md:w-[50%] h-full flex flex-col">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
            Agent Virtual Assistant Services
            <span className="text-sm text-gray-900 bg-yellow-500 px-2.5 py-1 rounded-xl ml-5 font-extrabold">
    #REAL ESTATE
  </span>
          </h1>
          <p className="text-start font-normal text-neutral-400 mt-2">
            Get Connected with verified assistants quickly and shortly
          </p>
          {/* FAQ */}
          <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
            {faqs[0].map((item, i) => (
              <DropdownCompo
                key={i}
                question={item.question}
                description={item.answer}
                width="w-full"
                height="h-auto"
              />
            ))}
          </div>
          <Link href="/#contact" className="h-[50px] text-black w-full rounded-[4px] text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
            Contact Us
          </Link>
        </span>
        {/*--------------- image --------------*/}
        <span className="md:w-[50%] w-full h-full flex items-center justify-center md:justify-end">
          <Image
            width={100}
            height={100}
            src="/ServicesItems/FirstImage.svg"
            alt=""
            className="w-[70%] h-auto object-cover"
          />
        </span>

      </div>
    </>
  )
}

function SecondBox() {
  return (
    <>
      <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
        {/*--------------- image --------------*/}
        <span className="md:w-[50%] hidden md:flex w-full h-full items-center justify-center md:justify-start">
          <Image
            width={200}
            height={200}
            src="/ServicesItems/SecImage.svg"
            alt=""
            className="w-[70%] h-auto object-cover"
          />
        </span>
        {/*-------------- text + FAQ -----------*/}
        <span className="w-full md:w-[50%] h-full flex flex-col">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
            Owner Virtual Assistant Services
            <span className="text-sm text-gray-900 bg-green-500 px-2 py-0.5 rounded-xl ml-5 font-extrabold">
    #PROPERTY OWNER
  </span>
            {/* <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-xl ml-5">
    
  </span> */}
          </h1>
          <p className="text-start font-normal text-neutral-400 mt-2">
            Have your own VAs that are ready to help at anytime
          </p>
          {/* FAQ */}
          <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
            {faqs[1].map((item, i) => (
              <DropdownCompo
                key={i}
                question={item.question}
                description={item.answer}
                width="w-full"
                height="h-auto"
              />
            ))}
          </div>
          <Link href="/#contact" className="h-[50px] text-black w-full rounded-[4px] text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
            Contact Us
          </Link>
        </span>
      </div>
    </>
  )
}

// 

function ThirdBox() {
  return (
    <>
      <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
        {/*-------------- text + FAQ -----------*/}
        <span className="w-full md:w-[50%] h-full flex flex-col">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
            Real Estate Services
            <span className="text-sm text-gray-900 bg-green-500 px-2 py-0.5 rounded-xl ml-5 font-extrabold">
    #PROPERTY OWNER
  </span>
            {/* <span className="text-sm text-gray-600 bg-pink-100 px-2 py-0.5 rounded-xl ml-5 font-extrabold">
              #AGENT
            </span> */}
          </h1>
          <p className="text-start font-normal text-neutral-400 mt-2">
            Get Any specialized support services you need
          </p>
          {/* FAQ */}
          <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
            {faqs[2].map((item, i) => (
              <DropdownCompo
                key={i}
                question={item.question}
                description={item.answer}
                width="w-full"
                height="h-auto"
              />
            ))}
          </div>
          <Link href="/#contact" className="h-[50px] text-black w-full rounded-[4px] text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
            Contact Us
          </Link>
        </span>
        {/*--------------- image --------------*/}
        <span className="md:w-[50%] w-full h-full flex items-center justify-center md:justify-end">
          <Image
            width={100}
            height={100}
            src="/ServicesItems/ThiImage.svg"
            alt=""
            className="w-[70%] h-auto object-cover"
          />
        </span>

      </div>
    </>
  )
}

function FourthBox(){
  return(
      <>
        <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
          {/*--------------- image --------------*/}
          <span className="md:w-[50%] hidden md:flex w-full h-full items-center justify-center md:justify-start">
            <Image
              width={200}
              height={200}
              src="/ServicesItems/SecImage.svg"
              alt=""
              className="w-[70%] h-auto object-cover"
            />
          </span>
          {/*-------------- text + FAQ -----------*/}
          <span className="w-full md:w-[60%] h-full flex flex-col">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
            Specialized Support Services
            <span className="text-sm text-gray-900 bg-green-500 px-2 py-0.5 rounded-xl ml-5 font-extrabold">
    #PROPERTY OWNER
  </span>
  <span className="text-sm text-gray-900 bg-yellow-500 px-2.5 py-1 rounded-xl ml-5 font-extrabold">
    #REAL ESTATE AGENT
  </span>
            </h1>
            <p className="text-start font-normal text-neutral-400 mt-2">
              Need smthing else? The AI finds trusted pros fast
            </p>
            {/* FAQ */}
            <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
              {faqs[3].map((item, i) => (
                <DropdownCompo
                  key={i}
                  question={item.question}
                  description={item.answer}
                  width="w-full"
                  height="h-auto"
                />
              ))}
            </div>
            <Link href="/#contact" className="h-[50px] text-black w-full rounded-[4px] text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
                Contact Us
              </Link>
          </span>
        </div>
      </>
  )
}

function BottomBox() {
  return (
    <div className="md:h-[380px] h-[600px] w-[96%] rounded-2xl border border-[#ffffff20] mt-4 hover:border-[#ffffff50] flex gap-4 items-center justify-center flex-col bg-[radial-gradient(circle_at_center,_#0072feb5,_#4883cc53,_#4883cc29,_#000)]">
      <span className="h-[50px] w-[50px] rounded-[4px] flex items-center justify-center">
        <Image width={1000} height={1000} src="/contactUsItems/mail.svg" alt="icon" className="w-[75%] h-auto" />
      </span>
      <h1 className="md:text-5xl text-2xl text-center"><b>Let&apos;s get to work together</b></h1>
      <p className="text-center text-[14px] text-[#ffffff8a]">Contact us now to know more details</p>

      <div className="flex items-center justify-center h-fit md:h-[20%] w-[80%] md:mt-0 ">
        <Link href="/#contact" className=" text-center text-black cursor-pointer h-[50px] w-[200px] rounded-[4px] flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffff] transition-all duration-300 ease-in-out">
          Contact Us
        </Link>
      </div>
    </div>
  )
}