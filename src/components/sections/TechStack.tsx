"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { PROFILE_DATA } from "@/src/data/profile";
import { TECH_ICONS, TECH_COLORS } from "@/src/data/tech-icons";
import {
  Code2, Database, Smartphone, Cpu, CuboidIcon as Cube, Brain,
} from "lucide-react";

const STACK_CATEGORIES = [
  {
    label: "Frontend",
    icon: Code2,
    color: "text-purple-400",
    items: ["React", "Tailwind", "Next.js", "TypeScript"],
  },
  {
    label: "Backend",
    icon: Cpu,
    color: "text-blue-400",
    items: ["Laravel", "ExpressJS", "NodeJS", "REST API"],
  },
  {
    label: "Database",
    icon: Database,
    color: "text-teal-400",
    items: ["MySQL", "Redis", "MongoDB"],
  },
  {
    label: "Mobile",
    icon: Smartphone,
    color: "text-green-400",
    items: ["Flutter", "Kotlin", "Android"],
  },
  {
    label: "AI & ML",
    icon: Brain,
    color: "text-orange-400",
    items: ["Gemini AI", "TensorFlow", "Computer Vision"],
  },
  {
    label: "AR & 3D",
    icon: Cube,
    color: "text-pink-400",
    items: ["ARCore", "Unity", "Three.js"],
  },
];

export function TechStack() {
  return (
    <section id="tech" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Tech Stack" subtitle="Technologies" glow="purple" />

        {/* Orbit display */}
        <div className="relative flex items-center justify-center mb-20">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/10" />
            <div className="absolute inset-8 rounded-full border border-purple-500/10" />
            <div className="absolute inset-16 rounded-full border border-purple-500/10" />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow-purple">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Orbiting items */}
            {PROFILE_DATA.stack.map((tech, i) => {
              const radius = 90 + (i % 3) * 30;
              const angle = (i / PROFILE_DATA.stack.length) * 360;
              const delay = i * 0.5;
              const Icon = TECH_ICONS[tech];

              return (
                <motion.div
                  key={tech}
                  className="absolute top-1/2 left-1/2"
                  style={{ width: 0, height: 0 }}
                  initial={false}
                >
                  <motion.div
                    className="absolute"
                    style={{ width: 0, height: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: delay / 30 }}
                  >
                    <div
                      className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full glass flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all duration-300"
                      style={{
                        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                      }}
                      title={tech}
                    >
                      {Icon ? (
                        <Icon className="w-5 h-5" style={{ color: TECH_COLORS[tech] || "#fff" }} />
                      ) : (
                        <span className="text-[7px] font-bold text-white">{tech.slice(0, 2)}</span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                    <h3 className="text-white font-semibold">{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="glass rounded-lg px-3 py-1 text-xs text-muted-foreground group-hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
