import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "Custom 5-Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$2,499",
    description: "The ideal choice for growing businesses needing more power.",
    features: [
      "Custom 10-Page Website",
      "Advanced UI/UX Design",
      "Full SEO Optimization",
      "CMS Integration",
      "3 Months Support",
      "Speed Optimization",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$4,999",
    description: "Full-scale digital transformation for established brands.",
    features: [
      "Unlimited Pages",
      "Custom Animations & 3D",
      "E-commerce Integration",
      "Priority Support",
      "Conversion Rate Optimization",
      "Monthly Growth Reports",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1] mb-8"
          >
            Choose Your <span className="text-primary italic">Growth</span> Package
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Transparent pricing tailored to your business goals. No hidden fees, just results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full relative flex flex-col border-white/[0.05] bg-white/[0.02] transition-all duration-500 hover:border-primary/50 group ${pkg.popular ? 'glow-spark border-primary/30' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-bold uppercase tracking-tight mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-6">{pkg.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-widest">/ project</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-10 pt-6">
                  <Link to="/contact" className="w-full">
                    <Button 
                      className={`w-full h-14 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                        pkg.popular 
                          ? 'bg-primary text-primary-foreground hover:bg-white hover:text-black' 
                          : 'bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
