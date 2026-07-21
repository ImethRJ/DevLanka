"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Zap, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export function Hero() {
  const titleWords = ["Crafting", "Ultra-Fluid", "Web", "Experiences", "That", "Convert."];

  const techStack = [
    "Next.js 15",
    "React 19",
    "Tailwind v4",
    "Framer Motion",
    "TypeScript",
    "WebGL",
    "Sanity CMS",
    "Lenis Scroll",
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glowing Orbs */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-sky-400/30 text-xs font-semibold text-sky-300 mb-8 shadow-lg shadow-sky-950/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
          <span>Full-Stack Web Engineering & UI/UX Architecture</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300">Live Demos Ready Below</span>
        </motion.div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            {titleWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`inline-block mr-3 sm:mr-4 ${
                  word === "Ultra-Fluid"
                    ? "gradient-text-accent underline decoration-sky-400/30 decoration-wavy decoration-2"
                    : word === "Convert."
                    ? "gradient-text-primary"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10"
          >
            We design & build high-converting, highly animated bespoke websites and full-stack web applications for ambitious brands who refuse to settle for templates.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-bold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              data-cursor="EXPLORE"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Explore Live Samples</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#estimator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card text-slate-200 hover:text-white font-semibold text-base border border-white/10 hover:border-sky-400/40 transition-all duration-300"
              data-cursor="CALCULATE"
            >
              <span>Instant Project Calculator</span>
            </a>
          </motion.div>

          {/* Key Value Pill Proofs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>&lt; 100ms Avg Load Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-400 shrink-0" />
              <span>5.0 ★ Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Hand-Coded Architecture</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Tech Marquee */}
      <div className="mt-20 border-y border-white/10 py-4 bg-slate-950/60 backdrop-blur-md overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...techStack, ...techStack, ...techStack].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
