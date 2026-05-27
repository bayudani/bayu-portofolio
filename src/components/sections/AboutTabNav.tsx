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
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="glass rounded-2xl px-2 py-2 flex items-center gap-1 min-w-max mx-auto">
        {ABOUT_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors whitespace-nowrap"
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="about-active-tab"
                  className="absolute inset-0 bg-purple-600/20 rounded-xl border border-purple-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-purple-400" : "text-muted-foreground hover:text-foreground"}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
