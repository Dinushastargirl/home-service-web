/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ModeProvider, useMode } from "@/context/ModeContext";
import { Background3D } from "@/components/Background3D";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const { mode } = useMode();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

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
      <Background3D />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Problem />
        <About />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  );
}



