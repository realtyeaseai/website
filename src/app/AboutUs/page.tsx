import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/utilities/BreadCrumb";
import FunFactCounter from "@/components/utilities/FunFactCounter";
// import Team from "@/components/utilities/Team";
import { TestimonialSlider1 } from "@/components/utilities/TestimonialSlider";
import { WorkingProcess2 } from "@/components/utilities/WorkingProcess2";

export default function AboutUs(){
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb pageTitle="About Us" />

      {/* About Section 1 */}
      <section className="p-5 py-10 md:py-20 bg-neutral-900 text-white text-center md:text-left">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            Introduce your business, mission, and the team behind the virtual assistant services. Real estate agents and property managers want to know who they&apos;re working with.
            </h2>
            {/* <p className="mb-6 text-neutral-400">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque.
            </p> */}
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

          <Image
            src="/assets/img/team/working2.png"
            width={500}
            height={400}
            alt="about"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* About Section 2 */}
      <section className="p-3 py-20 bg-neutral-950 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/assets/img/team/working.jpg"
            width={500}
            height={400}
            alt="about"
            className="rounded-2xl"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Flexible Scaling & Support</h4>
            <p className="mb-6 text-neutral-400 text-center">
              Our dedicated team works tirelessly to achieve key milestones, product launches, & partnerships.
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


