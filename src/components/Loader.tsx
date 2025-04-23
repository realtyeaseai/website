// components/LoaderWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import "../app/globals.css";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white space-y-4">
  <p className="text-3xl font-light font-sans tracking-wide typewriter-effect">
    RealtyEaseAI
  </p>
  <p className="text-lg text-green-500 font-semibold">
    Welcome to the World of Virtual Assistants
  </p>
</div>

    );
  }

  return <>{children}</>;
}
