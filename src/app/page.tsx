"use client";

import React from "react";
import { ModeType } from "./utils/types";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProductsAndSolution from "./components/ProductsAndSolution";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  return (
    <main className={`${isDark && "dark"} relative`}>
      <Header />
      <HeroSection />
      <AboutUs />
      <ProductsAndSolution />
      <OurTeam />
      <Contact />
      <Footer />
    </main>
  );
}
