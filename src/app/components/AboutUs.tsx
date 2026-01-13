import Image from "next/image";
import { aboutData } from "../utils";
import { useTheme } from "../providers/ThemeProvider";
import Title from "./Title";

const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section bg-background">
      <Title
        imageAlt="questionmark_icon"
        imageUrl="/questionmark.png"
        details="We combine technical excellence with a passion for blockchain
            innovation"
        title="Why Choose Lucent Labs"
        textColor="text-blue-light"
      />
      <div className="grid md:grid-cols-2 max-w-300 gap-3 md:gap-6">
        {aboutData.map((about, idx) => (
          <div
            key={idx}
            className={`text-black flex flex-col gap-2 md:gap-4 justify-center items-center px-6 md:px-8 lg:px-12 py-6 w-full rounded-4xl transition-all duration-200 ${
              isDark ? "bg-[#deecf5] hover:bg-[#B4DDF7]" : "bg-[#f9f0f2]"
            }`}
          >
            <Image
              src={about.imageUrl}
              alt={about.imageAlt}
              width={194}
              height={15}
            ></Image>
            <h4 className="2xl:text-2xl text-xl font-bold">{about.title}</h4>
            <p className="font-semibold text-sm xl:text-lg">{about.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
