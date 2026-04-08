import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center justify-between px-6 md:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center">
          <span className="text-background font-black text-2xl">D</span>
        </div>
        <span className="font-display font-black text-xl hidden sm:block tracking-tighter uppercase">Dinusha<span className="text-primary">.</span></span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Projects</a>
        <a href="#process" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">How it works</a>
        <a href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-6">
        <Button size="sm" className="brutal-btn rounded-xl px-8 h-11 uppercase tracking-widest text-xs">
          Free Demo
        </Button>
      </div>
    </motion.nav>
  );
}

