import React from "react";
import { services, socials } from "../utils";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="section text-left! text-white! bg-linear-to-br from-[#064cb4] to-[#031054]">
      <footer className="flex flex-col gap-12 md:flex-row  justify-around w-full">
        <div>
          <Image
            src="/lucentlabs_white.png"
            alt="lucentlabs_white_icon"
            width={203}
            height={28}
            className="mb-2"
          />
          <small>©Lucentlabs, Inc. 2025. All Rights Reserved</small>
        </div>
        <ul className="list-none flex flex-col gap-2 font-semibold">
          {services.map((service, idx) => (
            <Link key={idx} href={service.url} className="scale social">
              {service.title}
            </Link>
          ))}
        </ul>
        <div>
          <p>Let’s stay in Loop</p>
          <div className="flex gap-4 text-2xl list-none mt-2">
            {socials.map((social, idx) => (
              <span
                key={idx}
                className="flex justify-center items-center text-white cursor-pointer"
              >
                <Link
                  href={social.url}
                  className="text-xl md:text-2xl social scale"
                  target="_blank"
                >
                  <social.icon />
                </Link>
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
