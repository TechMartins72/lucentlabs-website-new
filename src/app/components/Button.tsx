import Link from "next/link";
import React from "react";

interface ButtonData {
  value: string;
  bg: string;
  textColor: string;
  outlineColor: string;
  href: string;
}

const Button: React.FC<ButtonData> = ({
  value,
  bg,
  textColor,
  outlineColor,
  href,
}) => {
  return (
    <Link href={href}>
      <div
        className={`w-fit rounded-bl-full rounded-tr-full py-0.5 px-1 ${outlineColor} button`}
      >
        <div
          className={`w-fit rounded-bl-full rounded-tr-full ${bg} px-4 md:px-6 py-2 font-semibold text-md md:text-lg ${textColor}`}
        >
          {value}
        </div>
      </div>
    </Link>
  );
};

export default Button;
