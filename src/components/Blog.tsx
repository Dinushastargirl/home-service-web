import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Strategy", "Design", "Growth", "Tech"];

const posts = [
  {
    title: "How to Increase Your Conversion Rate by 200%",
    excerpt: "Discover the psychological triggers that turn casual visitors into loyal customers.",
    category: "Strategy",
    date: "Oct 12, 2024",
    author: "Alex Spark",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "The Future of Minimalist Web Design in 2025",
    excerpt: "Why less is more when it comes to high-performance digital experiences.",
    category: "Design",
    date: "Oct 08, 2024",
    author: "Elena R.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
  },
  {
    title: "Why Speed is the #1 Factor for Google Ranking",
    excerpt: "A deep dive into Core Web Vitals and how to optimize your site for lightning speed.",
    category: "Tech",
    date: "Oct 05, 2024",
    author: "David C.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Scaling Your Small Business with Automation",
    excerpt: "How to use digital tools to reclaim your time and scale your revenue.",
    category: "Growth",
    date: "Sep 28, 2024",
    author: "Alex Spark",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              Insights & News
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight leading-[1.1]"
            >
              The <span className="text-primary italic">Spark</span> Journal
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : "bg-transparent border-white/10 text-foreground/60 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-primary">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-[10px] group/btn">
                      Read More <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
