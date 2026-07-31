"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Copy, Check, ShieldCheck, Clock, Send, Loader2 } from "lucide-react";

export function ProjectEstimator() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send project inquiry.");
      }

      setFormSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err.message || "Something went wrong. Please email us directly at devsolutionssl@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("devsolutionssl@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.68), rgba(20, 18, 16, 0.90)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <span id="estimator" className="absolute -top-24 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#38332E] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-2">
              // PROJECT CONSULTATION AGENCY
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EFE6]">
              Direct Engineering Consultation
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A39B8E] max-w-md">
            Discuss your requirements directly with our senior software engineers based in Panadura, Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="craft-card rounded p-6 space-y-6">
              <div className="font-mono text-xs text-[#D4A359] uppercase tracking-wider font-bold">
                // AGENCY SERVICE CONTRACT
              </div>

              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#141210] border border-[#38332E] flex items-center justify-center text-[#C85A32] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#F4EFE6]">12-Hour Response Time</h4>
                    <p className="text-[#A39B8E]">Detailed technical feedback and architecture scope provided directly by our lead architect.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#141210] border border-[#38332E] flex items-center justify-center text-[#2D5D4B] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#F4EFE6]">Mutual NDA & IP Protection</h4>
                    <p className="text-[#A39B8E]">Your business idea, proprietary logic, and code assets remain strictly confidential.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="craft-card rounded p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#141210] border border-[#38332E] flex items-center justify-center text-[#D4A359]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#A39B8E] block">AGENCY EMAIL</span>
                  <span className="font-mono text-xs font-bold text-[#F4EFE6]">devsolutionssl@gmail.com</span>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="btn-secondary !py-1.5 !px-3 text-xs focus-visible:outline-none"
                aria-label="Copy agency email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#2D5D4B]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="craft-card rounded p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-[#F4EFE6] mb-2">
                Initiate Project Proposal
              </h3>
              <p className="font-sans text-xs text-[#A39B8E] mb-6">
                Submit your project details below for a direct response from our lead architect.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded bg-[#2D5D4B]/10 border border-[#2D5D4B]/30 text-center space-y-3 font-sans">
                  <div className="w-12 h-12 rounded-full bg-[#2D5D4B] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#F4EFE6]">Inquiry Received</h4>
                  <p className="text-xs text-[#A39B8E] max-w-md mx-auto">
                    Thank you! Our lead architect will review your submission and contact you via email within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 font-sans">

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="font-mono text-xs text-[#A39B8E] block mb-1.5">
                        YOUR NAME / ORGANIZATION:
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ruwan Perera"
                        className="w-full bg-[#141210] border border-[#38332E] rounded px-3 py-2.5 text-xs text-[#F4EFE6] placeholder-[#A39B8E]/50 focus:border-[#D4A359] focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="font-mono text-xs text-[#A39B8E] block mb-1.5">
                        WORK EMAIL:
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ruwan@company.lk"
                        className="w-full bg-[#141210] border border-[#38332E] rounded px-3 py-2.5 text-xs text-[#F4EFE6] placeholder-[#A39B8E]/50 focus:border-[#D4A359] focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  {/* Notes / Description */}
                  <div>
                    <label htmlFor="contact-notes" className="font-mono text-xs text-[#A39B8E] block mb-1.5">
                      PROJECT DESCRIPTION & REQUIREMENTS:
                    </label>
                    <textarea
                      id="contact-notes"
                      required
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Outline key goals, target timeline, or technical requirements..."
                      className="w-full bg-[#141210] border border-[#38332E] rounded px-3 py-2.5 text-xs text-[#F4EFE6] placeholder-[#A39B8E]/50 focus:border-[#D4A359] focus-visible:outline-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="font-mono text-xs text-red-400 bg-red-950/20 border border-red-800/40 p-3 rounded">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary !py-3 focus-visible:outline-none disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>PROCESSING SUBMISSION...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>SUBMIT CONSULTATION REQUEST</span>
                      </span>
                    )}
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
