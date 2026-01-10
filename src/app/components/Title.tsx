import Image from "next/image";
import React from "react";

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
  return (
    <div className="flex justify-center items-center">
      <div className="lg:ml-62.5">
        <h2 className={`${textColor} font-extended primary-text max-xl:pb-2!`}>
          {title}
        </h2>
        <p className="2xl:text-2xl text-sm xl:text-lg">{details}</p>
      </div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={220}
        height={130}
        className="hidden md:flex"
      />
    </div>
  );
};

export default Title;
