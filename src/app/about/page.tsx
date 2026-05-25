import type { Metadata } from "next";
import { About } from "@/src/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Bayu Dani Kurniawan — a Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
  openGraph: {
    title: "About | Bayu Dani Kurniawan",
    description:
      "Learn more about Bayu Dani Kurniawan — a Fullstack Developer & Mobile Engineer specializing in web applications, mobile apps, AI-integrated systems, and augmented reality experiences.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative z-10">
      <About />
    </main>
  );
}
