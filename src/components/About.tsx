import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/developer/800/800" 
                alt="Freelance Web Developer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-2xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl mb-8">I don't just build websites. I build <span className="text-gradient">growth engines</span>.</h3>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi, I'm a freelance developer dedicated to helping US-based home service businesses dominate their local markets. I've seen too many great plumbers and electricians lose business because of outdated, slow websites that don't work on mobile.
              </p>
              <p>
                My focus is simple: <strong>Conversion</strong>. I combine modern design with psychological triggers that turn casual visitors into high-value leads. Whether you're a one-man show or a growing team, I provide the digital infrastructure you need to scale.
              </p>
              <p>
                I handle the tech, the hosting, and the design, so you can focus on what you do best—serving your customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
