"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScroll(0);
        return;
      }
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      setScroll(scrollPercent);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-16 z-40 h-1 w-full bg-slate-200/80">
      <div
        className="h-full rounded-r bg-blue-600 transition-[width] duration-200 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
