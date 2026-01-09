import Image from "next/image";
import { aboutData } from "../utils";
import { useTheme } from "../providers/ThemeProvider";
import Title from "./Title";

const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <section className="section bg-background">
      <Title
        imageAlt="questionmark_icon"
        imageUrl="/questionmark.png"
        details="We combine technical excellence with a passion for blockchain
            innovation"
        title="Why Choose Lucent Labs"
        textColor="text-blue-light"
      />
      <div className="grid grid-cols-2 max-w-300 gap-6">
        {aboutData.map((about, idx) => (
          <div
            key={idx}
            className={`text-black flex flex-col gap-4 justify-center items-center px-12 py-6 w-full rounded-4xl ${
              isDark ? "bg-[#B4DDF7]" : "bg-[#f9f0f2] shadow-lg"
            }`}
          >
            <Image
              src={about.imageUrl}
              alt={about.imageAlt}
              width={194}
              height={15}
            ></Image>
            <h4 className="text-2xl font-bold">{about.title}</h4>
            <p className="font-semibold">{about.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
