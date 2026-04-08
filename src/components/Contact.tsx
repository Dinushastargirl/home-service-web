import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-black mb-6">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl mb-10 leading-[0.95]">Let’s build something <span className="text-primary">great together.</span></h3>
            
            <div className="space-y-10">
              <a href="tel:0710134406" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Call Me</div>
                  <div className="text-2xl font-black tracking-tighter">0710134406</div>
                </div>
              </a>
              
              <a href="mailto:dinushapushparajah@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Email Me</div>
                  <div className="text-2xl font-black tracking-tighter">dinushapushparajah@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Location</div>
                  <div className="text-2xl font-black tracking-tighter">Rajagiriya, Sri Lanka</div>
                </div>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="mt-12 brutal-card rounded-3xl overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.43572836245!2d79.8893467!3d6.9073281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2599665f8078f%3A0x633887c2b6298642!2sRajagiriya!5e0!3m2!1sen!2slk!4v1712568000000!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="brutal-card p-10 md:p-16 rounded-[3rem]"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Your Name</label>
                <Input placeholder="John Doe" className="bg-background border-2 border-foreground/10 h-14 rounded-2xl px-6 font-bold" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-background border-2 border-foreground/10 h-14 rounded-2xl px-6 font-bold" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Business Type</label>
                <Input placeholder="e.g. Bakery, Real Estate, Tech" className="bg-background border-2 border-foreground/10 h-14 rounded-2xl px-6 font-bold" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Message</label>
                <Textarea placeholder="How can I help you grow?" className="bg-background border-2 border-foreground/10 min-h-[150px] rounded-2xl px-6 py-4 font-bold" />
              </div>
              
              <Button size="lg" className="brutal-btn w-full h-16 rounded-2xl text-xl uppercase tracking-widest group">
                Send Message
                <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

