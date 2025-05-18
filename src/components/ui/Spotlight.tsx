// import React from "react";
// import { cn } from "@/lib/utils";

// type SpotlightProps = {
//   className?: string;
// };

// export const Spotlight = ({ className }: SpotlightProps) => {
//   return (
//     <svg
//       className={cn(
//         "animate-spotlight pointer-events-none absolute z-[5] h-[169%] w-[138%] lg:w-[84%] opacity-0 text-[#3d3994] dark:text-white",
//         className
//       )}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 3787 2842"
//       fill="none"
//     >
//       <g filter="url(#filter)">
//         <ellipse
//           cx="1924.71"
//           cy="273.501"
//           rx="1924.71"
//           ry="273.501"
//           transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
//           fill="currentColor"
//           fillOpacity="0.21"
//         ></ellipse>
//       </g>
//       <defs>
//         <filter
//           id="filter"
//           x="0.860352"
//           y="0.838989"
//           width="3785.16"
//           height="2840.26"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="BackgroundImageFix"
//             result="shape"
//           ></feBlend>
//           <feGaussianBlur
//             stdDeviation="151"
//             result="effect1_foregroundBlur_1065_8"
//           ></feGaussianBlur>
//         </filter>
//       </defs>
//     </svg>
//   );
// };


import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
};

export const Spotlight = ({ className }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[5] h-[169%] w-[138%] lg:w-[84%] opacity-0 text-[#3d3994] dark:text-white",
        className
         )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <defs>
        <radialGradient id="spotGradient" cx="40%" cy="70%" r="80%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#aab6ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3d3994" stopOpacity="0" />
        </radialGradient>
        <filter
          id="blur"
          x="0"
          y="0"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="141" />
        </filter>
      </defs>

      <g filter="url(#blur)">
        <ellipse
          cx="2024.71"
          cy="359.501"
          rx="2224.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="url(#spotGradient)"
        />
      </g>
    </svg>
  );
};