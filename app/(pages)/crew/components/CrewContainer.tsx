"use client";

import Image from "next/image";
import { useState } from "react";
import Tabs from "./Tabs";
import Details from "./Details";

export type CrewProps = {
  name: string;
  images: { png: string };
  role: string;
  bio: string;
};

export default function CrewContainer({ crews }: { crews: CrewProps[] }) {
  const [filterd, setFilterd] = useState<string>("Douglas Hurley");
  const filterdCrews = crews.filter((crew) => {
    return crew.name === filterd;
  });

  return (
    <>
      <div className="flex flex-col relative pb-10">
        <h1 className="text-center mb-10 lg:text-start h-fit text-white text-lg lg:text-2xl tracking-widest uppercase font-mono">
          <span className="font-sans font-bold text-gray-400 tracking-tight">
            02
          </span>{" "}
          Meet your crew
        </h1>
        <div className="hidden lg:flex h-full">
          <Details filterdCrews={filterdCrews} />
        </div>
        <div className="lg:flex gap-4 absolute bottom-10 hidden">
          <Tabs crews={crews} filterd={filterd} setFilterd={setFilterd} />
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        {filterdCrews.map((crew, i) => (
          <Image
            key={i}
            src={crew.images.png}
            alt={crew.name}
            width={500}
            height={500}
            className="lg:absolute bottom-0 lg:w-[500px] w-80"
          />
        ))}
      </div>
      <div className="flex duration-200 gap-4 my-10 items-center justify-center lg:hidden">
        <Tabs crews={crews} filterd={filterd} setFilterd={setFilterd} />
      </div>
      <div className="lg:hidden flex h-full">
        <Details filterdCrews={filterdCrews} />
      </div>
    </>
  );
}
