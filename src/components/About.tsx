import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-background/10">
              <img 
                src="https://picsum.photos/seed/dinusha/800/1000" 
                alt="Dinusha Pushparajah" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Playful element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center rotate-12 shadow-xl">
              <span className="text-white font-black text-center leading-tight text-sm uppercase tracking-tighter italic">Hello!<br/>I'm Dinusha</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">The Human Behind The Code</h2>
            <h3 className="text-5xl md:text-7xl mb-10 leading-[0.95]">I help businesses turn their website into a <span className="text-primary">customer-generating machine.</span></h3>
            
            <div className="space-y-8 text-xl text-background/70 font-medium">
              <p>
                I’m Dinusha Pushparajah, and I believe that a website should do more than just look pretty. It should be your hardest-working employee.
              </p>
              <p>
                I strip away the technical jargon and focus on what actually matters to you: <strong>results</strong>. Whether it's more bookings for your bakery or a smarter system for your service business, I build tools that solve real problems.
              </p>
              <p>
                My approach is simple: understand your goal, plan the shortest path to get there, and build it with precision. No fluff, just smart systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

