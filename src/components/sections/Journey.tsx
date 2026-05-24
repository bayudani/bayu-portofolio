"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { JOURNEY_DATA } from "@/src/data/journey";

export function Journey() {
  return (
    <section id="journey" className="relative py-32 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="My Journey" subtitle="Roadmap" glow="accent" />

        <div className="relative">
          {/* Animated progress line */}
          <motion.div
            className="absolute left-[26px] top-0 w-0.5 bg-gradient-to-b from-teal-400 via-purple-500 to-blue-500"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.25, 0.4, 0.25, 1] }}
          />

          <div className="space-y-8">
            {JOURNEY_DATA.map((item, i) => (
              <Reveal key={i} delay={i * 0.15} direction="left">
                <motion.div
                  className="relative pl-16 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] top-1 w-[17px] h-[17px] rounded-full bg-background border-2 border-teal-400 flex items-center justify-center z-10 group-hover:border-purple-400 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-purple-400 transition-colors" />
                  </div>

                  {/* Year badge */}
                  <div className="mb-2">
                    <span className="text-xs font-mono text-teal-400 glass rounded-full px-3 py-1">
                      {item.year}
                    </span>
                  </div>

                  <div className="glass rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-500">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
