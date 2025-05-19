import Image from "next/image";
import DropdownCompo from "@/components/ui/DropdownCompo";
import Link from "next/link";
import AgentTag from '@/components/AgentTag';
import { IconArrowRight } from "@tabler/icons-react";

export default function Services() {

  // Page Load delay for 3 seconds -- to use this make the function async
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="relative w-full h-fit pb-8 flex flex-col justify-start items-center min-h-[100dvh] dark:bg-black bg-green-50 dark:text-white text-black pt-28 md:pt-40">
      <TopHeading />
      <RenderedServices />
      <BottomBox />

    </div>
  )
}
// SR no. accordingly -->
// (1.) real estate agent,(2.) real estate/property owners,(3.) ResalEstate services, (4.) specialised services

const faqs = [
  [
    {
      question: "Basic Real Estate Support",
      answer:
        `  
              <li>Manage emails and calendars</li>
              <li>Set reminders for tasks and deadlines</li>
              <li>Organize files and documents</li>
              <li>Enter contact and listing info into CRM</li>
              <li>Prepare open house materials</li>
            `,
    }, {
      question: "Pro Listing & Lead Solutions",
      answer:
        `         
              <li>Every task in level 1</li>
              <li>Write and update property listings</li>
              <li>Coordinate with vendors (photos, staging, etc.)</li>
              <li>Design flyers and email campaigns</li>
              <li>Research and contact potential leads</li>
              <li>Set up automated follow-up systems</li>
            `,
    },
    {
      question: "Elite Real Estate Operations",
      answer:
        `     
        <li>Every task in Level 2</li>
        <li>Manage transactions from contract to closing</li>
        <li>Review documents for accuracy</li>
        <li>Research investment properties</li>
        <li>Track team performance</li>
        <li>Provide training to the staff</li>
                   
      `,
    },
  ],
  [
    {
      question: "Basic Property Management",
      answer: `
          <li>List property on rental platforms (Airbnb, Vrbo, etc.)</li>
          <li>Respond to general inquiries</li>
          <li>Handle basic maintenance requests</li>
          <li>Schedule cleaning services</li>
      `,

    }, {
      question: "Pro Guest & Property Coordination",
      answer: `
          <li>Coordinate with cleaning and maintenance teams between guest stays</li>
          <li>Respond to guest messages and reviews professionally</li>
          <li>Update booking calendars</li>
          <li>Manage simple guest issues or escalate to owners</li>
          <li>Organize and maintain property documents</li>
      `,

    }, {
      question: "Elite Property & Guest Experience Management",
      answer: `
      <li>Manage property upgrades and renovations</li>
      <li>Oversee all guest interactions and resolve escalations</li>
      <li>Handle financials (rent collection, billing, etc.)</li>
      <li>Negotiate lease renewals or new agreements</li>
      <li>Coordinate vendor services (repairs, supplies)</li>
      `,
    

    },
  ],
  [
    {
      question: "Basic Trade Support",
      answer: `
        <li>Answering calls and responding to emails</li>
        <li>Scheduling appointments and sending reminders</li>
        <li>Data entry (clients, invoices, service logs)</li>
        <li>Managing calendars and job bookings</li>
        <li>Organizing digital documents and files</li>
      `,

    }, {
      question: "Pro Operations & Client Engagement",
      answer: `
        <li>Creating and updating service/job listings</li>
        <li>Communicating with clients about estimates, timelines, and changes</li>
        <li>Coordinating with field technicians for schedules and parts</li>
        <li>Managing online reviews and feedback</li>
        <li>Tracking and assigning new leads</li>
      `,

    }, {
      question: "Elite Growth & Automation for Trades",
      answer: `
        <li>Managing customer lifecycle from inquiry to job completion</li>
        <li>Setting up automations (quote follow-ups, review requests, etc.)</li>
        <li>Overseeing dispatch and technician routing</li>
        <li>Generating performance and job reports</li>
        <li>Supporting hiring, onboarding, and team coordination</li>
        <li>Track team performance</li>
      `,

    },
  ],
  [
    {
      question: "Foundational Business Planning",
      answer:
        `
          <p>
            Create a business plan, including goals, target market, and strategies.
          </p>
        `,
    }, {
      question: "Marketing & Social Media Management Services",
      answer:
        `
          <p>
            Create, schedule, and manage social media Posts/Calendars across various platforms.
          </p>
        `,
    }, {
      question: "Web Development Services",
      answer:
        `
          <p>
            Design develop and Maintain a professional website Customized to your business needs.
          </p>
        `,
    }
  ]

]

