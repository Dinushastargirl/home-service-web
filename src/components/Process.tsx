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
    <section id="process" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] mb-4"
          >
            Our Blueprint
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black uppercase italic leading-tight"
          >
            How We Build Your <span className="text-primary">Success</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Step List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 flex items-center gap-6 group ${
                  activeStep === index 
                    ? "bg-primary text-background border-primary glow-yellow" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <span className={`text-2xl font-black italic ${activeStep === index ? "text-background" : "text-primary"}`}>
                  {step.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{step.title}</h3>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${activeStep === index ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-5">
                  {React.createElement(steps[activeStep].icon, { size: 300 })}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                    {React.createElement(steps[activeStep].icon, { className: "text-primary w-8 h-8" })}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase italic mb-6 tracking-tighter">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    {steps[activeStep].details.map((detail, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest text-center">
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
