"use client";
import "../app/globals.css";

import { TopNavbar } from "@/components/TopNabbar";
import {
  HeroSection,
  PersonaPicker,
  ContactUs,
  FAQ,
  Footer,
} from "./landingPage/lpExports";

export default function HomeClient() {
  return (
    <div className="relative w-full h-screen">
      {/* -----------Overlay of dark color over the bg cloud video ------------ */}
      <span className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-[#00000080]"></span>

      {/* -------------------------Background Video ---------------------------- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        title="Cloud background video"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, #000000 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <source src="/cloud-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-10 w-full">
        <TopNavbar />
        <div id="hero" className="w-full overflow-hidden">
          <HeroSection />
        </div>
        <div id="clients" className="w-full">
          <PersonaPicker />
        </div>
        <div id="contact" className="w-full">
          <ContactUs />
        </div>
        <div id="faq" className="w-full">
          <FAQ />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
