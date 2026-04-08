import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Little Heart Bakes",
    category: "Small Business",
    url: "https://little-heart-bakes.base44.app",
    image: "https://picsum.photos/seed/bakery/800/600",
    description: "A clean, delightful website for a local bakery.",
    problem: "The bakery needed a digital home that felt as warm as their kitchen.",
    solution: "A customer-friendly experience focused on visual storytelling and easy navigation."
  },
  {
    title: "Aurum Bookings",
    category: "Booking System",
    url: "https://aurum-bookings.vercel.app/login",
    image: "https://picsum.photos/seed/booking/800/600",
    description: "A structured, high-performance booking system.",
    problem: "Managing appointments manually was causing double-bookings and lost time.",
    solution: "A robust system with a focus on usability and automated scheduling."
  },
  {
    title: "Visage AI",
    category: "AI Innovation",
    url: "https://visageai-iota.vercel.app/",
    image: "https://picsum.photos/seed/ai/800/600",
    description: "A modern, cutting-edge AI project.",
    problem: "Complex AI technology needed a simple, intuitive interface for users.",
    solution: "A sleek, modern UI that makes advanced technology feel accessible."
  }
];

export default function Portfolio() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">Selected Works</h2>
          <h3 className="text-5xl md:text-7xl mb-8 leading-[0.95]">Real solutions for <span className="text-primary">real problems.</span></h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="brutal-card rounded-[2rem] overflow-hidden mb-8 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{project.category}</span>
                  <div className="h-px flex-1 bg-foreground/10" />
                </div>
                
                <h4 className="text-3xl font-black tracking-tighter">{project.title}</h4>
                <p className="text-foreground/60 font-medium leading-snug">
                  {project.description}
                </p>
                
                <div className="pt-4 space-y-2">
                  <div className="text-sm">
                    <span className="font-black uppercase text-[10px] tracking-widest block mb-1">The Problem</span>
                    <p className="text-foreground/80">{project.problem}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-black uppercase text-[10px] tracking-widest block mb-1">The Solution</span>
                    <p className="text-foreground/80">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button asChild variant="link" className="p-0 h-auto text-foreground font-black uppercase tracking-widest text-xs group/btn">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Project
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

