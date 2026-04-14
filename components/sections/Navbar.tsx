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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-pine-accent/10 py-2 shadow-sm" 
        : "bg-transparent py-5"
    }`}>
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
      <button className={`md:hidden transition-colors duration-500 ${isScrolled ? "text-[#333333]" : "text-white"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
};
