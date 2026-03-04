"use client";

import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <div className="lg:mt-40 md:mt-70 mt-40">
        <AboutMe />
      </div>
    </>
  );
}
