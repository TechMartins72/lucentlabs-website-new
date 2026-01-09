"use client";

import Image from "next/image";
import { links, socials } from "../utils/index";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Link from "next/link";
import { ModeType } from "../utils/types";
import { useContext } from "react";
import { ThemeContext, useTheme } from "../providers/ThemeProvider";
import Button from "./Button";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`h-24 bg-background flex justify-center items-center px-24 w-screen shadow-md border-b-2 ${
        isDark ? "border-blue-light" : "border-[#cdc6c7]"
      } select-none`}
    >
      <header className="flex justify-center items-center w-full gap-16">
        <Image
          src={
            isDark
              ? "/lucentlab_vector_dark.png"
              : "/lucentlab_vector_light.png"
          }
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
        <div className="relative flex items-center justify-around border-2 border-blue-light rounded-xl h-12 w-16 bg-white text-black overflow-hidden cursor-pointer">
          <div
            className={`absolute w-1/2 h-full top-0 ${
              isDark ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
            } border-2 border-blue-light bg-blue-dark z-1`}
          ></div>
          <div className="absolute flex w-full h-full justify-around items-center z-2 text-lg">
            <span
              onClick={() => toggleTheme()}
              className={`h-full w-full flex justify-center items-center ${
                isDark ? "text-white" : "text-blue-dark"
              }`}
            >
              <MdDarkMode />
            </span>
            <span
              onClick={() => toggleTheme()}
              className={`h-full w-full flex justify-center items-center ${
                !isDark ? "text-white" : "text-blue-dark"
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
              <span className="flex justify-center items-center p-3 bg-blue-light text-white rounded-full cursor-pointer">
                <Link href={social.url} className="text-xl" target="_blank">
                  <social.icon />
                </Link>
              </span>
            </span>
          ))}
        </div>
        <Button
          value="Contact Us"
          href="#"
          bg="bg-blue-light"
          outlineColor="bg-linear-to-r/srgb from-white to-transparent"
          textColor="text-white"
        />
      </header>
    </div>
  );
};

export default Header;
