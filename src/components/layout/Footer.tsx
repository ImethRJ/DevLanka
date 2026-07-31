"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Compass, Mail } from "lucide-react";
import Image from "next/image";
import LogoImage from "@/assests/SL-DevSolutions Logo.webp";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Colombo",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141210] text-[#A39B8E] text-xs border-t border-[#38332E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#38332E]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 text-lg font-serif font-bold text-[#F4EFE6] focus-visible:outline-none">
              <div className="w-8 h-8 rounded bg-[#221F1C] border border-[#38332E] p-1 flex items-center justify-center">
                <Image
                  src={LogoImage}
                  alt="SL-DevSolutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span>SL-DEVSOLUTIONS AGENCY</span>
            </a>
            <p className="font-sans text-xs leading-relaxed max-w-sm text-[#A39B8E]">
              Panadura-based web engineering & software architecture agency. Specialized in bespoke web applications, high-throughput e-commerce engines, and custom enterprise tools.
            </p>

            {/* Live Colombo Time Clock */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#221F1C] border border-[#38332E] font-mono text-[11px] text-[#F4EFE6]">
              <span className="w-2 h-2 rounded-full bg-[#2D5D4B] animate-pulse" />
              <span>COLOMBO (LK)</span>
              <span className="text-[#38332E]">|</span>
              <span className="text-[#D4A359] font-bold">{time || "12:00:00 PM"}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-[#F4EFE6] font-bold text-xs uppercase tracking-wider">INDEX</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-[#D4A359] transition-colors focus-visible:outline-none">Workbench</a></li>
              <li><a href="#services" className="hover:text-[#D4A359] transition-colors focus-visible:outline-none">Capabilities</a></li>
              <li><a href="#process" className="hover:text-[#D4A359] transition-colors focus-visible:outline-none">Methodology</a></li>
              <li><a href="#results" className="hover:text-[#D4A359] transition-colors focus-visible:outline-none">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#D4A359] transition-colors focus-visible:outline-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Back to Top */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between font-mono">
            <div>
              <h4 className="text-[#F4EFE6] font-bold text-xs uppercase tracking-wider mb-3">AGENCY LOCATION</h4>
              <div className="flex items-center gap-2 text-xs text-[#A39B8E] mb-2">
                <Compass className="w-4 h-4 text-[#C85A32]" />
                <span>Panadura, Western Province, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#A39B8E]">
                <Mail className="w-4 h-4 text-[#D4A359]" />
                <span>devsolutionssl@gmail.com</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary !py-2 !px-4 self-start focus-visible:outline-none"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A39B8E]">
          <div>
            &copy; {new Date().getFullYear()} SL-DEVSOLUTIONS AGENCY. ALL RIGHTS RESERVED.
          </div>
          <div>
            PANADURA // LAT: 6.7132° N, LON: 79.9026° E
          </div>
        </div>
      </div>
    </footer>
  );
}
