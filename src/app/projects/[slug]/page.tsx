import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub as FaGithubIcon } from "react-icons/fa";
import { PROJECTS } from "@/src/data/projects";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: `${project.desc} — ${project.details.overview}`,
    openGraph: {
      title: `${project.title} | Bayu Dani Kurniawan`,
      description: `${project.desc} — ${project.details.overview}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Bayu Dani Kurniawan`,
      description: `${project.desc} — ${project.details.overview}`,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "Projects", item: "/projects" },
        { name: project.title, item: `/projects/${project.slug}` },
      ]} />
      <main className="relative z-10">
      <section className="relative py-20 md:py-32 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
            aria-label="Back to projects"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Hero image */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          {/* Title & category */}
          <div className="mb-8">
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3 block">
              {project.cat}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="glass rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mb-12">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all glow-blue"
              aria-label={`Preview ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Preview
            </a>
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-foreground px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                aria-label={`${project.title} source code`}
              >
                <FaGithubIcon className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>

          {/* Problem, Solution, Technology, Impact */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-lg font-semibold text-white mb-3">Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-lg font-semibold text-white mb-3">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.solution}</p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-lg font-semibold text-white mb-3">Technology</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.technology}</p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-lg font-semibold text-white mb-3">Impact</h2>
              <p className="text-muted-foreground leading-relaxed">{project.details.impact}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8">
            <div className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-lg font-semibold text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-purple-400 mt-1 shrink-0">&#8226;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
