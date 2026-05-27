import type { Metadata } from "next";
import { Experience } from "@/src/components/sections/Experience";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

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
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Experience", item: "/about/experience" },
      ]} />
      <Experience />
    </>
  );
}
