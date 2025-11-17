"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
        {/* AnimatePresence + keyed wrapper => animate when current changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name} // IMPORTANT: key by name so switching triggers exit/enter
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="lg:w-[500px] w-80"
          >
            <Image
              src={current.images.png}
              alt={current.name}
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex lg:hidden justify-center lg:mt-10 gap-5 lg:gap-10">
        <Tabs items={destinations} selected={selected} onSelect={setSelected} />
      </div>

      {/* Animate details the same way */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name + "-details"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <Details destination={current} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
