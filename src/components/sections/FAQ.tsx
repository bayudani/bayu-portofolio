"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { FAQ_DATA } from "@/src/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="FAQ" subtitle="Common Questions" glow="blue" />

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  openIndex === i ? "border-blue-500/30" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(openIndex === i ? null : i);
                  }
                }}
                aria-expanded={openIndex === i}
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-sm md:text-base font-medium text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
