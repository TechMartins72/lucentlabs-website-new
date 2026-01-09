import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useTheme } from "../providers/ThemeProvider";

const Contact = () => {
  const { isDark } = useTheme();

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
          <p>Well... that is a wrap</p>
          <h2 className="text-blue-light text-5xl font-extended my-4 leading-14">
            Ready to get in touch with the best ?{" "}
          </h2>
          <h4 className="text-2xl">
            Have a project in mind? <br /> Let's discuss how we can help bring
            your Web3 vision to life
          </h4>
          <div className="flex gap-8 justify-center items-center w-fit mt-4">
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
        <div>
          <Image
            src="/getintouch.png"
            alt="getintouch_icon"
            width={550}
            height={407}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
