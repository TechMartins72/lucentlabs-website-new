import Image from "next/image";
import { teamDetails } from "../utils";

const ImageFrame = () => {
  return (
    <main className="flex gap-4 justify-start max-w-400 overflow-hidden text-white">
      {teamDetails.map((member, idx) => (
        <div
          key={idx}
          className="md:h-137.5 md:w-100 w-75 h-111 bg-linear-to-br from-[#2897DB] to-[#F60077] relative overflow-hidden rounded-2xl shrink-0 cursor-pointer"
        >
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
          <div className="absolute inset-0">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover object-top grayscale"
            />
          </div>
          <div className="w-full absolute z-10 bottom-1 left-0 flex flex-col justify-center items-center p-6">
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
          <div className="absolute bottom-0 h-[45%] w-full bg-linear-to-b from-transparent from-0% via-[#B10886] via-50% to-[#066AFF] to-100%"></div>
        </div>
      ))}
    </main>
  );
};

export default ImageFrame;
