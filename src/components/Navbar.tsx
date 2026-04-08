import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, setMode } = useMode();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, { scope: navRef, dependencies: [mode] });

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 glass shadow-lg" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="nav-item flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-background font-black text-2xl group-hover:rotate-12 transition-transform">d</div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">dinusha<span className="text-primary">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item text-sm font-black uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="nav-item flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/10">
            <button
              onClick={() => setMode("simple")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                mode === "simple" ? "bg-background text-foreground shadow-sm" : "text-foreground/40 hover:text-foreground"
              }`}
            >
              <Zap className="w-3 h-3" />
              Simple
            </button>
            <button
              onClick={() => setMode("creative")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                mode === "creative" ? "bg-primary text-background shadow-sm" : "text-foreground/40 hover:text-foreground"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              Creative
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMode(mode === "simple" ? "creative" : "simple")}
            className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-primary"
          >
            {mode === "simple" ? <Zap className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-foreground/5 p-6 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}


