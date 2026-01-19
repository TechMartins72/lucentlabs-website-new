import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { TeamDetails } from "../utils/types";

const ImageFrame = ({ details }: { details: TeamDetails[] }) => {
  const [imageIdx, setImageIdx] = useState<number | null>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageIdx(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ref to hold the swiper instance
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // CRITICAL: Update swiper math when a card expands/collapses
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [imageIdx]);

  return (
    <main className="relative w-fit text-white group px-4 overflow-hidden max-w-500 mx-auto">
      {/* Custom Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-[#F60077] transition-all cursor-pointer disabled:opacity-0"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-[#F60077] transition-all cursor-pointer disabled:opacity-0"
      >
        <ChevronRight size={24} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        resistanceRatio={0.5}
        mousewheel={{ forceToAxis: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[FreeMode, Navigation, Mousewheel]}
        className="mySwiper py-10! overflow-visible!"
      >
        {details.map((member, idx) => (
          <SwiperSlide key={idx} className="w-auto!">
            <div
              className={`${
                imageIdx === idx ? "md:w-150 lg:w-175" : "md:w-100 w-75"
              } md:h-137.5 h-111 relative overflow-hidden rounded-3xl shrink-0 transition-all duration-500 ease-out border border-white/10`}
            >
              <div className="h-full bg-linear-to-br from-[#2897DB] to-[#F60077] relative">
                <button
                  className="invisible md:visible absolute top-6 right-6 z-100 bg-black/50 backdrop-blur-xl p-2 rounded-full border border-white/30 hover:scale-110 transition-transform cursor-pointer shadow-lg active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageIdx(imageIdx === idx ? null : idx);
                  }}
                >
                  {imageIdx === idx ? (
                    <Minus size={20} className="text-white" />
                  ) : (
                    <Plus size={20} className="text-white" />
                  )}
                </button>

                {/* Portrait */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    imageIdx === idx
                      ? "opacity-30 scale-105 blur-sm"
                      : "opacity-100"
                  }`}
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 300px, 600px"
                    className="object-cover object-top md:grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="overlay"></div>
                {/* Collapsed Overlay Info */}
                <div
                  className={`${
                    imageIdx === idx
                      ? "opacity-0 translate-y-10"
                      : "opacity-100 translate-y-0"
                  } transition-all duration-300 w-full absolute z-50 bottom-0 left-0 flex flex-col items-center p-8 bg-linear-to-t from-black/90 via-black/40 to-transparent`}
                >
                  <h4 className="font-bold uppercase text-xl md:text-2xl tracking-tighter">
                    {member.name}
                  </h4>
                  <p className="text-sm md:text-md text-[#76EAFF] font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Expanded Content (Details) */}
                {imageIdx === idx && (
                  <div className="absolute inset-0 z-40 flex animate-in fade-in slide-in-from-right-5 duration-500">
                    {/* Left Hero side - now 40% for better spacing */}
                    <div className="w-[40%] h-full relative overflow-hidden hidden md:block">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details side */}
                    <div className="w-full md:w-[60%] h-full bg-black/40 backdrop-blur-md p-6 md:p-10 flex flex-col justify-center gap-6 text-left">
                      <div className="space-y-1">
                        <h4 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-md text-[#76EAFF] font-semibold">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-white/80 leading-snug text-sm font-semibold line-clamp-6">
                        {member.about}
                      </p>

                      <div className="space-y-3">
                        <p className="text-[#76EAFF] font-bold uppercase tracking-widest text-[10px]">
                          Core Skills
                        </p>
                        <div className="flex flex-wrap gap-2 font-semibold">
                          {member.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-white/10 px-3 py-1 rounded-full text-[10px] border border-white/10 whitespace-nowrap font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2">
                        {member.socials.map((social, socIdx) => (
                          <Link
                            key={socIdx}
                            href={social.url}
                            target="_blank"
                            className="social scale"
                          >
                            <social.icon size={20} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ImageFrame;
