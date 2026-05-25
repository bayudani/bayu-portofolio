import type { Metadata } from "next";
import { Journey } from "@/src/components/sections/Journey";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The learning and career journey of Bayu Dani Kurniawan — from starting in software engineering to building fullstack, mobile, AI, and AR applications.",
  openGraph: {
    title: "Journey | Bayu Dani Kurniawan",
    description:
      "The learning and career journey of Bayu Dani Kurniawan — from starting in software engineering to building fullstack, mobile, AI, and AR applications.",
  },
};

export default function JourneyPage() {
  return (
    <main className="relative z-10">
      <Journey />
    </main>
  );
}
