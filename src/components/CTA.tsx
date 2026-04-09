import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="relative rounded-lg bg-primary p-12 md:p-24 overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-12 bg-background rounded flex items-center justify-center mx-auto mb-10 shadow-xl rotate-6"
            >
              <Zap className="text-primary w-6 h-6 fill-current" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display font-medium uppercase tracking-tight text-background mb-10 leading-[1.1]"
            >
              Ready to Turn Your Website Into a <span className="italic">Sales Machine?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Button size="lg" className="bg-background text-primary hover:bg-neutral-900 font-bold uppercase tracking-[0.2em] h-16 px-12 rounded-full text-[10px] group shadow-2xl transition-all duration-500">
                Get My Free Audit
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
