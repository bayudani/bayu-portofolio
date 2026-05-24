"use client";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  glow?: "purple" | "blue" | "accent";
}

export function SectionHeading({ title, subtitle, glow = "purple" }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className={`h-px w-8 ${glow === "purple" ? "bg-purple-500/50" : glow === "blue" ? "bg-blue-500/50" : "bg-teal-500/50"}`} />
          <span className={`text-xs font-medium uppercase tracking-[0.2em] ${glow === "purple" ? "text-purple-400" : glow === "blue" ? "text-blue-400" : "text-teal-400"}`}>
            {subtitle || "Section"}
          </span>
          <div className={`h-px w-8 ${glow === "purple" ? "bg-purple-500/50" : glow === "blue" ? "bg-blue-500/50" : "bg-teal-500/50"}`} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
