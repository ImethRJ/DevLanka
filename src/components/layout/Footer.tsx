"use client";

import { useState, useEffect } from "react";
import { Heart, ArrowUp, Globe, Share2, MessageSquare, Terminal } from "lucide-react";
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
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center p-1.5">
                  <Image
                    src={LogoImage}
                    alt="SL-DevSolutions Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="tracking-tight">SL-DevSolutions</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Web Engineering & UI/UX Architecture Studio. Crafting ultra-fluid, high-converting digital products for ambitious global brands.
            </p>

            {/* Live Clock & Location */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 font-mono text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Colombo, LK</span>
              <span className="text-slate-500">|</span>
              <span className="text-sky-400 font-bold">{time || "12:00:00 PM"}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Live Portfolio</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Services Bento</a></li>
              <li><a href="#process" className="hover:text-sky-400 transition-colors">How We Work</a></li>
              <li><a href="#results" className="hover:text-sky-400 transition-colors">Client Testimonials</a></li>
              <li><a href="#estimator" className="hover:text-sky-400 transition-colors">Project Estimator</a></li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:text-sky-400 hover:border-sky-400/40 transition-all flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  <span className="text-[10px] font-bold">GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:text-sky-400 hover:border-sky-400/40 transition-all flex items-center gap-1.5">
                  <Share2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold">Twitter/X</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:text-sky-400 hover:border-sky-400/40 transition-all flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-sky-400/40 transition-all font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SL-DevSolutions Digital Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Designed & Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-0.5" /> by SL-DevSolutions Architect Team
          </div>
        </div>

      </div>
    </footer>
  );
}
