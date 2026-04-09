import React from "react";
import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                <Zap className="text-background w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight uppercase">
                Agent<span className="text-primary">Spark</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-10">
              Engineering high-performance digital experiences for small business owners across the United States.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-500">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Services", "Process", "Work", "About"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-white transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Contact</h4>
              <div className="space-y-4">
                <a href="mailto:hello@agentspark.com" className="block text-sm font-bold hover:text-primary transition-colors">hello@agentspark.com</a>
                <a href="tel:+15550000000" className="block text-sm font-bold hover:text-primary transition-colors">+1 (555) 000-0000</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/20 text-[10px] font-bold uppercase tracking-widest">
            © 2024 Agent Spark LLC.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-foreground/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-foreground/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
