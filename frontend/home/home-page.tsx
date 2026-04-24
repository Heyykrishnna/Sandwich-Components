"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Advantages } from "@/frontend/home/advantages";
import { CTO } from "@/frontend/home/cto";
import { Features } from "@/frontend/home/features";
import { Footer } from "@/frontend/home/footer";
import Hero from "@/frontend/home/hero";
import { Sponsors } from "@/frontend/home/sponsors";
import { Testimonials } from "@/frontend/home/testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        opacity: 0,
        y: 34,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from("[data-stack-layer]", {
        opacity: 0,
        y: 44,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.25,
        ease: "power2.out",
      });

      gsap.utils
        .toArray<HTMLElement>("[data-feature-panel]")
        .forEach((panel, index) => {
          gsap.from(panel, {
            opacity: 0,
            x: index % 2 === 0 ? -72 : 72,
            y: 22,
            rotate: index % 2 === 0 ? -3 : 3,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-launch-card]")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            x: 36,
            y: 26,
            delay: index * 0.05,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-benefit-row]")
        .forEach((row, index) => {
          gsap.from(row, {
            opacity: 0,
            y: 44,
            duration: 0.85,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-showcase-card]")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 70,
            rotate: index === 1 ? 0 : index % 2 === 0 ? -5 : 5,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-testimonial-card]")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-cto-panel]")
        .forEach((panel, index) => {
          gsap.from(panel, {
            opacity: 0,
            y: 40,
            delay: index * 0.04,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 84%",
            },
          });
        });

      gsap.from("[data-footer-panel]", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-footer-panel]",
          start: "top 88%",
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="relative z-10 overflow-x-clip">
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <Sponsors />
      <CTO />
      <Footer />
    </div>
  );
}
