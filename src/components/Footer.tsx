import React from "react";
import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Zap className="text-background w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter uppercase italic">
                Lume<span className="text-primary">Agency</span>
              </span>
            </a>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mb-8">
              We engineer high-performance digital experiences for small business owners across the United States.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Process", "Work", "About"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-8">Contact Us</h4>
            <div className="space-y-6">
              <a href="mailto:hello@lumeagency.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <div className="text-lg font-bold">hello@lumeagency.com</div>
                </div>
              </a>
              <a href="tel:+15550000000" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <div className="text-lg font-bold">+1 (555) 000-0000</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
            © 2024 Lume Agency LLC. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
