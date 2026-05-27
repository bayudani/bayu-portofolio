import type { Metadata } from "next";
import { Projects } from "@/src/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Bayu Dani Kurniawan — including Rekaloka, FitID Gym, Moonlight Memories, AR Biolens, FloodGuard, and more. Fullstack web, mobile, AI, and AR projects.",
  openGraph: {
    title: "Projects | Bayu Dani Kurniawan",
    description:
      "Explore projects built by Bayu Dani Kurniawan — including Rekaloka, FitID Gym, Moonlight Memories, AR Biolens, FloodGuard, and more.",
  },
};

import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "Projects", item: "/projects" },
      ]} />
      <main className="relative z-10">
        <Projects />
      </main>
    </>
  );
}
