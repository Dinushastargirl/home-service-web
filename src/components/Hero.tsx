import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-40 left-[5%] w-48 h-48 bg-orange-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-foreground text-background px-4 py-1 rounded-lg mb-8 text-xs font-black uppercase tracking-widest">
              Freelance Web Developer
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter">
              I don’t just build websites. I build <span className="text-primary">systems</span> that bring you customers.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl font-medium leading-tight">
              Simple, smart websites for businesses that want more calls, bookings, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="brutal-btn rounded-2xl px-10 h-16 text-xl uppercase tracking-widest group">
                See How It Works
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-10 h-16 text-xl border-2 border-foreground/20 hover:bg-foreground/5 transition-all uppercase tracking-widest">
                Get a Free Demo
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Journey indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Scroll to explore</span>
          <div className="w-px h-12 bg-foreground/20" />
        </motion.div>
      </div>
    </section>
  );
}

