import { TopNavbar } from "@/components/TopNabbar";
import { Footer, FAQ } from "@/components/landingPage/lpExports";

export default function AboutUs() {
    return (
        <div className="relative w-full h-screen min-h-[100dvh] bg-[#010101] pt-28 md:pt-40">
            
            <TopNavbar/>

            {/* ------------------------ About Us Section ------------------------- */}

            <HeroAboutUsSection/>
            <ImageDiv/>


            {/* ----------------------- Footer and FAQ ---------------------------- */}
            <FAQ/>
            <Footer/>
        
        </div>   
    );
}


function HeroAboutUsSection(){
    return(
        <div className="flex flex-col items-center justify-start w-full h-fit bg-[#010101]">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                  About our Company
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal text-neutral-300">
                    Learn more about our company and get to know what we do to support you
                </p>

                {/* image  */}
                <div className="flex items-center justify-center w-full m-4 md:m-12">
                    <img
                      src="/aboutUsItems/AboutUsHeroPic.svg"
                      alt=""
                      className="w-[80%] h-auto object-cover"
                    />
                </div>

                {/* text  */}

                <div className="w-[80%] h-auto m-4 md:m-28 flex items-center justify-center">
                    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
                        Introduce your business, mission, and the team behind the virtual assistant services. Real estate agents and property managers want to know who they're working with.
                    </h1>
                </div>
            </div>
    )
}


function ImageDiv(){
    return(
      <div className="relative flex items-center justify-center w-full pt-20 bg-[#010101]">
        <span className="w-[80%] h-full md:block hidden">
          <img
            src="/aboutUsItems/bgPic.svg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Black mask at the bottom */}
          {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"/> */}
        </span>
        <div className="absolute w-full h-[80%] text-center flex items-center justify-start flex-col">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl md:text-4xl font-bold text-transparent">
            Flexible Scaling & Support
          </h1>
          <p className="text-neutral-400 text-base font-normal w-[80%] mx-auto mt-4">
            Our dedicated team works tirelessly to achieve key milestones, product launches, & partnerships.
          </p>
        
            <div className="w-[60%] h-fit">
              <span className="w-full mt-10 h-full md:block hidden">
                <img
                  src="/aboutUsItems/AboutUsPicTwo.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
        </div>
      </div>
    )
  }