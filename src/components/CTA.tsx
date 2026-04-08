import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-8">Ready to get <span className="text-gradient">more customers</span>?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop losing leads to your competitors. Let's build a website that works as hard as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-16 text-xl group">
              Start Your Project
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-xl">
              Schedule a Call
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            No obligation. Free strategy session included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
