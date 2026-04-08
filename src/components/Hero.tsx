import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Specialized in Home Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            I build websites that <span className="text-gradient">bring you more customers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Helping US home service businesses—plumbers, electricians, and cleaning companies—get more calls, bookings, and revenue through conversion-focused design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg group">
              Get a Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg">
              View Sample Sites
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              "Mobile Responsive",
              "SEO Optimized",
              "Fast Loading"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/plumbing-site/1200/800" 
              alt="Plumbing Business Website Demo" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="text-3xl font-bold text-primary mb-1">+145%</div>
            <div className="text-xs font-medium text-muted-foreground leading-tight">Increase in monthly service bookings for "QuickFix Plumbing"</div>
          </motion.div>
          
          {/* Floating Trust Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-bold">Google Verified</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest">SEO Ready</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
