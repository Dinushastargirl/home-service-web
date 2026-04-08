import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";
import { 
  Search, 
  Layout, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Understand",
    action: "Analyzing your niche",
    description: "I dive deep into your business to find what your customers are actually looking for.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "Plan",
    action: "Mapping the journey",
    description: "We create a strategic blueprint focused on one goal: conversion.",
    icon: Layout,
    color: "text-purple-400"
  },
  {
    id: 3,
    title: "Design",
    action: "Crafting the look",
    description: "Clean, professional, and trustworthy. I build designs that make people want to stay.",
    icon: Palette,
    color: "text-pink-400"
  },
  {
    id: 4,
    title: "Build",
    action: "Writing the code",
    description: "Fast, responsive, and secure. I use modern tech to ensure your site never lets you down.",
    icon: Code2,
    color: "text-emerald-400"
  },
  {
    id: 5,
    title: "Launch",
    action: "Going live",
    description: "The big moment. We push the button and your new system starts working for you.",
    icon: Rocket,
    color: "text-orange-400"
  },
  {
    id: 6,
    title: "Grow",
    action: "Scaling results",
    description: "We don't stop at launch. I help you track, optimize, and grow your customer base.",
    icon: TrendingUp,
    color: "text-primary"
  }
];

const StepInteraction = ({ id }: { id: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (id === 1) {
    return (
      <div className="w-full max-w-md bg-foreground/5 rounded-2xl p-6 border border-foreground/10 relative overflow-hidden">
        <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-foreground/10 mb-4">
          <Search className="w-4 h-4 text-primary" />
          <div className="text-sm font-mono opacity-60 overflow-hidden whitespace-nowrap border-r-2 border-primary animate-pulse pr-1">
            finding customers...
          </div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.random() * 40 + 60}%` }}
              className="h-2 bg-primary/20 rounded-full"
            />
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4"
        >
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    );
  }

  if (id === 2) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary rounded-md" />
        </div>
        <ArrowRight className="w-6 h-6 text-primary/40" />
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary rounded-full" />
        </div>
        <ArrowRight className="w-6 h-6 text-primary/40" />
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-background" />
        </div>
      </div>
    );
  }

  if (id === 3) {
    return (
      <div className="relative w-full max-w-md aspect-video bg-foreground/5 rounded-2xl border border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary/10 rounded-lg border border-primary/20"
            />
          ))}
        </div>
        <motion.div 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20 backdrop-blur-sm border-t border-primary/30 p-4"
        >
          <div className="w-20 h-2 bg-primary rounded-full mb-2" />
          <div className="w-full h-2 bg-primary/40 rounded-full" />
        </motion.div>
      </div>
    );
  }

  if (id === 4) {
    return (
      <div className="w-full max-w-md font-mono text-xs bg-foreground/5 rounded-2xl p-6 border border-foreground/10">
        <div className="flex justify-between mb-4">
          <span className="text-primary">building.tsx</span>
          <span className="opacity-40">98%</span>
        </div>
        <div className="space-y-2">
          <div className="text-primary/60">const site = createSystem();</div>
          <div className="text-primary/60">site.optimize();</div>
          <div className="text-primary/60">site.deploy();</div>
        </div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="h-1 bg-primary mt-6 rounded-full"
        />
      </div>
    );
  }

  if (id === 5) {
    return (
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-6 bg-primary text-background rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 flex items-center gap-4"
      >
        <Rocket className="w-6 h-6" />
        Go Live
      </motion.button>
    );
  }

  if (id === 6) {
    return (
      <div className="w-full max-w-md aspect-video bg-foreground/5 rounded-2xl p-6 border border-foreground/10 flex items-end gap-2">
        {[0.4, 0.6, 0.5, 0.8, 0.7, 1].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 100}%` }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="flex-1 bg-primary rounded-t-lg"
          />
        ))}
      </div>
    );
  }

  return null;
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      const steps = gsap.utils.toArray(".process-step-container");
      steps.forEach((step: any, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });

        // Connector lines
        if (i < steps.length - 1) {
          gsap.from(`.connector-${i}`, {
            scrollTrigger: {
              trigger: step,
              start: "bottom center",
              end: "bottom top",
              scrub: true,
            },
            scaleY: 0,
            transformOrigin: "top",
          });
        }
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section id="process" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent -z-10" />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">How It Works</h2>
          <h3 className="text-5xl md:text-7xl mb-8 leading-[0.95]">A journey from <span className="text-primary">idea to results.</span></h3>
          <p className="text-xl text-foreground/60 font-medium">
            I've simplified the process so you can focus on your business while I build your growth engine.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="process-step-container relative grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-background flex items-center justify-center text-xl font-black">
                    {step.id}
                  </div>
                  <span className={`text-sm font-black uppercase tracking-widest ${step.color}`}>
                    {step.action}
                  </span>
                </div>
                
                <h4 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">{step.title}</h4>
                <p className="text-xl text-foreground/60 font-medium leading-tight max-w-md">
                  {step.description}
                </p>
              </div>

              <div className={`flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <StepInteraction id={step.id} />
              </div>

              {/* Connector for desktop */}
              {index < steps.length - 1 && (
                <div className={`connector-${index} hidden md:block absolute -bottom-32 left-1/2 -translate-x-1/2 w-px h-32 bg-primary/20`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary font-black uppercase tracking-widest text-sm"
          >
            <CheckCircle2 className="w-5 h-5" />
            Ready to start your journey?
          </motion.div>
        </div>
      </div>
    </section>
  );
}


