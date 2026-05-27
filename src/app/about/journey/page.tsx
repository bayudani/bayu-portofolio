import type { Metadata } from "next";
import { Journey } from "@/src/components/sections/Journey";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Explore Bayu Dani Kurniawan's software engineering journey and milestones — from starting in software engineering to building fullstack, mobile, AI, and AR applications.",
  openGraph: {
    title: "Journey | Bayu Dani Kurniawan",
    description:
      "Explore Bayu Dani Kurniawan's software engineering journey and milestones — from starting in software engineering to building fullstack, mobile, AI, and AR applications.",
  },
};

export default function JourneyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Journey", item: "/about/journey" },
      ]} />
      <Journey />
    </>
  );
}
