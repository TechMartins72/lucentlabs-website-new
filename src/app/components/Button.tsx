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
        className={`w-fit rounded-bl-full rounded-tr-full py-0.5 px-1 ${outlineColor}`}
      >
        <div
          className={`w-fit rounded-bl-full rounded-tr-full ${bg} px-10 py-2 font-semibold text-xl ${textColor}`}
        >
          {value}
        </div>
      </div>
    </Link>
  );
};

export default Button;
