import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMode } from "@/context/ModeContext";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useGSAP(() => {
    if (mode === "creative") {
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section id="contact" ref={containerRef} className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="contact-item">
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl mb-10 leading-[0.95]">Let’s build something <span className="text-primary">great together.</span></h3>
            
            <div className="space-y-10">
              <a href="tel:0710134406" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Call Me</div>
                  <div className="text-2xl font-black tracking-tighter">0710134406</div>
                </div>
              </a>
              
              <a href="mailto:dinushapushparajah@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Email Me</div>
                  <div className="text-2xl font-black tracking-tighter">dinushapushparajah@gmail.com</div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/dinusha-pushparajah-747a44215/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">LinkedIn</div>
                  <div className="text-2xl font-black tracking-tighter">Dinusha Pushparajah</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-item bg-foreground/5 p-10 md:p-16 rounded-[3rem] border border-foreground/5">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Your Name</label>
                <input placeholder="John Doe" className="w-full bg-background border-2 border-foreground/10 h-14 rounded-2xl px-6 font-bold focus:border-primary outline-none transition-colors" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-background border-2 border-foreground/10 h-14 rounded-2xl px-6 font-bold focus:border-primary outline-none transition-colors" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Message</label>
                <textarea placeholder="How can I help you grow?" className="w-full bg-background border-2 border-foreground/10 min-h-[150px] rounded-2xl px-6 py-4 font-bold focus:border-primary outline-none transition-colors resize-none" />
              </div>
              
              <Button size="lg" className="w-full h-16 rounded-2xl text-xl uppercase tracking-widest group bg-primary text-background hover:scale-[1.02] transition-transform">
                Send Message
                <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


