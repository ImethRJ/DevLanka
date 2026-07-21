"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Don't run mousemove listeners on touch devices or mobile screens
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an element with data-cursor attribute or button/link
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor], button, a, iframe");

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Fluid Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-sky-400/40 bg-sky-500/10 backdrop-blur-[2px] flex items-center justify-center text-[10px] font-bold tracking-widest text-sky-200 uppercase"
        animate={{
          x: mousePosition.x - (isHovered ? (cursorText ? 40 : 24) : 12),
          y: mousePosition.y - (isHovered ? (cursorText ? 40 : 24) : 12),
          width: isHovered ? (cursorText ? 80 : 48) : 24,
          height: isHovered ? (cursorText ? 80 : 48) : 24,
          borderColor: isHovered ? "rgba(56, 189, 248, 0.7)" : "rgba(56, 189, 248, 0.3)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-center px-1 font-semibold text-white drop-shadow-md"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
    </div>
  );
}
