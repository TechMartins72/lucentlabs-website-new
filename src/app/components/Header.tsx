"use client";

import Image from "next/image";
import { links, socials } from "../utils/index";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { ModeType } from "../utils/types";

const Header = () => {
  const [mode, setMode] = React.useState<ModeType>("dark");

  return (
    <div className="h-24 flex justify-center items-center px-24 w-screen shadow-md border-b-2 border-[#066AFF]">
      <header className="flex justify-center items-center w-full gap-16">
        <Image
          src="/lucentlab_vector_dark.png"
          alt="lucentlabs-logo"
          width={230}
          height={27}
        />
        <ul className="flex flex-1 gap-10 justify-center items-center list-none italic">
          {links.map((link, idx) => (
            <Link key={idx} href={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="relative flex items-center justify-around border-2 border-[#066AFF] rounded-xl h-12 w-16 bg-white text-black overflow-hidden cursor-pointer">
          <div
            className={`absolute w-1/2 h-full top-0 ${
              mode === "dark" ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
            } border-2 border-[#066AFF] bg-[#0620A2] z-1`}
          ></div>
          <div className="absolute flex w-full h-full justify-around items-center z-2 text-lg">
            <span
              onClick={() =>
                setMode((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className={`h-full w-full flex justify-center items-center ${
                mode === "dark" && "text-white"
              }`}
            >
              <MdDarkMode />
            </span>
            <span
              onClick={() =>
                setMode((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className={`h-full w-full flex justify-center items-center ${
                mode === "light" && "text-white"
              }`}
            >
              <MdLightMode />
            </span>
          </div>
        </div>
        <div className="flex gap-4 text-2xl list-none">
          {socials.map((social, idx) => (
            <span
              key={idx}
              className="p-0.5 bg-linear-to-r/srgb from-white to-transparent rounded-full"
            >
              <span className="flex justify-center items-center p-3 bg-[#066AFF] text-white rounded-full cursor-pointer">
                <Link href={social.url} className="text-xl" target="_blank">
                  <social.icon />
                </Link>
              </span>
            </span>
          ))}
        </div>
        <Link href="#" target="_blank">
          <div className="rounded-bl-full rounded-tr-full bg-[#066AFF] py-0.5 px-1 bg-linear-to-r/srgb from-white to-transparent">
            <div className=" rounded-bl-full rounded-tr-full bg-[#066AFF] px-10 py-2 font-semibold text-xl">
              Contact Us
            </div>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
