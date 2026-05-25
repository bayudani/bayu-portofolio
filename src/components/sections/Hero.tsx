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
import { useState, useEffect } from "react";

const TYPING_WORDS = [
  "Fullstack Developer",
  "Mobile Engineer",
  "AI Enthusiast",
  "AR Developer",
  "UI/UX Designer",
];

const ORBIT_TECH_LIST = [
  { name: "Laravel", angle: 0 },
  { name: "Flutter", angle: 60 },
  { name: "Node.js", angle: 120 },
  { name: "Gemini", angle: 180 },
  { name: "Kotlin", angle: 240 },
  { name: "React", angle: 300 },
];

const TECH_COLORS: Record<string, string> = {
  Laravel: "#FF2D20",
  Flutter: "#02569B",
  "Node.js": "#339933",
  Gemini: "#4285F4",
  Kotlin: "#7F52FF",
  React: "#61DAFB",
};

export function Hero() {
  const [orbitR, setOrbitR] = useState(140);

  useEffect(() => {
    const check = () => setOrbitR(window.innerWidth < 640 ? 110 : 140);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden">
            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20" />
            <div className="absolute inset-4 rounded-full border border-purple-500/10" />

            {/* Orbiting tech icons */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              {ORBIT_TECH_LIST.map((tech) => {
                const rad = (tech.angle * Math.PI) / 180;
                const r = orbitR;
                const x = Math.round(Math.cos(rad) * r);
                const y = Math.round(Math.sin(rad) * r);
                return (
                  <div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full glass flex items-center justify-center text-[7px] font-bold animate-[counter-spin_20s_linear_infinite]"
                      style={{ color: TECH_COLORS[tech.name] || "#fff" }}
                      title={tech.name}
                    >
                      {tech.name.slice(0, 2)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-purple-500/30 glow-purple">
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
