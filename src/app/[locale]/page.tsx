"use client";

import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Experiences from "@/components/sections/Experiences";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <div className="lg:w-[94dvw] w-[90dvw] lg:mt-40 md:mt-70 mx-auto mt-40 flex flex-col gap-35">
        <AboutMe />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
