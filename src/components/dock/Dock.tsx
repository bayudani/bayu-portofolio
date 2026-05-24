"use client";

import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderKanban,
  Award,
  GraduationCap,
  Briefcase,
  MapPin,
  Cpu,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Achievement", href: "#achievement", icon: Award },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Journey", href: "#journey", icon: MapPin },
  { label: "Tech Stack", href: "#tech", icon: Cpu },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Dock() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Main navigation"
    >
      <div className="glass-strong rounded-2xl px-2 sm:px-3 py-2 flex items-center gap-0.5 sm:gap-1 shadow-2xl shadow-purple-600/10 max-w-[calc(100vw-32px)] overflow-x-auto scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.href);
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative flex flex-col items-center gap-0.5 px-1.5 sm:px-2.5 py-1.5 group shrink-0"
              aria-label={item.label}
            >
              <div className="relative">
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
                    isActive
                      ? "text-purple-400"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute -inset-2 bg-purple-600/15 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
              <span
                className={`text-[7px] sm:text-[9px] font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive ? "text-purple-400 opacity-100" : "text-muted-foreground opacity-0 sm:group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
