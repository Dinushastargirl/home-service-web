import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    icon: Search,
    description: "We dive deep into your business, competitors, and target audience to build a strategy that actually works.",
    details: ["Market Research", "Competitor Analysis", "Goal Setting"],
  },
  {
    id: "02",
    title: "Design",
    icon: Palette,
    description: "Our designers create a high-fidelity mockup that reflects your brand and is optimized for maximum conversion.",
    details: ["UI/UX Design", "Brand Identity", "Interactive Prototypes"],
  },
  {
    id: "03",
    title: "Build",
    icon: Code,
    description: "We turn the design into a lightning-fast, secure, and responsive website using the latest modern technologies.",
    details: ["Clean Code", "Mobile Optimization", "Speed Performance"],
  },
  {
    id: "04",
    title: "Launch",
    icon: Rocket,
    description: "We push the button and your new sales machine goes live. But we don't stop there—we monitor and optimize.",
    details: ["Deployment", "SEO Setup", "Growth Tracking"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Our Blueprint
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tight leading-[1.1]"
          >
            How We Build Your <span className="text-primary italic">Success</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Step List */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 gap-2 no-scrollbar">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 lg:w-full text-left p-4 lg:p-6 rounded-lg transition-all duration-500 flex items-center gap-4 lg:gap-6 group cursor-pointer ${
                  activeStep === index 
                    ? "bg-white/[0.03] border border-white/[0.1] glow-spark" 
                    : "bg-transparent border border-transparent hover:bg-white/[0.01]"
                }`}
              >
                <span className={`text-base lg:text-lg font-bold italic ${activeStep === index ? "text-primary" : "text-foreground/20"}`}>
                  {step.id}
                </span>
                <div className="flex-1">
                  <h3 className={`text-[10px] lg:text-sm font-bold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${activeStep === index ? "text-foreground" : "text-foreground/40"}`}>
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-lg p-8 md:p-16 min-h-[400px] lg:min-h-[450px] flex flex-col justify-center relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-10">
                    {React.createElement(steps[activeStep].icon, { className: "text-primary w-5 h-5" })}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {steps[activeStep].details.map((detail, i) => (
                      <div key={i} className="px-4 py-2 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
