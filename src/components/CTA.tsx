import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative rounded-[3rem] bg-primary p-12 md:p-24 overflow-hidden text-center">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 border-[20px] border-black/5 rounded-full" 
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-background rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-12"
            >
              <Zap className="text-primary w-10 h-10 fill-current" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display font-black uppercase italic leading-[0.9] tracking-tighter text-background mb-8"
            >
              Ready to Turn Your Website Into a <span className="underline decoration-black decoration-8 underline-offset-8">Sales Machine?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-background/80 font-bold mb-12 max-w-2xl mx-auto"
            >
              Don't let another day go by with a website that doesn't perform. Let's build something that actually grows your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" className="bg-background text-primary hover:bg-neutral-900 font-black uppercase tracking-widest h-20 px-12 rounded-full text-xl group shadow-2xl">
                Get My Free Audit
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-background/60 text-sm font-bold uppercase tracking-[0.2em]"
            >
              Limited availability for Q2 2024
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
