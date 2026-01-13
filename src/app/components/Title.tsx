import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TitleData {
  imageUrl: string;
  imageAlt: string;
  title: string;
  details: string;
  textColor: string;
}

const Title: React.FC<TitleData> = ({
  imageAlt,
  imageUrl,
  title,
  details,
  textColor,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const split = new SplitText(titleRef.current, {
      type: "words,chars",
      wordsClass: "inline-block",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.03,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="lg:ml-62.5">
        <h2
          ref={titleRef}
          className={`${textColor} font-extended primary-text max-xl:pb-2!`}
        >
          {title}
        </h2>
        <p ref={detailsRef} className="2xl:text-2xl text-sm xl:text-lg">
          {details}
        </p>
      </div>
      <div ref={imageRef}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={220}
          height={130}
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};

export default Title;
