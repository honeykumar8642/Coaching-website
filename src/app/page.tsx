"use client";

import { CardHoverEffectDemo } from "./components/ExcellenceInEverySteps";
import { ParallaxScrollDemo } from "./components/Gallery";
import HeadingOurCourses from "./components/HeadingOurCourses";
import Hero from "./components/Hero";
import { FocusCardsDemo } from "./components/OurCourses";
import { Teachers } from "./components/TeachersSection";

import WhyweAreDifferent from "./components/WhyweAreDifferent";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyweAreDifferent />
      <HeadingOurCourses />
      <FocusCardsDemo />
      <Teachers />
      <CardHoverEffectDemo />
      <ParallaxScrollDemo />
    </>
  );
}
