"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-slate-800/50 border border-white/10 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
        isDark
          ? "bg-slate-900/80 border border-white/15 text-amber-400 hover:text-amber-300 hover:bg-slate-800 hover:border-amber-400/40 shadow-sm"
          : "bg-white/80 border border-slate-300/80 text-indigo-600 hover:text-indigo-700 hover:bg-white hover:border-indigo-500/40 shadow-md shadow-indigo-500/10"
      } focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      data-cursor={isDark ? "LIGHT MODE" : "DARK MODE"}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Sun className="w-4 h-4" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Moon className="w-4 h-4" />
      </motion.div>
    </button>
  );
}
