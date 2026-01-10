import Image from "next/image";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <div
      id="hero-section"
      className="bg-hero-bg w-full pb-18 pt-42 px-8 lg:px-18 xl:px-24 flex flex-col lg:flex-row justify-center items-center lg:gap-18 xl:gap-20 2xl:gap-28 relative text-center select-none"
    >
      <Image
        src={`${isDark ? "/herofaint.png" : "/herofaintlight.png"}`}
        alt="faint_background"
        height={25}
        width={350}
        className="absolute top-1/2 -translate-y-1/2 left-0 rotate-y-180"
      />
      <section className="flex-1 place-items-center">
        <p className="font-semibold tracking-widest text-sm md:text-md">Web3 Development Studio</p>
        <h2
          className={`bg-linear-to-r ${
            isDark
              ? "from-[#066AFF] to-[#87C1F6]"
              : "from-[#066AFF] to-[#0620A2]"
          } bg-clip-text primary-text text-transparent font-extended`}
        >
          Building the Future of the Web3 on Cardano and Midnight
        </h2>
        <p className="text-sm xl:text-lg">
          <span className="font-semibold">Lucent Labs</span> specializes in
          developing cutting-edge decentralized applications, smart contracts,
          and blockchain solutions. We're committed to advancing the{" "}
          <span className="font-semibold"> Cardano and Midnight </span>
          ecosystems through innovation and community engagement.
        </p>
        <div className="mt-8">
          <Button
            value="Build with us"
            bg={`${isDark ? "bg-[#066AFF4D]" : "bg-[#A6C7FA]"}`}
            href="#"
            outlineColor="bg-linear-to-r/srgb from-[#18C8CE] to-[#342492]"
            textColor={`${isDark ? "text-white" : "text-black"}`}
          />
        </div>
      </section>
      <section className="">
        <Image
          src={"/heroimage.png"}
          alt="image"
          width={577.09}
          height={524.58}
          className="max-md:w-[450] max-md:h-[400] max-lg:w-[480] max-lg:h-[450] max-xl:w-[500] max-xl:h-[470] max-2xl:w-[530] max-2xl:h-[500]"
        />
      </section>
    </div>
  );
};

export default HeroSection;
