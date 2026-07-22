"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, ShieldCheck, Award, Sparkles } from "lucide-react";

export function MetricsAndTestimonials() {
  const stats = [
    { value: "LKR 1.4M+", label: "Client Revenue & Value Driven" },
    { value: "10+", label: "Production Platforms Built" },
    { value: "<120ms", label: "Average Response & Load Time" },
    { value: "100%", label: "Client Satisfaction Rate" },
  ];

  const testimonials = [
    {
      name: "Dinesh Ranasinghe",
      role: "Operations Lead, SL-GreenRoot Market",
      quote: "SL-DevSolutions engineered our secure supermarket inventory & POS checkout system with extreme security precision. The dual-pass nh3 sanitization and atomic transactions eliminated inventory mismatches completely.",
      result: "100% Secure POS & RBAC",
    },
    {
      name: "Ruwan Jayasinghe",
      role: "Director, Sector Education Institute",
      quote: "SL-DevSolutions built a lightweight, high-performance web portal for our institute. Timetable changes and academic notices now sync in real-time across thousands of student devices without delay.",
      result: "+180% Access Speed",
    },
    {
      name: "Nipuna Perera",
      role: "Founder, Sector Burger",
      quote: "The interactive online ordering platform and real-time cart drawer transformed our customer experience. Orders are smooth, fast, and checkout conversion grew significantly from day one.",
      result: "+142% Order Conversion",
    },
  ];

  return (
    <section id="results" className="py-28 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real Startup Metrics. <br />
            <span className="gradient-text-accent">Unfiltered Client Feedback.</span>
          </h2>
        </div>

        {/* Stat Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 text-center group hover:border-sky-400/40"
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-white mb-2 gradient-text-primary group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating Stars & Outcome Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {test.result}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-sky-400/20 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Founder Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 font-bold text-sm shrink-0">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{test.name}</h4>
                  <p className="text-xs text-slate-400">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
