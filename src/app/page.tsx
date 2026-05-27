import { Hero } from "@/src/components/sections/Hero";
import { FAQ } from "@/src/components/sections/FAQ";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
        { name: "Projects", item: "/projects" },
        { name: "Contact", item: "/contact" },
      ]} />
      <main className="relative z-10">
        <Hero />
        <FAQ />
      </main>
    </>
  );
}
