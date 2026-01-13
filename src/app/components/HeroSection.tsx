import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { isDark } = useTheme();
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.6,
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.9,
            duration: 1,
          },
          "-=0.6"
        );

      // Continuous floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    });

    return () => ctx.revert();
  }, []);

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
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            {/* TEXT CONTENT SECTION */}
            <section className="flex-1 flex flex-col items-center justify-center">
              <p
                ref={subtitleRef}
                className="font-semibold tracking-widest text-sm md:text-md opacity-80"
              >
                Web3 Development Studio
              </p>

              <h2
                ref={headingRef}
                className={`bg-linear-to-r ${
                  isDark
                    ? "from-[#066AFF] to-[#87C1F6]"
                    : "from-[#066AFF] to-[#0620A2]"
                } bg-clip-text primary-text text-transparent font-extended mt-4`}
              >
                Building the Future of the Web3 on Cardano and Midnight
              </h2>

              <p
                ref={descriptionRef}
                className="text-sm xl:text-lg mt-6 max-w-2xl"
              >
                <span className="font-semibold">Lucent Labs</span> specializes
                in developing cutting-edge decentralized applications, smart
                contracts, and blockchain solutions. We're committed to
                advancing the{" "}
                <span className="font-semibold"> Cardano and Midnight </span>
                ecosystems through innovation and community engagement.
              </p>

              <div ref={buttonRef} className="mt-8">
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
            <section ref={imageRef} className="h-fit">
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
