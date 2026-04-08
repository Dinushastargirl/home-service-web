import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Contact Me</h2>
            <h3 className="text-4xl md:text-5xl mb-8">Let's talk about <span className="text-gradient">your growth</span></h3>
            
            <p className="text-lg text-muted-foreground mb-12">
              Have a question or ready to start? Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Call Me</div>
                  <div className="text-xl font-bold">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Email Me</div>
                  <div className="text-xl font-bold">hello@homeserviceweb.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Location</div>
                  <div className="text-xl font-bold">Austin, Texas (Serving Nationwide)</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Full Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50 h-12 rounded-xl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Business Type</label>
                <Input placeholder="e.g. Plumbing, HVAC, Cleaning" className="bg-background/50 h-12 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-background/50 min-h-[150px] rounded-xl" />
              </div>
              
              <Button size="lg" className="w-full h-14 rounded-xl text-lg font-bold group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
