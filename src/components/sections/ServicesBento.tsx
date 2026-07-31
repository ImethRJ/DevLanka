"use client";

import { motion } from "framer-motion";
import { Code2, ShoppingBag, Terminal, Layout, ShieldCheck, ArrowRight } from "lucide-react";

export function ServicesBento() {
  const capabilities = [
    {
      icon: Code2,
      title: "Bespoke Web Applications & Dashboards",
      description: "Custom web applications, client portals, and administrative dashboards engineered for high throughput, maintainability, and zero layout shift.",
      specs: ["Next.js 15 App Router", "React 19 Server Components", "TypeScript Strict Mode", "PostgreSQL / Supabase"],
      highlight: "PRODUCTION READY",
    },
    {
      icon: ShoppingBag,
      title: "High-Throughput E-Commerce Engines",
      description: "Custom e-commerce platforms and POS inventory systems designed for Sri Lankan retail and global export markets, complete with atomic transactions.",
      specs: ["Atomic Inventory Locking", "Custom Cart Drawers", "Payment Gateway APIs", "Dual-Pass Security Sanitization"],
      highlight: "ATOMIC TRANSACTIONS",
    },
    {
      icon: Terminal,
      title: "Custom Backend & API Infrastructure",
      description: "Resilient RESTful APIs, Django backends, and microservices providing secure data processing, RBAC role validation, and automated workflows.",
      specs: ["Django 5.0 & Python 3.11", "Role-Based Access Control", "Edge Node Caching", "Sanitized Data Payloads"],
      highlight: "HARDENED SECURITY",
    },
    {
      icon: Layout,
      title: "Tactile UI/UX & Design Systems",
      description: "Accessible, brand-aligned interfaces crafted with characterful typography, strict grid alignment, and micro-interactions respecting reduced motion.",
      specs: ["WCAG 2.1 AAA Accessibility", "Custom Design Tokens", "Zero-Gradient Typography", "Keyboard Nav Optimization"],
      highlight: "ACCESSIBLE BY DESIGN",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.65), rgba(20, 18, 16, 0.88)), url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#38332E] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-2">
              // AGENCY CAPABILITIES
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EFE6]">
              Core Engineering Disciplines
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A39B8E] max-w-md">
            We avoid generic site builders. Every platform is custom-built with intentional architecture, clean code standards, and Sri Lankan software craftsmanship.
          </p>
        </div>

        {/* 2x2 Craftsman Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="craft-card rounded p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded bg-[#141210] border border-[#38332E] flex items-center justify-center text-[#C85A32]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#2D5D4B] bg-[#2D5D4B]/10 border border-[#2D5D4B]/30 px-2 py-0.5 rounded uppercase">
                      {cap.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE6] mb-3">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-sm text-[#A39B8E] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-6 border-t border-[#38332E] font-mono text-xs text-[#A39B8E] space-y-2">
                  <div className="text-[10px] text-[#D4A359] uppercase tracking-wider mb-2">
                    // TECHNICAL SPECIFICATIONS
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {cap.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[#F4EFE6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                        <span>{spec}</span>
                      </div>
                    ))}
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
