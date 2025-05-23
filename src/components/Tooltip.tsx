'use client';
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "Kathy Tiburcio",
    designation: "CEO & Co-Founder",
    image:
      "/profilePics/k_c_3.JPG",
  },
  {
    id: 2,
    name: "Eyandra Molina",
    designation: "COO & Co Founder",
    image:
      "/profilePics/e_1.jpg",
  },{
    id: 3,
    name: "Vishvam Shah",
    designation: "Web Developer",
    image:
      "/profilePics/v_1.jpg",
  },{
    id: 4,
    name: "Aadi Srivastava",
    designation: "UX Designer",
    image:
      "/profilePics/a_1.jpg",
  },
  {
    id: 5,
    name: "Varun Singh",
    designation: "Web Developer",
    image:
      "/profilePics/vs_1.jpg",
  },
];

export function Tooltip() {
  return (
    <div className="hidden md:inline-flex items-center ml-4">
      <AnimatedTooltip items={people} />
    </div>
  );
}
