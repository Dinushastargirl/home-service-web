import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Background3D } from "@/components/Background3D";
import { useMode } from "@/context/ModeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Layout() {
  const { mode } = useMode();
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (mode === "creative") {
      const sections = gsap.utils.toArray("section");
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      });
    }
  }, { scope: mainRef, dependencies: [mode] });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
      <ScrollToTop />
      <Background3D />
      <Navbar />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
