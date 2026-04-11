import React from "react";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
