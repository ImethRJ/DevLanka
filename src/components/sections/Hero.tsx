"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-35"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.55), rgba(20, 18, 16, 0.88)), url('https://images.unsplash.com/photo-1542315192-1f61a1792f33?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Background Architectural Grid Pattern (Subtle & Crisp) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(#38332E 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Top Agency Marker (Underlined coordinates removed) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#221F1C] border border-[#38332E] font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-8"
        >
          <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>SL-DEVSOLUTIONS AGENCY</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F4EFE6] leading-[1.06] mb-8"
        >
          We build <span className="text-[#C85A32] italic font-normal">custom</span> websites & web applications.
        </motion.h1>

        {/* Agency Manifesto Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-base sm:text-xl text-[#A39B8E] max-w-3xl mx-auto leading-relaxed mb-10"
        >
          SL-DevSolutions is a web development agency in Panadura, Sri Lanka. We build fast, custom-coded websites, online stores, and web apps for Sri Lankan businesses and clients worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#portfolio"
            className="btn-primary w-full sm:w-auto focus-visible:outline-none"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="#contact"
            className="btn-secondary w-full sm:w-auto focus-visible:outline-none"
          >
            <span>CONTACT US</span>
          </a>
        </motion.div>

        {/* Agency Pillars Bar (Balanced 4-Column Row) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#38332E] max-w-4xl mx-auto text-left"
        >
          <div className="bg-[#221F1C] border border-[#38332E] p-4 rounded">
            <div className="font-mono text-[10px] text-[#A39B8E] uppercase tracking-wider">AGENCY ORIGIN</div>
            <div className="font-serif text-base text-[#F4EFE6] font-semibold mt-1">Panadura, LK</div>
          </div>
          <div className="bg-[#221F1C] border border-[#38332E] p-4 rounded">
            <div className="font-mono text-[10px] text-[#A39B8E] uppercase tracking-wider">DELIVERY SLA</div>
            <div className="font-serif text-base text-[#F4EFE6] font-semibold mt-1">100% On-Time</div>
          </div>
          <div className="bg-[#221F1C] border border-[#38332E] p-4 rounded">
            <div className="font-mono text-[10px] text-[#A39B8E] uppercase tracking-wider">EDGE LATENCY</div>
            <div className="font-serif text-base text-[#D4A359] font-semibold mt-1">24ms (Colombo)</div>
          </div>
          <div className="bg-[#221F1C] border border-[#38332E] p-4 rounded">
            <div className="font-mono text-[10px] text-[#A39B8E] uppercase tracking-wider">CAPACITY</div>
            <div className="font-serif text-base text-[#2D5D4B] font-semibold mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2D5D4B] animate-pulse" />
              OPEN
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
