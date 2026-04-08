import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Little Heart Bakes",
    category: "Small Business",
    url: "https://little-heart-bakes.base44.app",
    image: "https://picsum.photos/seed/bakery/800/600",
    description: "A clean, delightful website for a local bakery focused on visual storytelling."
  },
  {
    title: "Aurum Bookings",
    category: "Booking System",
    url: "https://aurum-bookings.vercel.app/login",
    image: "https://picsum.photos/seed/booking/800/600",
    description: "A structured, high-performance booking system with automated scheduling."
  },
  {
    title: "Visage AI",
    category: "AI Innovation",
    url: "https://visageai-iota.vercel.app/",
    image: "https://picsum.photos/seed/haircut/800/600",
    description: "A sleek, modern UI for an advanced AI project making technology accessible."
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section id="projects" ref={containerRef} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">Selected Works</h2>
          <h3 className="text-5xl md:text-7xl mb-8 leading-[0.95]">Real solutions for <span className="text-primary">real problems.</span></h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              <div className="relative rounded-[2rem] overflow-hidden mb-8 aspect-[4/3] bg-foreground/5 border border-foreground/5 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{project.category}</span>
                  <div className="h-px flex-1 bg-foreground/10" />
                </div>
                
                <h4 className="text-3xl font-black tracking-tighter">{project.title}</h4>
                <p className="text-foreground/60 font-medium leading-snug">
                  {project.description}
                </p>
                
                <div className="pt-6">
                  <Button asChild variant="link" className="p-0 h-auto text-foreground font-black uppercase tracking-widest text-xs group/btn">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Project
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


