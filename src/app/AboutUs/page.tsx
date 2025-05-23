import Image from "next/image";
import Link from "next/link";
import FunFactCounter from "@/components/utilities/FunFactCounter";
import { TestimonialSlider1 } from "@/components/utilities/TestimonialSlider";
import { TopNavbar } from "@/components/TopNavbar";
import MyGlobe from "@/components/myGlobe";

export default function AboutUs() {
  return (
    <>
      <TopNavbar />

      {/* About Section 1 - Mission */}
      <section className="p-3 py-30 bg-neutral-200 text-black dark:bg-neutral-950 dark:text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-2 py-10 px-10 items-center">
          <span className="w-full h-full flex items-center justify-center">
          <Image
            src="/profilePics/k_c_1.JPG"
            width={400}
            height={300}
            alt="about"
            className="rounded-2xl"
          /></span>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-4xl font-semibold mb-4 text-center">Our Mission</h4>
            <div className="mb-6 text-black dark:text-neutral-400 space-y-4 text-start">
              <p>
                Realty Ease AI is a consulting firm dedicated to transforming the real estate industry by acting as a seamless bridge between property owners, real estate agents, and service providers such as plumbers, electricians, pest control, construction, and HVAC companies. We provide tailored virtual assistant services and manage comprehensive Request for Proposal (RFP) processes to streamline operations, reduce stress, and combat burnout for real estate professionals. Our mission is to foster collaboration, enhance efficiency, and create a dynamic network that delivers consistent opportunities for our clients as their needs evolve.
              </p>
            </div>


            <Link
              href="/contact"
              className="bg-black hover:bg-gray-700 hover:dark:bg-gray-500 text-white dark:bg-white dark:text-black px-6 py-3 rounded-md mt-6 justify-center flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section 2 - Global Impact */}
      <section className="h-fit w-full bg-white text-black dark:bg-neutral-950 dark:text-white">
        <MyGlobe />
      </section>

      {/* About Section 3 - The Founder Story - Who we Are */}
      <section className="p-5 py-10 md:py-20 flex items-center justify-center bg-neutral-200 text-black dark:bg-neutral-950 dark:text-white text-center md:text-left">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Who We Are
            </h2>
            <div className="mb-6 text-black dark:text-neutral-400 space-y-4 text-justify">
              <p>
                Realty Ease AI was founded by Kathy Tiburcio and Eyandra Molina, first-generation Americans born to Dominican immigrant parents. Growing up in Hunts Point, Bronx, and Harlem, respectively, Kathy and Eyandra met as teenagers at Washington Irving High School in New York City. After years of pursuing separate paths, a chance reunion over coffee dec 2024 in the Dominican Republic reignited their shared passion for real estate and inspired the creation of Realty Ease AI.
              </p>
            </div>
          </div>

          <span className="h-fit w-full flex items-center justify-center">
            <Image
              src="/profilePics/k_e.png"
              width={500}
              height={400}
              alt="about"
              className="rounded-md w-[300px] md:w-[480px] h-auto"
            />
          </span>
        </div>
      </section>










      {/* Fun Fact Section */}
      <section className="p-3 py-20 bg-neutral-200 text-black dark:bg-neutral-950 dark:text-white">
        <div className="container mx-auto">
          <FunFactCounter className="mt-8" />
        </div>
      </section>

      {/* About Section 4 - Why Realty Ease AI? */}
      <section className="p-3 py-30 bg-neutral-200 text-black dark:bg-neutral-950 dark:text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          <div>
            <h4 className="text-4xl font-semibold mb-4 text-center md:text-start text-neutral-950 dark:text-neutral-100 font-hu">Why Realty Ease AI?</h4>
            <div className="mb-6 text-black dark:text-neutral-400 text-start space-y-4">
              <p>
                Rooted in our Dominican heritage and first-generation American experience, we understand the value of hard work, community, and innovation. Realty Ease AI isn’t just a service provider—we’re a partner dedicated to helping real estate professionals thrive. Whether it’s managing administrative tasks or facilitating connections with top-tier service providers, we’re here to simplify your operations, elevate your experience, and foster success
                Kathy Tiburcio & Eyandra Molina
                Co-Founders, Realty Ease AI
              </p>
            </div>

            <Link
              href="/contact"
              className="bg-black hover:bg-gray-700 hover:dark:bg-gray-500 text-white dark:bg-white dark:text-black px-6 py-3 rounded-md mt-6 justify-center flex items-center"
            >
              Learn More
            </Link>
          </div>
          <span className="flex justify-center items-center">
            <Image
              src="/profilePics/e_1.jpg"
              width={400}
              height={300}
              alt="about"
              className="rounded-2xl"
            />
          </span>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white text-black dark:bg-neutral-950 dark:text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            We&apos;ve 1250+ Global Clients Saying About Us
          </h2>
          <TestimonialSlider1 />
        </div>
      </section>
    </>
  );
}
