"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import LogoImage from "@/assests/SL-DevSolutions Logo.webp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORKBENCH", href: "#portfolio" },
    { name: "CAPABILITIES", href: "#services" },
    { name: "METHODOLOGY", href: "#process" },
    { name: "TESTIMONIALS", href: "#results" },
    { name: "CONTACT US", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "py-3 bg-[#141210]/95 border-b border-[#38332E] shadow-xl"
          : "py-5 bg-transparent border-b border-[#38332E]/30"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Agency Brand Header */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="group flex items-center gap-3 focus-visible:outline-none"
          aria-label="SL-DevSolutions Agency Home"
        >
          <div className="w-9 h-9 rounded bg-[#221F1C] border border-[#38332E] p-1 flex items-center justify-center group-hover:border-[#C85A32] transition-colors">
            <Image
              src={LogoImage}
              alt="SL-DevSolutions Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-tight text-[#F4EFE6] group-hover:text-[#C85A32] transition-colors">
              SL-DEVSOLUTIONS
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#A39B8E]">
              PANADURA AGENCY // LK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-xs tracking-wider text-[#A39B8E] hover:text-[#D4A359] transition-colors py-1 focus-visible:outline-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Availability Marker & CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 bg-[#221F1C] border border-[#38332E] rounded text-xs font-mono text-[#2D5D4B]">
            <span className="w-2 h-2 rounded-full bg-[#2D5D4B] animate-pulse" />
            <span>OPEN FOR NEW PROJECTS</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary focus-visible:outline-none"
          >
            <span>CONTACT US</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded bg-[#221F1C] border border-[#38332E] text-[#F4EFE6] hover:text-[#D4A359] focus-visible:outline-none"
          aria-label={mobileMenuOpen ? "Close main navigation" : "Open main navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#141210] border-b border-[#38332E] px-4 pt-4 pb-6 space-y-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#221F1C] border border-[#38332E] rounded text-xs font-mono text-[#2D5D4B]">
              <span className="w-2 h-2 rounded-full bg-[#2D5D4B] animate-pulse" />
              <span>COLOMBO ENGINE ONLINE // OPEN FOR NEW PROJECTS</span>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-sm tracking-wider text-[#F4EFE6] hover:text-[#D4A359] py-2 border-b border-[#221F1C] focus-visible:outline-none"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full btn-primary focus-visible:outline-none"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
