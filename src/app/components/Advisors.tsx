import Title from "./Title";
import { advisorsDetails } from "../utils";
import { useTheme } from "../providers/ThemeProvider";
import ImageFrame from "./ImageFrame";

const Advisors = () => {
  const { isDark } = useTheme();
  return (
    <section id="team" className="section bg-hero-bg">
      <Title
        imageAlt="team_icon"
        imageUrl="/team.png"
        details="Experienced professionals dedicated to advancing Web3 technology"
        title="Meet Our Advisors"
        textColor="text-blue-light"
      />
      Co-Founder at Fluidtokens
      <main className="w-full">
        <ImageFrame details={advisorsDetails} />
      </main>
    </section>
  );
};

export default Advisors;
