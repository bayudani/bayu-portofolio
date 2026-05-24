"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { PROFILE_DATA } from "@/src/data/profile";

const TERMINAL_LINES = [
  { text: "> Initializing contact...", delay: 300 },
  { text: "> System ready.", delay: 600 },
  { text: "> bayu22122017@gmail.com", delay: 900 },
  { text: "> Ready for new connections.", delay: 1200 },
];

export function Contact() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    TERMINAL_LINES.forEach((line) => {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line.text]);
      }, line.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("bayu22122017@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section id="contact" className="relative py-32 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Contact" subtitle="Get in Touch" glow="purple" />

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal direction="left">
            <div className="glass rounded-2xl p-6 font-mono text-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-muted-foreground text-xs ml-2">contact.sh — terminal</span>
              </div>

              {/* Terminal content */}
              <div className="space-y-2 min-h-[160px]">
                {displayedLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={
                      line.startsWith(">")
                        ? "text-green-400"
                        : "text-purple-400"
                    }
                  >
                    {line}
                    {i === displayedLines.length - 1 && (
                      <span className="animate-pulse text-green-400">▌</span>
                    )}
                  </motion.div>
                ))}
                {displayedLines.length < TERMINAL_LINES.length && (
                  <span className="animate-pulse text-green-400">▌</span>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">bayu22122017@gmail.com</span>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    aria-label={copied ? "Copied" : "Copy email"}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-white font-semibold mb-3">Social</h3>
                <div className="flex gap-3">
                  <a
                    href={PROFILE_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:border-purple-500/30 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={PROFILE_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:border-purple-500/30 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:border-purple-500/30 transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Location</h3>
                <p className="text-sm text-muted-foreground">
                  {PROFILE_DATA.location}, Indonesia
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
