<!-- import Image from "next/image";
import { teamDetails } from "../utils";
import { useEffect, useState } from "react";
import Link from "next/link";

const ImageFrame = () => {
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

  return (
    <main className="flex gap-4 justify-start max-w-400 overflow-x-scroll text-white">
      {teamDetails.map((member, idx) => (
        <div
          key={idx}
          className={`${
            imageIdx === idx ? "md:w-200 lg:w-230! " : "md:w-100 w-75"
          } md:h-137.5 h-111 relative overflow-hidden rounded-2xl shrink-0`}
        >
          <div className="h-full bg-linear-to-br from-[#2897DB] to-[#F60077] relative shrink-0">
            <button
              className="hidden md:flex absolute top-6 right-6 z-100 opacity-50 hover:opacity-100 transition ease-in-out duration-150 cursor-pointer"
              onClick={() => {
                if (imageIdx === idx) {
                  setImageIdx(null);
                  return;
                }
                setImageIdx(idx);
              }}
            >
              {imageIdx === idx ? "See less" : "See more"}
            </button>
            <Image
              src="/image_grid.png"
              alt="grid_vector"
              width={350}
              height={320}
              className="absolute top-0 left-0"
            />
            <Image
              src="/image_logo.png"
              alt="image_logo_vector"
              width={350}
              height={320}
              className="absolute top-0 left-0"
            />
            <div
              className={`absolute inset-0 flex items-start justify-center ${
                imageIdx === idx && "w-fit z-80"
              }`}
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={0}
                height={0}
                sizes="100vw"
                className={`${
                  imageIdx === idx
                    ? "h-full w-auto"
                    : "w-full h-full object-cover object-top grayscale"
                } `}
              />
            </div>
            <div
              className={`${
                imageIdx === idx ? "hidden" : "flex"
              } w-full absolute z-50 bottom-1 left-0 flex flex-col justify-center items-center p-6`}
            >
              <div>
                <h4 className="font-bold font-extended uppercase text-xl">
                  {member.name}
                </h4>
                <p>{member.role}</p>
              </div>
              <Image
                src="/staff_icon.png"
                alt="staff_vector"
                width={35}
                height={40}
                className="text-white mt-2"
              />
            </div>
            <div className={`${imageIdx === idx ? "hidden" : "overlay"}`} />
            <Image
              src="/image_frame_vector.png"
              alt="flash_frame"
              height={444}
              width={200}
              className={`absolute top-0 md:left-[23%] lg:left-[25%] z-20 ${
                imageIdx === idx ? "flex" : "hidden"
              }`}
            ></Image>
            <div
              className={`${
                imageIdx === idx
                  ? "bg-linear-to-b from-[#071B9C] slant from-80% via-[#8f046c] via-100% to-[#B10886] to-100% w-[70%] h-full absolute top-0 right-0 flex flex-col justify-center items-center px-8 md:pl-40! lg:pl-32! xl:px-12 gap-6"
                  : "hidden"
              }`}
            >
              <div className="w-full h-full flex justify-center items-center absolute top-0 left-0"></div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  src="/staff_icon.png"
                  alt="staff_vector"
                  width={70}
                  height={70}
                  className="text-white mt-2"
                />
                <h4 className="font-bold font-extended uppercase text-2xl">
                  {member.name}
                </h4>
                <p className="text-xl text-[#76EAFF]">{member.role}</p>
              </div>
              <p className="text-sm text-left">{member.about}</p>
              <div className="text-left w-full font-semibold">
                <p className="text-xl mb-4 text-[#76EAFF]">Skill on</p>
                <ul className="flex gap-6">
                  {member.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
                <ul className="flex gap-6 mt-2">
                  {member.socials.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.url}
                      className="text-xl md:text-2xl cursor-pointer"
                      target="_blank"
                    >
                      <social.icon />
                    </Link>
                  ))}
                </ul>
              </div>
              {/* <div className="overlay"></div> */}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ImageFrame; -->
