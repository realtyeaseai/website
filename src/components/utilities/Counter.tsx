"use client"; // For Next.js (if using App Router or strict SSR)

import { useEffect, useState } from "react";

const Counter = ({ end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 30)); // Change every 30ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;
