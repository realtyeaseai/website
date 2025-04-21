"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// -------------------------------------------------Content-------------------------------------------------------- 

const faqs = [
  {
    question: "What is a Virtual Assistant?",
    answer: `
      <p>
        A <b>Virtual Assistant (VA)</b> is a professional who provides administrative, technical, or creative support services remotely.
      </p>
    `,
  },
  {
    question: "What services does a Virtual Assistant offer?",
    answer: `
      <p>
        Virtual Assistants can assist with a variety of tasks, including:
      </p>
      <ul class="list-disc list-inside mt-2">
        <li><b>Administrative Support:</b> Email management, calendar scheduling, document preparation, data entry, etc.</li>
        <li><b>Social Media Management: </b>Content creation, scheduling posts, and engaging with followers. </li>
        <li><b>Customer Support:</b> Answering calls, emails, and handling inquiries.</li>
        <li><b>Personal Assistance:</b> Booking travel, appointment scheduling, and other personal tasks.</li>
        <li><b>Content Writing:</b>Blog posts, website content, social media copy, etc.</li>
        <li><b>Technical Assistance:</b> Website updates, SEO, and other tech-related tasks.</li>
      </ul>
    `,
  },
  {
    question: "How do I get started with onboarding a Virtual Assistant?",
    answer: `
      <p>
        To get started, simply <b>contact us</b> via our website or fill out our <b>online questionnaire</b>. We will match you with a VA based on your specific needs. Afterward, we will schedule a consultation to discuss the scope of work.
      </p>
    `,
  },
  {
    question: "What are the benefits of onboarding a Virtual Assistant?",
    answer: `
      <p>
        Some key benefits include:
      </p>
      <ul class="list-disc list-inside mt-2">
        <li><b>Cost-Effective:</b> Pay only for the time or tasks you need, without the overhead costs of hiring a full-time employee.</li>
        <li><b>Time Savings:</b> Delegate repetitive or time-consuming tasks to focus on more important activities. </li>
        <li><b>Expertise:</b> Access professionals with specialized skills that you may not have in-house.</li>
        <li> <b>Flexibility:</b> VAs work on-demand, offering scalability based on your business needs.</li>
      </ul>
    `,
  },
  {
    question: "How much is it to invest in a Virtual Assistant?",
    answer: `
      <p>
        The cost of hiring a VA depends on several factors:
      </p>
      <ul class="list-disc list-inside mt-2">
        <li><b>Task Complexity:</b> Simple tasks may cost less, while specialized tasks (e.g., technical support, graphic design) may cost more.</li>
        <li><b>Hourly vs. Project-Based:</b> We offer both hourly and project-based rates depending on your needs. Contact us for a custom quote.</li>
      </ul>
    `,
  },
  // {
  //   question: "How do I communicate with my Virtual Assistant?",
  //   answer: `
  //     <p>
  //       Communication is handled through multiple channels, including:
  //     </p>
  //     <ul class="list-disc list-inside mt-2">
  //       <li>Email</li>
  //       <li>Video calls (via Bitrix24)</li>
  //     </ul>
  //   `,
  // },
  // {
  //   question: "Can I hire a Virtual Assistant for a one-time project?",
  //   answer: `
  //     <p>
  //       Yes! We offer both long-term and short-term contracts. If you only need help with a one-time project, simply let us know, and we will match you with the right VA.
  //     </p>
  //   `,
  // },
  // {
  //   question: "How do you ensure quality and reliability?",
  //   answer: `
  //     <p>
  //       We vet all our Virtual Assistants through a rigorous screening process, which includes:
  //     </p>
  //     <ul class="list-disc list-inside mt-2">
  //       <li>Interviewing candidates for skills and reliability</li>
  //       <li>Reviewing past work and references</li>
  //       <li>Providing training to ensure consistent service quality Additionally, we offer ongoing support to ensure your expectations are met.</li>
  //     </ul>
  //   `,
  // },
  {
    question: "What happens if I am not satisfied with my Virtual Assistant?",
    answer: `
      <p>
        If you're not completely satisfied, we offer a <b>replacement guarantee</b>. We will work with you to resolve any issues or match you with a new VA who better meets your needs.
      </p>
    `,
  },
  // {
  //   question: "Are your Virtual Assistants available globally?",
  //   answer: `
  //     <p>
  //       Yes! We have Virtual Assistants from around the world, providing a wide range of services. Depending on your needs, we can match you with a VA who speaks your language and understands your industry.
  //     </p>
  //   `,
  // },
  ];

// ---------------------------------------------------------------------------------------------------------------------

export default function FAQ() {

  return (
    <div className="min-h-fit pt-24 w-full flex items-center justify-center bg-black">
        <div className="w-[98%] flex items-start justify-center flex-col md:flex-row gap-4 p-4">
            <TextBoxWithContactBtn/>
            <RenderFaqs/>            
        </div>
    </div>
  )
}


function TextBoxWithContactBtn(){
  return(
      <div className="w-full min-h-fit pb-20 pl-4 md:basis-[45%]">

        {/* text  */}
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl pt-30 md:ml-6 ">
        Got Questions? We&apos;ve Got Answers!
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-base font-normal text-neutral-300 md:ml-6 ">
        Explore our frequently asked questions below to find clarity on our services, processes, and everything in between. Can&apos;t find what you&apos;re looking for? <a href="/#contact" className="text-green-500 font-semibold">Contact us</a> – we&apos;re always here to help!

        </p>

        {/* Button  */}
        {/* <a href="#contact" className="relative inline-flex md:mt-8 mt-6 h-12 overflow-hidden rounded-full p-[2px] md:ml-6 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Conatct Us
          </span>
        </a> */}

      </div>
  
  )
}


function RenderFaqs(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
      setOpenIndex(openIndex === i ? null : i);
    };

  return(
    <div className="w-full min-h-fit md:basis-[55%]">
      <div className="max-w-2xl mx-auto p-4 text-[#ffffffcc]">
      {/* <h1 className="text-3xl font-bold mb-6 text-start">Frequently Asked Questions</h1> */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#ffffff69] rounded-xl p-4 cursor-pointer bg-[#ffffff0a]"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium w-[90%]">{faq.question}</h1>
                <span>{openIndex === i ? <Image src="/faqItems/Minus.svg" width={30}
          height={30} alt="-" className="w-6 h-auto"></Image> : <Image src="/faqItems/Add.svg" width={30}
          height={30} alt="+" className="w-6 h-auto"></Image>}</span>
              </div>
          
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-sm mt-2 text-gray-300"
                  >
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}