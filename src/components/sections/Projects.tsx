"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "@/src/components/shared/Reveal";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { PROJECTS } from "@/src/data/projects";
import { PROFILE_DATA } from "@/src/data/profile";

export function Projects() {
  const mainProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== mainProject.id);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" subtitle="My Work" glow="blue" />

        {/* Main featured project */}
        <Reveal>
          <Link href={`/projects/${mainProject.slug}`}>
            <motion.div
              className="glass rounded-3xl overflow-hidden mb-6 group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={mainProject.image}
                    alt={mainProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">
                    {mainProject.cat}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {mainProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {mainProject.desc}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {mainProject.details.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {mainProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass rounded-lg px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <span className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      View project details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </Reveal>

        {/* All projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otherProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} direction="up">
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <motion.div
                  className="glass rounded-2xl overflow-hidden group cursor-pointer h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wider">
                      {project.cat}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded glass text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                        View details &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* View all link */}
        <Reveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-400 transition-colors"
            >
              View all projects on GitHub
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
