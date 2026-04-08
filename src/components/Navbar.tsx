import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12 lg:px-24"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">H</span>
        </div>
        <span className="font-display font-bold text-xl hidden sm:block">HomeService<span className="text-primary">Web</span></span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
        <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
        <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Process</a>
        <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary">
          <Phone className="w-4 h-4" />
          <span>(555) 123-4567</span>
        </a>
        <Button size="sm" className="rounded-full px-6">
          Get Free Demo
        </Button>
      </div>
    </motion.nav>
  );
}
