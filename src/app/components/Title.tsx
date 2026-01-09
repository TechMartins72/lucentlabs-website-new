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
      <div className="ml-62.5">
        <h2 className={`${textColor} font-extended text-5xl mb-3`}>{title}</h2>
        <p className="text-2xl">{details}</p>
      </div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={220}
        height={130}
        className="-skew-5"
      ></Image>
    </div>
  );
};

export default Title;
