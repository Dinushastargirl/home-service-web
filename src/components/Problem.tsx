import React from "react";
import { motion } from "motion/react";
import { AlertCircle, TrendingDown, UserX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Outdated Design",
    description: "Your website looks like it's from 2010. Customers judge your business's quality by your website's appearance. If it's old, they assume your service is too.",
  },
  {
    icon: TrendingDown,
    title: "Zero Lead Generation",
    description: "You have traffic, but no one is calling. Your website is a digital brochure instead of a high-converting sales machine that works while you sleep.",
  },
  {
    icon: UserX,
    title: "Poor User Experience",
    description: "If your site is slow or hard to navigate on mobile, 80% of users will leave within seconds. You're literally handing your customers to your competitors.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            The Hard Truth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-10"
          >
            Is Your Website <span className="text-primary italic">Killing</span> Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Most websites are built to look "nice," but they fail at their primary job: <span className="text-foreground font-bold">making you money.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 group-hover:border-primary/30 transition-colors duration-500">
                <problem.icon className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
