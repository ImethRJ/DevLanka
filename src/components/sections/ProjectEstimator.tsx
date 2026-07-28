"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { MessageSquare, ArrowRight, Mail, Copy, Check, CheckCircle, ShieldCheck, Zap, Clock } from "lucide-react";

export function ProjectEstimator() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("devsolutionssl@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative z-10 bg-slate-950/90 border-t border-white/10">
      <span id="estimator" className="absolute -top-24 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Architecture Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Talk About Your Project. <br />
            <span className="gradient-text-accent">Zero Friction. 12-Hour Response.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Fill out your details below to schedule a direct strategy call or receive a free technical feedback report from our lead architect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          {/* Left Column: Direct Info & Guarantees (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/20 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white tracking-tight">Direct Project Consultation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a bespoke full-stack web application, high-converting landing page, or complex enterprise portal — our engineering team is ready to deliver.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Fast 12-Hour Turnaround</h4>
                    <p className="text-[11px] text-slate-400">Detailed proposal & architectural plan delivered directly to your inbox.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">100% Confidentiality & NDA</h4>
                    <p className="text-[11px] text-slate-400">Your ideas, code requirements, and brand IP remain strictly confidential.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">No Templates, 100% Custom</h4>
                    <p className="text-[11px] text-slate-400">Hand-crafted Next.js 15, React 19, and Framer Motion code tailored to your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Email Copy Pill */}
            <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">Direct Email</span>
                  <span className="text-xs font-bold text-white">devsolutionssl@gmail.com</span>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                data-cursor="COPY EMAIL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Contact Form (Span 7) */}
          <div id="contact-form" className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Start a Conversation</h3>
              <p className="text-xs text-slate-300 mb-6">
                Tell us briefly about your goals, scope, or timeline and our lead architect will reach out directly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-300">
                    Our lead architect will review your project parameters and respond to <span className="text-emerald-400 font-bold">{formData.email}</span> within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Project Goals / Timeline</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us briefly about your project goals, desired features, or launch target..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 flex items-center justify-center gap-2"
                    data-cursor="SUBMIT"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
