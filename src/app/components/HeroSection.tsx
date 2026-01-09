import Image from "next/image";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <div className="bg-hero-bg w-full py-18 px-24 flex justify-center items-center gap-32 relative text-center select-none">
      <Image
        src={`${isDark ? "/herofaint.png" : "/herofaintlight.png"}`}
        alt="faint_background"
        height={25}
        width={500}
        className="absolute top-0 left-0 -translate-y-25"
      />
      <section className="flex-1 place-items-center">
        <p className="font-semibold tracking-widest">Web3 Development Studio</p>
        <h2
          className={`bg-linear-to-r ${
            isDark
              ? "from-[#066AFF] to-[#87C1F6]"
              : "from-[#066AFF] to-[#0620A2]"
          } bg-clip-text text-6xl font-extended font-extrabold text-transparent py-6 leading-18`}
        >
          Building the Future <br /> of the Web3 on Cardano <br /> and Midnight
        </h2>
        <p>
          <span className="font-semibold">Lucent Labs</span> specializes in
          developing cutting-edge decentralized applications, <br /> smart
          contracts, and blockchain solutions. We're committed to advancing the{" "}
          <span className="font-semibold"> Cardano and Midnight </span>
          <br />
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
        />
      </section>
    </div>
  );
};

export default HeroSection;
