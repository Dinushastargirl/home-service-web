import { motion } from "motion/react";
import { Layout, Zap, RefreshCcw, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Custom Web Design",
    description: "Built from scratch to match your brand and optimized for the home service industry. No generic templates."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lead-Gen Landing Pages",
    description: "High-converting pages designed for specific ad campaigns (Google Ads/FB) to maximize your ROI."
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-primary" />,
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, mobile-friendly sales machine that actually brings in calls."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Monthly Maintenance",
    description: "Peace of mind with regular updates, security monitoring, and performance optimization for your site."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl mb-6">Everything you need to <span className="text-gradient">win more jobs</span></h3>
          <p className="text-lg text-muted-foreground">
            I specialize in the technical and design aspects of your online presence so you can focus on your trade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-secondary/20 border-white/5 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
