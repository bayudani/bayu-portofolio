"use client";

import { Briefcase } from "lucide-react";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { EXPERIENCE_DATA } from "@/src/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="Work" glow="accent" />

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="glass rounded-2xl p-6 md:p-8 hover:border-teal-500/30 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <Briefcase className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <span className="text-xs text-teal-400 glass rounded-full px-3 py-0.5">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{exp.event}</p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
