"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; 
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="flex h-16 items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "px-4 py-2 text-sm transition-colors hover:text-foreground/80",
              activeSection === item.id
                ? "text-foreground font-medium"
                : "text-foreground/60"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;