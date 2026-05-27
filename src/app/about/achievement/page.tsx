import type { Metadata } from "next";
import { Achievement } from "@/src/components/sections/Achievement";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Competitions, awards and accomplishments of Bayu Dani Kurniawan — competition wins, hackathon achievements, and academic excellence in software engineering.",
  openGraph: {
    title: "Achievements | Bayu Dani Kurniawan",
    description:
      "Competitions, awards and accomplishments of Bayu Dani Kurniawan — competition wins, hackathon achievements, and academic excellence.",
  },
};

export default function AchievementPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Achievement", item: "/about/achievement" },
      ]} />
      <Achievement />
    </>
  );
}
