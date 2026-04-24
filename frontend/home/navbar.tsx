"use client";

import { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { label: "Case Studies", href: "#features" },
  { label: "Approach", href: "#advantages" },
  { label: "Insights", href: "#testimonials" },
  { label: "Contact", href: "#footer-cta" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={cn(
          "fixed top-4 inset-x-0 z-50 flex justify-center",
          "transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          isScrolled ? "top-3" : "top-4"
        )}
      >
        <nav
          className={cn(
            "relative flex items-center justify-between overflow-hidden",
            "border border-white/25 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            isScrolled
              ? "rounded-2xl px-5 py-3 bg-white/20 backdrop-blur-xl w-[calc(100%-2rem)] max-w-[400px]"
              : "rounded-full px-8 py-4 bg-white/10 backdrop-blur-md w-[calc(100%-2rem)] max-w-4xl"
          )}
          style={{
            boxShadow: isScrolled
              ? "0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
          }}
        >
          {/* Animated background gradient on scroll */}
          <div
            className={cn(
              "absolute inset-0 -z-10 transition-all duration-700",
              "bg-gradient-to-r from-white/20 via-white/15 to-white/20",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Logo */}
          <a
            href="#"
            className={cn(
              "font-semibold tracking-tight text-[#0A0A0A] transition-all duration-500 ease-out",
              isScrolled ? "text-lg" : "text-xl lg:text-2xl"
            )}
          >
            Sandwich
          </a>

          {/* Desktop Navigation Links */}
          <div
            className={cn(
              "hidden items-center gap-8 transition-all duration-500 lg:flex absolute left-1/2 -translate-x-1/2",
              isScrolled
                ? "opacity-0 scale-95 pointer-events-none"
                : "opacity-100 scale-100"
            )}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative text-sm font-medium text-white hover:text-[#0A0A0A]/90 transition-all duration-300 group whitespace-nowrap"
                style={{
                  transitionDelay: isScrolled ? "0ms" : `${index * 30}ms`,
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0A0A0A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "flex items-center justify-center text-[#0A0A0A] transition-all duration-500 ease-out rounded-lg flex-shrink-0",
              "hover:bg-black/5",
              isScrolled
                ? "w-9 h-9 opacity-100 scale-100"
                : "w-8 h-8 lg:w-0 lg:opacity-0 lg:scale-75 lg:pointer-events-none"
            )}
            aria-label="Open menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-transform duration-300"
            >
              <line x1="4" y1="6" x2="20" y2="6" className="transition-all duration-300" />
              <line x1="4" y1="12" x2="20" y2="12" className="transition-all duration-300" />
              <line x1="4" y1="18" x2="20" y2="18" className="transition-all duration-300" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500",
          isMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop with animated blur */}
        <div
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel with glassmorphism */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-4"
          )}
        >
          <div
            className={cn(
              "relative w-full max-w-3xl",
              "rounded-[2rem] p-8 sm:p-12 lg:p-14",
              "border border-white/40 bg-white/75",
              "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              isMenuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            )}
            style={{
              backdropFilter: isMenuOpen ? "blur(40px) saturate(180%)" : "blur(20px) saturate(100%)",
              WebkitBackdropFilter: isMenuOpen ? "blur(40px) saturate(180%)" : "blur(20px) saturate(100%)",
              boxShadow: isMenuOpen
                ? "0 32px 64px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                : "0 16px 32px -8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), backdrop-filter 0.6s ease-out",
            }}
          >
            {/* Menu Header */}
            <div
              className={cn(
                "flex items-center justify-between mb-10 sm:mb-12 transition-all duration-500",
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              )}
              style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
            >
              <a
                href="#"
                className="text-2xl font-semibold tracking-tight text-[#0A0A0A]"
              >
                Sandwich
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-[#0A0A0A] hover:bg-black/5 rounded-full transition-all duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation Links - Large Typography */}
            <nav className="space-y-1 sm:space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={cn(
                    "block text-[clamp(2rem,7vw,4rem)] font-semibold tracking-tight text-[#0A0A0A] leading-[1.1]",
                    "hover:translate-x-3 transition-all duration-300",
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 60 + 200}ms` : "0ms",
                  }}
                >
                  <span className="relative inline-block">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A0A0A] transition-all duration-400 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </nav>

            {/* Contact Info Footer */}
            <div
              className={cn(
                "mt-10 sm:mt-14 pt-8 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8",
                "transition-all duration-500",
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isMenuOpen ? "450ms" : "0ms" }}
            >
              <div>
              </div>
              <div>
                <p className="text-sm text-[#0A0A0A]/50 mb-2 tracking-wide uppercase">
                  Work With Us
                </p>
                <a
                  href="mailto:hello@new.studio"
                  className="block text-base sm:text-lg font-medium text-[#0A0A0A] hover:underline transition-all duration-200"
                >
                  hello@new.studio
                </a>
                <a
                  href="#footer-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#footer-cta");
                  }}
                  className="block text-base sm:text-lg font-medium text-[#0A0A0A] hover:underline mt-1 transition-all duration-200"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
