"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ExternalLink,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Code,
  Layers,
} from "lucide-react";
import burgerDesktop from "@/assests/Burger-Desktop Preview.jpeg";
import burgerMobile from "@/assests/Burger-Mobile Preview.png";

export interface Project {
  id: string;
  title: string;
  category: "SaaS" | "E-Commerce" | "Fintech" | "Landing" | "Food Tech";
  subtitle: string;
  description: string;
  liveUrl: string;
  metrics: string;
  tags: string[];
  desktopPreview: string;
  mobilePreview: string;
  overlaySubtitle?: string;
  browserUrl?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

const PROJECTS: Project[] = [
  {
    id: "sector-burger",
    title: "Sector Burger",
    category: "Food Tech",
    subtitle: "Artisanal Sri Lankan Fusion Smash Burger Platform with Local Spice Metrics & Real-time Cart Drawer",
    overlaySubtitle: "Sri Lankan Fusion Smash Burgers",
    description: "Artisanal Sri Lankan Fusion Smash Burger Platform with Local Spice Metrics & Real-time Cart Drawer",
    liveUrl: "https://sector-burger.vercel.app/",
    browserUrl: "https://sector-burger.vercel.app/",
    metrics: "+142% Order Checkout Conversion",
    tags: ["Next.js 15", "React 19", "Tailwind v4", "TypeScript"],
    desktopPreview: burgerDesktop.src,
    mobilePreview: burgerMobile.src,
    caseStudy: {
      challenge: "Create a highly responsive, visually rich ordering platform that handles localized spice level preferences and dynamic cart states without page reloads.",
      solution: "Leveraged Next.js 15 App Router and React 19 Server Components for high-performance content delivery, alongside Tailwind v4 for modern fluid styling and a state-managed Cart Drawer.",
      results: [
        "+142% increase in checkout conversions through the interactive Cart Drawer",
        "99.8% perfect Lighthouse performance and accessibility scores",
        "Seamless local spice-metric customizer interaction in sub-50ms",
      ],
    },
  },
  {
    id: "aetheria-ai",
    title: "Aetheria AI Platform",
    category: "SaaS",
    subtitle: "Enterprise AI & Predictive Analytics Dashboard",
    description: "A real-time data visualization hub with high-frequency live charting, automated insights, and custom AI chat capabilities.",
    liveUrl: "https://wikipedia.org", // Reliable high-uptime embed target
    metrics: "+240% User Retention Rate",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "Recharts", "Vercel"],
    desktopPreview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    mobilePreview: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      challenge: "The client needed to handle streaming telemetry data from 100K+ concurrent IoT devices without browser performance degradation.",
      solution: "Engineered a Next.js App Router architecture leveraging Web Workers, canvas rendering, and optimized WebSocket handlers.",
      results: [
        "Sub-100ms real-time chart rendering latencies",
        "240% increase in daily active user session duration",
        "100/100 Lighthouse performance rating on desktop",
      ],
    },
  },
  {
    id: "luxestudio",
    title: "LuxeStudio Interiors",
    category: "E-Commerce",
    subtitle: "Luxury Architecture & High-End Furniture Portfolio",
    description: "Immersive luxury e-commerce experience featuring bespoke product configurators, fluid page transitions, and smooth image galleries.",
    liveUrl: "https://example.com",
    metrics: "+185% Inbound Lead Conversion",
    tags: ["Next.js", "Framer Motion", "Stripe API", "Sanity CMS", "Three.js"],
    desktopPreview: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    mobilePreview: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      challenge: "Transform a traditional offline interior studio into a global digital brand capable of taking international commissions.",
      solution: "Created an interactive 3D virtual showroom coupled with a frictionless multi-currency order system.",
      results: [
        "$1.4M generated in direct online inquiries within 90 days",
        "Zero-layout shift page transitions with Framer Motion",
        "Integrated headless Sanity CMS for instant content updates",
      ],
    },
  },
  {
    id: "novapay",
    title: "NovaPay Exchange",
    category: "Fintech",
    subtitle: "Ultra-Fast Multi-Currency Crypto & Asset Trading Hub",
    description: "High-security financial trading platform with instant swap calculations, interactive market depth graphs, and biometrics auth.",
    liveUrl: "https://wikipedia.org",
    metrics: "99.99% Uptime & 0.4s FCP",
    tags: ["React 19", "TypeScript", "Tailwind v4", "WebSockets", "Node.js"],
    desktopPreview: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    mobilePreview: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      challenge: "Deliver sub-second transaction feedback and real-time ledger updates across global edge servers.",
      solution: "Implemented Cloudflare Workers edge computing paired with zero-latency client state synchronization.",
      results: [
        "Processed over 500,000 live test transactions seamlessly",
        "99.99% infrastructure availability during peak volatility",
        "Strict OWASP security compliance certification",
      ],
    },
  },
];

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile" | "caseStudy">("desktop");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const categories = ["All", "SaaS", "E-Commerce", "Fintech", "Food Tech"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 relative z-10 bg-slate-950/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Tested In Production. <br />
              <span className="gradient-text-accent">Live Demos & Proven ROI.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage: Left Thumbnails, Right Dynamic Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Project Cards List */}
          <div className="lg:col-span-5 space-y-4">
            {filteredProjects.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    setActiveProject(project);
                    setIframeLoaded(false);
                  }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "glass-panel border-sky-400/50 shadow-xl shadow-sky-500/10 scale-[1.01]"
                      : "glass-card hover:border-white/20"
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold">
                    <span className="text-sky-400 flex items-center gap-1 group">
                      Preview Live App <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCaseStudy(project);
                      }}
                      className="text-slate-400 hover:text-white underline underline-offset-4"
                    >
                      View Case Study
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Interactive Device Viewport Frame */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl relative">
              
              {/* Frame Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 truncate max-w-[200px]">
                    {activeProject.browserUrl || `https://demo.${activeProject.id}.sl-devsolutions.com`}
                  </span>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      deviceMode === "desktop" ? "bg-sky-500 text-white" : "text-slate-400 hover:text-white"
                    }`}
                    data-cursor="DESKTOP"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      deviceMode === "mobile" ? "bg-sky-500 text-white" : "text-slate-400 hover:text-white"
                    }`}
                    data-cursor="MOBILE"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                  <button
                    onClick={() => setActiveCaseStudy(activeProject)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10"
                    data-cursor="SPECS"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Case Study</span>
                  </button>
                </div>
              </div>

              {/* Viewport Screen Content */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center min-h-[380px] sm:min-h-[460px] border border-white/5 w-full">
                <AnimatePresence mode="wait">
                  {deviceMode === "desktop" ? (
                    <motion.div
                      key={`${activeProject.id}-desktop`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative group"
                    >
                      <img
                        src={activeProject.desktopPreview}
                        alt={activeProject.title}
                        className="w-full h-[460px] object-cover object-top transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white">{activeProject.title}</h4>
                          <p className="text-xs text-slate-300">{activeProject.overlaySubtitle || activeProject.subtitle}</p>
                        </div>
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg shadow-sky-500/25"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  ) : deviceMode === "mobile" ? (
                    <motion.div
                      key={`${activeProject.id}-mobile`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="py-6 flex justify-center w-full bg-slate-900/50"
                    >
                      <div className="w-[260px] h-[440px] rounded-[36px] p-3 bg-slate-900 border-4 border-slate-700 shadow-2xl relative overflow-hidden">
                        <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                        <div className="w-full h-[390px] rounded-[24px] overflow-hidden relative">
                          <img
                            src={activeProject.mobilePreview}
                            alt={activeProject.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-semibold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 mb-4 inline-block">
                Case Study Deep-Dive
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activeCaseStudy.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6">{activeCaseStudy.subtitle}</p>

              <div className="space-y-6 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                    The Client Challenge
                  </h4>
                  <p>{activeCaseStudy.caseStudy.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    Architectural Solution
                  </h4>
                  <p>{activeCaseStudy.caseStudy.solution}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    Business Outcomes & ROI
                  </h4>
                  <ul className="space-y-2">
                    {activeCaseStudy.caseStudy.results.map((res, i) => (
                      <li key={i} className="flex items-center gap-2 text-white font-medium text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <a
                  href="#estimator"
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center gap-2"
                >
                  <span>Build Similar Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
