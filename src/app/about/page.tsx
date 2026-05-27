import { About } from "@/src/components/sections/About";
import { BreadcrumbJsonLd } from "@/src/components/shared/BreadcrumbJsonLd";

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", item: "/" },
        { name: "About", item: "/about" },
      ]} />
      <About />
    </>
  );
}
