import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A standard website project usually takes 4-6 weeks from discovery to launch. More complex custom builds or e-commerce sites can take 8-12 weeks depending on the scope.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance packages to ensure your site stays secure, fast, and up-to-date. Our Premium package includes priority monthly support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every site we build is mobile-first and fully responsive, ensuring a perfect experience on smartphones, tablets, and desktops.",
  },
  {
    question: "Can you help with SEO and ranking on Google?",
    answer: "Yes, all our packages include basic SEO setup. We also offer advanced SEO strategies and monthly growth reports to help you dominate your local market.",
  },
  {
    question: "What platform do you use to build websites?",
    answer: "We primarily use modern stacks like React, Next.js, and Tailwind CSS for performance. For clients needing easy content management, we integrate headless CMS solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                Common Questions
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-8">
                Everything You <span className="text-primary italic">Need</span> to Know
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Can't find the answer you're looking for? Reach out to our team and we'll get back to you within 24 hours.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all duration-300"
              >
                Ask a Question <Plus className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border transition-all duration-500 ${
                    openIndex === index ? "bg-white/[0.03] border-primary/30" : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <span className="text-lg md:text-xl font-medium tracking-tight pr-8">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180 bg-primary border-primary" : ""}`}>
                      {openIndex === index ? <Minus className="w-4 h-4 text-primary-foreground" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
