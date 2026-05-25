import { Hero } from "@/src/components/sections/Hero";
import { FAQ } from "@/src/components/sections/FAQ";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <FAQ />
    </main>
  );
}
