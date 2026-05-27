import type { Metadata } from "next";
import { AboutTabNav } from "@/src/components/sections/AboutTabNav";
import { AboutContent } from "@/src/components/sections/AboutContent";

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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-20 md:py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <AboutTabNav />
        <div className="mt-8">
          <AboutContent>{children}</AboutContent>
        </div>
      </div>
    </section>
  );
}
