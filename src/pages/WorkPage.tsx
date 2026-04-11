import React from "react";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  );
}
