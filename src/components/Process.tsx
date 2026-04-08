import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description: "We start with a deep dive into your services, target areas, and business goals to create a tailored strategy."
  },
  {
    number: "02",
    title: "Build Your Website",
    description: "I design and develop your high-converting site, focusing on speed, mobile experience, and lead generation."
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "We go live! But it doesn't stop there—I monitor performance and make adjustments to ensure you're getting calls."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl mb-6">How we get you <span className="text-gradient">more customers</span></h3>
          <p className="text-lg text-muted-foreground">
            A simple, transparent workflow designed to get your business online and generating leads as fast as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-background p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="text-6xl font-black text-primary/10 absolute -top-8 left-8 select-none">
                {step.number}
              </div>
              <h4 className="text-2xl font-bold mb-4 pt-4">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
