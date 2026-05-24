"use client";

import { GraduationCap } from "lucide-react";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { EDUCATION_DATA } from "@/src/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic" glow="purple" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

          <div className="space-y-8">
            {EDUCATION_DATA.map((edu, i) => (
              <Reveal key={i} delay={i * 0.2} direction="left">
                <div className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-purple-500/30 border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  <div className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-1">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                    </div>
                    <p className="text-purple-400 text-sm font-medium mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.year}
                      {edu.grade && <span> — {edu.grade}</span>}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
