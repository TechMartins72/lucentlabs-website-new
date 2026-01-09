import React from "react";
import Title from "./Title";
import { useTheme } from "../providers/ThemeProvider";

const OurTeam = () => {
  const { isDark } = useTheme();
  return (
    <section className="section bg-hero-bg">
      <Title
        imageAlt="team_icon"
        imageUrl="/team.png"
        details="Experienced professionals dedicated to advancing Web3 technology"
        title="Meet Our Team"
        textColor={`${isDark ? "text-blue-light" : "text-blue-dark"}`}
      />
    </section>
  );
};

export default OurTeam;
