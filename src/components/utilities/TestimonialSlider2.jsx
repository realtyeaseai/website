"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const testimonials = [
  {
    img: "/assets/img/testimonial/client-2.png",
    authorImg: "/assets/img/testimonial/client.png",
    name: "Michael M. Griffin",
    role: "CO Founder",
    review:
      "We denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment",
  },
  {
    img: "/assets/img/testimonial/client-3.png",
    authorImg: "/assets/img/testimonial/client.png",
    name: "Robin T. Peckham",
    role: "Developer",
    review:
      "We denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment",
  },
];

export const TestimonialSlider2 = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-neutral-900 text-white p-6 md:p-10 rounded-xl flex flex-col items-center gap-6">
              <Image
                src={item.img}
                alt="testimonial"
                width={120}
                height={120}
                className="rounded-full"
              />

              <p className="text-center text-neutral-400 text-sm md:text-base max-w-xl">
                {item.review}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={item.authorImg}
                  alt="author"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h5 className="font-semibold">
                    {item.name} <span className="text-neutral-500">/ {item.role}</span>
                  </h5>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm mr-1" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
