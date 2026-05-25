import type { Metadata } from "next";
import { Experience } from "@/src/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Bayu Dani Kurniawan — fullstack development roles, project-based work, and freelance experience in web and mobile development.",
  openGraph: {
    title: "Experience | Bayu Dani Kurniawan",
    description:
      "Professional experience of Bayu Dani Kurniawan — fullstack development roles, project-based work, and freelance experience.",
  },
};

export default function ExperiencePage() {
  return (
    <main className="relative z-10">
      <Experience />
    </main>
  );
}
