"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import burgerDesktop from "@/assests/Burger-Desktop Preview.webp";
import burgerMobile from "@/assests/Burger-Mobile Preview.webp";
import sectorDesktop from "@/assests/Sector-Desktop Preview.webp";
import sectorMobile from "@/assests/Sector-Mobile Preview.webp";
import greenrootDesktop from "@/assests/GreenRoot - Desktop Preview.jpeg";
import greenrootMobile from "@/assests/GreenRoot - Mobile Preview.jpeg";
import Image, { StaticImageData } from "next/image";

export interface WorkbenchProject {
  id: string;
  title: string;
  client: string;
  category: "Food Tech" | "Education" | "E-Commerce";
  location: string;
  summary: string;
  liveUrl: string;
  desktopPreview: StaticImageData | string;
  mobilePreview: StaticImageData | string;
  architecture: {
    framework: string;
    runtime: string;
    database: string;
    edgeLocation: string;
    pattern: string;
    security: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  verifications: string[];
}

const PROJECTS: WorkbenchProject[] = [
  {
    id: "sector-burger",
    title: "Sector Burger",
    client: "Sector Foods Ltd.",
    category: "Food Tech",
    location: "Colombo / Panadura, LK",
    summary: "Artisanal Sri Lankan fusion smash burger platform featuring localized spice metrics and instant order checkout cart.",
    liveUrl: "https://sector-burger.vercel.app/",
    desktopPreview: burgerDesktop,
    mobilePreview: burgerMobile,
    architecture: {
      framework: "Next.js 15 App Router & React 19",
      runtime: "Node.js Edge / Vercel Serverless",
      database: "PostgreSQL & Dynamic Cart Store",
      edgeLocation: "Singapore (sin1) / Colombo Edge",
      pattern: "Server Components & Client State Hydration",
      security: "Strict CSP & Sanitized Spice Payload",
    },
    metrics: [
      { label: "Checkout Conversion", value: "+142%", detail: "Streamlined 2-step spice customizer drawer" },
      { label: "Interactive Latency", value: "32ms", detail: "Sub-50ms local cart updates" },
      { label: "Lighthouse Rating", value: "99/100", detail: "Optimized WebP assets & CSS" },
    ],
    verifications: [
      "100% Mobile viewport responsive design tested across iOS & Android",
      "Real-time cart state persistence across page navigation",
      "Zero-layout-shift menu image loading pipeline",
    ],
  },
  {
    id: "sector-institute",
    title: "Sector Education",
    client: "Sector Academic Trust",
    category: "Education",
    location: "Panadura, LK",
    summary: "High-load academic portal serving real-time class timetables, tutor directories, and urgent exam notices.",
    liveUrl: "https://sectorinstitute.lk/",
    desktopPreview: sectorDesktop,
    mobilePreview: sectorMobile,
    architecture: {
      framework: "React 19 & Vite Engine",
      runtime: "Firebase Cloud Infrastructure",
      database: "Firebase Firestore Realtime DB",
      edgeLocation: "asia-southeast1 (Singapore)",
      pattern: "Realtime Pub/Sub & Static Edge Cache",
      security: "Firebase Rules & Admin Auth Verification",
    },
    metrics: [
      { label: "Timetable Sync", value: "<180ms", detail: "Instant push to active student devices" },
      { label: "Asset Compression", value: "99%", detail: "Pre-upload browser compression" },
      { label: "Concurrent Traffic", value: "5,000+", detail: "Handled during exam release cycles" },
    ],
    verifications: [
      "Real-time timetable updates delivered under 200ms",
      "Parent-student portal verified for 100% mobile readiness",
      "Passed stress testing for simultaneous peak traffic spikes",
    ],
  },
  {
    id: "greenroot-market",
    title: "GreenRoot POS",
    client: "GreenRoot Retail Chain",
    category: "E-Commerce",
    location: "Western Province, LK",
    summary: "Hardened retail inventory management engine & cashier terminal with dual-pass XSS protection and RBAC.",
    liveUrl: "https://green-root-market.vercel.app/",
    desktopPreview: greenrootDesktop,
    mobilePreview: greenrootMobile,
    architecture: {
      framework: "Python 3.11 & Django 5.0",
      runtime: "Vercel WSGI Serverless",
      database: "PostgreSQL (Supabase)",
      edgeLocation: "Singapore Edge Hub",
      pattern: "Atomic Database Transactions (POSIX)",
      security: "nh3 Rust Sanitizer & Hardened Cookies",
    },
    metrics: [
      { label: "Security Audit", value: "100% Pass", detail: "Dual-pass Rust nh3 XSS protection" },
      { label: "POS Transaction", value: "Atomic", detail: "Zero phantom stock updates" },
      { label: "RBAC Enforced", value: "Strict", detail: "Cashier vs Manager portal separation" },
    ],
    verifications: [
      "Automated test suite passing for dual-pass XSS defense",
      "Role-Based Access Control enforcing privilege boundaries",
      "Supermarket inventory checkout POS verified for offline resilience",
    ],
  },
  {
    id: "lucky-cafe",
    title: "Lucky Café",
    client: "Lucky Coffee Roasters",
    category: "Food Tech",
    location: "Colombo, LK",
    summary: "Multi-page marketing platform and interactive coffee & pastry menu with 11 static routes and custom CDN image crops.",
    liveUrl: "https://lucky-cafe-rho.vercel.app/",
    desktopPreview: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    mobilePreview: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    architecture: {
      framework: "Next.js (App Router) & TypeScript",
      runtime: "Vercel Edge Network",
      database: "Static JSON & CDN Crop Loader",
      edgeLocation: "Singapore Edge Hub",
      pattern: "Static Site Generation (SSG)",
      security: "Strict CSP & Safe Route Protection",
    },
    metrics: [
      { label: "Static Routes", value: "11 Built", detail: "Full static compilation for instant loads" },
      { label: "Menu Navigation", value: "Filterable", detail: "Coffee, tea, pastries & daily specials" },
      { label: "Image CDN", value: "Custom", detail: "Right-sized Unsplash CDN crop pipeline" },
    ],
    verifications: [
      "11 verified static routes compiled without layout shift",
      "Filterable menu categories with smooth micro-interactions",
      "Custom CafeImage loader optimizing photography delivery",
    ],
  },
  {
    id: "leaf-bloom",
    title: "Leaf & Bloom",
    client: "Leaf & Bloom Botanicals",
    category: "E-Commerce",
    location: "Western Province, LK",
    summary: "Editorial botanical e-commerce store featuring plant care guides, organic sage aesthetic, and persistent cart.",
    liveUrl: "https://leaf-bloom-iota.vercel.app/",
    desktopPreview: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
    mobilePreview: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    architecture: {
      framework: "Next.js 16 App Router & React 19",
      runtime: "Node.js Edge / Vercel Serverless",
      database: "Persistent Cart & Care Guide Store",
      edgeLocation: "Singapore (sin1) Node",
      pattern: "Client Cart Hydration & Motion System",
      security: "Sanitized Order & Form Payload",
    },
    metrics: [
      { label: "Framework Standard", value: "Next.js 16", detail: "React 19 Server Components" },
      { label: "Cart Hydration", value: "Sub-20ms", detail: "Persistent client store across routes" },
      { label: "Design System", value: "Botanical", detail: "Tailwind v4 organic sage theme" },
    ],
    verifications: [
      "Curated houseplant catalog with integrated care guides",
      "Persistent cart state preserved across browser refreshes",
      "Organic editorial layout with fluid micro-interactions",
    ],
  },
];

export function PortfolioShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("sector-burger");
  const [activeTab, setActiveTab] = useState<"preview" | "architecture" | "outcomes">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");

