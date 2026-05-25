import type { Metadata } from "next";
import { Achievement } from "@/src/components/sections/Achievement";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "View the awards and achievements of Bayu Dani Kurniawan — competition wins, hackathon achievements, and academic excellence in software engineering.",
  openGraph: {
    title: "Achievements | Bayu Dani Kurniawan",
    description:
      "View the awards and achievements of Bayu Dani Kurniawan — competition wins, hackathon achievements, and academic excellence.",
  },
};

export default function AchievementPage() {
  return (
    <main className="relative z-10">
      <Achievement />
    </main>
  );
}
