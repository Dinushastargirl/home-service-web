import React, { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section id="about" ref={containerRef} className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="about-image relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-background/10">
              <img 
                src="https://i.postimg.cc/nzwQT0cG/5.png" 
                alt="Dinusha Pushparajah" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Playful element */}
            {mode === "creative" && (
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center rotate-12 shadow-xl"
              >
                <span className="text-background font-black text-center leading-tight text-sm uppercase tracking-tighter italic">Hello!<br/>I'm Dinusha</span>
              </motion.div>
            )}
          </div>
          
          <div className="about-content">
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">The Human Behind The Code</h2>
            <h3 className="text-5xl md:text-7xl mb-10 leading-[0.95]">I help businesses turn their website into a <span className="text-primary">customer-generating machine.</span></h3>
            
            <div className="space-y-8 text-xl text-background/70 font-medium">
              <p>
                I’m Dinusha Pushparajah, and I believe that a website should do more than just look pretty. It should be your hardest-working employee.
              </p>
              <p>
                I strip away the technical jargon and focus on what actually matters to you: <strong>results</strong>. Whether it's more bookings for your bakery or a smarter system for your service business, I build tools that solve real problems.
              </p>
              <p>
                My approach is simple: understand your goal, plan the shortest path to get there, and build it with precision. No fluff, just smart systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


