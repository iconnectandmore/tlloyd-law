import React from "react";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <Testimonials />
      <Consultation />
    </>
  );
};

export default HomePage;
