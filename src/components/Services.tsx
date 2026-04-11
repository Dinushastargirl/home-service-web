import React from "react";
import { motion } from "motion/react";
import { Globe, Layout, Zap, Shield, BarChart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom-built, high-performance websites using the latest technologies for maximum speed and security.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Human-centered design that focuses on conversion and provides a seamless experience for your users.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "We ensure your website looks and functions perfectly on every device, from smartphones to desktops.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times that keep your users engaged and improve your search engine rankings.",
  },
  {
    icon: BarChart,
    title: "SEO Strategy",
    description: "Data-driven SEO strategies that put your business in front of the right audience at the right time.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Robust security measures to protect your data and your customers' information from digital threats.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-8"
          >
            Digital Solutions for <span className="text-primary italic">Modern</span> Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We don't just build websites; we build growth engines that drive your business forward.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
