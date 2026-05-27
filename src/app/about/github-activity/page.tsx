import type { Metadata } from "next";
import { GithubActivity } from "@/src/components/sections/GithubActivity";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "GitHub Activity",
  description:
    "GitHub activity, contributions and open source projects by Bayu Dani Kurniawan — contribution heatmap, repositories, and recent activity.",
  openGraph: {
    title: "GitHub Activity | Bayu Dani Kurniawan",
    description:
      "GitHub activity, contributions and open source projects by Bayu Dani Kurniawan — contribution heatmap, repositories, and recent activity.",
  },
};

export default function GithubActivityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "GitHub Activity", item: "/about/github-activity" },
      ]} />
      <GithubActivity />
    </>
  );
}