function TopHeading() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-fit px-4 md:px-8 py-8">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-700 to-gray-900 dark:from-neutral-50 dark:to-neutral-400 dark:text-transparent">
        Our Services
      </h1>

      <p className="mt-6 mb-6 max-w-2xl text-center text-sm md:text-base font-semibold text-neutral-600 dark:text-neutral-300">
        From managing and client communications to coordinating and administrative workflows, our virtual assistants adapt to your priorities.
        <br className="hidden md:block" />
        No two businesses are alike, that&apos;s why every service we deliver is tailored to your unique goals, processes, and growth ambitions.
      </p>
    </div>

  );
}

function RenderedServices() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-fit">
      <div className="rounded-xl min-h-[400px] w-[96%] md:w-[80%] flex flex-col gap-20 p-8 mt-12">
        <div className="h-fit w-full scroll-mt-48" id="RealEstateAgent">
          <FirstBox />
        </div>
        <div className="h-fit w-full scroll-mt-48" id="vas">
          <SecondBox />
        </div>
        <div className="h-fit w-full scroll-mt-48" id="services">
          <ThirdBox />
        </div>
        <div className="h-fit w-full scroll-mt-54" id="specialisedServices">
          <FourthBox />
        </div>
      </div>
    </div>
  );
}

function FirstBox() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full h-auto px-4 md:px-10 py-6">

      {/* Text + FAQ */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex gap-2 mb-4">
          <AgentTag type="agent" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-700 to-gray-900 dark:from-neutral-50 dark:to-neutral-400 dark:text-transparent">
          Virtual Assistant Services
        </h1>

        <p className="font-normal dark:text-neutral-400 mt-2 text-sm md:text-base">
          Get Connected with verified assistants quickly and shortly
        </p>

        <div className="w-full mt-4 flex flex-col gap-4 items-center md:items-start">
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

        <Link href="/contact" className="h-[50px] dark:text-black w-full rounded-[4px] text-center flex items-center justify-center bg-black text-white hover:bg-gray-700 dark:bg-[#ffffff] hover:dark:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
          Contact Us
        </Link>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end">
        <Image
          width={100}
          height={100}
          src="/ServicesItems/FirstImage.svg"
          alt="Virtual Assistant Service"
          className="w-[80%] max-w-xs md:max-w-none h-auto object-cover border-8 border-gray-600 rounded-2xl"
        />
      </div>

    </div>
  );
}



function SecondBox() {
  return (
    <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%]">
      {/*--------------- image --------------*/}
      <span className="md:w-1/2 flex w-full h-full items-center justify-center md:justify-start">
        <Image
          width={200}
          height={200}
          src="/ServicesItems/SecImage.svg"
          alt=""
          className="w-[80%] h-auto object-cover rounded-2xl border-8 border-gray-600"
        />
      </span>
      {/*-------------- text + FAQ -----------*/}
      <span className="w-full md:w-[50%] h-full flex flex-col items-center md:items-start">
        <div className="flex gap-2 mb-4">
          <AgentTag type="property-owner" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-700 to-gray-900 dark:from-neutral-50 dark:to-neutral-400 dark:text-transparent md:text-left">
          Virtual Assistant Services
        </h1>
        <p className="text-start font-normal dark:text-neutral-400 mt-2">
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
        <Link href="/contact" className="h-[50px] dark:text-black w-full rounded-[4px] text-center flex items-center justify-center bg-black text-white hover:bg-gray-700 dark:bg-[#ffffff] hover:dark:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
          Contact Us
        </Link>
      </span>
    </div>
  )
}

