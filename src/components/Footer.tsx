import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center text-background font-black text-2xl">D</div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase">Dinusha<span className="text-primary">.</span></span>
            </div>
            <p className="text-xl font-medium text-foreground/60 max-w-sm mb-10 leading-tight">
              I build smart digital systems that turn visitors into loyal customers.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] opacity-40">Navigation</h4>
            <ul className="space-y-4 text-lg font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] opacity-40">Contact</h4>
            <ul className="space-y-4 text-lg font-bold">
              <li>Rajagiriya, Sri Lanka</li>
              <li>dinushapushparajah@gmail.com</li>
              <li>0710134406</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <p>© 2026 Dinusha Pushparajah. All rights reserved.</p>
          <p>Built with smart thinking & simple moves</p>
        </div>
      </div>
    </footer>
  );
}

