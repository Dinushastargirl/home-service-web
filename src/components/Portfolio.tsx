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
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.3em] mb-4"
            >
              Our Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black uppercase italic leading-tight"
            >
              Proven Results for <br /> <span className="text-primary">Real</span> Businesses
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest px-8 rounded-full h-14">
              View All Projects
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="p-6 glass rounded-2xl border-white/5 mb-6">
                    <Quote className="text-primary w-6 h-6 mb-4 opacity-50" />
                    <p className="text-sm italic leading-relaxed mb-4">"{project.testimonial}"</p>
                    <div className="text-xs font-black uppercase tracking-widest text-primary">— {project.client}</div>
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-primary hover:text-black font-black uppercase tracking-widest rounded-xl h-14">
                    Visit Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
