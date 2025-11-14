"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import Image from "next/image";
import Details from "./Details";

export type TechContainerProps = {
  name: string;
  images: { landscape: string; portrait: string };
  description: string;
};

export default function TechContainer({
  techs,
}: {
  techs: TechContainerProps[];
}) {
  const [filterd, setFilterd] = useState("Launch vehicle");
  const filterdTech = techs.filter((tech) => {
    return tech.name === filterd;
  });
  return (
    <div className="grid lg:grid-cols-2 items-center lg:px-10 gap-16">
      <div className="lg:flex items-center gap-5 hidden">
        <div className="flex flex-col gap-5">
          <Tabs techs={techs} filterd={filterd} setFilterd={setFilterd} />{" "}
        </div>
        <div className="">
          <h3 className="text-gray-400 font-semibold lg:text-xl uppercase font-mono">
            The terminology...
          </h3>
          <Details filterdTech={filterdTech} />
        </div>
      </div>
      <div className="hidden lg:flex pb-10">
        {filterdTech.map((tech, i) => (
          <Image
            key={i}
            src={tech.images.portrait}
            alt={tech.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <div className="flex lg:hidden">
        {filterdTech.map((tech, i) => (
          <Image
            key={i}
            src={tech.images.landscape}
            alt={tech.name}
            width={500}
            height={500}
            className="w-full"
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-5 lg:hidden px-2">
        <div className="flex gap-5">
          <Tabs techs={techs} filterd={filterd} setFilterd={setFilterd} />{" "}
        </div>
        <div className="">
          <h3 className="text-gray-400 uppercase font-mono text-center">
            The terminology...
          </h3>
          <Details filterdTech={filterdTech} />
        </div>
      </div>
    </div>
  );
}
