"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ABOUT_TABS = [
  { id: "bio", label: "Bio & Stack", href: "/about", exact: true },
  { id: "experience", label: "Experience", href: "/about/experience" },
  { id: "education", label: "Education", href: "/about/education" },
  { id: "journey", label: "Journey", href: "/about/journey" },
  { id: "achievement", label: "Achievement", href: "/about/achievement" },
  { id: "tech-stack", label: "Tech Stack", href: "/about/tech-stack" },
  { id: "github-activity", label: "GitHub Activity", href: "/about/github-activity" },
];

export function AboutTabNav() {
  const pathname = usePathname();

  const activeTab = ABOUT_TABS.find(
    (t) => (t.exact && pathname === t.href) || (!t.exact && pathname.startsWith(t.href))
  )?.id ?? "bio";

  return (
    <nav className="w-full overflow-x-auto scrollbar-none" aria-label="About sections">
      <div className="flex items-center gap-0 min-w-max mx-auto border-b border-white/5">
        {ABOUT_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className="relative px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors"
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={`${isActive ? "text-purple-400" : "text-muted-foreground hover:text-foreground"}`}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="about-active-line"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
