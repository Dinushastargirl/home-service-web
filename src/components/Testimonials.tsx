import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow Solutions",
    content: "Agent Spark didn't just build us a website; they built a revenue engine. Our conversion rate jumped by 150% in the first month alone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Founder, Artisan Coffee Co.",
    content: "The attention to detail and the 'gold' standard of service is real. They captured our brand essence perfectly and made it shine online.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Luxe Estates",
    content: "Working with Agent Spark was a game-changer. Their process is seamless, and the results speak for themselves. Truly world-class.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1]"
          >
            What Our <span className="text-primary italic">Partners</span> Say
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative glass rounded-3xl p-8 md:p-20 overflow-hidden">
            <Quote className="absolute top-10 right-10 text-primary/10 w-32 h-32 -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0 glow-spark">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary text-sm font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center md:justify-end gap-4 mt-12 md:mt-0">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
