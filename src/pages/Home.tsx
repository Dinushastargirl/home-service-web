import React from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Pricing />
      <Process />
      <Portfolio />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
