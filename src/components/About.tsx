import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-primary/20">
              <div className="text-3xl font-black text-primary mb-1">98%</div>
              <div className="text-sm font-bold uppercase tracking-widest">Client Retention Rate</div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 p-6 bg-primary text-background rounded-2xl font-black uppercase tracking-tighter rotate-12 shadow-2xl">
            Results <br /> Driven
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] mb-4"
          >
            Who We Are
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black uppercase italic leading-tight mb-8"
          >
            We Don't Just Design. <br /> We <span className="text-primary">Engineer</span> Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Lume Agency was founded with one mission: to give small business owners the same digital firepower as Silicon Valley startups. We focus on the metrics that matter—leads, conversions, and ROI.
          </motion.p>

          <div className="space-y-6">
            {[
              { icon: Target, text: "Conversion-first architecture" },
              { icon: Zap, text: "Ultra-fast loading speeds" },
              { icon: CheckCircle2, text: "SEO optimized for US markets" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary w-5 h-5" />
                </div>
                <span className="text-lg font-bold uppercase tracking-tight">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
