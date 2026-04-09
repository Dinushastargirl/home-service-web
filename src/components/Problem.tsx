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
    <section id="services" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] mb-4"
          >
            The Hard Truth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black uppercase italic leading-tight mb-8"
          >
            Is Your Website <span className="text-primary">Killing</span> Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Most small business websites are built to look "nice," but they fail at their primary job: <span className="text-foreground font-bold underline decoration-primary underline-offset-4">making you money.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:glow-yellow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <problem.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -z-10" />
    </section>
  );
}
