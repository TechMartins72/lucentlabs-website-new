import Image from "next/image";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <div id="hero-section" className="hero overflow-hidden">
      <Image
        src={`${isDark ? "/herofaint.png" : "/herofaintlight.png"}`}
        alt="faint_background"
        height={25}
        width={350}
        className="absolute top-1/2 -translate-y-1/2 left-0 rotate-y-180 z-0"
      />

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="w-full h-full"
      >
        <SwiperSlide>
          {/* Swiper automatically adds classes to animate children when this slide becomes active */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            {/* TEXT CONTENT SECTION */}
            <section className="flex-1 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">
              <p className="font-semibold tracking-widest text-sm md:text-md opacity-80">
                Web3 Development Studio
              </p>

              <h2
                className={`bg-linear-to-r ${
                  isDark
                    ? "from-[#066AFF] to-[#87C1F6]"
                    : "from-[#066AFF] to-[#0620A2]"
                } bg-clip-text primary-text text-transparent font-extended mt-4`}
              >
                Building the Future of the Web3 on Cardano and Midnight
              </h2>

              <p className="text-sm xl:text-lg mt-6 max-w-2xl">
                <span className="font-semibold">Lucent Labs</span> specializes
                in developing cutting-edge decentralized applications, smart
                contracts, and blockchain solutions. We're committed to
                advancing the{" "}
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

            {/* IMAGE SECTION */}
            <section className="animate-in fade-in zoom-in-95 delay-300 duration-1000 ease-out">
              <Image
                src={"/heroimage.png"}
                alt="hero_illustration"
                width={577}
                height={524}
                priority
                className="max-md:w-90 max-lg:w-100 xl:w-145 h-auto drop-shadow-[0_0_30px_rgba(6,106,255,0.3)]"
              />
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
