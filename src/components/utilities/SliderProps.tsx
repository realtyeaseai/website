// sliderConfig.js
import { Autoplay, Pagination, Navigation, EffectFade, Grid, Parallax } from "swiper/modules";

export const commonModules = [Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax];

export const sliderProps = {
  testimonialSlider: {
    modules: commonModules,
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-dot .dot",
    },
  },
};
