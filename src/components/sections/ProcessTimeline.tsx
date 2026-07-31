"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, ShieldCheck, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      phase: "01",
      title: "Architecture & Schema Blueprint",
      duration: "Days 1 - 4",
      icon: FileText,
      description: "We define database schemas, technical API specs, wireframes, and performance requirements before writing code.",
      input: "Business Goals & User Flow Matrix",
      output: "Approved Technical Spec & System Architecture",
    },
    {
      phase: "02",
      title: "Core Engine & Frontend Build",
      duration: "Days 5 - 16",
      icon: Cpu,
      description: "Engineering the application with Next.js 15, React 19, custom database models, and accessible responsive interfaces.",
      input: "Technical Spec & Brand Design Tokens",
      output: "Production Codebase & API Integrations",
    },
    {
      phase: "03",
      title: "Edge QA & Security Audit",
      duration: "Days 17 - 21",
      icon: ShieldCheck,
      description: "Rigorous cross-device testing, keyboard navigation audit, vulnerability scans, and Singapore/Colombo edge latency tuning.",
      input: "Staging Deployment & Load Tests",
      output: "WCAG & Security Audit Pass Report",
    },
    {
      phase: "04",
      title: "Edge Deployment & SLA Scale",
      duration: "Days 22 - 25+",
      icon: Rocket,
      description: "Deployment to Vercel/Cloudflare edge servers, DNS setup, real-time error logging, and post-launch maintenance SLA.",
      input: "Validated Codebase & DNS Records",
      output: "Live Production Site & Ongoing SLA Support",
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.68), rgba(20, 18, 16, 0.90)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#38332E] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-2">
              // AGENCY METHODOLOGY
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EFE6]">
              Sequential Project Execution Pipeline
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A39B8E] max-w-md">
            Our strict 4-stage engineering pipeline ensures predictable delivery timelines, zero scope drift, and robust production code.
          </p>
        </div>

        {/* Sequential Horizontal Connector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="craft-card rounded p-6 flex flex-col justify-between relative"
              >
                <div>
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#38332E]">
                    <div className="font-mono text-xs font-bold text-[#C85A32]">
                      PHASE _{step.phase}
                    </div>
                    <span className="font-mono text-[10px] text-[#A39B8E] bg-[#141210] border border-[#38332E] px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded bg-[#141210] border border-[#38332E] flex items-center justify-center text-[#D4A359] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F4EFE6] mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#A39B8E] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Input -> Output Pipeline Contract */}
                <div className="pt-4 border-t border-[#38332E] font-mono text-[11px] space-y-2">
                  <div>
                    <span className="text-[#A39B8E]">INPUT: </span>
                    <span className="text-[#F4EFE6]">{step.input}</span>
                  </div>
                  <div>
                    <span className="text-[#2D5D4B]">OUTPUT: </span>
                    <span className="text-[#D4A359]">{step.output}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
