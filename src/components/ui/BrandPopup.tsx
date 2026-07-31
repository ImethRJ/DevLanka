"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Globe, Mail, Phone, Compass } from "lucide-react";
import Image from "next/image";
import BannerImage from "@/assests/SL-DevSolutions Banner.webp";
import LogoImage from "@/assests/SL-DevSolutions Logo.webp";

export function BrandPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Don't show popup on mobile devices
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    try {
      const isShown = sessionStorage.getItem("sl-devsolutions-brand-popup-shown");
      if (!isShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
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
            className="absolute inset-0 bg-[#141210]/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-md md:max-w-3xl max-h-[92vh] overflow-y-auto bg-[#221F1C] border border-[#38332E] rounded shadow-2xl z-10 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-30 p-2 rounded bg-[#141210] border border-[#38332E] text-[#A39B8E] hover:text-[#F4EFE6] focus-visible:outline-none transition-colors"
              aria-label="Close brand popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner Section */}
            <div className="relative w-full md:w-[45%] aspect-[2/1] md:aspect-auto md:h-auto min-h-[160px] md:min-h-[450px] overflow-hidden border-b md:border-b-0 md:border-r border-[#38332E] bg-[#141210] flex items-center justify-center p-3">
              <Image
                src={BannerImage}
                alt="SL-DevSolutions Banner"
                className="w-full h-full object-contain rounded"
                priority
              />

              {/* Location Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#221F1C] border border-[#38332E] font-mono text-[10px] text-[#D4A359]">
                <Compass className="w-3 h-3 text-[#C85A32]" />
                <span>PANADURA // LK</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-between text-left bg-[#221F1C]">
              <div>
                <div className="w-10 h-10 mb-4 rounded bg-[#141210] border border-[#38332E] p-1.5 flex items-center justify-center">
                  <Image
                    src={LogoImage}
                    alt="SL-DevSolutions Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F4EFE6] mb-2">
                  SL-DEVSOLUTIONS AGENCY
                </h3>
                <p className="font-sans text-xs text-[#A39B8E] leading-relaxed mb-4">
                  Panadura-based web software agency engineering production-ready web applications, e-commerce engines, and client platforms.
                </p>

                {/* Contact Details */}
                <div className="space-y-3 p-4 rounded bg-[#141210] border border-[#38332E] font-mono text-xs my-4">
                  <a
                    href="https://sl-devsolutions.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#A39B8E] hover:text-[#D4A359] transition-colors focus-visible:outline-none"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>sl-devsolutions.vercel.app</span>
                  </a>

                  <a
                    href="mailto:devsolutionssl@gmail.com"
                    className="flex items-center gap-2 text-[#A39B8E] hover:text-[#D4A359] transition-colors focus-visible:outline-none"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2D5D4B]" />
                    <span>devsolutionssl@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-2 text-[#A39B8E]">
                    <Phone className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>+94 77 969 4612 | +94 75 099 4300</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleClose}
                className="w-full btn-primary focus-visible:outline-none mt-2"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
