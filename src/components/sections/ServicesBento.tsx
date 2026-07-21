"use client";

import { motion } from "framer-motion";
import { Code, Layout, Gauge, Database, Cpu, Sparkles, ArrowRight } from "lucide-react";

export function ServicesBento() {
  return (
    <section id="services" className="py-28 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-semibold text-purple-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need To Build A <br />
            <span className="gradient-text-accent">World-Class Web Presence.</span>
          </h2>
          <p className="text-slate-400 text-base">
            We don't use cookie-cutter site builders. Every line of code is engineered for speed, conversion, and fluid visual storytelling.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Full-Stack Web Development (Span 7) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
          >
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Web Engineering</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Custom Web Applications, Client Portals, and Enterprise Dashboards engineered with Next.js 15, React 19, and TypeScript for maximum scalability.
            </p>

            <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 font-mono text-xs text-sky-300 space-y-1">
              <div className="text-slate-500">// Optimized Server Component</div>
              <div>
                <span className="text-purple-400">export default async function</span> App() &#123;
              </div>
              <div className="pl-4 text-emerald-400">return &lt;SpeedBoost score=&#123;100&#125; /&gt;;</div>
              <div>&#125;</div>
            </div>
          </motion.div>

          {/* Card 2: UI/UX & Motion Design (Span 5) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-5 glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
          >
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">UI/UX & High-End Motion</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Interactive micro-interactions, liquid cursors, smooth parallax scrolling, and bespoke layout morphing powered by Framer Motion & GSAP.
            </p>

            <div className="flex items-center gap-2 pt-4 border-t border-white/10 text-xs font-semibold text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>60 FPS Hardware-Accelerated Motion</span>
            </div>
          </motion.div>

          {/* Card 3: Extreme Performance Tuning (Span 4) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-4 glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Gauge className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Performance Optimization</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Instant sub-100ms FCP load times, automated asset compression, and guaranteed 95+ Core Web Vitals scores.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">
              ⚡ 99/100 Lighthouse Performance
            </div>
          </motion.div>

          {/* Card 4: Headless CMS & E-Commerce (Span 4) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-4 glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Headless CMS & Commerce</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Sanity CMS, Stripe Payments, and Shopify Hydrogen setups so your team can edit content without dev dependency.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 font-mono text-xs font-bold">
              📦 Sanity + Stripe + Shopify
            </div>
          </motion.div>

          {/* Card 5: AI & API Architecture (Span 4) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-4 glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">AI Agent & API Integrations</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Integrate custom LLMs, automated lead enrichment, CRM syncs, and real-time WebSocket pipelines.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold">
              🤖 OpenAI / Gemini API Ready
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
