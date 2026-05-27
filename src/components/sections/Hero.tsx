"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PROFILE_DATA } from "@/src/data/profile";
import { TypeAnimation } from "@/src/components/shared/TypeAnimation";
import { FloatingCard } from "@/src/components/shared/FloatingCard";
import Link from "next/link";
import { TECH_ICONS, TECH_COLORS } from "@/src/data/tech-icons";

const TYPING_WORDS = [
  "Fullstack Developer",
  "Mobile Engineer",
  "AI Enthusiast",
  "AR Developer",
  "UI/UX Designer",
];

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-24 md:pt-20 md:pb-32 z-10"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-8"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-green-400 font-medium">Available for Projects</span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Bayu</span>{" "}
              <span className="text-gradient">Dani</span>
              <br />
              <span className="text-white">Kurniawan</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground flex items-center gap-2">
              <span className="text-white/60">I&apos;m a</span>
              <TypeAnimation
                words={TYPING_WORDS}
                className="text-purple-400 font-semibold"
              />
            </div>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            {PROFILE_DATA.bio}
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {PROFILE_DATA.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 glow-purple"
              aria-label="View Projects"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass hover:bg-white/10 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass hover:bg-white/10 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right - Profile + Orbit */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 overflow-hidden">
            {/* Orbit rings — like planetary paths */}
            <div className="absolute inset-0 rounded-full border border-purple-500/15" />
            <div className="absolute inset-5 rounded-full border border-purple-500/10" />
            <div className="absolute inset-10 rounded-full border border-purple-500/5" />

            {/* Orbiting tech icons — like planets around the sun */}
            <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
              {PROFILE_DATA.stack.map((tech, i) => {
                const ringIndex = i % 3;
                const countInRing = ringIndex === 2 ? 3 : 4;
                const positionInRing = Math.floor(i / 3);
                const angle = (positionInRing / countInRing) * 360 + ringIndex * 20;
                const rad = (angle * Math.PI) / 180;
                const r = 85 + ringIndex * 30;
                const x = Math.round(Math.cos(rad) * r);
                const y = Math.round(Math.sin(rad) * r);
                const Icon = TECH_ICONS[tech];
                return (
                  <div
                    key={tech}
                    className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full glass flex items-center justify-center animate-[counter-spin_25s_linear_infinite] hover:border-purple-500/30 hover:scale-125 transition-all duration-300"
                      title={tech}
                    >
                      {Icon ? (
                        <Icon className="w-3.5 h-3.5" style={{ color: TECH_COLORS[tech] || "#fff" }} />
                      ) : (
                        <span className="text-[6px] font-bold text-white">{tech.slice(0, 2)}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile Image — the sun */}
            <div className="absolute inset-11 rounded-full overflow-hidden border-2 border-purple-500/30 glow-purple">
              <Image
                src={PROFILE_DATA.avatar}
                alt={PROFILE_DATA.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating cards around profile */}
          <FloatingCard className="absolute -top-2 right-0 sm:-top-4 sm:right-4 glass rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg" delay={0}>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" />
              <span className="text-[10px] sm:text-xs font-medium text-white">Fullstack Dev</span>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -bottom-1 left-2 sm:-bottom-2 sm:left-4 glass rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg" delay={1}>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
              <span className="text-[10px] sm:text-xs font-medium text-white">10+ Projects</span>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute top-10 -left-3 sm:top-12 sm:-left-6 glass rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg" delay={0.5}>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-medium text-purple-400">#OpenToWork</span>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}