  const project = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section id="portfolio" className="relative py-24 bg-[#141210] border-b border-[#38332E]">
      {/* Atmospheric Unsplash Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 18, 16, 0.70), rgba(20, 18, 16, 0.90)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#38332E] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-[#D4A359] tracking-widest uppercase mb-2">
              // SIGNATURE CRAFT WORKBENCH
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EFE6]">
              Interactive Project Workbench
            </h2>
          </div>
          <p className="font-sans text-sm text-[#A39B8E] max-w-md">
            Inspect all 5 live Sri Lankan production applications. Explore live previews, inspect system blueprints, and review verified business outcomes.
          </p>
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="flex sm:hidden items-center justify-between font-mono text-[11px] text-[#A39B8E] mb-3 px-1">
          <span className="text-[#D4A359] uppercase tracking-wider font-bold">// SELECT PROJECT</span>
          <div className="flex items-center gap-1.5 text-[#F4EFE6] bg-[#221F1C] border border-[#38332E] px-2.5 py-1 rounded-full text-[10px]">
            <span>Swipe right to view more projects</span>
            <ArrowRight className="w-3 h-3 text-[#C85A32] animate-pulse" />
          </div>
        </div>

        {/* Workbench Control Console (5-Project Selector Grid) */}
        <div className="flex overflow-x-auto gap-3 mb-8 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
          {PROJECTS.map((item) => {
            const isSelected = item.id === selectedProjectId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProjectId(item.id)}
                className={`text-left p-3.5 rounded border transition-all focus-visible:outline-none shrink-0 w-[220px] sm:w-auto ${
                  isSelected
                    ? "bg-[#221F1C] border-[#C85A32] text-[#F4EFE6] shadow-lg"
                    : "bg-[#141210] border-[#38332E] text-[#A39B8E] hover:border-[#524B43] hover:text-[#F4EFE6]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] tracking-wider text-[#D4A359] uppercase font-bold">
                    {item.category}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
                  )}
                </div>
                <div className="font-serif text-base font-bold leading-tight truncate">
                  {item.title}
                </div>
                <div className="font-mono text-[11px] text-[#A39B8E] mt-1 truncate">
                  {item.location}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Workbench Display Area */}
        <div className="craft-card rounded overflow-hidden">
          {/* Workbench Mode Bar */}
          <div className="bg-[#2B2622] border-b border-[#38332E] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            {/* View Modes */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-colors focus-visible:outline-none ${
                  activeTab === "preview"
                    ? "bg-[#C85A32] text-white font-semibold"
                    : "text-[#A39B8E] hover:text-[#F4EFE6] hover:bg-[#221F1C]"
                }`}
              >
                1. LIVE PREVIEW
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-colors focus-visible:outline-none ${
                  activeTab === "architecture"
                    ? "bg-[#C85A32] text-white font-semibold"
                    : "text-[#A39B8E] hover:text-[#F4EFE6] hover:bg-[#221F1C]"
                }`}
              >
                2. SYSTEM BLUEPRINT
              </button>
              <button
                onClick={() => setActiveTab("outcomes")}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-colors focus-visible:outline-none ${
                  activeTab === "outcomes"
                    ? "bg-[#C85A32] text-white font-semibold"
                    : "text-[#A39B8E] hover:text-[#F4EFE6] hover:bg-[#221F1C]"
                }`}
              >
                3. VERIFIED OUTCOMES
              </button>
            </div>

            {/* Live External Link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4A359] hover:text-[#F4EFE6] transition-colors focus-visible:outline-none"
            >
              <span>LAUNCH LIVE SITE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tab Content Display */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "preview" && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Browser Frame Simulation — now FIRST */}
                  <div className="border border-[#38332E] rounded overflow-hidden bg-[#141210]">
                    {/* Browser Address Bar (now also holds device toggle) */}
                    <div className="bg-[#221F1C] border-b border-[#38332E] px-4 py-2 flex items-center gap-3 font-mono text-xs text-[#A39B8E]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38332E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38332E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38332E]" />
                      </div>
                      <div className="flex-1 bg-[#141210] border border-[#38332E] px-3 py-1 rounded text-[11px] truncate text-[#D4A359]">
                        {project.liveUrl}
                      </div>
                      {/* Device Viewport Toggle moved in here */}
                      <div className="flex items-center gap-1 bg-[#141210] p-1 border border-[#38332E] rounded shrink-0">
                        <button
                          onClick={() => setDeviceView("desktop")}
                          className={`p-1.5 rounded transition-colors focus-visible:outline-none ${
                            deviceView === "desktop"
                              ? "bg-[#221F1C] text-[#D4A359]"
                              : "text-[#A39B8E] hover:text-[#F4EFE6]"
                          }`}
                          title="Desktop Viewport"
                        >
                          <Laptop className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeviceView("mobile")}
                          className={`p-1.5 rounded transition-colors focus-visible:outline-none ${
                            deviceView === "mobile"
                              ? "bg-[#221F1C] text-[#D4A359]"
                              : "text-[#A39B8E] hover:text-[#F4EFE6]"
                          }`}
                          title="Mobile Viewport"
                        >
                          <Smartphone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image Preview Container */}
                    <div className="p-4 flex justify-center bg-[#141210] min-h-[380px] items-center">
                      {deviceView === "desktop" ? (
                        <div className="relative w-full aspect-[16/9] max-w-4xl rounded overflow-hidden border border-[#38332E]">
                          <Image
                            src={project.desktopPreview}
                            alt={`${project.title} Desktop Screenshot`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="relative w-[280px] aspect-[9/18] rounded-xl overflow-hidden border-2 border-[#38332E] shadow-2xl">
                          <Image
                            src={project.mobilePreview}
                            alt={`${project.title} Mobile Screenshot`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title/Client/Summary — now a caption BELOW the preview */}
                  <div className="border-t border-[#38332E] pt-4">
                    <h3 className="font-serif text-xl font-bold text-[#F4EFE6]">
                      {project.title} — <span className="text-[#A39B8E] text-base font-normal">{project.client}</span>
                    </h3>
                    <p className="font-sans text-xs text-[#A39B8E] mt-1">
                      {project.summary}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 font-mono text-xs"
                >
                  <div className="border-b border-[#38332E] pb-4">
                    <h3 className="font-serif text-xl font-bold text-[#F4EFE6] font-sans">
                      System Architecture & Technical Specs
                    </h3>
                    <p className="text-[#A39B8E] text-xs mt-1">
                      Full-stack blueprint for {project.title} ({project.client}).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#141210] border border-[#38332E] p-4 rounded space-y-3">
                      <div className="text-[#D4A359] font-bold flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#C85A32]" />
                        <span>ENGINE & FRAMEWORK</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.framework}</div>

                      <div className="text-[#D4A359] font-bold flex items-center gap-2 pt-2 border-t border-[#38332E]">
                        <Cpu className="w-4 h-4 text-[#C85A32]" />
                        <span>RUNTIME & SERVERLESS</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.runtime}</div>

                      <div className="text-[#D4A359] font-bold flex items-center gap-2 pt-2 border-t border-[#38332E]">
                        <Layers className="w-4 h-4 text-[#C85A32]" />
                        <span>DATA STORE</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.database}</div>
                    </div>

                    <div className="bg-[#141210] border border-[#38332E] p-4 rounded space-y-3">
                      <div className="text-[#D4A359] font-bold flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#2D5D4B]" />
                        <span>EDGE DISTRIBUTION</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.edgeLocation}</div>

                      <div className="text-[#D4A359] font-bold flex items-center gap-2 pt-2 border-t border-[#38332E]">
                        <Terminal className="w-4 h-4 text-[#2D5D4B]" />
                        <span>ARCHITECTURAL PATTERN</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.pattern}</div>

                      <div className="text-[#D4A359] font-bold flex items-center gap-2 pt-2 border-t border-[#38332E]">
                        <ShieldCheck className="w-4 h-4 text-[#2D5D4B]" />
                        <span>SECURITY & COMPLIANCE</span>
                      </div>
                      <div className="text-[#F4EFE6]">{project.architecture.security}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "outcomes" && (
                <motion.div
                  key="outcomes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#38332E] pb-4">
                    <h3 className="font-serif text-xl font-bold text-[#F4EFE6]">
                      Verified Business Impact & Audit
                    </h3>
                    <p className="font-sans text-xs text-[#A39B8E] mt-1">
                      Empirical benchmarks measured in production for {project.title}.
                    </p>
                  </div>

                  {/* Impact Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#141210] border border-[#38332E] p-4 rounded">
                        <div className="font-mono text-xs text-[#A39B8E] uppercase">{m.label}</div>
                        <div className="font-serif text-3xl font-bold text-[#C85A32] my-2">
                          {m.value}
                        </div>
                        <div className="font-sans text-xs text-[#A39B8E]">{m.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Verification Checkmarks */}
                  <div className="bg-[#141210] border border-[#38332E] p-5 rounded space-y-3">
                    <div className="font-mono text-xs text-[#D4A359] uppercase tracking-wider font-bold">
                      // PRODUCTION VERIFICATIONS
                    </div>
                    {project.verifications.map((v, idx) => (
                      <div key={idx} className="flex items-center gap-3 font-sans text-xs text-[#F4EFE6]">
                        <CheckCircle2 className="w-4 h-4 text-[#2D5D4B] shrink-0" />
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
