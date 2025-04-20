import Image from "next/image";
import Link from "next/link";
// import Breadcrumb from "@/components/utilities/BreadCrumb";
import FunFactCounter from "@/components/utilities/FunFactCounter";
// import Team from "@/components/utilities/Team";
import { TestimonialSlider1 } from "@/components/utilities/TestimonialSlider";
import { WorkingProcess2 } from "@/components/utilities/WorkingProcess2";
import { TopNavbar } from "@/components/TopNabbar";
import MyGlobe from "@/components/myGlobe";

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
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Who We Are
            </h2>
            <p className="mb-6 text-neutral-400">
              Realty Ease AI was founded by Kathy Tiburcio and Eyandra Molina, first-generation Americans born to Dominican immigrant parents. Growing up in Hunts Point, Bronx, and Harlem, respectively, Kathy and Eyandra met as teenagers at Washington Irving High School in New York City. After years of pursuing separate paths, a chance reunion over coffee dec 2024 in the Dominican Republic reignited their shared passion for real estate and inspired the creation of Realty Ease AI.
            </p>
          </div>
          <span className="h-fit w-full flex items-center justify-center">
            <Image
              src="/assets/img/team/working2.png"
              width={500}
              height={400}
              alt="about"
              className="rounded-xl w-[140px] md:w-[300px] h-auto"
            />
          </span>
        </div>
      </section>

      {/* About Section 3 - Global Imapct */}
      <section className="h-fit w-full bg-neutral-950 text-white">
          {/* Globe  */}
          <MyGlobe />
      </section>

      {/* About Section 4 - Why Realty Ease AI? */}
      <section className="p-3 py-30 bg-neutral-900 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 py-10 px-10 items-center">
          
        <div>
            <h4 className="text-2xl font-semibold mb-4 text-center md:text-start">Why Realty Ease AI?</h4>
            <p className="mb-6 text-neutral-400 text-start">
            Rooted in our Dominican heritage and first-generation American experience, we understand the value of hard work, community, and innovation. Realty Ease AI isn’t just a service provider—we’re a partner dedicated to helping real estate professionals thrive. Whether it’s managing administrative tasks or facilitating connections with top-tier service providers, we’re here to simplify your operations and elevate your success.
              <br/><br/> ~ Kathy Tiburcio & Eyandra Molina
              <br/> ~ Co-Founders, Realty Ease AI
            </p>
            <Link href="/#contact" className=" bg-white text-black px-6 py-3 rounded-md mt-6 justify-center flex items-center">
              Learn More
            </Link>
          </div>
          <span className="flex justify-center items-center">
            <Image
              src="/assets/img/team/working.jpg"
              width={500}
              height={400}
              alt="about"
              className="rounded-2xl"
            />
          </span>
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
      {/* <WorkingProcess2 /> */}

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


