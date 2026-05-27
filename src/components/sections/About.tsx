"use client";

import Image from "next/image";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { PROFILE_DATA } from "@/src/data/profile";
import { TECH_ICONS, TECH_COLORS } from "@/src/data/tech-icons";

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
                My expertise spans across the full development stack from architecting 
                scalable backend systems with Node.js and Laravel, to building intuitive 
                frontend interfaces, to integrating cutting-edge AI and AR capabilities.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {PROFILE_DATA.stack.slice(0, 8).map((tech) => {
                  const Icon = TECH_ICONS[tech];
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" style={{ color: TECH_COLORS[tech] }} />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76">
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
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
