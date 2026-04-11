import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-8">
                Let's Build Your <span className="text-primary italic">Empire</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Ready to transform your digital presence? Fill out the form or reach out directly. We're excited to hear about your project.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/30 transition-colors duration-500">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Email Us</h4>
                    <p className="text-lg font-bold">info.agentspark@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/30 transition-colors duration-500">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Call Us</h4>
                    <p className="text-lg font-bold">+94 783733819</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Email Address</label>
                    <Input placeholder="john@example.com" className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 ml-1">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="bg-white/[0.02] border-white/10 min-h-[150px] rounded-xl focus:border-primary/50 transition-all resize-none" />
                </div>
                <Button className="w-full h-16 bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold uppercase tracking-[0.2em] rounded-xl text-xs transition-all duration-500 group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
