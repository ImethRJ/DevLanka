"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code, Rocket, CheckCircle2, Sparkles } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprinting",
      duration: "Days 1 - 3",
      icon: Compass,
      desc: "We analyze your business goals, target buyer persona, and brand identity to construct a detailed architectural plan, sitemap, and feature matrix.",
      deliverables: ["Technical Architecture Specs", "Information Architecture", "Project Roadmap"],
    },
    {
      num: "02",
      title: "UI/UX & Interactive Prototyping",
      duration: "Days 4 - 10",
      icon: PenTool,
      desc: "We craft high-fidelity Figma designs, custom color palettes, fluid typography systems, and interactive motion prototypes before writing code.",
      deliverables: ["High-Fidelity Figma Systems", "Interactive Motion Spec", "Clickable Prototypes"],
    },
    {
      num: "03",
      title: "Full-Stack Development & Motion",
      duration: "Days 11 - 21",
      icon: Code,
      desc: "Our senior engineers bring the designs to life using Next.js 15, Framer Motion, Lenis scroll, and headless CMS integrations with 60 FPS animations.",
      deliverables: ["Clean Next.js 15 Codebase", "Headless CMS Setup", "Custom Micro-interactions"],
    },
    {
      num: "04",
      title: "Optimization, QA & Global Launch",
      duration: "Days 22 - 25",
      icon: Rocket,
      desc: "Rigorous cross-browser testing on iOS, Android, and Desktop, speed tuning for <100ms load times, SEO meta setup, and Vercel/Cloudflare deployment.",
      deliverables: ["100/100 Lighthouse Score", "SEO Meta & Analytics Setup", "Production Deployment"],
    },
  ];

  return (
    <section id="process" className="py-28 relative z-10 bg-slate-950/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Take Projects From <br />
            <span className="gradient-text-accent">Concept To High-Converting Reality.</span>
          </h2>
          <p className="text-slate-400 text-base">
            A battle-tested 4-phase execution framework designed for speed, clarity, and zero unexpected delays.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card p-6 rounded-3xl border border-white/10 relative flex flex-col justify-between group hover:border-sky-400/40"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-sky-400/40 group-hover:text-sky-400 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-white/10">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{step.desc}</p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
