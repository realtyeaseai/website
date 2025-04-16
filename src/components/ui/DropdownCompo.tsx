"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DropdownProps {
  question: string;
  description: string; // HTML content as a string
  width?: string; // Tailwind width class, e.g., "w-full", "w-1/2"
  height?: string; // Tailwind height class, e.g., "h-auto", "h-40"
}

export default function DropdownCompo({ question, description, width = "w-full", height = "h-auto" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-transparent border-b-[#ffffff69]  p-4 cursor-pointer bg-[#ffffff0a] ${width} ${height}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium w-[90%]">{question}</h1>
        <span>
          {isOpen ? (
            <Image
              width={100}
              height={100}
              src="/faqItems/Minus.svg"
              alt="-"
              className="w-6 h-auto"
            />
          ) : (
            <Image
              width={100}
              height={100}
              src="/faqItems/Add.svg"
              alt="+"
              className="w-6 h-auto"
            />
          )}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="overflow-hidden text-sm mt-2 text-gray-300"
          >
            {/* Render HTML content */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}