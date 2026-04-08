import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="cta-content">
          <h2 className="text-5xl md:text-8xl mb-10 leading-[0.9] tracking-tighter">Your next customer is already searching. <span className="text-primary">Let’s make sure they find you.</span></h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-2xl px-12 h-16 text-xl uppercase tracking-widest group bg-primary text-background hover:scale-105 transition-transform">
              Let’s Build Something
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


