import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/[0.05] relative group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-8 -right-8 p-8 glass rounded-lg border-primary/10 hidden md:block">
            <div className="text-4xl font-medium text-primary mb-1 tracking-tighter">98%</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">Client Retention</div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Who We Are
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-10"
          >
            We Don't Just Design. <br /> We <span className="text-primary italic">Engineer</span> Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl"
          >
            Lume Agency was founded with one mission: to give small business owners the same digital firepower as Silicon Valley startups. We focus on the metrics that matter—leads, conversions, and ROI.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: Target, text: "Conversion Architecture" },
              { icon: Zap, text: "Ultra-fast Performance" },
              { icon: CheckCircle2, text: "SEO Optimized" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-4"
              >
                <item.icon className="text-primary w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-widest">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
