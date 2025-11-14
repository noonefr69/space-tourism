"use client";

import { TechContainerProps } from "./TechContainer";

export default function Tabs({
  techs,
  filterd,
  setFilterd,
}: {
  techs: TechContainerProps[];
  filterd: string;
  setFilterd: (name: string) => void;
}) {
  return (
    <>
      {techs.map((tech, i) => (
        <button
          onClick={() => setFilterd(tech.name)}
          className={`${
            tech.name === filterd
              ? "bg-white text-black"
              : "text-white bg-black hover:outline-white"
          } h-16 text-4xl w-16 font-serif duration-200 flex items-center justify-center cursor-pointer rounded-full outline-2 outline-[#ffffff34]`}
          key={i}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
}
