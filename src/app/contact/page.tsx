import type { Metadata } from "next";
import { Contact } from "@/src/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bayu Dani Kurniawan — Fullstack Developer & Mobile Engineer. Available for projects, collaboration, and professional opportunities.",
  openGraph: {
    title: "Contact | Bayu Dani Kurniawan",
    description:
      "Get in touch with Bayu Dani Kurniawan — Fullstack Developer & Mobile Engineer. Available for projects, collaboration, and professional opportunities.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative z-10">
      <Contact />
    </main>
  );
}
