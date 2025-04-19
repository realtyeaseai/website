import Image from "next/image";
import Link from "next/link";
// import Breadcrumb from "@/components/utilities/BreadCrumb";
import FunFactCounter from "@/components/utilities/FunFactCounter";
// import Team from "@/components/utilities/Team";
import { TestimonialSlider1 } from "@/components/utilities/TestimonialSlider";
import { WorkingProcess2 } from "@/components/utilities/WorkingProcess2";
import { TopNavbar } from "@/components/TopNabbar";

export default function AboutUs(){
  return (
    <>
      {/* Breadcrumb */}
      {/* <Breadcrumb pageTitle="About Us" /> */}
      <TopNavbar/>
      {/* About Section 1 - Mission */}
      <section className="p-3 py-30 bg-neutral-950 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          <Image
            src="/assets/img/team/working.jpg"
            width={500}
            height={400}
            alt="about"
            className="rounded-2xl"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Our Mission</h4>
            <p className="mb-6 text-neutral-400 text-center">
            Realty Ease AI is a consulting firm dedicated to transforming the real estate industry by acting as a seamless bridge between property owners, real estate agents, and service providers such as plumbers, electricians, pest control, construction, and HVAC companies. We provide tailored virtual assistant services and manage comprehensive Request for Proposal (RFP) processes to streamline operations, reduce stress, and combat burnout for real estate professionals. Our mission is to foster collaboration, enhance efficiency, and create a dynamic network that delivers consistent opportunities for our clients as their needs evolve.
            </p>
            {/* <div className="flex gap-4">
              <div className="w-3 h-3 bg-white rounded-full mt-2" />
              <div>
                <h4 className="font-semibold p-2 text-center">Exceptional Quality & Support</h4>
                <p className="text-neutral-400 text-sm text-center">
                  Our attention to detail and quality is unmatched in the industry.
                </p>
              </div>
            </div> */}
            <Link href="/about" className=" bg-white text-black px-6 py-3 rounded-md mt-6 justify-center flex items-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>
  
      {/* About Section 2 - The Founder Story - Who we Are */}
      <section className="p-5 py-10 h-[80dvh] md:py-20 flex items-center justify-center bg-neutral-900 text-white text-center md:text-left">
        <div className="flex items-center justify-evenly">
          <div className="flex-[.6] h-fit">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Who We Are
            </h2>
            <p className="mb-6 text-neutral-400">
              Realty Ease AI was founded by Kathy Tiburcio and Eyandra Molina, first-generation Americans born to Dominican immigrant parents. Growing up in Hunts Point, Bronx, and Harlem, respectively, Kathy and Eyandra met as teenagers at Washington Irving High School in New York City. After years of pursuing separate paths, a chance reunion over coffee dec 2024 in the Dominican Republic reignited their shared passion for real estate and inspired the creation of Realty Ease AI.
            </p>
            <div className="flex gap-4">
              {/* <div className="w-3 h-3 bg-white rounded-full mt-2" />
              <div>
                <h4 className="font-semibold">Superior Quality Of Work</h4>
                <p className="text-neutral-400 text-sm">
                  Our attention to detail and quality is unmatched in the industry.
                </p>
              </div> */}
            </div>
          </div>
          <span className="flex-[.35] h-fit w-full flex items-center justify-center">
            <Image
              src="/assets/img/team/working2.png"
              width={500}
              height={400}
              alt="about"
              className="rounded-xl w-[300px]"
            />
          </span>
        </div>
      </section>

      {/* About Section 3 - Global Imapct */}
      <section className="p-3 py-30 bg-neutral-950 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          <Image
            src="/assets/img/team/working.jpg"
            width={500}
            height={400}
            alt="about"
            className="rounded-2xl"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Our Global Impact</h4>
            <p className="mb-6 text-neutral-400 text-center">
              With offices in the Dominican Republic and India, Realty Ease AI is committed to empowering communities in developing nations. By offering above-average wages and fostering a collaborative, empowering work environment, we aim to drive economic growth and opportunity. Our vision is to expand globally, bringing our model of professional excellence and social impact to new regions around the world.
            </p>
            {/* <div className="flex gap-4">
              <div className="w-3 h-3 bg-white rounded-full mt-2" />
              <div>
                <h4 className="font-semibold p-2 text-center">Exceptional Quality & Support</h4>
                <p className="text-neutral-400 text-sm text-center">
                  Our attention to detail and quality is unmatched in the industry.
                </p>
              </div>
            </div> */}
            <Link href="/about" className=" bg-white text-black px-6 py-3 rounded-md mt-6 justify-center flex items-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      
      

      {/* Team Section */}
      {/* <Team /> */}

      {/* Fun Fact Section */}
      <section className="p-3 py-20 bg-neutral-900 text-white">
        <div className="container mx-auto">
          <FunFactCounter style={2} />
        </div>
      </section>

      {/* Working Process Section */}
      <WorkingProcess2 />

      {/* Testimonial Section */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            We&apos;ve 1250+ Global Clients Saying About Us
          </h2>
          <TestimonialSlider1 />
        </div>
      </section>
    </>
  );
};


