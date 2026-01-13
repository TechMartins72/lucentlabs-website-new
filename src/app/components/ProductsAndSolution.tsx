import Image from "next/image";
import { aboutData, productsAndSolutionsData } from "../utils";
import Title from "./Title";
import { useTheme } from "../providers/ThemeProvider";
import Button from "./Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsAndSolution = () => {
  const { isDark } = useTheme();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section bg-hero-bg">
      <Image
        src={`${isDark ? "/herofaint.png" : "/herofaintlight.png"}`}
        alt="faint_background"
        height={25}
        width={350}
        className="absolute top-1/2 -translate-y-1/2 left-0 rotate-y-180"
      />
      <Title
        imageAlt="solution_icon"
        imageUrl="/solution.png"
        details="Cutting-edge dApps and programs built for the Cardano and Midnight ecosystems"
        title="Our Products and Solutions"
        textColor="text-blue-light"
      />

      <div className="grid lg:grid-cols-2 max-w-280 gap-6 text-white">
        {productsAndSolutionsData.map((p, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`${p.bg} flex flex-col gap-2 justify-between items-start px-10 py-10 w-full rounded-4xl text-white md:max-w-150 hover:scale-103 transition-all duration-300`}
          >
            <div className="flex max-sm:gap1 gap-3 text-left">
              <div>
                <h3 className="font-extended text-xl md:text-2xl mb-2">
                  {p.title}
                </h3>
                <p className="font-semibold text-md">{p.desc}</p>
              </div>
              <Image
                src={p.imageUrl}
                alt={p.imageAlt}
                width={146}
                height={197}
                className="max-lg:w-30 max-lg:h-25"
              />
            </div>
            <ul className="flex gap-2 mb-2">
              {p.tags.map((tag, idx) => (
                <small
                  key={idx}
                  className="px-2 py-0.5 bg-black rounded-full mt-4 text-[10px] md:text-sm"
                >
                  {tag}
                </small>
              ))}
            </ul>
            <Button
              href="#"
              value="Explore Project"
              bg="bg-white"
              outlineColor="bg-transparent"
              textColor="text-black"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsAndSolution;
