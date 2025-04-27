"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

// Define the type for each testimonial item
interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar?: string;
  stars: number;
  sideImage: string;
  icon?: string;
}

export const TestimonialSlider1 = () => {
  const testimonials: Testimonial[] = [
    {
      text: "We denounce with right indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee.",
      author: "Lucas J. Swe",
      role: "CO Founder",
      avatar: "/assets/img/testimonial/review.jpeg",
      stars: 5,
      sideImage: "/assets/img/testimonial/review.jpeg",
    },
    {
      text: "Their service is unmatched and the process is so smooth — I've never worked with a better team.",
      author: "Jordan R. Blake",
      role: "CTO",
      avatar: "/assets/img/testimonial/client-3.png",
      stars: 4,
      sideImage: "/assets/img/testimonial/review1.jpeg",
      icon: "/assets/img/testimonial/icon.png",
    },
    {
      text: "I was blown away by the quality of work and the attention to detail. Highly recommend!",
      author: "Sarah L. Johnson",
      role: "Project Manager",
      avatar: "/assets/img/testimonial/client-3.png",
      stars: 4,
      sideImage: "/assets/img/testimonial/review2.png",
      icon: "/assets/img/testimonial/icon.png",
    },
  ];

  return (
    <div className="relative w-full px-4 py-20 bg-none">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full max-w-7xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-neutral-900 p-12 rounded-xl shadow-xl text-white">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image
                  src={item.sideImage}
                  alt="Client"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-lg mb-4">{item.text}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-white">
                      {item.author} <span className="text-neutral-400 font-normal">/ {item.role}</span>
                    </h5>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start text-yellow-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
