import React, { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "1", title: "Understand", description: "I learn what your business really needs" },
  { number: "2", title: "Plan", description: "I map out a simple way to get you customers" },
  { number: "3", title: "Design", description: "I create something people actually trust" },
  { number: "4", title: "Build", description: "I turn it into a fast, working website" },
  { number: "5", title: "Launch", description: "We go live and start getting attention" },
  { number: "6", title: "Grow", description: "We improve and get you more results" }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section id="process" ref={containerRef} className="section-padding bg-foreground/5">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">The Journey</h2>
          <h3 className="text-5xl md:text-7xl mb-8 leading-[0.95]">Simple steps to <span className="text-primary">big results.</span></h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step relative group"
            >
              <div className="w-20 h-20 bg-primary text-background rounded-[2rem] flex items-center justify-center text-4xl font-black mb-8 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              
              <h4 className="text-3xl font-black mb-4 tracking-tighter">{step.title}</h4>
              <p className="text-xl text-foreground/60 font-medium leading-tight">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-24 w-full h-px border-t-2 border-dashed border-foreground/10 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


