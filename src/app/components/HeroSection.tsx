import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#0b191d] w-full py-18 px-24 flex justify-center items-center gap-32 relative text-center select-none">
      <Image
        src="/herofaint.png"
        alt="faint_background"
        height={25}
        width={350}
        className="absolute top-0 left-0"
      />
      <section className="flex-1">
        <p className="font-semibold tracking-widest">Web3 Development Studio</p>
        <h2 className="bg-linear-to-r from-[#066AFF] to-[#87C1F6] bg-clip-text text-6xl font-extended font-extrabold text-transparent py-6 leading-18">
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
