"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Rooms", href: "#rooms", id: "rooms" },
  { name: "Lounge", href: "#lounge", id: "lounge" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (isMenuOpen) {
      const close = () => setIsMenuOpen(false);
      window.addEventListener("scroll", close, { once: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-pine-accent/10 py-2 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Pine Air Logo"
              width={70}
              height={70}
              className="object-contain transition-all duration-500"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-all duration-300 underline-offset-8 decoration-pine-accent/30 ${
                isScrolled
                  ? activeSection === item.id
                    ? "text-pine-accent font-bold underline"
                    : "text-[#333333] hover:text-pine-accent hover:underline"
                  : activeSection === item.id
                  ? "text-white font-bold underline decoration-white/50"
                  : "text-white/80 hover:text-white hover:underline"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger / Close button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className={`md:hidden p-1 rounded transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-accent ${
            isScrolled || isMenuOpen ? "text-[#333333]" : "text-white"
          }`}
        >
          {isMenuOpen ? (
            /* X icon */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white/97 backdrop-blur-lg shadow-xl transition-all duration-400 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen ? "max-h-screen pt-[80px] pb-8" : "max-h-0 pt-0 pb-0"
        }`}
        style={{
          transitionTimingFunction: isMenuOpen
            ? "cubic-bezier(0.4, 0, 0.2, 1)"
            : "cubic-bezier(0.4, 0, 1, 1)",
        }}
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col items-center space-y-1 px-6">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="w-full"
              style={{
                transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 300ms ease, transform 300ms ease",
              }}
            >
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center py-4 text-sm tracking-widest uppercase font-medium border-b border-gray-100 transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-pine-accent font-bold"
                    : "text-[#333333] hover:text-pine-accent"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
