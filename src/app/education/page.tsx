import type { Metadata } from "next";
import { Education } from "@/src/components/sections/Education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of Bayu Dani Kurniawan — studying Software Engineering at Politeknik State Of Bengkalis, Riau, Indonesia.",
  openGraph: {
    title: "Education | Bayu Dani Kurniawan",
    description:
      "Academic background of Bayu Dani Kurniawan — studying Software Engineering at Politeknik State Of Bengkalis, Riau, Indonesia.",
  },
};

export default function EducationPage() {
  return (
    <main className="relative z-10">
      <Education />
    </main>
  );
}
