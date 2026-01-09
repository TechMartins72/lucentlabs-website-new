"use client";

import React from "react";
import { ModeType } from "./utils/types";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  return (
    <main className={`${isDark && "dark"}`}>
      <Header />
      <HeroSection />
    </main>
  );
}
