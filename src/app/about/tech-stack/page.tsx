import type { Metadata } from "next";
import { TechStack } from "@/src/components/sections/TechStack";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Technologies, frameworks and tools used by Bayu Dani Kurniawan — including React, Next.js, Laravel, Flutter, Kotlin, Node.js, Gemini AI, ARCore, and more across frontend, backend, mobile, AI, and AR.",
  openGraph: {
    title: "Tech Stack | Bayu Dani Kurniawan",
    description:
      "Technologies, frameworks and tools used by Bayu Dani Kurniawan — including React, Next.js, Laravel, Flutter, Kotlin, Node.js, Gemini AI, ARCore, and more.",
  },
};

export default function TechStackPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Tech Stack", item: "/about/tech-stack" },
      ]} />
      <TechStack />
    </>
  );
}
