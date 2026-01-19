import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { useTheme } from "../providers/ThemeProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { isDark } = useTheme();
  const textRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          subHeadingRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          buttonContainerRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: 100,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="section bg-hero-bg">
      <Image
        src={`${isDark ? "/herofaint.png" : "/herofaintlight.png"}`}
        alt="faint_background"
        height={25}
        width={350}
        className="absolute top-1/2 -translate-y-1/2 right-0"
      />
      <div className="flex justify-center items-center max-w-7xl">
        <div className="text-left font-semibold">
          <p ref={textRef}>Well... that is a wrap</p>
          <h2
            ref={headingRef}
            className="text-blue-light text-3xl xl:text-4xl 2xl:text-5xl font-extended my-4 2xl:leading-14"
          >
            Ready to get in touch with the best ?{" "}
          </h2>
          <h4 ref={subHeadingRef} className="md:text-2xl text-xl">
            Have a project in mind? <br /> Let's discuss how we can help bring
            your Web3 vision to life
          </h4>
          <div
            ref={buttonContainerRef}
            className="flex gap-8 justify-center items-center w-fit mt-4"
          >
            <Button
              value="Get in touch with us"
              href="#"
              bg="bg-blue-light"
              outlineColor="bg-linear-to-r/srgb from-white to-transparent"
              textColor="text-white"
            />
            <Image
              src="/pointer.png"
              alt="pointer_icon"
              width={26}
              height={35}
            />
          </div>
        </div>
        <div ref={imageRef}>
          <Image
            src="/getintouch.png"
            alt="getintouch_icon"
            width={550}
            height={407}
            className="hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
