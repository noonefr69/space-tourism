"use client"

import { CrewProps } from "./CrewContainer";

export default function Tabs({
  crews,
  filterd,
  setFilterd,
}: {
  crews: CrewProps[];
  filterd: string;
  setFilterd: (name: string) => void;
}) {
  return (
    <>
      {crews.map((crew, i) => (
        <button
          key={i}
          className={`h-5 w-5 rounded-full bg-[#ffffff28] duration-200 cursor-pointer ${
            filterd === crew.name ? "bg-white" : "hover:bg-[#ffffffae]"
          }`}
          onClick={() => setFilterd(crew.name)}
        ></button>
      ))}
    </>
  );
}
