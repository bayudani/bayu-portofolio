"use client";

import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { PROFILE_DATA } from "@/src/data/profile";
import { Code2, Smartphone, Brain, Globe } from "lucide-react";

const EXPERTISE = [
  { icon: Code2, label: "Web Development", desc: "Fullstack web apps with Laravel, Express, React & modern frameworks" },
  { icon: Smartphone, label: "Mobile Development", desc: "Cross-platform & native mobile apps with Flutter & Kotlin" },
  { icon: Brain, label: "AI Integration", desc: "AI-powered features using Gemini AI, Open router" },
  { icon: Globe, label: "AR Experiences", desc: "Augmented reality applications with ARCore & Unity" },
];


export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Introduction" glow="purple" />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I am a dedicated Software Engineering student at Politeknik State Of Bengkalis, 
                based in Bengkalis, Riau, Indonesia. I specialize in building fullstack web 
                applications, mobile applications, AI-integrated systems, and augmented reality 
                experiences.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With over 2 years of hands-on experience, I have delivered 10+ projects ranging 
                from AI-powered cultural platforms to gym management systems. I am passionate 
                about leveraging technology to solve real-world problems and create impactful 
                digital products.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My expertise spans across the full development stack — from architecting 
                scalable backend systems with Node.js and Laravel, to building intuitive 
                frontend interfaces, to integrating cutting-edge AI and AR capabilities.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {PROFILE_DATA.stack.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="glass rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 group"
                  >
                    <Icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
