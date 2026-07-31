"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2, Building2, MapPin } from "lucide-react";

export function MetricsAndTestimonials() {
  const agencyMetrics = [
    { value: "14+", label: "Production Platforms Built", detail: "Serving E-Commerce, Food Tech & EdTech" },
    { value: "99.9%", label: "Uptime & Reliability SLA", detail: "Zero unplanned downtime incidents" },
    { value: "Panadura", label: "Engineering Agency HQ", detail: "Direct communication & local support" },
    { value: "100%", label: "On-Time Milestone Delivery", detail: "Strict architectural phase adherence" },
  ];

  const testimonials = [
    {
      name: "Dinesh Ranasinghe",
      role: "Operations Lead",
      client: "SL-GreenRoot Market",
      location: "Western Province, LK",
      quote: "SL-DevSolutions engineered our supermarket inventory & cashier POS system with zero downtime. The dual-pass XSS defense and atomic database transactions completely eliminated inventory stock discrepancies.",
      outcome: "ATOMIC POS TRANSACTIONS VERIFIED",
    },
    {
      name: "Ruwan Jayasinghe",
      role: "Director of Academic Systems",
      client: "Sector Education Institute",
      location: "Panadura, LK",
      quote: "SL-DevSolutions built an exceptionally reliable portal for our academic institute. Class timetables and urgent notices update instantly across thousands of concurrent student devices without latency.",
      outcome: "REAL-TIME TIMETABLE SYNC (<180MS)",
    },
    {
      name: "Nipuna Perera",
      role: "Founder & Lead Chef",
      client: "Sector Burger",
      location: "Colombo, LK",
      quote: "The interactive online food platform and real-time cart drawer completely transformed our online ordering. Orders are smooth, fast, and our checkout conversions grew by +142% right away.",
      outcome: "+142% CHECKOUT CONVERSION GAIN",
    },
  ];

  return (
    <section id="results" className="relative py-24 bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.68), rgba(20, 18, 16, 0.90)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#38332E] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-2">
              // VERIFIED CLIENT TESTIMONIALS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EFE6]">
              Client Case Reviews
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A39B8E] max-w-md">
            Direct feedback from Sri Lankan founders and enterprise leaders who trust SL-DevSolutions with their core digital infrastructure.
          </p>
        </div>

        {/* Agency Summary Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {agencyMetrics.map((m, idx) => (
            <div key={idx} className="craft-card p-6 rounded text-left">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C85A32] mb-1">
                {m.value}
              </div>
              <div className="font-mono text-xs font-bold text-[#F4EFE6]">{m.label}</div>
              <div className="font-sans text-xs text-[#A39B8E] mt-1">{m.detail}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="craft-card rounded p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#38332E]">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#2D5D4B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED CLIENT</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-[#A39B8E]">
                    <MapPin className="w-3 h-3 text-[#D4A359]" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#C85A32] mb-3 opacity-60" />
                <p className="font-sans text-sm text-[#F4EFE6] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Founder Signature Info */}
              <div className="pt-4 border-t border-[#38332E]">
                <div className="font-serif text-base font-bold text-[#F4EFE6]">{t.name}</div>
                <div className="font-sans text-xs text-[#A39B8E]">{t.role}</div>
                <div className="font-mono text-xs text-[#D4A359] mt-0.5">{t.client}</div>
                <div className="mt-3 font-mono text-[10px] text-[#2D5D4B] bg-[#2D5D4B]/10 border border-[#2D5D4B]/30 px-2 py-1 rounded inline-block">
                  {t.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
