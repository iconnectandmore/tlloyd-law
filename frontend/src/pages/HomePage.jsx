import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#ece4d6]">
      <TopBar />
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Testimonials />
      <Consultation />
      <Footer />
    </div>
  );
};

export default HomePage;
