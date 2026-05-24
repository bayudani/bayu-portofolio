import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Projects } from "@/src/components/sections/Projects";
import { Experience } from "@/src/components/sections/Experience";
import { Education } from "@/src/components/sections/Education";
import { Achievement } from "@/src/components/sections/Achievement";
import { Journey } from "@/src/components/sections/Journey";
import { TechStack } from "@/src/components/sections/TechStack";
import { Contact } from "@/src/components/sections/Contact";
import { FAQ } from "@/src/components/sections/FAQ";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievement />
      <Journey />
      <TechStack />
      <Contact />
      <FAQ />

      <footer className="relative py-8 px-4 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bayu Dani Kurniawan..
          </p>
        </div>
      </footer>
    </main>
  );
}
