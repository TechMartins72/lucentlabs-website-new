import React from "react";
import { links, socials } from "../utils"; // Updated to use your links data
import Link from "next/link";
import Image from "next/image";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Footer = () => {
  return (
    <div className="text-left! text-white! bg-linear-to-br from-[#064cb4] to-[#031054] overflow-hidden px-8 pt-20 md:pt-20 pb-10">
      <footer className="flex flex-col gap-12 md:flex-row justify-around w-full max-w-7xl mx-auto px-4">
        {/* BRANDING */}
        <div className="flex flex-col gap-4">
          <Image
            src="/lucentlabs_white.png"
            alt="lucentlabs_white_icon"
            width={203}
            height={28}
            className="mb-2"
          />
          <small className="opacity-60">
            ©Lucentlabs, Inc. 2025. All Rights Reserved
          </small>
        </div>

        {/* SOCIALS */}
        <div>
          <p className="font-semibold mb-4">Let’s stay in Loop</p>
          <div className="flex gap-4 list-none mt-2">
            {socials.map((social, idx) => (
              <Link
                key={idx}
                href={social.url}
                className="w-10 h-10 flex justify-center items-center bg-white/10 rounded-full hover:bg-[#066AFF] hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* --- INFINITE NAVIGATION TICKER --- */}
      <div className="hidden md:block mt-20 border-t border-white/10 pt-10">
        <Swiper
          slidesPerView="auto"
          loop={true}
          speed={10000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="infinite-ticker"
        >
          {[...links, ...links, ...links].map((link, idx) => (
            <SwiperSlide key={idx} className="w-auto! px-12">
              <Link
                href={link.url}
                className="cursor-pointer text-white/20 font-extended uppercase text-3xl md:text-5xl whitespace-nowrap tracking-tighter hover:text-[#76EAFF] hover:opacity-100 transition-all duration-300 block"
              >
                {link.title} <span className="ml-12 text-[#76EAFF]/20">•</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .infinite-ticker .swiper-wrapper {
          transition-timing-function: linear !important;
          display: flex;
          align-items: center;
        }
        /* Smooth scrolling for the anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Footer;
