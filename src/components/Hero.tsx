import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMode } from "@/context/ModeContext";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      const tl = gsap.timeline();
      tl.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      })
      .from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");
    }
  }, { scope: heroRef, dependencies: [mode] });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="hero-sub inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </div>
            
            <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] tracking-tighter">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">Dinusha</span>
            </h1>
            
            <p className="hero-sub text-xl md:text-2xl text-foreground/60 font-medium max-w-xl mb-12 leading-tight">
              I build simple systems that bring businesses customers.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="rounded-2xl px-10 h-16 text-xl uppercase tracking-widest group bg-primary text-background hover:scale-105 transition-transform">
                View Projects
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-10 h-16 text-xl uppercase tracking-widest border-2 border-foreground/10 hover:bg-foreground/5 transition-all">
                Let's Talk
              </Button>
            </div>
          </div>
          
          <div className="hero-image relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-foreground/5 shadow-2xl">
              <img 
                src="https://i.postimg.cc/nzwQT0cG/5.png" 
                alt="Dinusha" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay for creative mode */}
              {mode === "creative" && (
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              )}
            </div>
            
            {/* Floating badges */}
            {mode === "creative" && (
              <>
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center rotate-12 shadow-xl"
                >
                  <span className="text-background font-black text-center leading-tight text-sm uppercase tracking-tighter italic">Creative<br/>Developer</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 px-6 py-4 bg-background border-2 border-primary rounded-2xl shadow-xl flex items-center gap-3 -rotate-6"
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-black uppercase tracking-widest text-xs">Based in Sri Lanka</span>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-foreground/20" />
      </motion.div>
    </section>
  );
}


