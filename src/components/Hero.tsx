import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.9] tracking-tight uppercase mb-10">
              We Turn Your Business Into a <span className="text-primary italic">Sales</span> Machine
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              High-performance websites designed to capture leads, build trust, and grow your revenue while you sleep.
            </p>
            
            <div className="flex flex-col sm:row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary text-background hover:bg-white hover:text-black font-bold uppercase tracking-[0.2em] h-16 px-12 rounded-full text-xs transition-all duration-500 group">
                Get My Website
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="link" className="text-foreground/60 hover:text-primary font-bold uppercase tracking-[0.2em] text-[10px] transition-colors">
                See Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-white/[0.05] glass glow-spark-lg">
               <div className="aspect-video bg-neutral-950/50 p-1 flex flex-col justify-center items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                    alt="Dashboard" 
                    className="w-full h-full object-cover opacity-40 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform duration-500 cursor-pointer group">
                      <Play className="text-primary w-6 h-6 fill-current ml-1 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Minimal Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-12 p-6 glass rounded-lg border-primary/20 z-20 hidden md:block">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2">Conversion Rate</div>
                <div className="text-3xl font-medium tracking-tighter">+142%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
