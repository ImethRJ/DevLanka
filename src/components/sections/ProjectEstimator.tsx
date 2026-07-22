"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Calculator, Check, ArrowRight, Calendar, Mail, PhoneCall, Copy, CheckCircle } from "lucide-react";

export function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string>("SaaS");
  const [timeline, setTimeline] = useState<string>("Standard");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["Framer Motion Animations"]);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });

  const projectTypes = [
    { id: "SaaS", name: "SaaS & Web Application", base: 150000, icon: "💻" },
    { id: "E-Commerce", name: "E-Commerce & Storefront", base: 120000, icon: "🛍️" },
    { id: "Brand", name: "Agency & Brand Showcase", base: 85000, icon: "🎨" },
    { id: "Speed", name: "Speed & Core Web Vitals Fix", base: 50000, icon: "⚡" },
  ];

  const timelines = [
    { id: "Fast", name: "Express (2 Weeks)", multiplier: 1.25 },
    { id: "Standard", name: "Standard (3-4 Weeks)", multiplier: 1.0 },
    { id: "Flexible", name: "Flexible (5+ Weeks)", multiplier: 0.9 },
  ];

  const featuresList = [
    { name: "Framer Motion & Smooth Scroll", cost: 25000 },
    { name: "Sanity / Headless CMS Integration", cost: 35000 },
    { name: "Three.js / 3D Canvas Effects", cost: 45000 },
    { name: "Payment Gateway & Checkout Setup", cost: 30000 },
    { name: "Multi-Language (i18n)", cost: 20000 },
  ];

  const toggleFeature = (featName: string) => {
    if (selectedFeatures.includes(featName)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featName));
    } else {
      setSelectedFeatures([...selectedFeatures, featName]);
    }
  };

  // Calculate total estimate range
  const calculateTotal = () => {
    const pType = projectTypes.find((p) => p.id === projectType);
    const baseCost = pType ? pType.base : 3000;
    
    const featuresCost = selectedFeatures.reduce((acc, fName) => {
      const f = featuresList.find((item) => item.name === fName);
      return acc + (f ? f.cost : 0);
    }, 0);

    const tObj = timelines.find((t) => t.id === timeline);
    const mult = tObj ? tObj.multiplier : 1.0;

    const rawEst = Math.round((baseCost + featuresCost) * mult);
    return {
      min: Math.round(rawEst * 0.9),
      max: Math.round(rawEst * 1.1),
    };
  };

  const handleFinishEstimate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setStep(3);
  };

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
    navigator.clipboard.writeText("hello@sl-devsolutions.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const estimate = calculateTotal();

  return (
    <section id="estimator" className="py-28 relative z-10 bg-slate-950/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Estimate Your Project Scope. <br />
            <span className="gradient-text-accent">Zero Friction. Instant Clarity.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Select your target scope below for a real-time estimate, or book a direct strategy call with our engineering lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Estimator Widget (Span 7) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/30 shadow-2xl relative">
            
            {/* Step Navigation Dots */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}`}>1</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}`}>2</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}`}>3</div>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Step {step} of 3
              </span>
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-2">1. What type of project are you building?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setProjectType(p.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        projectType === p.id
                          ? "bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                          : "glass-card border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="text-2xl mb-2">{p.icon}</div>
                      <div className="font-bold text-sm text-white mb-1">{p.name}</div>
                      <div className="text-xs text-slate-400">Starting ~ LKR {p.base.toLocaleString()}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25"
                  >
                    <span>Next: Select Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Features & Timeline */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-2">2. Desired Capabilities & Timeline</h3>
                
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-bold">
                    Select Add-on Features:
                  </label>
                  <div className="space-y-2">
                    {featuresList.map((f) => {
                      const isSelected = selectedFeatures.includes(f.name);
                      return (
                        <button
                          key={f.name}
                          onClick={() => toggleFeature(f.name)}
                          className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-sky-500/20 border-sky-400 text-white"
                              : "glass-card border-white/10 text-slate-300 hover:border-white/20"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? "bg-sky-400 border-sky-400 text-slate-950" : "border-slate-600"}`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </span>
                            {f.name}
                          </span>
                          <span className="text-sky-400 font-mono">+LKR {f.cost.toLocaleString()}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-bold">
                    Delivery Speed:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTimeline(t.id)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold ${
                          timeline === t.id
                            ? "bg-sky-500 border-sky-400 text-white"
                            : "glass-card border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleFinishEstimate}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25"
                  >
                    <span>Calculate Final Estimate</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Result Breakdown */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-400/30">
                  <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
                    Estimated Investment Range
                  </span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white mb-2 gradient-text-accent">
                    LKR {estimate.min.toLocaleString()} - LKR {estimate.max.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-300">
                    Estimated Completion: <span className="font-bold text-white">2 - 4 Weeks</span> (Includes Code, Motion & Deployment)
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Selected Scope:</h4>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-300 space-y-1.5 font-mono">
                    <div>Project Type: <span className="text-sky-400 font-bold">{projectType}</span></div>
                    <div>Timeline: <span className="text-purple-400 font-bold">{timeline}</span></div>
                    <div>Features ({selectedFeatures.length}): <span className="text-emerald-400">{selectedFeatures.join(", ")}</span></div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-3 rounded-xl glass-card text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Adjust Scope
                  </button>
                  <a
                    href="#contact-form"
                    className="flex-1 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
                  >
                    <span>Submit & Book Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Direct Contact & Strategy Call Embed (Span 5) */}
          <div id="contact-form" className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Form */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Let's Talk Projects</h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill out your details below to lock in your estimate and receive a free architectural feedback report within 12 hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-300">
                    Our lead architect will review your project parameters and respond to <span className="text-emerald-400 font-bold">{formData.email}</span> shortly.
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
                      rows={3}
                      placeholder="Tell us briefly about your brand and targets..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Email Copy Pill */}
            <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">Direct Email</span>
                  <span className="text-xs font-bold text-white">hello@sl-devsolutions.com</span>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
