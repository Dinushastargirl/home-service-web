import React from "react";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <Process />
      <CTA />
    </div>
  );
}
