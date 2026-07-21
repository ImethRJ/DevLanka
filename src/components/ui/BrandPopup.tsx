"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import BannerImage from "@/assests/SL-DevSolutions Banner.webp";
import LogoImage from "@/assests/SL-DevSolutions Logo.webp";

export function BrandPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    try {
      const isShown = sessionStorage.getItem("sl-devsolutions-brand-popup-shown");
      if (!isShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200); // Elegant delay after page loads
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Fallback for Safari Private Browsing or disabled storage environments
      console.warn("sessionStorage is unavailable:", e);
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("sl-devsolutions-brand-popup-shown", "true");
    } catch (e) {
      console.warn("Failed to save popup state in sessionStorage:", e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-md md:max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col md:flex-row glow-primary scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-950/60 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner Section */}
            <div className="relative w-full md:w-[45%] aspect-[2/1] md:aspect-auto md:h-auto min-h-[160px] md:min-h-[500px] overflow-hidden border-b md:border-b-0 md:border-r border-white/5 bg-slate-950 flex items-center justify-center p-3">
              <Image
                src={BannerImage}
                alt="SL-DevSolutions Banner"
                className="w-full h-full object-contain rounded-2xl"
                priority
              />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-[10px] font-bold text-sky-400 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span>BRAND EVOLUTION</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[55%] p-5 md:p-8 flex flex-col justify-between text-center md:text-left bg-slate-900">
              <div>
                {/* Logo icon frame */}
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto md:mx-0 mb-3 md:mb-4 relative rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 flex items-center justify-center overflow-hidden z-20">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] md:rounded-[11px] flex items-center justify-center p-1.5">
                    <Image
                      src={LogoImage}
                      alt="SL-DevSolutions Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-white mb-1 md:mb-2">
                  We are <span className="gradient-text-accent">SL-DevSolutions</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-3 md:mb-4">
                  Welcome to the SL-DevSolutions
                </p>

                {/* Interactive Contact Details */}
                <div className="flex flex-col gap-2.5 md:gap-3 my-3 md:my-5 text-left bg-slate-950/45 p-3 md:p-4 rounded-2xl border border-white/5 font-sans">
                  {/* Website */}
                  <a
                    href="https://sl-devsolutions.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-slate-300 hover:text-sky-400 transition-colors group"
                  >
                    <div className="p-1.5 md:p-2 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 group-hover:bg-sky-500/20 transition-all">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-wider font-mono">Website</span>
                      <span className="font-semibold text-slate-200">sl-devsolutions.vercel.app</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:devsolutionssl@gmail.com"
                    className="flex items-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-slate-300 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="p-1.5 md:p-2 rounded-lg bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-wider font-mono">Email</span>
                      <span className="font-semibold text-slate-200">devsolutionssl@gmail.com</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="flex items-start gap-2.5 md:gap-3 text-[11px] md:text-xs text-slate-300">
                    <div className="p-1.5 md:p-2 rounded-lg bg-purple-500/10 border border-purple-400/20 text-purple-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-wider font-mono">Hotlines</span>
                      <span className="font-semibold text-slate-200 flex flex-wrap gap-x-2">
                        <a href="tel:+94779694612" className="hover:text-purple-400 transition-colors">+94 77 969 4612</a>
                        <span className="text-slate-600">|</span>
                        <a href="tel:+94750994300" className="hover:text-purple-400 transition-colors">+94 75 099 4300</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 md:py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-95 transition-all duration-300 mt-2"
              >
                <span>Explore the Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