// 

function ThirdBox() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full h-auto px-4 md:px-10 py-6">

      {/* Text + FAQ */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex gap-2 mb-4">
          <AgentTag type="service-provider" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-700 to-gray-900 dark:from-neutral-50 dark:to-neutral-400 dark:text-transparent">
          Virtual Assistant Services
        </h1>

        <p className="font-normal dark:text-neutral-400 mt-2 text-sm md:text-base">
          Get any service you need, we have the best service providers.
        </p>

        <div className="w-full mt-4 flex flex-col gap-4 items-center md:items-start">
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

        <Link href="/contact" className="h-[50px] dark:text-black w-full rounded-[4px] text-center flex items-center justify-center bg-black text-white hover:bg-gray-700 dark:bg-[#ffffff] hover:dark:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
          Contact Us
        </Link>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end">
        <Image
          width={100}
          height={100}
          src="/ServicesItems/ThirdImage.svg"
          alt="Virtual Assistant Services"
          className="w-[80%] max-w-xs md:max-w-none h-auto object-cover border-8 border-gray-600 rounded-2xl"
        />
      </div>

    </div>
  );
}


function FourthBox() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 w-full h-auto px-2 sm:px-4 md:px-10 py-6">

      {/* Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start">
        <Image
          width={200}
          height={200}
          src="/ServicesItems/FourthImage.svg"
          alt="Specialized Support Services"
          className="w-[80%] h-auto object-cover rounded-2xl border-8 border-gray-600"
        />
      </div>

      {/* Text + FAQ */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex flex-wrap gap-2 mb-4">
          <AgentTag type="agent" />
          <AgentTag type="property-owner" />
          <AgentTag type="service-provider" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-700 to-gray-900 dark:from-neutral-50 dark:to-neutral-400 dark:text-transparent">
          Specialized Support Services
        </h1>

        <p className="font-normal dark:text-neutral-400 mt-2 text-sm md:text-base">
          Don’t see exactly what you&apos;re looking for?  We&apos;re flexible, select from below or tell us what you need!
        </p>

        <div className="w-full mt-4 flex flex-col gap-4 items-center md:items-start">
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

        <Link href="/SpecializedServices" className="h-[50px] dark:text-black w-full rounded-[4px] text-center flex items-center justify-center bg-black text-white hover:bg-gray-700 dark:bg-[#ffffff] hover:dark:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
          Check out our services   <span className="px-4"><IconArrowRight/></span>
        </Link>
      </div>

    </div>
  );
}


function BottomBox() {
  return (
    <div className="md:h-[380px] h-[600px] w-[96%] rounded-2xl text-white border border-neutral-950 dark:border-[#ffffff20] mt-10 mb-10 hover:border-[#ffffff50] flex gap-4 items-center justify-center flex-col bg-[#1ca2dc] dark:bg-[radial-gradient(circle_at_center,_#1ca2dc58,_#1ca2dc53,_#1ca2dc29,_#000)]">
      <span className="h-[50px] w-[50px] rounded-[4px] flex items-center justify-center">
        <Image width={1000} height={1000} src="/contactUsItems/mail.svg" alt="icon" className="w-[75%] h-auto" />
      </span>
      <h1 className="md:text-5xl text-2xl text-center"><b>Let&apos;s get to work together</b></h1>
      <p className="text-center text-[14px] dark:text-[#ffffff8a]">Contact us now to know more details</p>

      <div className="flex items-center justify-center h-fit md:h-[20%] w-[80%] md:mt-0 ">
        <Link href="/contact" className="h-[50px] text-black w-[50%] rounded-[4px] text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#ffffffdc] transition-all duration-300 ease-in mt-4">
          Contact Us
        </Link>
      </div>
    </div>
  )
}