import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl mb-10 leading-[0.9] tracking-tighter">Your next customer is already searching. <span className="text-primary">Let’s make sure they find you.</span></h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="brutal-btn rounded-2xl px-12 h-16 text-xl uppercase tracking-widest group">
              Let’s Build Something
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

