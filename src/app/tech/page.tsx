import type { Metadata } from "next";
import { TechStack } from "@/src/components/sections/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Technologies used by Bayu Dani Kurniawan — including React, Next.js, Laravel, Flutter, Kotlin, Node.js, Gemini AI, ARCore, and more across frontend, backend, mobile, AI, and AR.",
  openGraph: {
    title: "Tech Stack | Bayu Dani Kurniawan",
    description:
      "Technologies used by Bayu Dani Kurniawan — including React, Next.js, Laravel, Flutter, Kotlin, Node.js, Gemini AI, ARCore, and more.",
  },
};

export default function TechStackPage() {
  return (
    <main className="relative z-10">
      <TechStack />
    </main>
  );
}
