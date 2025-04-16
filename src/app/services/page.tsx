import Image from "next/image";
import { TopNavbar } from "@/components/TopNabbar";
import Faq from "@/components/ui/FaqComponent";

export default function Services() {
    return (
        <div className="relative w-full h-screen min-h-[100dvh] bg-[#010101] pt-28 md:pt-40">
            <TopNavbar/>
            <TopHeading/>
            <RenderedServices/>
        </div>
    )
}

const faqs = [
    [
        {
            question: "What is a Virtual Assistant?",
            answer: 
            `
              <p>
                A <b>Virtual Assistant (VA)</b> is a professional who provides administrative, technical, or creative support services remotely.
              </p>
            `,
        },{
            question: "What is a Virtual Assistant?",
            answer: 
            `
              <p>
                A <b>Virtual Assistant (VA)</b> is a professional who provides administrative, technical, or creative support services remotely.
              </p>
            `,
        },
        {
            question: "What is a Virtual Assistant?",
            answer: 
            `
              <p>
                A <b>Virtual Assistant (VA)</b> is a professional who provides administrative, technical, or creative support services remotely.
              </p>
            `,
        },
    ],
    [

    ]
    
]

function TopHeading(){
    return(
        <div className="flex flex-col items-center justify-start w-full h-fit bg-[#010101]">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-neutral-300">
            From managing listings to client communication, our trained virtual assistants handle your day-to-day tasks so you can focus on growing your business.
            </p>
        </div>
    );
}

function RenderedServices() {
    return (
      <div className="flex flex-col items-center justify-start w-full h-fit bg-[#010101]">
        <div className="rounded-xl min-h-[400px] w-[80%] flex flex-col gap-20 p-8 mt-12">
            <div className="h-fit w-full">
                <FirstBox/>
            </div>
            <div className="h-fit w-full">
                <SecondBox/>
            </div>
            <div className="h-fit w-full">
                <ThirdBox/>
            </div>
        </div>
      </div>
    );
  }


function FirstBox(){
    return(
        <>
          <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
            {/*-------------- text + FAQ -----------*/}
            <span className="w-full md:w-[50%] h-full flex flex-col">
              <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
                Real Estate Virtual Assistant Services
              </h1>
              <p className="text-start font-normal text-neutral-400 mt-2">
                Get Connected with verified assistants quickly and shortly
              </p>
              {/* FAQ */}
              <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
                {faqs[0].map((item, i) => (
                  <Faq
                    key={i}
                    question={item.question}
                    description={item.answer}
                    width="w-full"
                    height="h-auto"
                  />
                ))}
              </div>
            </span>
            {/*--------------- image --------------*/}
            <span className="md:w-[50%] w-full h-full flex items-center justify-center md:justify-end">
              <Image
                width={100}
                height={100}
                src="/servicesItems/FirstImage.svg"
                alt=""
                className="w-[70%] h-auto object-cover"
              />
            </span>

          </div>
        </>
    )
}


function SecondBox(){
    return(
        <>
          <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
            {/*--------------- image --------------*/}
            <span className="md:w-[50%] hidden md:flex w-full h-full items-center justify-center md:justify-start">
              <Image
                width={200}
                height={200}
                src="/servicesItems/SecImage.svg"
                alt=""
                className="w-[70%] h-auto object-cover"
              />
            </span>
            {/*-------------- text + FAQ -----------*/}
            <span className="w-full md:w-[50%] h-full flex flex-col">
              <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
                Real Estate Virtual Assistant Services
              </h1>
              <p className="text-start font-normal text-neutral-400 mt-2">
                Get Connected with verified assistants quickly and shortly
              </p>
              {/* FAQ */}
              <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
                {faqs[0].map((item, i) => (
                  <Faq
                    key={i}
                    question={item.question}
                    description={item.answer}
                    width="w-full"
                    height="h-auto"
                  />
                ))}
              </div>
            </span>
          </div>
        </>
    )
}

function ThirdBox(){
    return(
        <>
          <div className="relative flex items-center justify-between md:flex-row flex-col gap-8 w-full h-[80%] bg-[#010101]">
            {/*-------------- text + FAQ -----------*/}
            <span className="w-full md:w-[50%] h-full flex flex-col">
              <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-start text-3xl font-bold text-transparent md:text-4xl">
                Real Estate Virtual Assistant Services
              </h1>
              <p className="text-start font-normal text-neutral-400 mt-2">
                Get Connected with verified assistants quickly and shortly
              </p>
              {/* FAQ */}
              <div className="w-full h-[80%] mt-4 flex gap-4 items-center justify-center flex-col">
                {faqs[0].map((item, i) => (
                  <Faq
                    key={i}
                    question={item.question}
                    description={item.answer}
                    width="w-full"
                    height="h-auto"
                  />
                ))}
              </div>
            </span>
            {/*--------------- image --------------*/}
            <span className="md:w-[50%] w-full h-full flex items-center justify-center md:justify-end">
              <Image
                width={100}
                height={100}
                src="/servicesItems/ThiImage.svg"
                alt=""
                className="w-[70%] h-auto object-cover"
              />
            </span>

          </div>
        </>
    )
}