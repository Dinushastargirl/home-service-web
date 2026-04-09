import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";

const projects = [
  {
    title: "Elite Roofing US",
    description: "A high-converting landing page for a premium roofing contractor in Texas. Increased leads by 140% in 3 months.",
    image: "https://images.unsplash.com/photo-1631675591470-92284499522b?q=80&w=2070&auto=format&fit=crop",
    testimonial: "Lume Agency transformed our business. We went from 2 leads a week to 5 a day.",
    client: "John D., Owner",
  },
  {
    title: "Nova Dental Care",
    description: "Modern patient-focused website for a luxury dental clinic in California. Integrated seamless booking system.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    testimonial: "The design is stunning and our patients love the new booking experience. Highly recommend!",
    client: "Dr. Sarah M.",
  },
  {
    title: "Apex Law Group",
    description: "Professional, authoritative website for a top-tier law firm in New York. Focused on trust and clarity.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    testimonial: "Our online presence finally matches the quality of our legal services. Exceptional work.",
    client: "Michael R., Partner",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tight leading-[1.1]"
          >
            Proven Results for <br /> <span className="text-primary italic">Real</span> Businesses
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/[0.05] mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Button className="w-full bg-white text-black hover:bg-primary hover:text-black font-bold uppercase tracking-widest rounded h-12 text-[10px]">
                    Visit Website
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                
                <div className="pt-6 border-t border-white/[0.05]">
                   <p className="text-[11px] italic text-foreground/40 leading-relaxed">"{project.testimonial}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
