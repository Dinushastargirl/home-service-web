import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Miller",
    role: "Owner, Miller Plumbing",
    content: "I was skeptical at first, but after the new site launched, my phone started ringing twice as much. The 'Click-to-Call' feature is a game changer for my business.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Manager, Sparkle Cleaners",
    content: "The booking form integration saved us hours of manual work every week. Our customers love how easy it is to schedule a cleaning now.",
    rating: 5
  },
  {
    name: "Mike Thompson",
    role: "Elite Electricians",
    content: "Professional, fast, and knows exactly what a local business needs. My site looks better than all my competitors and ranks higher on Google too.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl mb-6">What our <span className="text-gradient">clients say</span></h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
