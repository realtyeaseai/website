'use client'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
// import {
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";
import { motion } from "motion/react"

export default function ServicesGrid() {

  // --------------------------- Grid Images Set Here ------------------------
  // const Skeleton = () => (
  //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl cursor-pointer  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black place-items-center">HELLO</div>
  //   );
  // ------------------------------------------------------------------------

  const SkeletonOne = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="/profileAgent.jpeg"
            alt="avatar"
            width={1000} height={1000}
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Jhonathan Read
          </p>
          <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Agent
          </p>
        </motion.div>
        <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          <Image
            src="/profileAgent.jpeg"
            alt="avatar"
            width={1000} height={1000}
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Emma Schodinger
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
            AI Assitant
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="/profileAgent.jpeg"
            alt="avatar"
            width={1000} height={1000}
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Rally Watson
          </p>
          <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Helper
          </p>
        </motion.div>
      </motion.div>
    );
  };
  
  const SkeletonTwo =()=>{
    const imageVariants = {
      initial: {
        scale: 1,
        rotate: 0,
      },
      hover: {
        scale: 1.05,
        rotate: 6,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      },
    };

    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative flex flex-1 w-full h-full z-2 max-h-[13rem] min-h-[6rem] rounded-xl overflow-hidden dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent place-items-center justify-center"
      >
        <span className="absolute shadow-[0px_0px_2000px_80px_#d860e5] left-[18%] top-[20%] w-0 h-0 rounded-full pointer-events-none z-[0]"></span>
        <motion.img
          variants={imageVariants}
          src="/ServicesGridItems/Hammer.svg"
          alt="Image not Supported"
          className="w-[90%] h-[90%] object-contain z-2"
        />
      </motion.div>
    );
  }

  const SkeletonThree = () => {
    const imageVariants = {
      initial: {
        scale: 1,
      },
      hover: {
        scale: 1.025, // Slight zoom-in effect
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      },
    };

    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative flex flex-1 w-full h-full z-2 max-h-[13rem] min-h-[6rem] rounded-xl overflow-hidden"
      >
        <motion.img
          variants={imageVariants}
          src="/ServicesGridItems/orangeHouse.svg"
          alt="Image not Supported"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </motion.div>
    );
  }


  // ---------------------------- Grid Content Set Here --------------------------

  const items = [
    {
      title: "Real Estate Virtual Assistant Services",
      description: "Get Connected with verified assistants quickly and shortly",
      header: <SkeletonOne />,
      className: "md:col-span-2",
      // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Specialized Services",
      description: "Need a plumber? The AI finds trusted pros fast",
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Property Owners Virtual Assistant Services",
      description: "Have your own VAs that are ready to help at anytime",
      header: <SkeletonThree />,
      className: "md:col-span-3",
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    // {
    //   title: "The Art of Design",
    //   description: "Discover the beauty of thoughtful and functional design.",
    //   header: <Skeleton />,
    //   className: "md:col-span-1",
    //   // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    // },
    // {
    //   title: "The Power of Communication",
    //   description:
    //     "Understand the impact of effective communication in our lives.",
    //   header: <Skeleton />,
    //   className: "md:col-span-2",
    //   // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    // },
  ];


  return (
    <div className="w-full bg-black text-white py-12">

      <div className="flex flex-col items-center justify-center mb-8">
        {/* <h1 className="text-4xl font-bold mb-2"> </h1> */}
        
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent">
          Services we offer
        </h1>
        <p className="text-center text-base font-normal text-neutral-300 text-[16px] pt-2">
          Everything you need to collaborate, create, and scale, all in one place.
        </p>
      </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              // icon={item.icon}
            />
          ))}
        </BentoGrid>
    
        </div>
  )
}
