import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now accepting new clients for 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter uppercase italic mb-6">
            We Turn Your Business Into a <span className="text-primary text-glow">24/7 Sales</span> Machine
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Stop losing customers to outdated design. We build high-performance websites that capture leads, build trust, and grow your revenue while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-black uppercase tracking-widest h-16 px-8 rounded-full text-lg group">
              Get My Website
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 font-black uppercase tracking-widest h-16 px-8 rounded-full text-lg">
              See Our Work
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold">Trusted by 500+ businesses</div>
              <div className="text-muted-foreground">Across the United States</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glow-yellow-lg bg-[#111]">
             <div className="aspect-video bg-gradient-to-br from-neutral-900 to-black p-8 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Play className="text-primary w-8 h-8 fill-current ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Watch Our Process</h3>
                <p className="text-muted-foreground text-sm max-w-xs">See how we transformed 200+ businesses in the last 12 months.</p>
             </div>
             
             {/* Abstract UI Elements */}
             <div className="absolute top-4 right-4 w-32 h-20 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-3">
                <div className="w-full h-2 bg-primary/40 rounded-full mb-2" />
                <div className="w-2/3 h-2 bg-white/10 rounded-full mb-2" />
                <div className="w-1/2 h-2 bg-white/10 rounded-full" />
             </div>
             <div className="absolute bottom-4 left-4 w-40 h-24 bg-primary/10 backdrop-blur-md rounded-lg border border-primary/20 p-4">
                <div className="text-[10px] uppercase tracking-widest font-bold mb-2">Conversion Rate</div>
                <div className="text-2xl font-black text-primary">+142%</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-primary" 
                  />
                </div>
             </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full -z-10 animate-spin-slow" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-primary/10 rounded-full -z-10 animate-reverse-spin-slow" />
        </motion.div>
      </div>
    </section>
  );
}
