import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Elite Plumbing & Rooter",
    category: "Plumbing",
    image: "https://picsum.photos/seed/plumbing/800/600",
    problem: "Outdated site, no mobile leads.",
    solution: "New responsive design with 'Click-to-Call' buttons.",
    outcome: "300% increase in mobile inquiries."
  },
  {
    title: "Sparky's Electrical",
    category: "Electrician",
    image: "https://picsum.photos/seed/electrician/800/600",
    problem: "Slow loading, high bounce rate.",
    solution: "Performance-first build with clear service areas.",
    outcome: "Page load time under 1s, 40% more bookings."
  },
  {
    title: "PureClean Services",
    category: "Cleaning",
    image: "https://picsum.photos/seed/cleaning/800/600",
    problem: "Confusing booking process.",
    solution: "Streamlined 3-step booking form integration.",
    outcome: "Conversion rate jumped from 2% to 12%."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl">Proven results for <span className="text-gradient">local businesses</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm">
            I've helped dozens of home service providers transform their digital presence and grow their bottom line.
          </p>
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
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <Badge className="bg-primary text-white hover:bg-primary">View Case Study</Badge>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 border-primary/30 text-primary">{project.category}</Badge>
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-primary min-w-[70px]">Problem:</span>
                  <span className="text-muted-foreground">{project.problem}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-primary min-w-[70px]">Solution:</span>
                  <span className="text-muted-foreground">{project.solution}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-primary min-w-[70px]">Outcome:</span>
                  <span className="text-foreground font-semibold">{project.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
