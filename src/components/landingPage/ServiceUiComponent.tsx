"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Send } from 'lucide-react'; // or use any SVG icon if not using lucide

export default function ServicesShowcase() {
  const [input, setInput] = useState('');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] opacity-30 z-0"></div>

      {/* Center Component */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">

        {/* 3D Cards Section */}
        <div className="relative flex items-center justify-center gap-4 mb-8">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`h-64 w-40 rounded-xl bg-gray-800 shadow-lg transform transition-transform duration-300 ${i === 3 ? 'scale-110 z-20' : 'scale-90'} ${i < 3 ? '-rotate-y-12 -translate-x-6' : i > 3 ? 'rotate-y-12 translate-x-6' : ''}`}
              style={{ backgroundImage: "url('/placeholder.png')", backgroundSize: 'cover' }}
            />
          ))}
        </div>

        {/* Info Card */}
        <div className="absolute top-[20%] left-[5%] bg-black/80 rounded-xl p-4 shadow-xl border border-gray-700 w-[300px]">
          <div className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full inline-block mb-2">
            Help & Coordination for you
          </div>
          <p className="text-md font-semibold mb-2">Get help ?</p>
          <input
            type="text"
            placeholder="Help me with Web development services....."
            className="w-full rounded px-3 py-2 text-black mb-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {["Web Development", "Social Media Management", "Marketing", "Sales", "Budget", "Lead Generation", "Business Development"].map(tag => (
              <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="absolute top-[20%] right-[5%] bg-black/80 rounded-xl p-4 shadow-xl border border-gray-700 w-[250px]">
          <Image
            src="/highlight.jpg"
            alt="Highlight"
            width={220}
            height={120}
            className="rounded mb-2"
          />
          <p className="font-bold text-sm mb-1">Easy to build components</p>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Faucibus egestas risus morbi quis tempor tristique quisque nisl
          </p>
        </div>

        {/* Chat Bubble */}
        {/* <div className="absolute bottom-[25%] left-[15%] bg-gray-900 text-white p-3 px-5 rounded-full shadow-md flex items-center gap-2">
          <Image
            src="/user.jpg"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <ContactCard />
          {/* <div>
            <p className="font-semibold text-sm leading-none">Jhonathan Read</p>
            <p className="text-xs text-gray-400">Jhon555imp@gmail.com</p>
          </div>
          <span className="text-xl ml-auto">📨</span> */}
        {/* </div> */}

        {/* Footer Text */}
        <div className="absolute bottom-10 text-center">
          <h2 className="text-xl font-semibold">Get the services that help elevate your workflow</h2>
          <p className="text-sm text-gray-400">Contact RealtyEaseAI and leave all your worries to us</p>
        </div>
      </div>
    </div>
  );
}



export function ContactCard() {
  return (
    <div className="flex items-center justify-between px-4 py-3 w-fit bg-gradient-to-br from-[#1c1c1c] to-[#111] rounded-full shadow-md backdrop-blur-md">
      <div className="flex items-center space-x-3">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/jhonathan.jpg" // Put the image in public folder and use this path
            alt="Jhonathan Read"
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and Email */}
        <div className="flex flex-col leading-tight">
          <span className="text-white font-semibold text-lg">Jhonathan Read</span>
          <span className="text-gray-400 text-sm">Jhon55simp@gmail.com</span>
        </div>
      </div>

      {/* Send Icon */}
      <div className="ml-4 p-2 bg-[#2c2c2c] rounded-full hover:bg-[#3b3b3b] transition-colors cursor-pointer">
        <Send className="text-white w-5 h-5" />
      </div>
    </div>
  );
}
