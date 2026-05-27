import type { Metadata } from "next";
import { Education } from "@/src/components/sections/Education";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

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
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Education", item: "/about/education" },
      ]} />
      <Education />
    </>
  );
}
