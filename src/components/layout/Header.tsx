"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Live Portfolio", href: "#portfolio" },
    { name: "Capabilities", href: "#services" },
    { name: "How We Work", href: "#process" },
    { name: "Client Results", href: "#results" },
    { name: "Project Estimator", href: "#estimator" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const scrollToTarget = () => {
      if (href === "#") {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        } else {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    setTimeout(scrollToTarget, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-[rgba(3,7,18,0.75)] backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="group flex items-center gap-2.5 text-xl font-extrabold tracking-tight"
          data-cursor="DEVLANKA"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight flex items-center gap-1.5">
              DEVLANKA <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 group-hover:text-sky-400 transition-colors">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Live Availability Badge & Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 tracking-wide">
              2 Project Slots Open
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#estimator"
            onClick={(e) => handleNavClick(e, "#estimator")}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 group-hover:from-sky-400 group-hover:to-purple-600 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 active:scale-95"
            data-cursor="HIRE US"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover:text-white transition-colors" />
              <span>Get Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl"
          >
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400">
                Taking on Q3 & Q4 Clients
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-sky-400 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#estimator"
              onClick={(e) => handleNavClick(e, "#estimator")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/25"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project Estimator</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
