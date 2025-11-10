"use client";
import { useState } from "react";
import Image from "next/image";
import Tabs from "./Tabs";
import Details from "./Details";

type Destination = {
  name: string;
  images: { png: string };
  description: string;
  distance: string;
  travel: string;
};

export default function DestinationClient({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [selected, setSelected] = useState(destinations?.[0]?.name ?? "Moon");
  const current =
    destinations.find((d) => d.name === selected) ?? destinations[0];

  return (
    <>
      <div className="lg:flex hidden items-center lg:mt-10 gap-5 lg:gap-10">
        <Tabs items={destinations} selected={selected} onSelect={setSelected} />
      </div>

      <div className="grid justify-center lg:justify-start row-span-2">
        <Image
          src={current.images.png}
          alt={current.name}
          width={500}
          height={500}
          className="lg:w-[500px] w-80"
        />
      </div>

      <div className="flex lg:hidden justify-center lg:mt-10 gap-5 lg:gap-10">
        <Tabs items={destinations} selected={selected} onSelect={setSelected} />
      </div>

      <Details destination={current} />
    </>
  );
}
